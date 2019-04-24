import React from 'react'

import { storiesOf } from '@storybook/react'
import centered from '@storybook/addon-centered/react'

import EmojiReaction from './'

storiesOf('EmojiReaction', module)
  .addDecorator(centered)
  .add('default', () => <EmojiReaction />)
