// Game Parts Data
const PARTS_DATA = {
	collections: {
		heads: {
			parts: [
				{ id: "head_1", name: "Scout Optic Helm", type: "head", class: "recon", rarity: "homemade", icon: "👁️", base_stats: { armor: 5, weight: 8 } },
				{ id: "head_2", name: "Guard Turret Head", type: "head", class: "heavy", rarity: "uncommon", icon: "🔫", base_stats: { armor: 12, weight: 15 } },
				{ id: "head_3", name: "Crowd-Control Optic Helm", type: "head", class: "recon", rarity: "rare", icon: "⚡", base_stats: { armor: 8, weight: 10 } },
				{ id: "head_4", name: "Sensor Array Head", type: "head", class: "recon", rarity: "ultra_rare", icon: "📡", base_stats: { armor: 10, weight: 12 } },
				{ id: "head_5", name: "Neural Link Head", type: "head", class: "agile", rarity: "hyper", icon: "🧠", base_stats: { armor: 6, weight: 7 } },
				{ id: "head_6", name: "Cyber Visor", type: "head", class: "recon", rarity: "cyber", icon: "🌐", base_stats: { armor: 9, weight: 9 } },
				{ id: "head_7", name: "Alien Sensor", type: "head", class: "recon", rarity: "alien_ware", icon: "👾", base_stats: { armor: 11, weight: 11 } },
				{ id: "head_8", name: "Prototype Scanner", type: "head", class: "recon", rarity: "prototype", icon: "🔬", base_stats: { armor: 13, weight: 14 } },
				{ id: "head_9", name: "Prismatic Nexus", type: "head", class: "recon", rarity: "prismatic", icon: "💎", base_stats: { armor: 15, weight: 16 } },
			]
		},
		torsos: {
			parts: [
				{ id: "torso_1", name: "Steel Plating", type: "torso", class: "heavy", rarity: "homemade", icon: "🛡️", base_stats: { armor: 20, weight: 30 } },
				{ id: "torso_2", name: "Reinforced Chassis", type: "torso", class: "heavy", rarity: "uncommon", icon: "📦", base_stats: { armor: 28, weight: 40 } },
				{ id: "torso_3", name: "Combat Frame", type: "torso", class: "heavy", rarity: "rare", icon: "⚙️", base_stats: { armor: 35, weight: 45 } },
				{ id: "torso_4", name: "Guardian Bulwark", type: "torso", class: "heavy", rarity: "ultra_rare", icon: "🏰", base_stats: { armor: 42, weight: 50 } },
				{ id: "torso_5", name: "Kinetic Absorber", type: "torso", class: "support", rarity: "hyper", icon: "💥", base_stats: { armor: 38, weight: 42 } },
				{ id: "torso_6", name: "Cyber Shell", type: "torso", class: "heavy", rarity: "cyber", icon: "🤖", base_stats: { armor: 40, weight: 48 } },
				{ id: "torso_7", name: "Alien Exoskeleton", type: "torso", class: "heavy", rarity: "alien_ware", icon: "🦗", base_stats: { armor: 45, weight: 52 } },
				{ id: "torso_8", name: "Prototype Armor", type: "torso", class: "heavy", rarity: "prototype", icon: "🔧", base_stats: { armor: 50, weight: 55 } },
				{ id: "torso_9", name: "Prismatic Lattice", type: "torso", class: "heavy", rarity: "prismatic", icon: "✨", base_stats: { armor: 55, weight: 60 } },
			]
		},
		legs: {
			parts: [
				{ id: "legs_1", name: "Scrap Legs", type: "legs", class: "recon", rarity: "homemade", icon: "🦵", base_stats: { speed: 8, armor: 5 } },
				{ id: "legs_2", name: "Infantry Shock-Absorb Legs", type: "legs", class: "agile", rarity: "uncommon", icon: "🏃", base_stats: { speed: 12, armor: 8 } },
				{ id: "legs_3", name: "Tactical Sprint Legs", type: "legs", class: "agile", rarity: "rare", icon: "⚡", base_stats: { speed: 15, armor: 10 } },
				{ id: "legs_4", name: "Overdrive Propulsion", type: "legs", class: "agile", rarity: "ultra_rare", icon: "🚀", base_stats: { speed: 18, armor: 12 } },
				{ id: "legs_5", name: "Hypersonic Boosters", type: "legs", class: "agile", rarity: "hyper", icon: "💫", base_stats: { speed: 22, armor: 14 } },
				{ id: "legs_6", name: "Cyber Stilts", type: "legs", class: "agile", rarity: "cyber", icon: "👾", base_stats: { speed: 20, armor: 13 } },
				{ id: "legs_7", name: "Alien Gait System", type: "legs", class: "agile", rarity: "alien_ware", icon: "🦗", base_stats: { speed: 21, armor: 15 } },
				{ id: "legs_8", name: "Prototype Thrusters", type: "legs", class: "agile", rarity: "prototype", icon: "🔬", base_stats: { speed: 25, armor: 16 } },
				{ id: "legs_9", name: "Prismatic Glide", type: "legs", class: "agile", rarity: "prismatic", icon: "💎", base_stats: { speed: 28, armor: 18 } },
			]
		},
		cores: {
			parts: [
				{ id: "core_1", name: "Basic Core", type: "core", class: "recon", rarity: "homemade", icon: "⭐", base_stats: { power: 10, efficiency: 0.8 } },
				{ id: "core_2", name: "Standard Reactor", type: "core", class: "support", rarity: "uncommon", icon: "☢️", base_stats: { power: 15, efficiency: 0.9 } },
				{ id: "core_3", name: "Advanced Powerplant", type: "core", class: "support", rarity: "rare", icon: "🔋", base_stats: { power: 20, efficiency: 1.0 } },
				{ id: "core_4", name: "Quantum Reactor", type: "core", class: "support", rarity: "ultra_rare", icon: "⚛️", base_stats: { power: 25, efficiency: 1.1 } },
				{ id: "core_5", name: "Hyperdrive Core", type: "core", class: "support", rarity: "hyper", icon: "🌟", base_stats: { power: 30, efficiency: 1.2 } },
				{ id: "core_6", name: "Cyber Matrix", type: "core", class: "support", rarity: "cyber", icon: "🌐", base_stats: { power: 28, efficiency: 1.15 } },
				{ id: "core_7", name: "Alien Nexus", type: "core", class: "support", rarity: "alien_ware", icon: "👾", base_stats: { power: 32, efficiency: 1.25 } },
				{ id: "core_8", name: "Prototype Singularity", type: "core", class: "support", rarity: "prototype", icon: "🌌", base_stats: { power: 35, efficiency: 1.3 } },
				{ id: "core_9", name: "Prismatic Genesis", type: "core", class: "support", rarity: "prismatic", icon: "💎", base_stats: { power: 40, efficiency: 1.4 } },
			]
		},
		weapons: {
			parts: [
				{ id: "weapon_1", name: "Scrap Gun", type: "weapon", class: "artillery", rarity: "homemade", icon: "🔫", base_stats: { damage: 8, ammo: 100 } },
				{ id: "weapon_2", name: "Rifle Module", type: "weapon", class: "artillery", rarity: "uncommon", icon: "🎯", base_stats: { damage: 15, ammo: 120 } },
				{ id: "weapon_3", name: "Plasma Cannon", type: "weapon", class: "artillery", rarity: "rare", icon: "⚡", base_stats: { damage: 25, ammo: 80 } },
				{ id: "weapon_4", name: "Photon Beam", type: "weapon", class: "artillery", rarity: "ultra_rare", icon: "💫", base_stats: { damage: 35, ammo: 100 } },
				{ id: "weapon_5", name: "Hyper Accelerator", type: "weapon", class: "artillery", rarity: "hyper", icon: "🚀", base_stats: { damage: 45, ammo: 120 } },
				{ id: "weapon_6", name: "Cyber Blaster", type: "weapon", class: "artillery", rarity: "cyber", icon: "🌐", base_stats: { damage: 40, ammo: 110 } },
				{ id: "weapon_7", name: "Alien Ray", type: "weapon", class: "artillery", rarity: "alien_ware", icon: "👾", base_stats: { damage: 48, ammo: 130 } },
				{ id: "weapon_8", name: "Prototype Disruptor", type: "weapon", class: "artillery", rarity: "prototype", icon: "🔬", base_stats: { damage: 55, ammo: 90 } },
				{ id: "weapon_9", name: "Prismatic Lance", type: "weapon", class: "artillery", rarity: "prismatic", icon: "💎", base_stats: { damage: 65, ammo: 140 } },
			]
		}
	}
};

// Lootbox drop rates
const LOOTBOX_RATES = {
	homemade: 35,
	uncommon: 22,
	rare: 15,
	ultra_rare: 10,
	hyper: 8,
	cyber: 5,
	alien_ware: 3,
	prototype: 1,
	prismatic: 1
};

// Rarity colors
const RARITY_COLORS = {
	homemade: "#808080",
	uncommon: "#00aa00",
	rare: "#0066ff",
	ultra_rare: "#8800ff",
	hyper: "#ffd700",
	cyber: "#00ffff",
	alien_ware: "#ff00ff",
	prototype: "#ff0000",
	prismatic: "#ff69b4"
};

// Get all parts
function getAllParts() {
	const parts = [];
	for (const collection in PARTS_DATA.collections) {
		parts.push(...PARTS_DATA.collections[collection].parts);
	}
	return parts;
}

// Get parts by type
function getPartsByType(type) {
	const parts = [];
	for (const collection in PARTS_DATA.collections) {
		const collectionParts = PARTS_DATA.collections[collection].parts.filter(p => p.type === type);
		parts.push(...collectionParts);
	}
	return parts;
}

// Get random part by weighted rarity
function getRandomPartByRarity() {
	const allParts = getAllParts();
	let totalWeight = 0;
	for (const rarity in LOOTBOX_RATES) {
		totalWeight += LOOTBOX_RATES[rarity];
	}

	let roll = Math.random() * totalWeight;
	for (const rarity in LOOTBOX_RATES) {
		roll -= LOOTBOX_RATES[rarity];
		if (roll <= 0) {
			const partsByRarity = allParts.filter(p => p.rarity === rarity);
			return partsByRarity[Math.floor(Math.random() * partsByRarity.length)];
		}
	}
	return allParts[Math.floor(Math.random() * allParts.length)];
}

// Price calculation
function calculatePrice(part) {
	const rarityMult = {
		homemade: 1.0,
		uncommon: 1.25,
		rare: 1.5,
		ultra_rare: 2.0,
		hyper: 3.0,
		cyber: 4.0,
		alien_ware: 5.0,
		prototype: 6.0,
		prismatic: 10.0
	};

	const classMult = {
		heavy: 1.2,
		agile: 1.1,
		artillery: 1.3,
		recon: 1.0,
		support: 0.9
	};

	const rarity = part.rarity || "homemade";
	const partClass = part.class || "recon";
	let statTotal = 0;

	if (part.base_stats) {
		for (const stat in part.base_stats) {
			statTotal += Math.abs(part.base_stats[stat]);
		}
	}

	const price = Math.floor(rarityMult[rarity] * classMult[partClass] * Math.max(1, statTotal) * 10);
	return Math.max(50, price);
}
