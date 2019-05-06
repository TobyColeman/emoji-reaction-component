# emoji-reaction

> Emoji reaction component for React

## Install

```bash
npm install --save emoji-reaction
yarn add emoji-reaction
```

## Basic Usage

```js
import React, { Component } from 'react'

import EmojiReaction, {
  TitledReaction,
  AngryReaction,
  CryReaction
} from 'emoji-reaction'

class App extends Component {
  constructor () {
    this.state = { feedback: 'loading' }
  }

  takeWithAPinchOfSalt (reaction) {
    console.log(`Oof! ${reaction}`)
  }

  render () {
    return (
      <EmojiReaction
        onReact={this.takeWithAPinchOfSalt}
        reactions={[
          <TitledReaction title={'Grr'} reaction={AngryReaction} />,
          <TitledReaction title={'Grr'} reaction={HappyReaction} />
        ]}
        {/* optional progress indicator
          valid states - pending/loading/success/err*/}
        progress={this.state.feedback}
        progressIndicator={ProgressIndicator}
      />
    )
  }
}
```

## Demo

#### Standard
![](https://media.giphy.com/media/TduejZZ1aXtcNXe8XJ/giphy.gif)

#### With loading states
![](https://media.giphy.com/media/YPgbDNaeMLT6mYa07u/giphy.gif)


## TODO
- [ ] Implement and document component themeing
- [ ] resetting the state of the component after submission
- [ ] textual feedback option
- [ ] Prettierify + lint config updates
- [ ] Update the example + fix example build

## Acknowledgments

- Design inspired from https://uimovement.com/ui/3365/reacting-to-content/
- Reactions from https://www.iconfinder.com/iconsets/reaction

## License

MIT © [TobyColeman](https://github.com/TobyColeman)
