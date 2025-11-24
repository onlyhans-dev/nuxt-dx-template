import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Header from './Header.vue'

describe('Header', () => {
  it('mount component with h1 in slot', () => {
    const wrapper = mount(Header, {
      slots: {
        default: 'Test header'
      }
    })

    expect(wrapper.text()).toContain('Test header')
    expect(wrapper.find('h1').exists()).toBe(true)
  })

  it('mount empty component', () => {
    const wrapper = mount(Header)

    expect(wrapper.text()).toBe('')
  })
})
