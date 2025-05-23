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

// Recipes
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
		components: { 'Intermediate Ammo Production Part': 3, Gunpowder: 1, 'Basic Fuel': 1 },
	},
	{
		name: '7.62x54R BT',
		type: 'GOLD',
		quantity: 120,
		marketPrice: 4377,
		components: { 'Premium Fuel': 3, 'Basic Ammo Production Part': 3, 'Basic Fuel': 4 },
	},
	{
		name: '7.62x54R LPS',
		type: 'PURPLE',
		quantity: 180,
		marketPrice: 1905,
		components: {
			'Intermediate Ammo Production Part': 3,
			Gunpowder: 1,
			'Basic Fuel': 1,
			'Angle Grinder': 1,
		},
	},
	{
		name: '7.62x39mm AP',
		type: 'GOLD',
		quantity: 120,
		marketPrice: 3553,
		components: { 'Premium Fuel': 2, 'Basic Ammo Production Part': 2, 'Basic Fuel': 2 },
	},
	{
		name: '7.62x39mm BP',
		type: 'PURPLE',
		quantity: 180,
		marketPrice: 1600,
		components: {
			'Intermediate Ammo Production Part': 3,
			'Basic Fuel': 1,
			'(7.62x39mm T45M)': 30,
			'Angle Grinder': 1,
		},
	},
	{
		name: '5.45x39mm BS',
		type: 'GOLD',
		quantity: 120,
		marketPrice: 3603,
		components: { 'Premium Fuel': 2, 'Basic Fuel': 3, 'Angle Grinder': 2 },
	},
	{
		name: '5.45x39mm BT',
		type: 'PURPLE',
		quantity: 180,
		marketPrice: 1393,
		components: {
			'Intermediate Ammo Production Part': 2,
			'Basic Ammo Production Part': 1,
			'Angle Grinder': 3,
		},
	},
	{
		name: '5.56x45mm M995',
		type: 'GOLD',
		quantity: 120,
		marketPrice: 3970,
		components: { 'Premium Fuel': 2, 'Basic Ammo Production Part': 2, 'Angle Grinder': 2 },
	},
	{
		name: '5.56x45mm M855A1',
		type: 'PURPLE',
		quantity: 180,
		marketPrice: 1593,
		components: {
			'Intermediate Ammo Production Part': 2,
			'Basic Ammo Production Part': 1,
			'Power Supply': 1,
			'Angle Grinder': 2,
		},
	},
	{
		name: '5.7x28mm SS190',
		type: 'GOLD',
		quantity: 120,
		marketPrice: 3096,
		components: { 'Premium Fuel': 2, Gunpowder: 2, 'Angle Grinder': 1 },
	},
	{
		name: '5.7x28mm SS193',
		type: 'PURPLE',
		quantity: 180,
		marketPrice: 1366,
		components: {
			'Intermediate Ammo Production Part': 2,
			Gunpowder: 1,
			'(5.7x28mm SS197SR)': 60,
			'Angle Grinder': 1,
		},
	},
	{
		name: '4.6x30mm AP SX',
		type: 'GOLD',
		quantity: 150,
		marketPrice: 2827,
		components: { 'Premium Fuel': 2, 'Digital Caliper': 1, 'Basic Fuel': 2, 'Angle Grinder': 2 },
	},
	{
		name: '4.6x30mm FMJ SX',
		type: 'PURPLE',
		quantity: 180,
		marketPrice: 1276,
		components: { 'Intermediate Ammo Production Part': 2, 'Basic Ammo Production Part': 1 },
	},
	{
		name: '9x39mm BP',
		type: 'GOLD',
		quantity: 120,
		marketPrice: 3692,
		components: { 'Premium Fuel': 2, 'Basic Ammo Production Part': 1, 'Basic Fuel': 2 },
	},
	{
		name: '9x39mm SP6',
		type: 'PURPLE',
		quantity: 180,
		marketPrice: 1523,
		components: { 'Intermediate Ammo Production Part': 3, 'Basic Fuel': 2 },
	},
	{
		name: '5.8x42mm DVC12',
		type: 'GOLD',
		quantity: 120,
		marketPrice: 3498,
		components: {
			'Premium Fuel': 2,
			'Basic Ammo Production Part': 2,
			Gunpowder: 1,
			'Angle Grinder': 2,
		},
	},
	{
		name: '5.8x42mm DBP10',
		type: 'PURPLE',
		quantity: 180,
		marketPrice: 1285,
		components: {
			'Intermediate Ammo Production Part': 2,
			'Basic Fuel': 2,
			'(5.8x42mm DBP87)': 150,
		},
	},
	{
		name: '.300 BLK (GOLD)',
		type: 'GOLD',
		quantity: 120,
		marketPrice: 3412,
		components: {
			'Premium Fuel': 2,
			'Basic Ammo Production Part': 1,
			'Basic Fuel': 3,
			'Angle Grinder': 1,
		},
	},
	{
		name: '.300 BLK (PURPLE)',
		type: 'PURPLE',
		quantity: 180,
		marketPrice: 1410,
		components: {
			'Intermediate Ammo Production Part': 2,
			'Cordless Portable Drill': 1,
			'Basic Fuel': 1,
		},
	},
	{
		name: '12.7x55mm PS12B',
		type: 'GOLD',
		quantity: 90,
		marketPrice: 6320,
		components: { 'Premium Fuel': 4, 'Digital Caliper': 2, 'Basic Fuel': 5 },
	},
	{
		name: '12.7x55mm PS12',
		type: 'PURPLE',
		quantity: 120,
		marketPrice: 2080,
		components: {
			'Intermediate Ammo Production Part': 4,
			'Basic Ammo Production Part': 1,
			'Audio Player': 1,
			'Electric Breaching Hammer': 2,
		},
	},
	{
		name: '12.7x55mm PD12',
		type: 'PURPLE',
		quantity: 120,
		marketPrice: 2186,
		components: {
			'Intermediate Ammo Production Part': 3,
			'Basic Ammo Production Part': 3,
			Gunpowder: 3,
			'Angle Grinder': 1,
		},
	},
	{
		name: '6.8x51mm Hybrid',
		type: 'GOLD',
		quantity: 120,
		marketPrice: 4417,
		components: { 'Premium Fuel': 2, 'Basic Ammo Production Part': 3, Gunpowder: 3 },
	},
	{
		name: '6.8x51mm FMJ',
		type: 'PURPLE',
		quantity: 180,
		marketPrice: 1633,
		components: {
			'Intermediate Ammo Production Part': 3,
			'Basic Fuel': 3,
			'Angle Grinder': 1,
			'Electric Breaching Hammer': 2,
		},
	},
	{
		name: '.45 ACP AP',
		type: 'PURPLE',
		quantity: 180,
		marketPrice: 1319,
		components: {
			'Intermediate Ammo Production Part': 3,
			'Basic Fuel': 1,
			'(.45 ACP JHP)': 20,
			'Angle Grinder': 1,
		},
	},
	{
		name: '9x19mm PBP',
		type: 'PURPLE',
		quantity: 180,
		marketPrice: 1323,
		components: {
			'Intermediate Ammo Production Part': 2,
			Gunpowder: 1,
			'(9x19mm PST)': 30,
			'Angle Grinder': 3,
		},
	},
];

// Profit calculator
const calculateProfit = (recipe) => {
	let cost = 0;

	for (const [component, qty] of Object.entries(recipe.components)) {
		const unitPrice = prices[component];
		if (unitPrice === undefined) {
			console.warn(`Missing price for: ${component}`);
			continue;
		}
		cost += unitPrice * qty;
	}

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

// Sort by total profit (descending)
results.sort((a, b) => b.profit - a.profit);

console.table(results);
