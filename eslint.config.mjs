// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended'

export default withNuxt(
  {
    // Your custom configs here
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx,vue}'],
    rules: {
      'vue/multi-word-component-names': 'off'
    }
  },
  eslintPluginPrettier
)
