import { css } from '@emotion/core'
import PropTypes from 'prop-types'

import LoveReaction from '../icons/love-face.svg'
import CryReaction from '../icons/cry-face.svg'
import WowReaction from '../icons/wow-face.svg'
import CaretDown from '../icons/caret-down.svg'

const containerStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const reactionContainerStyles = css`
  display: flex;
  border-radius: 15px;
  padding: 10px;
  background-color: #f7f7f7;
`

const reactionStyles = css`
  padding-left: 4px;
  padding-right: 4px;
  width: 64px;
  height: 64px;
`

const caretStyles = css`
  margin-top: -10px;
  width: 32px;
  height: 32px;
  fill: #f7f7f7;
  z-index: -1;
`

function TitledReaction ({ children, title }) {
  return (
    <div>
      {children}
      <p
        css={{
          textAlign: 'center',
          margin: '0px',
          color: '#333',
          fontSize: '14px',
          marginTop: '2px',
          marginBottom: '2px',
          fontFamily: '-apple-system-body,BlinkMacSystemFont,SFUI,HelveticaNeue,Helvetica,Arial,sans-serif'
        }}
      >{title}
      </p>
    </div>
  )
}

TitledReaction.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element.isRequired
}

export default function ReactionPopup () {
  return (
    <div css={containerStyles}>
      <div css={reactionContainerStyles}>
        <TitledReaction title={'Wow'}>
          <WowReaction css={reactionStyles} />
        </TitledReaction>
        <TitledReaction title={'Love it'}>
          <LoveReaction css={reactionStyles} />
        </TitledReaction>
        <TitledReaction title={'oof'}>
          <CryReaction css={reactionStyles} />
        </TitledReaction>
      </div>
      <CaretDown css={caretStyles} />
    </div>
  )
}
