import React from 'react'

import { storiesOf } from '@storybook/react'
import centered from '@storybook/addon-centered/react'

import TitledReaction from './'
import LoveReaction from '../icons/love-face.svg'

storiesOf('EmojiReaction/TitledReaction', module)
  .addDecorator(centered)
  .add('default', () => <TitledReaction title={'Love it'} icon={LoveReaction} />)
