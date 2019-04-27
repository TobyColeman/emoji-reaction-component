import { css } from '@emotion/core'

import TitledReaction from '../titled-reaction'

import LoveReaction from '../icons/love-face.svg'
import CryReaction from '../icons/cry-face.svg'
import WowReaction from '../icons/wow-face.svg'
import CaretDown from '../icons/caret-down.svg'

const containerStyles = css`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  filter: drop-shadow(0 1px 3px rgba(0,0,0,0.12));
`

const reactionContainerStyles = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-radius: 15px;
  padding: 10px;
  background-color: #fff;
`

const caretStyles = css`
  margin-top: -10px;
  width: 32px;
  height: 32px;
  fill: #fff;
  z-index: -1;
`

export default function ReactionPopup () {
  return (
    <div css={containerStyles}>
      <div css={reactionContainerStyles}>
        <TitledReaction
          title='Wow'
          icon={WowReaction}
        />
        <TitledReaction
          title='Love it'
          icon={LoveReaction}
        />
        <TitledReaction
          title='oof'
          icon={CryReaction}
        />
      </div>
      <CaretDown css={caretStyles} />
    </div>
  )
}
