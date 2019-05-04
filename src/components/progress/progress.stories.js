import React from 'react'

import { storiesOf } from '@storybook/react'

import centered from '@storybook/addon-centered/react'

import Progress from './'

storiesOf('EmojiReaction/Progress', module)
  .addDecorator(centered)
  .add('When loading', () => <Progress status={'loading'} />)
  .add('When success', () => <Progress status={'success'} />)
  .add('When err', () => <Progress status={'err'} />)
