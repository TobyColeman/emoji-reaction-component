import { useState } from 'react'
import { css } from '@emotion/core'
import posed from 'react-pose'

import Cta from './cta'
import ReactionPopup from './reaction-popup'

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

const TmpWrapper = posed.div({
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

export default function EmojiReaction () {
  const [isPopupOpen, setPopupOpen] = useState(false)

  return (
    <div css={containerStyles}>
      <TmpWrapper
        css={[reactionPopupStyles, !isPopupOpen && reactionPopupHiddenStyles]}
        pose={isPopupOpen ? 'open' : 'closed'}
      >
        <ReactionPopup />
      </TmpWrapper>
      <Cta
        onOpen={() => setPopupOpen(true)}
        onClose={() => setPopupOpen(false)}
      />
    </div>
  )
}
