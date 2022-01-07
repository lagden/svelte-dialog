export default {
	extensionsToTreatAsEsm: ['.svelte'],
	moduleFileExtensions: ['js', 'svelte'],
	transform: {
		'^.+\\.js$': 'babel-jest',
		'^.+\\.svelte$': ['svelte-jester', {preprocess: false}],
	},
	testEnvironment: 'jsdom',
	bail: false,
	verbose: true,
}
