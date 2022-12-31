import type { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps, Text } from '@octomatize/react'

export default {
  title: 'Surfaces/Box',
  component: Box,

  args: {
    children: (
      <>
        <Text>Box element text</Text>
      </>
    ),
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}