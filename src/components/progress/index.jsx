import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/core'
import posed from 'react-pose'

import Loading from '../../icons/loading.svg'
import Check from '../../icons/check.svg'
import Error from '../../icons/cross.svg'

// TODO ^ Toby C - 04.05.19 - width/height should be provided
// via emotion theme
const iconStyles = css`
  width: 62px;
  height: 62px;
  padding-left: 1px;
  padding-right: 1px;
  position: absolute;
`

const loadingStyles = css`
  stroke: #525df9;
`

const checkStyles = css`
  fill: #525df9;
`
const errStyles = css`
  fill: #F44336;
`

const PosedStatus = posed.div({
  enabled: {
    scale: 1
  },
  disabled: {
    scale: 0
  }
})

export default function Progress ({ status }) {
  return (
    <>
      <PosedStatus
        pose={status === 'loading' ? 'enabled' : 'disabled'}
        css={iconStyles}
      >
        <Loading css={[iconStyles, loadingStyles]} />
      </PosedStatus>
      <PosedStatus
        pose={status === 'success' ? 'enabled' : 'disabled'}
        css={iconStyles}
      >
        <Check css={[iconStyles, checkStyles]} />
      </PosedStatus>
      <PosedStatus
        pose={status === 'err' ? 'enabled' : 'disabled'}
        css={iconStyles}
      >
        <Error css={[iconStyles, errStyles]} />
      </PosedStatus>
    </>
  )
}

Progress.propTypes = {
  status: PropTypes.oneOf(['pending', 'loading', 'success', 'err'])
}
