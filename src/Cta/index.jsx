import { useState } from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/core'

import Cross from './cross.svg'

const styles = css`
  display: inline-flex;
  flex-direction: row;
  background-color: #f7f7f7;
  border-radius: 50%;
`

const crossStyles = css`
  display: flex;
  transform: rotate(45deg);
`

export default function Cta(props = { isOpen: false }) {
  const [isOpen, setOpen] = useState(props.isOpen)

  return (
    <div css={styles} onClick={() => setOpen(!isOpen)}>
      <img css={crossStyles} src={Cross} />
    </div>
  )
}

Cta.propTypes = {
  isOpen: PropTypes.bool
}
