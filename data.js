// Game Parts Data
const PARTS_DATA = {
	collections: {
		heads: {
			parts: [
				{ id: "head_1", name: "Scout Optic Helm", type: "head", class: "recon", rarity: "homemade", icon: "👁️", base_stats: { speed: 1, size: 1, weight: 1, defense: 2, attack: 1, adv_defense: 1 }, moves: ["scan"] },
				{ id: "head_2", name: "Guard Turret Head", type: "head", class: "heavy", rarity: "uncommon", icon: "🔫", base_stats: { speed: 0, size: 1, weight: 2, defense: 4, attack: 2, adv_defense: 2 }, moves: ["lock_on"] },
				{ id: "head_3", name: "Crowd-Control Optic Helm", type: "head", class: "recon", rarity: "rare", icon: "⚡", base_stats: { speed: 1, size: 1, weight: 1, defense: 3, attack: 2, adv_defense: 2 }, moves: ["pulse"] },
				{ id: "head_4", name: "Sensor Array Head", type: "head", class: "recon", rarity: "ultra_rare", icon: "📡", base_stats: { speed: 1, size: 1, weight: 1, defense: 3, attack: 2, adv_defense: 3 }, moves: ["radar"] },
				{ id: "head_5", name: "Neural Link Head", type: "head", class: "agile", rarity: "hyper", icon: "🧠", base_stats: { speed: 2, size: 1, weight: 1, defense: 2, attack: 1, adv_defense: 2 }, moves: ["boost"] },
				{ id: "head_6", name: "Cyber Visor", type: "head", class: "recon", rarity: "cyber", icon: "🌐", base_stats: { speed: 1, size: 1, weight: 1, defense: 3, attack: 2, adv_defense: 2 }, moves: ["hack"] },
				{ id: "head_7", name: "Alien Sensor", type: "head", class: "recon", rarity: "alien_ware", icon: "👾", base_stats: { speed: 1, size: 1, weight: 1, defense: 3, attack: 2, adv_defense: 3 }, moves: ["xenoscan"] },
				{ id: "head_8", name: "Prototype Scanner", type: "head", class: "recon", rarity: "prototype", icon: "🔬", base_stats: { speed: 2, size: 1, weight: 1, defense: 4, attack: 2, adv_defense: 3 }, moves: ["analyze"] },
				{ id: "head_9", name: "Prismatic Nexus", type: "head", class: "recon", rarity: "prismatic", icon: "💎", base_stats: { speed: 2, size: 1, weight: 1, defense: 4, attack: 3, adv_defense: 4 }, moves: ["prism"] },
			]
		},
		torsos: {
			parts: [
				{ id: "torso_1", name: "Steel Plating", type: "torso", class: "heavy", rarity: "homemade", icon: "🛡️", base_stats: { speed: 0, size: 2, weight: 3, defense: 5, attack: 1, adv_defense: 2 }, moves: ["fortify"] },
				{ id: "torso_2", name: "Reinforced Chassis", type: "torso", class: "heavy", rarity: "uncommon", icon: "📦", base_stats: { speed: 0, size: 3, weight: 4, defense: 6, attack: 2, adv_defense: 2 }, moves: ["brace"] },
				{ id: "torso_3", name: "Combat Frame", type: "torso", class: "heavy", rarity: "rare", icon: "⚙️", base_stats: { speed: 0, size: 3, weight: 4, defense: 7, attack: 2, adv_defense: 3 }, moves: ["power_strike"] },
				{ id: "torso_4", name: "Guardian Bulwark", type: "torso", class: "heavy", rarity: "ultra_rare", icon: "🏰", base_stats: { speed: 0, size: 3, weight: 5, defense: 8, attack: 3, adv_defense: 4 }, moves: ["shieldwall"] },
				{ id: "torso_5", name: "Kinetic Absorber", type: "torso", class: "support", rarity: "hyper", icon: "💥", base_stats: { speed: 1, size: 3, weight: 4, defense: 7, attack: 3, adv_defense: 3 }, moves: ["absorb"] },
				{ id: "torso_6", name: "Cyber Shell", type: "torso", class: "heavy", rarity: "cyber", icon: "🤖", base_stats: { speed: 0, size: 3, weight: 4, defense: 7, attack: 2, adv_defense: 3 }, moves: ["overclock"] },
				{ id: "torso_7", name: "Alien Exoskeleton", type: "torso", class: "heavy", rarity: "alien_ware", icon: "🦗", base_stats: { speed: 0, size: 3, weight: 5, defense: 8, attack: 3, adv_defense: 4 }, moves: ["hive_sync"] },
				{ id: "torso_8", name: "Prototype Armor", type: "torso", class: "heavy", rarity: "prototype", icon: "🔧", base_stats: { speed: 1, size: 3, weight: 5, defense: 9, attack: 3, adv_defense: 4 }, moves: ["recalibrate"] },
				{ id: "torso_9", name: "Prismatic Lattice", type: "torso", class: "heavy", rarity: "prismatic", icon: "✨", base_stats: { speed: 1, size: 3, weight: 5, defense: 10, attack: 4, adv_defense: 5 }, moves: ["cascade"] },
			]
		},
		legs: {
			parts: [
				{ id: "legs_1", name: "Scrap Legs", type: "legs", class: "recon", rarity: "homemade", icon: "🦵", base_stats: { speed: 2, size: 2, weight: 2, defense: 1, attack: 1, adv_defense: 1 }, moves: ["stumble"] },
				{ id: "legs_2", name: "Infantry Shock-Absorb Legs", type: "legs", class: "agile", rarity: "uncommon", icon: "🏃", base_stats: { speed: 3, size: 2, weight: 2, defense: 2, attack: 1, adv_defense: 1 }, moves: ["dash"] },
				{ id: "legs_3", name: "Tactical Sprint Legs", type: "legs", class: "agile", rarity: "rare", icon: "⚡", base_stats: { speed: 4, size: 3, weight: 2, defense: 2, attack: 2, adv_defense: 2 }, moves: ["sprint"] },
				{ id: "legs_4", name: "Overdrive Propulsion", type: "legs", class: "agile", rarity: "ultra_rare", icon: "🚀", base_stats: { speed: 5, size: 3, weight: 3, defense: 3, attack: 2, adv_defense: 2 }, moves: ["overdrive"] },
				{ id: "legs_5", name: "Hypersonic Boosters", type: "legs", class: "agile", rarity: "hyper", icon: "💫", base_stats: { speed: 6, size: 3, weight: 2, defense: 2, attack: 3, adv_defense: 3 }, moves: ["sonic_burst"] },
				{ id: "legs_6", name: "Cyber Stilts", type: "legs", class: "agile", rarity: "cyber", icon: "👾", base_stats: { speed: 5, size: 3, weight: 2, defense: 2, attack: 2, adv_defense: 2 }, moves: ["blink"] },
				{ id: "legs_7", name: "Alien Gait System", type: "legs", class: "agile", rarity: "alien_ware", icon: "🦗", base_stats: { speed: 5, size: 3, weight: 3, defense: 3, attack: 2, adv_defense: 3 }, moves: ["crawl"] },
				{ id: "legs_8", name: "Prototype Thrusters", type: "legs", class: "agile", rarity: "prototype", icon: "🔬", base_stats: { speed: 6, size: 3, weight: 3, defense: 3, attack: 2, adv_defense: 3 }, moves: ["thrust"] },
				{ id: "legs_9", name: "Prismatic Glide", type: "legs", class: "agile", rarity: "prismatic", icon: "💎", base_stats: { speed: 7, size: 3, weight: 3, defense: 3, attack: 3, adv_defense: 4 }, moves: ["phase_shift"] },
			]
		},
		cores: {
			parts: [
				{ id: "core_1", name: "Basic Core", type: "core", class: "recon", rarity: "homemade", icon: "⭐", base_stats: { speed: 0, size: 0, weight: 1, defense: 1, attack: 1, adv_defense: 1 }, moves: ["charge"] },
				{ id: "core_2", name: "Standard Reactor", type: "core", class: "support", rarity: "uncommon", icon: "☢️", base_stats: { speed: 0, size: 0, weight: 2, defense: 2, attack: 2, adv_defense: 1 }, moves: ["power_up"] },
				{ id: "core_3", name: "Advanced Powerplant", type: "core", class: "support", rarity: "rare", icon: "🔋", base_stats: { speed: 0, size: 0, weight: 2, defense: 2, attack: 3, adv_defense: 2 }, moves: ["overload"] },
				{ id: "core_4", name: "Quantum Reactor", type: "core", class: "support", rarity: "ultra_rare", icon: "⚛️", base_stats: { speed: 1, size: 0, weight: 2, defense: 3, attack: 4, adv_defense: 3 }, moves: ["quantum_field"] },
				{ id: "core_5", name: "Hyperdrive Core", type: "core", class: "support", rarity: "hyper", icon: "🌟", base_stats: { speed: 2, size: 0, weight: 2, defense: 3, attack: 4, adv_defense: 3 }, moves: ["flux_burst"] },
				{ id: "core_6", name: "Cyber Matrix", type: "core", class: "support", rarity: "cyber", icon: "🌐", base_stats: { speed: 1, size: 0, weight: 2, defense: 3, attack: 3, adv_defense: 3 }, moves: ["sync"] },
				{ id: "core_7", name: "Alien Nexus", type: "core", class: "support", rarity: "alien_ware", icon: "👾", base_stats: { speed: 1, size: 0, weight: 2, defense: 3, attack: 4, adv_defense: 4 }, moves: ["hive_link"] },
				{ id: "core_8", name: "Prototype Reactor", type: "core", class: "support", rarity: "prototype", icon: "🔬", base_stats: { speed: 2, size: 0, weight: 2, defense: 4, attack: 5, adv_defense: 4 }, moves: ["experimental"] },
				{ id: "core_9", name: "Prismatic Heart", type: "core", class: "support", rarity: "prismatic", icon: "💎", base_stats: { speed: 2, size: 0, weight: 2, defense: 4, attack: 5, adv_defense: 5 }, moves: ["prismatic_burst"] },
			]
		},
		weapons: {
			parts: [
				{ id: "weapon_1", name: "Rifle", type: "weapon", class: "ranged", rarity: "homemade", icon: "🔫", base_stats: { speed: 0, size: 1, weight: 1, defense: 0, attack: 2, adv_defense: 0 }, moves: ["fire"] },
				{ id: "weapon_2", name: "Machine Gun", type: "weapon", class: "ranged", rarity: "uncommon", icon: "🔫", base_stats: { speed: 0, size: 1, weight: 2, defense: 0, attack: 3, adv_defense: 0 }, moves: ["burst_fire"] },
				{ id: "weapon_3", name: "Plasma Cannon", type: "weapon", class: "ranged", rarity: "rare", icon: "💥", base_stats: { speed: 0, size: 1, weight: 2, defense: 0, attack: 4, adv_defense: 0 }, moves: ["plasma_blast"] },
				{ id: "weapon_4", name: "Photon Lance", type: "weapon", class: "ranged", rarity: "ultra_rare", icon: "⚡", base_stats: { speed: 0, size: 1, weight: 2, defense: 0, attack: 5, adv_defense: 1 }, moves: ["lance_strike"] },
				{ id: "weapon_5", name: "Void Cannon", type: "weapon", class: "ranged", rarity: "hyper", icon: "🌌", base_stats: { speed: 0, size: 1, weight: 3, defense: 0, attack: 6, adv_defense: 1 }, moves: ["void_burst"] },
				{ id: "weapon_6", name: "Cyber Rifle", type: "weapon", class: "ranged", rarity: "cyber", icon: "🌐", base_stats: { speed: 1, size: 1, weight: 2, defense: 0, attack: 4, adv_defense: 0 }, moves: ["hack_shot"] },
				{ id: "weapon_7", name: "Alien Blaster", type: "weapon", class: "ranged", rarity: "alien_ware", icon: "👾", base_stats: { speed: 0, size: 1, weight: 2, defense: 0, attack: 5, adv_defense: 1 }, moves: ["alien_pulse"] },
				{ id: "weapon_8", name: "Prototype Blaster", type: "weapon", class: "ranged", rarity: "prototype", icon: "🔬", base_stats: { speed: 1, size: 1, weight: 2, defense: 0, attack: 6, adv_defense: 1 }, moves: ["prototype_fire"] },
				{ id: "weapon_9", name: "Prismatic Beam", type: "weapon", class: "ranged", rarity: "prismatic", icon: "💎", base_stats: { speed: 1, size: 1, weight: 2, defense: 0, attack: 7, adv_defense: 2 }, moves: ["cascade_fire"] },
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

// Get all parts from data
function getAllParts() {
	const parts = [];
	for (const type in PARTS_DATA.collections) {
		parts.push(...PARTS_DATA.collections[type].parts);
	}
	return parts;
}

// Get part by ID
function getPartById(id) {
	return getAllParts().find(p => p.id === id);
}

// Calculate item price based on rarity
function calculatePrice(part) {
	const basePrices = {
		homemade: 50,
		uncommon: 100,
		rare: 250,
		ultra_rare: 500,
		hyper: 1000,
		cyber: 800,
		alien_ware: 1200,
		prototype: 1500,
		prismatic: 2000
	};
	return basePrices[part.rarity] || 50;
}

// Get random part by rarity weight
function getRandomPartByRarity() {
	const rand = Math.random() * 100;
	let cumulative = 0;
	
	for (const rarity in LOOTBOX_RATES) {
		cumulative += LOOTBOX_RATES[rarity];
		if (rand <= cumulative) {
			const parts = getAllParts().filter(p => p.rarity === rarity);
			return parts[Math.floor(Math.random() * parts.length)];
		}
	}
	
	return getAllParts()[Math.floor(Math.random() * getAllParts().length)];
}

// Rarity colors for UI
const RARITY_COLORS = {
	homemade: "#888888",
	uncommon: "#00ff00",
	rare: "#0080ff",
	ultra_rare: "#ff00ff",
	hyper: "#ffff00",
	cyber: "#00ffff",
	alien_ware: "#ff6600",
	prototype: "#ff0080",
	prismatic: "#ff00ff"
};
