// Game State Management
class GameState {
	constructor() {
		this.money = 5000;
		this.inventory = [];
		this.equipped = {
			head: null,
			torso: null,
			legs: null,
			core: null
		};
		this.lootboxes = [];
		this.shopParts = [];
		this.currentScene = "menu";
		this.currentFilter = "all";
		this.load();
	}

	addPart(part) {
		const quantity = this.inventory.find(i => i.id === part.id && !i.equipped);
		if (quantity) {
			quantity.count++;
		} else {
			this.inventory.push({ ...part, count: 1, equipped: false });
		}
		this.save();
	}

	removePart(partId) {
		const index = this.inventory.findIndex(i => i.id === partId && !i.equipped);
		if (index !== -1) {
			this.inventory[index].count--;
			if (this.inventory[index].count === 0) {
				this.inventory.splice(index, 1);
			}
			this.save();
			return true;
		}
		return false;
	}

	equipPart(partId, slotType) {
		const part = this.inventory.find(i => i.id === partId);
		if (!part) return false;

		// Unequip current part if any
		if (this.equipped[slotType]) {
			this.unequipPart(slotType);
		}

		// Remove from inventory count
		part.count--;
		if (part.count === 0) {
			this.inventory.splice(this.inventory.indexOf(part), 1);
		}

		// Equip part
		this.equipped[slotType] = { ...part, count: 1 };
		this.save();
		return true;
	}

	unequipPart(slotType) {
		const part = this.equipped[slotType];
		if (!part) return false;

		// Add back to inventory
		const existing = this.inventory.find(i => i.id === part.id);
		if (existing) {
			existing.count++;
		} else {
			this.inventory.push({ ...part, count: 1, equipped: false });
		}

		this.equipped[slotType] = null;
		this.save();
		return true;
	}

	addMoney(amount) {
		this.money += amount;
		this.save();
	}

	addLootbox() {
		this.lootboxes.push({
			id: "alpha",
			name: "Alpha Lootbox",
			icon: "📦"
		});
		this.save();
	}

	removeLootbox(index) {
		if (index >= 0 && index < this.lootboxes.length) {
			this.lootboxes.splice(index, 1);
			this.save();
		}
	}

	refreshShop() {
		const allParts = getAllParts();
		this.shopParts = [];
		const attempts = [];
		
		while (this.shopParts.length < 5) {
			let part = allParts[Math.floor(Math.random() * allParts.length)];
			if (!this.shopParts.find(p => p.id === part.id)) {
				this.shopParts.push(part);
			}
			attempts++;
			if (attempts > 50) break;
		}
	}

	save() {
		localStorage.setItem("meka_game_state", JSON.stringify({
			money: this.money,
			inventory: this.inventory,
			equipped: this.equipped,
			lootboxes: this.lootboxes,
			shopParts: this.shopParts
		}));
	}

	load() {
		const saved = localStorage.getItem("meka_game_state");
		if (saved) {
			const data = JSON.parse(saved);
			this.money = data.money || 5000;
			this.inventory = data.inventory || [];
			this.equipped = data.equipped || { head: null, torso: null, legs: null, core: null };
			this.lootboxes = data.lootboxes || [];
			this.shopParts = data.shopParts || [];
		}
		if (this.shopParts.length === 0) {
			this.refreshShop();
		}
	}
}

// UI Renderer
class UIRenderer {
	constructor(gameState) {
		this.gameState = gameState;
		this.app = document.getElementById("app");
		this.contextMenu = null;
	}

	renderMainMenu() {
		this.app.innerHTML = `
			<div class="main-menu">
				<h1>MekaGame</h1>
				<button onclick="game.startGame()">Start Game</button>
			</div>
		`;
	}

	renderMechInventory() {
		const inventory = this.gameState.inventory;
		const equipped = this.gameState.equipped;
		const filtered = this.filterInventory(inventory);

		this.app.innerHTML = `
			<div class="game-scene active">
				<div class="top-bar">
					<h2>Inventory</h2>
					<div class="money-display">Scraps: ${this.gameState.money}</div>
				</div>

				<div class="content">
					<div class="left-panel">
						<div class="stats-section">
							<h3>Mech Stats</h3>
							<div class="stat-row">
								<span>Total Armor:</span>
								<span class="stat-value">${this.calculateTotalArmor()}</span>
							</div>
							<div class="stat-row">
								<span>Total Speed:</span>
								<span class="stat-value">${this.calculateTotalSpeed()}</span>
							</div>
							<div class="stat-row">
								<span>Total Weight:</span>
								<span class="stat-value">${this.calculateTotalWeight()}</span>
							</div>
							<div class="stat-row">
								<span>Power Output:</span>
								<span class="stat-value">${this.calculateTotalPower()}</span>
							</div>
						</div>
					</div>

					<div class="center-panel">
						<div class="mech-builder">
							<h3>Mech Builder</h3>
							<div class="slot-container">
								${this.renderSlot("Head", "head", equipped.head)}
								${this.renderSlot("Torso", "torso", equipped.torso)}
								${this.renderSlot("Legs", "legs", equipped.legs)}
								${this.renderSlot("Core", "core", equipped.core)}
							</div>
						</div>
					</div>

					<div class="right-panel">
						<div class="filter-tabs">
							${this.renderFilterTabs()}
						</div>
						<div class="inventory-grid">
							${this.renderInventoryGrid(filtered)}
						</div>
					</div>
				</div>

				<div class="bottom-bar">
					<button class="btn" onclick="game.goToShop()">Shop</button>
					<button class="btn" onclick="game.openLootboxes()">Lootboxes</button>
					<button class="btn danger" onclick="game.backToMenu()">Back to Menu</button>
				</div>
			</div>
		`;
	}

	renderSlot(label, slotType, equippedPart) {
		const content = equippedPart 
			? `<span class="slot-content equipped">${equippedPart.name}</span>`
			: `<span class="slot-content">Empty</span>`;
		
		const unequipBtn = equippedPart
			? `<button class="unequip-btn" onclick="game.unequipPart('${slotType}')">Unequip</button>`
			: "";

		return `
			<div class="slot">
				<span class="slot-label">${label}:</span>
				${content}
				${unequipBtn}
			</div>
		`;
	}

	renderFilterTabs() {
		const tabs = ["all", "heads", "torsos", "legs", "cores", "weapons"];
		return tabs.map(tab => {
			const active = this.gameState.currentFilter === tab ? "active" : "";
			return `<button class="tab-btn ${active}" onclick="game.filterInventory('${tab}')">${tab.charAt(0).toUpperCase() + tab.slice(1)}</button>`;
		}).join("");
	}

	filterInventory(inventory) {
		const filter = this.gameState.currentFilter;
		if (filter === "all") return inventory;
		if (filter === "heads") return inventory.filter(i => i.type === "head");
		if (filter === "torsos") return inventory.filter(i => i.type === "torso");
		if (filter === "legs") return inventory.filter(i => i.type === "legs");
		if (filter === "cores") return inventory.filter(i => i.type === "core");
		if (filter === "weapons") return inventory.filter(i => i.type === "weapon");
		return inventory;
	}

	renderInventoryGrid(filtered) {
		return filtered.map(item => `
			<div class="inventory-item rarity-${item.rarity}" oncontextmenu="game.showContextMenu(event, '${item.id}')">
				<div style="font-size: 32px;">${item.icon}</div>
				<div class="item-name">${item.name}</div>
				<div class="item-type">${item.type}</div>
				<div class="item-rarity">${item.rarity} x${item.count}</div>
			</div>
		`).join("");
	}

	renderShop() {
		this.app.innerHTML = `
			<div class="game-scene active">
				<div class="top-bar">
					<h2>Shop</h2>
					<div class="money-display">Scraps: ${this.gameState.money}</div>
				</div>

				<div class="content" style="flex-direction: column; padding: 20px; overflow-y: auto;">
					<div style="margin-bottom: 30px;">
						<div class="shop-grid">
							${this.renderShopParts()}
						</div>
						<div class="alpha-set-card">
							<div class="alpha-info">
								<h3>Alpha Set</h3>
								<p>Random Part from Alpha Collection</p>
								<p style="font-size: 11px; color: #888;">35% Homemade • 22% Uncommon • 15% Rare • 10% Ultra Rare</p>
							</div>
							<div class="alpha-buy">
								<div class="alpha-icon">📦</div>
								<div class="alpha-price">250 Scraps</div>
								<button class="alpha-buy-btn" onclick="game.buyLootbox()">Buy</button>
							</div>
						</div>
					</div>
				</div>

				<div class="bottom-bar">
					<button class="btn" onclick="game.refreshShop()">Refresh Shop</button>
					<button class="btn danger" onclick="game.backToMenu()">Back</button>
				</div>
			</div>
		`;
	}

	renderShopParts() {
		return this.gameState.shopParts.map(part => {
			const price = calculatePrice(part);
			return `
				<div class="part-card rarity-${part.rarity}">
					<div class="part-icon">${part.icon}</div>
					<div class="part-name">${part.name}</div>
					<div class="part-info">[${part.rarity}] ${part.type}</div>
					<div class="part-info">Class: ${part.class}</div>
					<div class="part-price">${price} Scraps</div>
					<button class="part-buy-btn" onclick="game.buyPart('${part.id}')">Buy</button>
				</div>
			`;
		}).join("");
	}

	renderLootboxOpening() {
		this.app.innerHTML = `
			<div class="game-scene active">
				<div class="lootbox-opening active">
					<h2 style="color: #ffd700; margin-bottom: 20px;">Opening Lootbox...</h2>
					<div class="scroll-container">
						<div class="scroll-track" id="scroll-track"></div>
					</div>
					<button class="start-opening-btn" id="start-btn" onclick="game.startLootboxAnimation()">Click to Open</button>
				</div>
				<div class="bottom-bar">
					<button class="btn danger" onclick="game.backToInventory()">Back</button>
				</div>
			</div>
		`;
		this.populateScrollItems();
	}

	populateScrollItems() {
		const track = document.getElementById("scroll-track");
		const allParts = getAllParts();
		
		// Create items for scrolling - more variety
		const items = [];
		for (let i = 0; i < 30; i++) {
			items.push(allParts[Math.floor(Math.random() * allParts.length)]);
		}

		track.innerHTML = items.map((part, idx) => {
			const isCenterItem = idx === 14; // Middle item
			return `
				<div class="scroll-item ${isCenterItem ? "center" : ""}" id="item-${idx}" style="border-color: ${RARITY_COLORS[part.rarity]}">
					<div style="font-size: 40px; margin-bottom: 5px;">${part.icon}</div>
					<div class="item-name-scroll" style="color: ${RARITY_COLORS[part.rarity]}; font-size: 13px;">${part.name}</div>
					<div style="font-size: 10px; color: #888;">${part.rarity}</div>
				</div>
			`;
		}).join("");
	}

	calculateTotalArmor() {
		let total = 0;
		for (const slot in this.gameState.equipped) {
			const part = this.gameState.equipped[slot];
			if (part && part.base_stats && part.base_stats.armor) {
				total += part.base_stats.armor;
			}
		}
		return total;
	}

	calculateTotalSpeed() {
		let total = 0;
		for (const slot in this.gameState.equipped) {
			const part = this.gameState.equipped[slot];
			if (part && part.base_stats && part.base_stats.speed) {
				total += part.base_stats.speed;
			}
		}
		return total;
	}

	calculateTotalWeight() {
		let total = 0;
		for (const slot in this.gameState.equipped) {
			const part = this.gameState.equipped[slot];
			if (part && part.base_stats && part.base_stats.weight) {
				total += part.base_stats.weight;
			}
		}
		return total;
	}

	calculateTotalPower() {
		let total = 0;
		for (const slot in this.gameState.equipped) {
			const part = this.gameState.equipped[slot];
			if (part && part.base_stats && part.base_stats.power) {
				total += part.base_stats.power;
			}
		}
		return total.toFixed(1);
	}
}

// Main Game Controller
class Game {
	constructor() {
		this.gameState = new GameState();
		this.ui = new UIRenderer(this.gameState);
		this.initialize();
	}

	initialize() {
		// Add some starting money and parts for testing
		if (this.gameState.inventory.length === 0) {
			this.gameState.money = 5000;
			this.gameState.addPart(getAllParts()[0]);
			this.gameState.addPart(getAllParts()[5]);
			this.gameState.addPart(getAllParts()[10]);
		}
		this.showMainMenu();
	}

	showMainMenu() {
		this.gameState.currentScene = "menu";
		this.ui.renderMainMenu();
	}

	startGame() {
		this.gameState.currentScene = "inventory";
		this.ui.renderMechInventory();
	}

	goToShop() {
		this.gameState.currentScene = "shop";
		this.ui.renderShop();
	}

	refreshShop() {
		this.gameState.refreshShop();
		this.ui.renderShop();
	}

	buyPart(partId) {
		const part = this.gameState.shopParts.find(p => p.id === partId);
		if (!part) return;

		const price = calculatePrice(part);
		if (this.gameState.money >= price) {
			this.gameState.money -= price;
			this.gameState.addPart(part);
			this.ui.renderShop();
		} else {
			alert("Not enough scraps!");
		}
	}

	buyLootbox() {
		const price = 250;
		if (this.gameState.money >= price) {
			this.gameState.money -= price;
			this.gameState.addLootbox();
			this.ui.renderShop();
		} else {
			alert("Not enough scraps!");
		}
	}

	openLootboxes() {
		if (this.gameState.lootboxes.length === 0) {
			alert("You don't have any lootboxes!");
			return;
		}
		this.gameState.currentScene = "lootbox";
		this.ui.renderLootboxOpening();
	}

	startLootboxAnimation() {
		const btn = document.getElementById("start-btn");
		btn.disabled = true;

		const track = document.getElementById("scroll-track");
		const items = document.querySelectorAll(".scroll-item");
		const centerIdx = 9;

		// Generate a random winning part
		const allParts = getAllParts();
		const wonPart = getRandomPartByRarity();
		
		// Replace center item with won part
		const centerItem = items[centerIdx];
		centerItem.innerHTML = `
			<div style="font-size: 32px;">${wonPart.icon}</div>
			<div class="item-name-scroll">${wonPart.name}</div>
		`;
		centerItem.style.borderColor = RARITY_COLORS[wonPart.rarity];

		// Phase 1: Scroll animation (1.5s)
		this.animateScroll(track, items, centerIdx, () => {
			// Phase 2: Blink animation (1s)
			this.blinkCenterItem(items, centerIdx, () => {
				// Phase 3: Finish and show result
				this.finishLootboxOpening(wonPart, items, centerIdx);
			});
		});
	}

	animateScroll(track, items, centerIdx, onComplete) {
		let offset = 0;
		const itemWidth = 165; // card width + gap
		const targetOffset = -centerIdx * itemWidth;
		const duration = 1500; // 1.5 seconds
		const startTime = Date.now();

		const animate = () => {
			const elapsed = Date.now() - startTime;
			const progress = Math.min(elapsed / duration, 1);
			
			// Ease out cubic for smooth deceleration
			const easeProgress = 1 - Math.pow(1 - progress, 3);
			offset = targetOffset * easeProgress;
			track.style.transform = `translateX(calc(50vw - 75px + ${offset}px))`;

			if (progress < 1) {
				requestAnimationFrame(animate);
			} else {
				onComplete();
			}
		};

		animate();
	}

	blinkCenterItem(items, centerIdx, onComplete) {
		const centerItem = items[centerIdx];
		let blinkCount = 0;
		const blinkDuration = 1000; // 1 second total for 2 blinks

		const startBlink = Date.now();

		const blink = () => {
			const elapsed = Date.now() - startBlink;
			const progress = elapsed / blinkDuration;

			if (progress < 1) {
				// Fast blink (4 blinks in 1 second = 0.25s per cycle)
				const blinkPhase = (progress * 4) % 1;
				if (blinkPhase < 0.5) {
					centerItem.style.opacity = "0.3";
				} else {
					centerItem.style.opacity = "1";
				}
				requestAnimationFrame(blink);
			} else {
				centerItem.style.opacity = "1";
				onComplete();
			}
		};

		blink();
	}

	finishLootboxOpening(wonPart, items, centerIdx) {
		const centerItem = items[centerIdx];
		
		// Highlight the won item
		centerItem.style.boxShadow = `0 0 20px ${RARITY_COLORS[wonPart.rarity]}, inset 0 0 20px ${RARITY_COLORS[wonPart.rarity]}`;
		centerItem.style.transform = "scale(1.15)";

		// Add to inventory
		this.gameState.addPart(wonPart);
		this.gameState.removeLootbox(0);

		// Show result after a short delay
		setTimeout(() => {
			const rarityText = wonPart.rarity.replace("_", " ").toUpperCase();
			alert(`✨ You won! ✨\n\n${wonPart.name}\n[${rarityText}]`);
			this.backToInventory();
		}, 800);
	}

	backToInventory() {
		this.gameState.currentScene = "inventory";
		this.ui.renderMechInventory();
	}

	backToMenu() {
		this.showMainMenu();
	}

	filterInventory(filter) {
		this.gameState.currentFilter = filter;
		this.ui.renderMechInventory();
	}

	showContextMenu(event, partId) {
		event.preventDefault();
		const part = this.gameState.inventory.find(i => i.id === partId);
		if (!part) return;

		// Determine valid slot types for equipping
		let validSlots = [];
		if (part.type === "head") validSlots = ["head"];
		else if (part.type === "torso") validSlots = ["torso"];
		else if (part.type === "legs") validSlots = ["legs"];
		else if (part.type === "core") validSlots = ["core"];

		// Hide previous context menu
		document.querySelectorAll(".context-menu").forEach(m => m.classList.remove("active"));

		// Show new context menu
		const menu = document.createElement("div");
		menu.className = "context-menu active";
		menu.style.position = "fixed";
		menu.style.top = event.clientY + "px";
		menu.style.left = event.clientX + "px";

		let html = "";
		if (validSlots.length > 0) {
			for (const slot of validSlots) {
				html += `<div class="context-menu-item equip" onclick="game.equipPart('${partId}', '${slot}'); document.querySelectorAll('.context-menu').forEach(m => m.classList.remove('active'));">Equip</div>`;
			}
		}
		html += `<div class="context-menu-item salvage" onclick="game.salvagePart('${partId}'); document.querySelectorAll('.context-menu').forEach(m => m.classList.remove('active'));">Salvage</div>`;

		menu.innerHTML = html;
		document.body.appendChild(menu);

		// Hide menu on click
		setTimeout(() => {
			document.addEventListener("click", () => {
				menu.classList.remove("active");
			}, { once: true });
		}, 0);
	}

	equipPart(partId, slotType) {
		const part = this.gameState.inventory.find(i => i.id === partId);
		if (part && part.type === slotType) {
			this.gameState.equipPart(partId, slotType);
			this.ui.renderMechInventory();
		}
	}

	unequipPart(slotType) {
		this.gameState.unequipPart(slotType);
		this.ui.renderMechInventory();
	}

	salvagePart(partId) {
		const part = this.gameState.inventory.find(i => i.id === partId);
		if (part) {
			const salvageValue = Math.floor(calculatePrice(part) * 0.5);
			this.gameState.money += salvageValue;
			this.gameState.removePart(partId);
			this.ui.renderMechInventory();
		}
	}
}

// Start game
let game;
if (document.readyState === "loading") {
	document.addEventListener("DOMContentLoaded", () => {
		game = new Game();
	});
} else {
	game = new Game();
}
