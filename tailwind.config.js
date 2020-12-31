/* global require module process */
const colors = require("tailwindcss/colors");

module.exports = {
	purge: {
		enabled: process.env.HUGO_ENVIRONMENT === "production",
		content: ["./hugo_stats.json"],
		mode: "all",
		options: {
			//whitelist: [ 'pl-1', 'pl-3' ],
			defaultExtractor: (content) => {
				let els = JSON.parse(content).htmlElements;
				els = els.tags.concat(els.classes, els.ids);
				return els;
			},
		},
	},
	darkMode: false,
	theme: {
		colors: {
			primary: "#9679c9",
			primaryDark: "#645086",
			secondary: "#e486c0",
			secondaryDark: "#da5daa",
			tertiary: "#d9d4e7",
			transparent: "transparent",
			black: "#000",
			white: "#fff",
			current: "currentColor",
			gray: colors.coolGray,
			red: {
				DEFAULT: "#51f1f",
				50: "#ffd5d5",
				100: "#f8c4c4",
				200: "#f39b9b",
				300: "#ee7272",
				400: "#ea4848",
				500: "#e51f1f",
				600: "#bb1616",
				700: "#8d1111",
				800: "#600B0b",
				900: "#320606",
			},
			yellow: {
				DEFAULT: "#ffda05",
				50: "#fffce9",
				100: "#fffce0",
				200: "#fff6a8",
				300: "#ffee70",
				400: "#ffe438",
				500: "#ffda05",
				600: "#ccb100",
				700: "#998700",
				800: "#665c00",
				900: "#332f00",
			},
			green: {
				DEFAULT: "#3ebd1f",
				50: "#f5fcf4",
				100: "#ecf8e9",
				200: "#cfefc7",
				300: "#b2e5a5",
				400: "#78d162",
				500: "#3ebd1f",
				600: "#38aa1c",
				700: "#2f8e17",
				800: "#257113",
				900: "#1e5d0f",
			},
			blue: {
				DEFAULT: "#3da9fc",
				50: "#f5fbff",
				100: "#ecf6ff",
				200: "#cfeafe",
				300: "#b1ddfe",
				400: "#77c3fd",
				500: "#3da9fc",
				600: "#3798e3",
				700: "#2e7fbd",
				800: "#256597",
				900: "#1e537b",
			},
			indigo: colors.indigo,
			teal: {
				DEFAULT: "#5bcbd5",
				50: "#f7fcfd",
				100: "#effafb",
				200: "#d6f2f5",
				300: "#bdeaee",
				400: "#8cdbe2",
				500: "#5bcbd5",
				600: "#52b7c0",
				700: "#4498a0",
				800: "#377a80",
				900: "#2d6368",
			},
			purple: {
				DEFAULT: "#a786df",
				50: "#fbf9fd",
				100: "#f6f3fc",
				200: "#e9e1f7",
				300: "#dccff2",
				400: "#c1aae9",
				500: "#a786df",
				600: "#9679c9",
				700: "#7d65a7",
				800: "#645086",
				900: "#52426d",
			},
			pink: {
				DEFAULT: "#d13394",
				50: "#fbeef6",
				100: "#f7daeb",
				200: "#edb0d6",
				300: "#e486c0",
				400: "#da5daa",
				500: "#d13394",
				600: "#aa2778",
				700: "#811d5b",
				800: "#57143d",
				900: "#2e0a20",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
