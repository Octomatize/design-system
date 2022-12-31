import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@octomatize/react'

export default {
  title: 'Typografy/Text',
  component: Text,

  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur magnam libero earum natus tempora ullam ipsum quis fugiat ab asperiores! Totam facere repellat, obcaecati impedit tenetur explicabo voluptas quo sint.',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
