import js from '@eslint/js'
import hooks from 'eslint-plugin-react-hooks'
import refresh from 'eslint-plugin-react-refresh'

export default [
  { ignores: ['dist', 'coverage'] },
  {
    files: ['**/*.{js,jsx}'],
    ...js.configs.recommended,
    languageOptions: { ...js.configs.recommended.languageOptions, ecmaVersion: 2022, sourceType: 'module', parserOptions: { ecmaFeatures: { jsx: true } }, globals: { window:'readonly', document:'readonly', localStorage:'readonly', structuredClone:'readonly' } },
    plugins: { 'react-hooks': hooks, 'react-refresh': refresh },
    rules: { ...hooks.configs.recommended.rules, ...refresh.configs.vite.rules, 'no-unused-vars': 'off', 'react-hooks/exhaustive-deps': 'off', 'react-refresh/only-export-components': 'off' }
  }
]
