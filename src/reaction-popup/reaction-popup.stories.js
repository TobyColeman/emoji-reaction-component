import React from 'react'

import { storiesOf } from '@storybook/react'
import centered from '@storybook/addon-centered/react'

import ReactionPopup from './'

storiesOf('EmojiReaction/ReactionPopup', module)
  .addDecorator(centered)
  .add('default', () => <ReactionPopup />)
