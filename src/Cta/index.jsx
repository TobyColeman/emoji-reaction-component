import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/core'
import posed from 'react-pose'

import Cross from '../icons/cross.svg'

import usePrevious from '../hooks/use-previous'

const OPEN_CLOSE_ANIMATION_DURATION = 300 // 300ms

const Box = posed.div({
  open: {
    width: '50px',
    transition: { duration: OPEN_CLOSE_ANIMATION_DURATION }
  },
  closed: {
    width: '16px',
    transition: { duration: OPEN_CLOSE_ANIMATION_DURATION }

  }
})

const Box2 = posed.div({
  open: {
    x: '34px',
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

const styles = css`
  display: inline-flex;
  flex-direction: row;
  background-color: #f7f7f7;
  border-radius: 8px;
`

const crossBaseCss = css`
  display: flex;
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
      css={styles}
      onClick={() => setOpen(!isOpen)}
      pose={isOpen ? 'open' : 'closed'}
    >
      <Box2 pose={isOpen ? 'open' : 'closed'}>
        <Cross
          css={[crossBaseCss]}
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
