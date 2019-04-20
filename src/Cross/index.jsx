import { css } from '@emotion/core'

export default function Cross() {
  return (
    <a href='#'
      css={css`
        position: absolute;
        width: 32px;
        height: 32px;
      &:after, &:before {
        position: absolute;
        left: 15px;
        content: ' ';
        height: 32px;
        width: 2px;
        background-color: #333;
      }
      &:before {
        transform: rotate(90deg);
      }
    `}
    />
  )
}
