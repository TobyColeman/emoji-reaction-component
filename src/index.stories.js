import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import centered from '@storybook/addon-centered/react'

import EmojiReaction, {
  TitledReaction,
  AngryReaction,
  CryReaction,
  HappyReaction
} from './'

storiesOf('EmojiReaction', module)
  .addDecorator(centered)
  .add('default', () =>
    <EmojiReaction
      onReact={action('clicked')}
      reactions={[
        <TitledReaction title={'Grr'} reaction={AngryReaction} />,
        <TitledReaction title={'Awesome'} reaction={HappyReaction} />,
        <TitledReaction title={'oof'} reaction={CryReaction} />
      ]} />
  )
