import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from '@typescript-eslint/eslint-plugin'
import noSecrets from 'eslint-plugin-no-secrets'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import sonarjs from 'eslint-plugin-sonarjs'
import depend from 'eslint-plugin-depend'
import compat from 'eslint-plugin-compat'
import eslintPluginUnicorn from 'eslint-plugin-unicorn'
import eslintPluginPrettier from 'eslint-plugin-prettier'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import tsParser from '@typescript-eslint/parser'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default [
  {
    ignores: ['dist'],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      sourceType: 'module',
      globals: { ...globals.browser, ...globals.node, ...globals.es2021 },
      parserOptions: {
        project: ['./tsconfig.json', './tsconfig.app.json', './tsconfig.node.json'],
        tsconfigRootDir: __dirname,
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'no-secrets': noSecrets,
      'simple-import-sort': simpleImportSort,
      sonarjs: sonarjs,
      unicorn: eslintPluginUnicorn,
      depend: depend,
      compat: compat,
      '@typescript-eslint': tseslint,
      prettier: eslintPluginPrettier,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      ...js.configs.recommended.rules,
      ...tseslint.configs.recommendedTypeChecked,
      ...tseslint.configs.stylisticTypeChecked,
      ...sonarjs.configs.recommended.rules,
      ...depend.configs['flat/recommended'].rules,
      ...compat.configs['flat/recommended'].rules,
      ...eslintPluginUnicorn.configs['flat/recommended'].rules,
      ...eslintPluginPrettier.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'no-secrets/no-secrets': 'error',
      'simple-import-sort/imports': 'warn',
      'simple-import-sort/exports': 'warn',
      'unicorn/prevent-abbreviations': 'warn',
      'unicorn/filename-case': 'off',
    },
  },
]
