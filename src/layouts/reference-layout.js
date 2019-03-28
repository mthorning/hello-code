import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Header from 'components/header'
import { css } from '@emotion/core'

const RefLayout = ({ children, animateHeader }) => {
  return (
    <StaticQuery
      query={graphql`
        query refHeaderQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <Header styleOverride={{ background: '#444afc' }}>
            <h1 css={({ headerTitle }) => headerTitle}>Reference Page</h1>
          </Header>
          <div
            css={theme => css`
              margin: 0 auto;
              max-width: ${theme.contentMaxWidth};
              padding: 0px 1.0875rem 1.45rem;
              padding-top: 30px;
            `}
          >
            {children}
          </div>
        </>
      )}
    />
  )
}

RefLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default RefLayout
