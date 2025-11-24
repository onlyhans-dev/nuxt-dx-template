import vue from '@vitejs/plugin-vue'
import type { StorybookConfig } from '@storybook/vue3-vite'

const config: StorybookConfig = {
  stories: ['../components/**/*.stories.@(ts|tsx)'],
  framework: {
    name: '@storybook/vue3-vite',
    options: {}
  },
  async viteFinal(config) {
    config.plugins = [...(config.plugins || []), vue()]
    return config
  }
}
export default config
