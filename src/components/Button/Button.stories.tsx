import type { StoryObj, Meta } from '@storybook/react-vite'
import { expect } from 'storybook/test'

import { Button } from './Button'

const meta = {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Button',
  },
} satisfies Meta<typeof Button>
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  play: async ({ canvas }) => {
    const button = await canvas.findByRole('button')
    await expect(button).toBeDisabled()
  },
}

export const Clear: Story = {
  args: {
    clear: true,
  },
}

export const Icon: Story = {
  args: {
    icon: 'cart',
    'aria-label': 'cart',
  },
}

export const IconAndText: Story = {
  args: {
    icon: 'cart',
    children: (
      <div style={{ paddingLeft: '16px' }}>
        <span style={{ color: '#949494' }}>Order</span>
        <span style={{ color: 'white', paddingLeft: '8px' }}>€ 8</span>
      </div>
    ),
  },
}
