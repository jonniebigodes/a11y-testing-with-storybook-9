import type { Meta, StoryObj } from '@storybook/react-vite'
import { http, HttpResponse } from 'msw'

import { BASE_URL } from '../../api'
import { restaurants } from '../../stub/restaurants'

import { HomePage } from './HomePage'

const meta = {
  title: 'Pages/HomePage',
  component: HomePage,
  parameters: {
    msw: {
      handlers: [http.get(BASE_URL, () => HttpResponse.json(restaurants))],
    },
  },
} satisfies Meta<typeof HomePage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
