import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import { fixupPluginRules } from '@eslint/compat';

export default [
	{
		ignores: ['.next', '*.config.*'],
	},
	// {
	// 	plugins: {
	// 		example: fixupPluginRules(example),
	// 	},
	// },
	{
		plugins: {
			'react-hooks': fixupPluginRules(pluginReactHooks),
			// 'react-hooks': pluginReactHooks,
		},
	},
	{ files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
	{ languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } } },
	{ languageOptions: { globals: globals.browser } },

	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	pluginReact.configs.flat.recommended,
	{
		settings: {
			react: {
				version: 'detect',
			},
		},
	},
	{
		// plugins: {
		// 	'react-hooks': fixupPluginRules(pluginReactHooks),
		// 	// 'react-hooks': pluginReactHooks,
		// },
		rules: {
			'@typescript-eslint/no-explicit-any': 'off',
			'react/react-in-jsx-scope': 'off',
			'react/prop-types': 'off',
			'react-hooks/rules-of-hooks': 'error',
			'react-hooks/exhaustive-deps': 'warn',
			'@typescript-eslint/no-unused-vars': 'off',
			'@typescript-eslint/no-empty-object-type': 'off',
		},
	},
];
