/** @type {import("prettier").Config} */
const config = {
	overrides: [
		{
			files: "*.astro",
			options: {
				parser: "astro",
			},
		},
	],
	plugins: [
		"prettier-plugin-astro",
		"prettier-plugin-tailwindcss",
		"@trivago/prettier-plugin-sort-imports",
		"prettier-plugin-astro-organize-imports",
		"prettier-plugin-svelte",
	],
	tailwindFunctions: ["cva", "cn"],
	trailingComma: "es5",
	useTabs: true,
};

export default config;
