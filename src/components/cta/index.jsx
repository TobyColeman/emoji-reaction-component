import PropTypes from 'prop-types'
import { css } from '@emotion/core'
import posed from 'react-pose'

import Cross from '../../icons/cross.svg'
import AngryFace from '../../icons/reactions/angry.svg'
import LoveFace from '../../icons/reactions/love.svg'

// TODO: make these customisable by props
const OPEN_CLOSE_ANIMATION_DURATION = 200 // (ms)
const CONTAINER_SIZE = 160 // size of Cta when expanded (px)
const REACTION_SIZE = 64 // size of emoji in (px)
const REACTION_SPACING = 8 // spacing around emoji in (px)
const CROSS_SIZE = 32 // size of the add/close cross (px)

const Root = posed.div({
  open: {
    width: `${CONTAINER_SIZE}px`,
    transition: { duration: OPEN_CLOSE_ANIMATION_DURATION }
  },
  closed: {
    width: `${REACTION_SIZE}px`,
    transition: { duration: OPEN_CLOSE_ANIMATION_DURATION }
  }
})

const PosedCross = posed.div({
  open: {
    x: `${REACTION_SIZE + CROSS_SIZE + 8}px`, // container size - emoji size
    y: '0px',
    rotate: '45deg',
    transition: { duration: OPEN_CLOSE_ANIMATION_DURATION }
  },
  closed: {
    x: `${CROSS_SIZE / 2}px`, // half of cross size
    y: '0px',
    rotate: '-90deg',
    transition: { duration: OPEN_CLOSE_ANIMATION_DURATION }
  }
})

const EmojiGroup = posed.div({
  open: {
    y: '0px',
    x: '0px',
    opacity: 1,
    transition: { duration: OPEN_CLOSE_ANIMATION_DURATION }
  },
  closed: {
    y: `-${REACTION_SIZE / 2}px`, // half of emoji size
    x: `-${(CONTAINER_SIZE - REACTION_SIZE) / 2}px`,
    opacity: 0,
    transition: { duration: OPEN_CLOSE_ANIMATION_DURATION }
  }
})

const ctaStyles = css`
  position: relative;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12);
  width: ${REACTION_SIZE}px;
  height: ${REACTION_SIZE}px;
  border-radius: 96px;
  z-index: 1;
`

const emojiBaseStyles = css`
  width: ${REACTION_SIZE - REACTION_SPACING}px;
  height: ${REACTION_SIZE - REACTION_SPACING}px;
  margin-left: 4px;
`

const crossIconStyles = css`
  width: ${CROSS_SIZE}px;
  height: ${CROSS_SIZE}px;
`

const iconBaseStyles = css`
  display: flex;
`

const emojiGroupStyles = css`
  display: flex;
  position: absolute;
`

const emojiOverlap = css`
  margin-left: -21px;
  z-index: -1;
`

export default function Cta({ isOpen, onOpen, onClose }) {
  return (
    <Root
      css={ctaStyles}
      onClick={() => { isOpen ? onClose() : onOpen() }}
      pose={isOpen ? 'open' : 'closed'}
    >
      <EmojiGroup
        css={emojiGroupStyles}
        pose={isOpen ? 'open' : 'closed'}
      >
        <LoveFace css={[iconBaseStyles, emojiBaseStyles]} />
        <AngryFace css={[iconBaseStyles, emojiBaseStyles, emojiOverlap]} />
      </EmojiGroup>
      <PosedCross
        pose={isOpen ? 'open' : 'closed'}
        css={crossIconStyles}
      >
        <Cross
          css={[iconBaseStyles, crossIconStyles]}
        />
      </PosedCross>
    </Root>
  )
}

Cta.propTypes = {
  isOpen: PropTypes.bool,
  onOpen: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired
}
