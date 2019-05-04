import React from 'react'

import { storiesOf } from '@storybook/react'
import { actions } from '@storybook/addon-actions'
import { boolean, radios, withKnobs } from '@storybook/addon-knobs'
import centered from '@storybook/addon-centered/react'

import Cta from './'
import Progress from '../progress'

const ctaActions = actions('onOpen', 'onClose')

storiesOf('EmojiReaction/Cta', module)
  .addDecorator(centered)
  .addDecorator(withKnobs)
  .add('default', () => {
    const withLoadingIcon = boolean('With custom content?', false, 'CTA')
    const status = radios('Progress Status', {
      Pending: 'pending',
      Loading: 'loading',
      Success: 'success',
      Error: 'err'
    }, 'pending', 'CTA')

    if (!withLoadingIcon) {
      return <Cta
        onOpen={ctaActions.onOpen}
        onClose={ctaActions.onClose}
      />
    }

    return (
      <Cta
        isCtaIconVisible={status === 'pending'}
        onOpen={ctaActions.onOpen}
        onClose={ctaActions.onClose}
      >
        <Progress status={status} />
      </Cta>
    )
  })
  .add('When open', () => <Cta {...ctaActions} isOpen={true} />)
  .add('When closed', () => <Cta {...ctaActions} isOpen={false} />)
