import { css } from '@emotion/core'

const primaryColor = '#fc4445'
const secondaryColor = '#fff'
const textColor = 'rgba(0, 0, 0, 0.5)'
const footerIconFontSize = '25px'
const blogInfoIconFontSize = '13px'

export default {
  primaryColor,
  secondaryColor,
  textColor,
  footerIconFontSize,
  blogInfoIconFontSize,
  smallScreen: `@media (max-width: 480px)`,
  orangeLink: css`
    color: ${textColor};
    text-decoration: none;
    cursor: pointer;
    &:hover {
      color: ${primaryColor};
      text-decoration: none;
    }
  `,
}