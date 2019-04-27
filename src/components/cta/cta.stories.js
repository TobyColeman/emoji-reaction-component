import React from 'react'

import { storiesOf } from '@storybook/react'
import { actions } from '@storybook/addon-actions'
import centered from '@storybook/addon-centered/react'

import Cta from './'

const ctaActions = actions('onOpen', 'onClose')

storiesOf('EmojiReaction/Cta', module)
  .addDecorator(centered)
  .add('When open', () => <Cta {...ctaActions} isOpen={true} />)
  .add('When closed', () => <Cta {...ctaActions} isOpen={false} />)
