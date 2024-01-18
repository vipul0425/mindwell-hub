module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:@wordpress/eslint-plugin/recommended',
	],
	parserOptions: {
		ecmaVersion: 'latest',
	},
	rules: {
		'prettier/prettier': 'warn',
	},
};
