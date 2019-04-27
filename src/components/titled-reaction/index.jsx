import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/core'

const root = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const reactionTxt = css`
  text-align: center;
  margin: 0px;
  font-size: 14px;
  margin-top: 2px;
  margin-bottom: 2px;
  font-family: -apple-system-body,BlinkMacSystemFont,SFUI,HelveticaNeue,Helvetica,Arial,sans-serif;
`

const reactionStyles = css`
  padding-left: 8px;
  padding-right: 8px;
  width: 56px;
  height: 56px;
`

export default function TitledReaction ({ icon: Icon, title, className }) {
  return (
    <div css={root} className={className}>
      <Icon css={reactionStyles} />
      <p
        css={reactionTxt}
      >{title}
      </p>
    </div>
  )
}

TitledReaction.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.func.isRequired,
  className: PropTypes.string
}
