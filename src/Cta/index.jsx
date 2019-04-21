import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/core'
import posed from 'react-pose'

import Cross from '../icons/cross.svg'
import AngryFace from '../icons/angry-face.svg'
import LoveFace from '../icons/love-face.svg'

import usePrevious from '../hooks/use-previous'

const OPEN_CLOSE_ANIMATION_DURATION = 300 // 300ms
// TODO: make these customisable by props
const EMOJI_SIZE = 64
const CONTAINER_SIZE = '192px'

const Box = posed.div({
  open: {
    width: CONTAINER_SIZE,
    transition: { duration: OPEN_CLOSE_ANIMATION_DURATION }
  },
  closed: {
    width: '64px',
    transition: { duration: OPEN_CLOSE_ANIMATION_DURATION }
  }
})

const Box2 = posed.div({
  open: {
    x: '0px',
    y: '0px',
    rotate: '45deg',
    transition: { duration: OPEN_CLOSE_ANIMATION_DURATION }
  },
  closed: {
    x: '0px',
    y: '0px',
    rotate: '-90deg',
    transition: { duration: OPEN_CLOSE_ANIMATION_DURATION }
  }
})

const ctaStyles = css`
  display: inline-flex;
  flex-direction: row;
  background-color: #f7f7f7;
  width: ${EMOJI_SIZE}px;
  height: ${EMOJI_SIZE}px;
  border-radius: 96px;
`

const iconBaseStyles = css`
  display: flex;
  width: ${EMOJI_SIZE}px;
  height: ${EMOJI_SIZE}px;
`

export default function Cta(props = { isOpen: false }) {
  const [isOpen, setOpen] = useState(props.isOpen)
  const prevIsOpen = usePrevious(isOpen)

  useEffect(() => {
    let cb = isOpen ? props.onOpen : props.onClose
    if (prevIsOpen !== isOpen && cb) cb()
  })

  return (
    <Box
      css={ctaStyles}
      onClick={() => setOpen(!isOpen)}
      pose={isOpen ? 'open' : 'closed'}
    >
      <LoveFace css={iconBaseStyles} />
      <AngryFace css={iconBaseStyles} />
      <Box2 pose={isOpen ? 'open' : 'closed'}>
        <Cross
          css={iconBaseStyles}
        />
      </Box2>
    </Box>
  )
}

Cta.propTypes = {
  isOpen: PropTypes.bool,
  onOpen: PropTypes.function,
  onClose: PropTypes.function
}
