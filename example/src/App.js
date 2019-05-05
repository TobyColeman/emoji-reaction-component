import React, { Component } from 'react'

import EmojiReaction, {
  TitledReaction,
  AngryReaction,
  CryReaction,
  HappyReaction
} from  'emoji-reaction'

export default class App extends Component {
  render () {
    return (
      <div>
      <EmojiReaction
        onReact={(reaction) => { console.log(`Clicked: ${reaction}`) }}
        reactions={[
          <TitledReaction title={'Grr'} reaction={AngryReaction} />,
          <TitledReaction title={'Awesome'} reaction={HappyReaction} />,
          <TitledReaction title={'oof'} reaction={CryReaction} />
        ]} />
      </div>
    )
  }
}
