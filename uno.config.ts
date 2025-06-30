import { defineConfig, presetWind4, presetIcons } from "unocss";

export default defineConfig({
	presets: [
		presetIcons({
			collections: {
				lucide: () =>
					import("@iconify-json/lucide/icons.json").then((i) => i.default),
			},
		}),
		presetWind4(),
	],
	theme: {
		colors: {
			background: "oklch(0.2768 0 0)",
			"muted-background": "oklch(0.3441 0.0066 48.52)",
			foreground: "oklch(0.8941 0.0566 89.24)",
			"muted-foreground": "oklch(0.8255 0.0507 85.12)",
			primary: "oklch(0.8325 0.1595 82.99)",
			secondary: "oklch(0.7325 0.1595 82.99)",
			destructive: "oklch(0.5458 0.203 28.66)",
			link: "oklch(0.5756 0.0658 199.49)",
		},
		font: {
			sans: "var(--font-inter)",
			mono: "var(--font-jbm)",
		},
	},
});
