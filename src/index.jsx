import { useState } from 'react'
import { css } from '@emotion/core'
import posed from 'react-pose'

import Cta from './components/cta'
import ReactionPopup from './components/reaction-popup'

const OPEN_CLOSE_ANIMATION_DURATION = 150 // (ms)

const containerStyles = css`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const reactionPopupHiddenStyles = css`
  z-index: -1;
`

const reactionPopupStyles = css`
  position: absolute;
  z-index: 2;
`

const PosedReactionPopup = posed(ReactionPopup)({
  open: {
    opacity: 1,
    y: '-100%',
    transition: { duration: OPEN_CLOSE_ANIMATION_DURATION }
  },
  closed: {
    opacity: 0,
    y: '-90%',
    transition: { duration: OPEN_CLOSE_ANIMATION_DURATION }
  }
})

export default function EmojiReaction (props) {
  const [isPopupOpen, setPopupOpen] = useState(false)

  return (
    <div css={containerStyles}>
      <PosedReactionPopup
        css={[reactionPopupStyles, !isPopupOpen && reactionPopupHiddenStyles]}
        pose={isPopupOpen ? 'open' : 'closed'}
        reactions={props.reactions}
      />
      <Cta
        onOpen={() => setPopupOpen(true)}
        onClose={() => setPopupOpen(false)}
      />
    </div>
  )
}

export { default as TitledReaction } from './components/titled-reaction'
export { default as AngryReaction } from './icons/reactions/angry.svg'
export { default as CryReaction } from './icons/reactions/cry.svg'
export { default as DeadReaction } from './icons/reactions/dead.svg'
export { default as EmbarrassReaction } from './icons/reactions/embarrass.svg'
export { default as HappyReaction } from './icons/reactions/happy.svg'
export { default as JoyReaction } from './icons/reactions/joy.svg'
export { default as LoveReaction } from './icons/reactions/love.svg'
export { default as ShyReaction } from './icons/reactions/shy.svg'
export { default as SleepyReaction } from './icons/reactions/sleepy.svg'
export { default as WinkReaction } from './icons/reactions/wink.svg'
export { default as WowReaction } from './icons/reactions/wow.svg'
