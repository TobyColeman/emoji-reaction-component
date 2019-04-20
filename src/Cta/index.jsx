import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/core'

import Cross from '../icons/cross.svg'

import usePrevious from '../hooks/use-previous'

const styles = css`
  display: inline-flex;
  flex-direction: row;
  background-color: #f7f7f7;
  border-radius: 50%;
`

const crossBaseCss = css`
  display: flex;
`
const crossOpen = css`
  transform: rotate(45deg);
`

export default function Cta(props = { isOpen: false }) {
  const [isOpen, setOpen] = useState(props.isOpen)
  const prevIsOpen = usePrevious(isOpen)

  useEffect(() => {
    let cb = isOpen ? props.onOpen : props.onClose
    if (prevIsOpen !== isOpen && cb) cb()
  })

  return (
    <div css={styles} onClick={() => setOpen(!isOpen)}>
      <Cross
        css={[crossBaseCss, !isOpen && crossOpen]}
      />
    </div>
  )
}

Cta.propTypes = {
  isOpen: PropTypes.bool,
  onOpen: PropTypes.function,
  onClose: PropTypes.function
}
