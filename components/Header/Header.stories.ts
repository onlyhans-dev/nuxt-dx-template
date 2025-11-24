import type { Meta, StoryObj } from '@storybook/vue3'
import Header from './Header.vue'

const meta: Meta<typeof Header> = {
  component: Header,
  title: 'Example/Header'
}

export default meta

type Story = StoryObj<typeof Header>

export const Default: Story = {
  render: (args) => ({
    components: { Header },
    setup() {
      return { args }
    },
    template: '<Header v-bind="args">Test header content</Header>'
  })
}
