import React from 'react'

import { storiesOf } from '@storybook/react'
import { actions } from '@storybook/addon-actions'
import centered from '@storybook/addon-centered/react'

import Cta from '../src/Cta'

const ctaActions = actions('onOpen', 'onClose')

storiesOf('Cta', module)
  .addDecorator(centered)
  .add('When open', () => <Cta {...ctaActions} isOpen={true} />)
  .add('When closed', () => <Cta {...ctaActions} isOpen={false} />)
