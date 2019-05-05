import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/core'
import posed from 'react-pose'

import Cta from './components/cta'
import ReactionPopup from './components/reaction-popup'
import { ReactionProvider } from './providers/reaction-context'

// TODO: ^ Toby C - 05.05.19  make this customisable by props
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

export default function EmojiReaction ({
  onReact,
  progress,
  progressIndicator: ProgressIndicator,
  ...rest
}) {
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [reaction, setReaction] = useState()
  const isCtaIconVisible = !ProgressIndicator || progress === 'pending'
  // If there is a progress indicator then close keep the cta closed
  // whilst progress is animating
  const isCtaOpen = !isPopupOpen && (ProgressIndicator ? !reaction : !ProgressIndicator)

  const reactionHandler = reactionType => {
    setReaction(reactionType)
    setIsPopupOpen(false)
  }

  useEffect(() => {
    if (reaction) {
      onReact(reaction)
    }
  })

  return (
    <div css={containerStyles}>
      <ReactionProvider value={reactionHandler}>
        <PosedReactionPopup
          css={[reactionPopupStyles, !isPopupOpen && reactionPopupHiddenStyles]}
          pose={isPopupOpen ? 'open' : 'closed'}
          {...rest}
        />
        <Cta
          isCtaIconVisible={isCtaIconVisible}
          isOpen={isCtaOpen}
          onOpen={() => setIsPopupOpen(false)}
          onClose={() => setIsPopupOpen(true)}
        >
          {ProgressIndicator && <ProgressIndicator status={progress} />}
        </Cta>
      </ReactionProvider>
    </div>
  )
}

EmojiReaction.propTypes = {
  onReact: PropTypes.func.isRequired,
  progress: PropTypes.oneOf(['pending', 'loading', 'success', 'err']),
  progressIndicator: PropTypes.func
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
export { default as ProgressIndicator } from './components/progress'
