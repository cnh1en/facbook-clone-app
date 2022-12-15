module.exports = {
  content: [
		'./components/screen/**/*.{jsx,js}',
		'./components/layout/**/*.{jsx,js}',
		'./components/common/**/*.{jsx,js}',
	],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: require('tailwind-rn/unsupported-core-plugins'),
}
