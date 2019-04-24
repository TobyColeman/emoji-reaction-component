import React from 'react'

import { storiesOf } from '@storybook/react'
import centered from '@storybook/addon-centered/react'

import EmojiReaction from '../src'

storiesOf('EmojiReaction', module)
  .addDecorator(centered)
  .add('default', () => <EmojiReaction />)
