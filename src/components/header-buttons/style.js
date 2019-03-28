import { css } from '@emotion/core'

export const wrapper = theme => css`
  position: absolute;
  top: 0;
  right: 0;
  font-size: 25px;

  ${theme.smallScreen} {
    right: 0;
  }
  a {
    color: ${theme.secondaryColor};
    font-size: 30px;
    margin: 10px;
  }
`
