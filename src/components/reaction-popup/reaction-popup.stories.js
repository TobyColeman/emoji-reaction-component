import React from 'react'

import { storiesOf } from '@storybook/react'
import centered from '@storybook/addon-centered/react'

import ReactionPopup from './'
import {
  TitledReaction,
  AngryReaction,
  CryReaction,
  HappyReaction
} from '../../'

storiesOf('EmojiReaction/ReactionPopup', module)
  .addDecorator(centered)
  .add('default', () => <ReactionPopup reactions={[
    <TitledReaction title={'Grr'} reaction={AngryReaction} />,
    <TitledReaction title={'Awesome'} reaction={HappyReaction} />,
    <TitledReaction title={'oof'} reaction={CryReaction} />
  ]} />)
