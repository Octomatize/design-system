import type { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@octomatize/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,

  args: {
    src: 'https://github.com/devbarba.png',
    alt: 'Harbs Joao',
  },

  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
