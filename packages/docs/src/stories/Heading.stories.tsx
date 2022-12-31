import type { StoryObj, Meta } from '@storybook/react'
import { Heading, HeadingProps } from '@octomatize/react'

export default {
  title: 'Typografy/Heading',
  component: Heading,

  args: {
    children: 'Lorem ipsum dolor sit amet consectetur',
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'By default the Heading component will be a `h2`, but we can change it with the `as` property.',
      },
    },
  },
}
