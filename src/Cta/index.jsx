import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/core'
import posed from 'react-pose'

import Cross from '../icons/cross.svg'
import AngryFace from '../icons/angry-face.svg'
import LoveFace from '../icons/love-face.svg'

import usePrevious from '../hooks/use-previous'

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

const CrossContainer = posed.div({
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

export default function Cta(props = { isOpen: false }) {
  const [isOpen, setOpen] = useState(props.isOpen)
  const prevIsOpen = usePrevious(isOpen)

  useEffect(() => {
    let cb = isOpen ? props.onOpen : props.onClose
    if (prevIsOpen !== isOpen && cb) cb()
  })

  return (
    <Root
      css={ctaStyles}
      onClick={() => setOpen(!isOpen)}
      pose={isOpen ? 'open' : 'closed'}
    >
      <EmojiGroup
        css={emojiGroupStyles}
        pose={isOpen ? 'open' : 'closed'}
      >
        <LoveFace css={[iconBaseStyles, emojiBaseStyles]} />
        <AngryFace css={[iconBaseStyles, emojiBaseStyles, emojiOverlap]} />
      </EmojiGroup>
      <CrossContainer
        css={crossIconStyles}
        pose={isOpen ? 'open' : 'closed'}
      >
        <Cross
          css={[iconBaseStyles, crossIconStyles]}
        />
      </CrossContainer>
    </Root>
  )
}

Cta.propTypes = {
  isOpen: PropTypes.bool,
  onOpen: PropTypes.func,
  onClose: PropTypes.func
}
