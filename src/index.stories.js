import React, { useState, useEffect, useRef } from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import centered from '@storybook/addon-centered/react'

import EmojiReaction, {
  TitledReaction,
  ProgressIndicator,
  AngryReaction,
  CryReaction,
  HappyReaction
} from './'

function useInterval(callback, delay) {
  const savedCallback = useRef()

  useEffect(() => {
    savedCallback.current = callback
  })

  useEffect(() => {
    function tick() {
      savedCallback.current()
    }
    if (delay !== null) {
      let id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}

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
  .add('with progress indicator', () => {
    const states = ['loading', 'success']

    function ExampleApp () {
      const [asyncState, setAsyncState] = useState('pending')
      const [reaction, setReaction] = useState()

      useInterval(() => {
        setAsyncState(states.shift())
      }, states.length && reaction ? 300 : null)

      return (
        <EmojiReaction
          onReact={setReaction}
          reactions={[
            <TitledReaction title={'Grr'} reaction={AngryReaction} />,
            <TitledReaction title={'Awesome'} reaction={HappyReaction} />,
            <TitledReaction title={'oof'} reaction={CryReaction} />
          ]}
          progress={asyncState}
          progressIndicator={ProgressIndicator}
        />
      )
    }

    return <ExampleApp />
  })
