import { css } from '@emotion/core'

export const wrapper = theme => css`
  background: ${theme.primaryColor};
  height: 86px;
`
export const innerWrapper = theme => css`
  max-width: ${theme.headerMaxWidth};
  margin: auto;
  position: relative;
  height: 100%;
`
export const titleWrapper = css`
  margin: 0 auto;
  height: 100%;
`
export const title = theme => css`
  display: inline-block;
  ${theme.headerTitle}
`
export const whiteBorder = theme => css`
  border-right: 3px solid ${theme.secondaryColor};
`
export const blinkBorder = theme => css`
  @keyframes blink {
    50% {
      border-right: 3px solid ${theme.primaryColor};
    }
  }
  animation: blink 0.5s step-end infinite alternate;
`
export const menuButton = theme => css`
  position: absolute;
  padding: 5px;
  bottom: 10px;
  right: 10px;
  width: 25px;
  height: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: stretch;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  border: 1px solid ${theme.secondaryColor};

  span {
    width: 100%;
    background: ${theme.secondaryColor};
    height: 1px;
    border-radius: 4px;
  }
`
