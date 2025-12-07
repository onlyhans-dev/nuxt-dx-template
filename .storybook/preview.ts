import type { Preview } from '@storybook/vue3'
import '../app/assets/css/main.css'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' }
  }
}

export default preview
