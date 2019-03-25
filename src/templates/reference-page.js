import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from 'layouts/reference-layout'

export default function Template({ data }) {
  const page = data.markdownRemark
  const { siteMetadata } = data.site

  return (
    <Layout>
      <Helmet>
        <meta name="author" content={siteMetadata.author} />
      </Helmet>
      <div dangerouslySetInnerHTML={{ __html: page.html }} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query RefPageByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      headings(depth: h2) {
        value
        depth
      }
      html
      frontmatter {
        path
        subject
      }
    }
    site {
      siteMetadata {
        author
      }
    }
  }
`
