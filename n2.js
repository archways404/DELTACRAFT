import chalk from 'chalk';
import Table from 'cli-table3';

// COMPONENT BASE PRICES
const E_Type_Canister = 56306;
const Hammer_Drill = 30140;
const Digital_Caliper = 18593;
const Basic_Fuel = 16912;
const Angle_Grinder = 4241;
const Gunpowder = 23250;
const Basic_Ammo_Production_Part = 23758;
const Power_Supply = 6241;
const Audio_Player = 8323;
const Electric_Breaching_Hammer = 4198;
const Cordless_Portable_Drill = 33835;
const Boxed_Drip_Coffee = 210392;
const Cutlass = 23227;

// AMMO PRICING (1x)
const M62 = 4867;
const M80 = 1898;
const M995 = 4927;
const M855A1 = 2001;
const SS190 = 4182;
const SS193 = 1593;
const AP_762 = 4296;
const BP_762 = 2241;
const BT_762R = 4414;
const LPS_762R = 1736;
const AP_SX = 3447;
const FMJ_SX = 1570;
const BS_545 = 4459;
const BT_545 = 1766;
const BP_9 = 4224;
const SP6 = 1841;
const DVC12 = 4655;
const DBP10 = 1813;
const BLK_GOLD = 3993;
const BLK_PURPLE = 1372;
const PS12B = 6943;
const PS12 = 2537;
const PD12 = 2367;
const Hybrid_68 = 4219;
const FMJ_68 = 2024;
const ACP_AP = 2065;
const PBP_9 = 1996;

// COMPONENT AMMO PRICING (1x)
const T45M = 120;
const SS197SR = 103;
const DBP87 = 99;
const JHP = 120;
const PST = 84;

// COMBINED COMPONENTS
const Intermediate_Ammo_Production_Part = (Boxed_Drip_Coffee + Cutlass) / 4;
const Premium_Fuel = (E_Type_Canister + Hammer_Drill) / 4;

const prices = {
	'Premium Fuel': Premium_Fuel,
	'Intermediate Ammo Production Part': Intermediate_Ammo_Production_Part,
	'Basic Ammo Production Part': Basic_Ammo_Production_Part,
	'Basic Fuel': Basic_Fuel,
	'Angle Grinder': Angle_Grinder,
	'Gun Powder': Gunpowder,
	'Power Supply': Power_Supply,
	'Audio Player': Audio_Player,
	'Electric Breaching Hammer': Electric_Breaching_Hammer,
	'Digital Caliper': Digital_Caliper,
	'Cordless Portable Drill': Cordless_Portable_Drill,
	'(7.62x39mm T45M)': T45M,
	'(5.7x28mm SS197SR)': SS197SR,
	'(5.8x42mm DBP87)': DBP87,
	'(.45 ACP JHP)': JHP,
	'(9x19mm PST)': PST,
};

// Recipes
const recipes = [
	{
		name: '7.62x51mm M62',
		type: 'GOLD',
		quantity: 120,
		marketPrice: M62,
		components: {
			'Premium Fuel': 3,
			'Basic Ammo Production Part': 1,
			'Gun Powder': 1,
			'Basic Fuel': 3,
		},
	},
	{
		name: '7.62x51mm M80',
		type: 'PURPLE',
		quantity: 180,
		marketPrice: M80,
		components: { 'Intermediate Ammo Production Part': 3, 'Gun Powder': 1, 'Basic Fuel': 1 },
	},
	{
		name: '7.62x54R BT',
		type: 'GOLD',
		quantity: 120,
		marketPrice: BT_762R,
		components: { 'Premium Fuel': 3, 'Basic Ammo Production Part': 3, 'Basic Fuel': 4 },
	},
	{
		name: '7.62x54R LPS',
		type: 'PURPLE',
		quantity: 180,
		marketPrice: LPS_762R,
		components: {
			'Intermediate Ammo Production Part': 3,
			'Gun Powder': 1,
			'Basic Fuel': 1,
			'Angle Grinder': 1,
		},
	},
	{
		name: '7.62x39mm AP',
		type: 'GOLD',
		quantity: 120,
		marketPrice: AP_762,
		components: { 'Premium Fuel': 2, 'Basic Ammo Production Part': 2, 'Basic Fuel': 2 },
	},
	{
		name: '7.62x39mm BP',
		type: 'PURPLE',
		quantity: 180,
		marketPrice: BP_762,
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
		marketPrice: BS_545,
		components: { 'Premium Fuel': 2, 'Basic Fuel': 3, 'Angle Grinder': 2 },
	},
	{
		name: '5.45x39mm BT',
		type: 'PURPLE',
		quantity: 180,
		marketPrice: BT_545,
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
		marketPrice: M995,
		components: { 'Premium Fuel': 2, 'Basic Ammo Production Part': 2, 'Angle Grinder': 2 },
	},
	{
		name: '5.56x45mm M855A1',
		type: 'PURPLE',
		quantity: 180,
		marketPrice: M855A1,
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
		marketPrice: SS190,
		components: { 'Premium Fuel': 2, 'Gun Powder': 2, 'Angle Grinder': 1 },
	},
	{
		name: '5.7x28mm SS193',
		type: 'PURPLE',
		quantity: 180,
		marketPrice: SS193,
		components: {
			'Intermediate Ammo Production Part': 2,
			'Gun Powder': 1,
			'(5.7x28mm SS197SR)': 60,
			'Angle Grinder': 1,
		},
	},
	{
		name: '4.6x30mm AP SX',
		type: 'GOLD',
		quantity: 150,
		marketPrice: AP_SX,
		components: { 'Premium Fuel': 2, 'Digital Caliper': 1, 'Basic Fuel': 2, 'Angle Grinder': 2 },
	},
	{
		name: '4.6x30mm FMJ SX',
		type: 'PURPLE',
		quantity: 180,
		marketPrice: FMJ_SX,
		components: { 'Intermediate Ammo Production Part': 2, 'Basic Ammo Production Part': 1 },
	},
	{
		name: '9x39mm BP',
		type: 'GOLD',
		quantity: 120,
		marketPrice: BP_9,
		components: { 'Premium Fuel': 2, 'Basic Ammo Production Part': 1, 'Basic Fuel': 2 },
	},
	{
		name: '9x39mm SP6',
		type: 'PURPLE',
		quantity: 180,
		marketPrice: SP6,
		components: { 'Intermediate Ammo Production Part': 3, 'Basic Fuel': 2 },
	},
	{
		name: '5.8x42mm DVC12',
		type: 'GOLD',
		quantity: 120,
		marketPrice: DVC12,
		components: {
			'Premium Fuel': 2,
			'Basic Ammo Production Part': 2,
			'Gun Powder': 1,
			'Angle Grinder': 2,
		},
	},
	{
		name: '5.8x42mm DBP10',
		type: 'PURPLE',
		quantity: 180,
		marketPrice: DBP10,
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
		marketPrice: BLK_GOLD,
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
		marketPrice: BLK_PURPLE,
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
		marketPrice: PS12B,
		components: { 'Premium Fuel': 4, 'Digital Caliper': 2, 'Basic Fuel': 5 },
	},
	{
		name: '12.7x55mm PS12',
		type: 'PURPLE',
		quantity: 120,
		marketPrice: PS12,
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
		marketPrice: PD12,
		components: {
			'Intermediate Ammo Production Part': 3,
			'Basic Ammo Production Part': 3,
			'Gun Powder': 3,
			'Angle Grinder': 1,
		},
	},
	{
		name: '6.8x51mm Hybrid',
		type: 'GOLD',
		quantity: 120,
		marketPrice: Hybrid_68,
		components: { 'Premium Fuel': 2, 'Basic Ammo Production Part': 3, 'Gun Powder': 3 },
	},
	{
		name: '6.8x51mm FMJ',
		type: 'PURPLE',
		quantity: 180,
		marketPrice: FMJ_68,
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
		marketPrice: ACP_AP,
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
		marketPrice: PBP_9,
		components: {
			'Intermediate Ammo Production Part': 2,
			'Gun Powder': 1,
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

	const tax = recipe.quantity * recipe.marketPrice * 0.1;
	const sellValue = recipe.quantity * recipe.marketPrice;
	const marketSellValue = sellValue - tax;
	const profit = marketSellValue - cost;

	return {
		name: recipe.name,
		type: recipe.type,
		quantity: recipe.quantity,
		cost: cost,
		tax: tax,
		sellPrice: marketSellValue,
		profit: profit,
		profitPerUnit: profit / recipe.quantity,
	};
};

// Run + sort
const results = recipes.map(calculateProfit).sort((a, b) => b.profit - a.profit);

// Create colored table
const table = new Table({
	head: [
		chalk.blue('Name'),
		chalk.yellow('Type'),
		chalk.green('Qty'),
		chalk.cyan('Cost'),
		chalk.red('Tax'),
		chalk.magenta('Sell (after tax)'),
		chalk.greenBright('Profit'),
		chalk.gray('Profit/Unit'),
	],
	colWidths: [25, 10, 6, 12, 12, 18, 12, 14],
	wordWrap: true,
});

// Format + insert each row
results.forEach((r) => {
	table.push([
		r.name,
		r.type,
		r.quantity,
		r.cost.toLocaleString(),
		Math.round(r.tax).toLocaleString(),
		Math.round(r.sellPrice).toLocaleString(),
		Math.round(r.profit) >= 0
			? chalk.green(`+${Math.round(r.profit).toLocaleString()}`)
			: chalk.red(Math.round(r.profit).toLocaleString()),
		Math.round(r.profitPerUnit),
	]);
});

console.log(table.toString());
