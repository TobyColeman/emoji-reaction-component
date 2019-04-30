import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/core'

import CaretDown from '../../icons/caret-down.svg'

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

function ReactionPopup (props) {
  return (
    <div
      ref={props.forwardedRef}
      css={containerStyles}
      className={props.className}
    >
      <div css={reactionContainerStyles}>
        {props.reactions.map((reaction, idx) => (
          <React.Fragment key={idx}>
            {reaction}
          </React.Fragment>
        ))}
      </div>
      <CaretDown css={caretStyles} />
    </div>
  )
}

ReactionPopup.propTypes = {
  reactions: PropTypes.arrayOf(PropTypes.element).isRequired,
  forwardedRef: PropTypes.any,
  className: PropTypes.string
}

export default forwardRef(
  function reactionPopup (props, ref) {
    return <ReactionPopup {...props} forwardedRef={ref} />
  }
)
