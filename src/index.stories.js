import React from 'react'

import { storiesOf } from '@storybook/react'
import centered from '@storybook/addon-centered/react'

import EmojiReaction, {
  TitledReaction,
  AngryReaction,
  CryReaction,
  HappyReaction
} from './'

storiesOf('EmojiReaction', module)
  .addDecorator(centered)
  .add('default', () => <EmojiReaction reactions={[
    <AngryReaction />,
    <HappyReaction />,
    <CryReaction />
  ]} />)
  .add('with title', () => <EmojiReaction reactions={[
    <TitledReaction title={'Grr'} reaction={AngryReaction} />,
    <TitledReaction title={'Awesome'} reaction={HappyReaction} />,
    <TitledReaction title={'oof'} reaction={CryReaction} />
  ]} />)
