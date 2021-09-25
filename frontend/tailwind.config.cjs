const daisyui = require("daisyui");
const config = {
	mode: "jit",
	darkMode:"class",
	purge: [
		"./src/**/*.{html,js,svelte,ts}",
	],
	theme: {
		extend: {},
	},
	plugins: [daisyui],
};

module.exports = config;
