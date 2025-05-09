// Prices
const prices = {
	'Premium Fuel': (59271 + 29135) / 4,
	'Intermediate Ammo Production Part': (210392 + 23227) / 4,
	'Basic Ammo Production Part': 19602,
	'Basic Fuel': 13802,
	'Angle Grinder': 3792,
	Gunpowder: 19530,
	'Power Supply': 5518,
	'Audio Player': 8272,
	'Electric Breaching Hammer': 3845,
	'Digital Caliper': 15154,
	'Cordless Portable Drill': 27766,
	'(7.62x39mm T45M)': 0,
	'(5.7x28mm SS197SR)': 0,
	'(5.8x42mm DBP87)': 0,
	'(.45 ACP JHP)': 0,
	'(9x19mm PST)': 0,
};

// Recipes (example with a few)
const recipes = [
	{
		name: '7.62x51mm M62',
		type: 'GOLD',
		quantity: 120,
		marketPrice: 4617,
		components: {
			'Premium Fuel': 3,
			'Basic Ammo Production Part': 1,
			Gunpowder: 1,
			'Basic Fuel': 3,
		},
	},
	{
		name: '7.62x51mm M80',
		type: 'PURPLE',
		quantity: 180,
		marketPrice: 2044,
		components: {
			'Intermediate Ammo Production Part': 3,
			Gunpowder: 1,
			'Basic Fuel': 1,
		},
	},
	{
		name: '5.56x45mm M995',
		type: 'GOLD',
		quantity: 120,
		marketPrice: 3970,
		components: {
			'Premium Fuel': 2,
			'Basic Ammo Production Part': 2,
			'Angle Grinder': 2,
		},
	},
	// ... Add more recipes here
];

// Profit calculator
const calculateProfit = (recipe) => {
	let cost = 0;

	for (const [component, qty] of Object.entries(recipe.components)) {
		let unitPrice = prices[component];
		if (unitPrice === undefined) {
			console.warn(`Missing price for: ${component}`);
			continue;
		}

		/*
		// Apply crafting cost sharing logic
		if (
			(component === 'Premium Fuel' || component === 'Intermediate Ammo Production Part') &&
			(qty === 2 || qty === 3)
		) {
			// Only partially consumed (e.g., recipe uses 2 of 4)
			unitPrice = unitPrice / 2;
		}
    */

		cost += unitPrice * qty;
	}

	// Adjust for market cut (13% fee → you keep 87%)
	const marketSellValue = recipe.quantity * recipe.marketPrice * 0.87;

	const profit = marketSellValue - cost;

	return {
		name: recipe.name,
		type: recipe.type,
		quantity: recipe.quantity,
		cost: Math.round(cost),
		sellPrice: Math.round(marketSellValue),
		profit: Math.round(profit),
		profitPerUnit: Math.round(profit / recipe.quantity),
	};
};

// Run
const results = recipes.map(calculateProfit);
console.table(results);
