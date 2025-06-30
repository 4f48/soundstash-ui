// @ts-check
import svelte from "@astrojs/svelte";
import { defineConfig } from "astro/config";
import unocss from "unocss/astro";

// https://astro.build/config
export default defineConfig({
	experimental: {
		fonts: [
			{
				cssVariable: "--font-inter",
				name: "Inter",
				provider: "local",
				variants: [
					{
						featureSettings: "'liga' 1, 'calt' 1",
						src: ["./src/assets/fonts/InterVariable.woff2"],
						style: "normal",
						weight: "100 900",
					},
				],
			},
			{
				cssVariable: "--font-jbm",
				name: "JetBrains Mono",
				provider: "local",
				variants: [
					{
						src: ["./src/assets/fonts/JetBrainsMono-Variable.woff2"],
						style: "normal",
						weight: "100 900",
					},
				],
			},
		],
	},
	integrations: [svelte(), unocss({ injectReset: true })],
});
