import { css } from '@emotion/core'
import PropTypes from 'prop-types'

import LoveReaction from '../icons/love-face.svg'
import CryReaction from '../icons/cry-face.svg'
import WowReaction from '../icons/wow-face.svg'
import CaretDown from '../icons/caret-down.svg'

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

const reactionStyles = css`
  padding-left: 8px;
  padding-right: 8px;
  width: 56px;
  height: 56px;
`

const caretStyles = css`
  margin-top: -10px;
  width: 32px;
  height: 32px;
  fill: #fff;
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
