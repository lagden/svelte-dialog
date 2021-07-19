/* eslint unicorn/prefer-module: 0 */

module.exports = {
	tabWidth: 2,
	semi: false,
	singleQuote: true,
	useTabs: true,
	bracketSpacing: false,
	arrowParens: 'avoid',
	// trailingComma: 'none',
	plugins: ['svelte'],
	svelteSortOrder: 'options-scripts-markup-styles',
	svelteStrictMode: false,
	svelteBracketNewLine: false,
	svelteAllowShorthand: true,
	svelteIndentScriptAndStyle: true,
	proseWrap: 'never',
	printWidth: 120,
}
