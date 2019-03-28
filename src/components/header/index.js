import PropTypes from 'prop-types'
import React from 'react'
import HeaderButtons from '../header-buttons'
import { wrapper, innerWrapper, titleWrapper, menuButton } from './style'
export { default as TypeHello } from './type-hello'
export { default as Title } from './title'

const Header = ({ children, styleOverride }) => {
  return (
    <div css={theme => [wrapper(theme), styleOverride]}>
      <div css={innerWrapper}>
        <HeaderButtons />
        <div css={titleWrapper}>
          {children}
          <button css={menuButton}>
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </div>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
