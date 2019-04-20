import React from 'react'

import { storiesOf } from '@storybook/react'
import { actions } from '@storybook/addon-actions'

import Cta from '../src/Cta'

const ctaActions = actions('onOpen', 'onClose')

storiesOf('Cta', module)
  .add('When open', () => <Cta {...ctaActions} isOpen={true} />)
  .add('When closed', () => <Cta {...ctaActions} isOpen={false} />)
