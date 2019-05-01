import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/core'
import posed from 'react-pose'

import { ReactionConsumer } from '../../providers/reaction-context'

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
  &:hover {
    cursor: pointer;
  }
`

const PosedReaction = posed.div({
  hoverable: true,
  init: { scale: 1 },
  hover: { scale: 1.2 }
})

export default function TitledReaction ({ reaction: Reaction, title, className }) {
  return (
    <div css={root} className={className}>
      <ReactionConsumer>
        {(onReact) => (
          <PosedReaction onClick={() => onReact(title)}>
            <Reaction css={reactionStyles} />
          </PosedReaction>
        )}
      </ReactionConsumer>
      <p
        css={reactionTxt}
      >{title}
      </p>
    </div>
  )
}

TitledReaction.propTypes = {
  title: PropTypes.string.isRequired,
  reaction: PropTypes.func.isRequired,
  className: PropTypes.string
}
