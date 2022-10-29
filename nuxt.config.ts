import { defineNuxtConfig } from "nuxt";

export default defineNuxtConfig({
	modules: ["nuxt-directus", "@nuxtjs/tailwindcss"],
	directus: {
		url: "https://directus-vanja.up.railway.app/",
	},
});
