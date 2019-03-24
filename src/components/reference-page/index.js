import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from 'layouts/main-layout'

export default function Template({ data, location, pageContext }) {
  const post = data.markdownRemark
  const { siteMetadata } = data.site

  return (
    <Layout>
      <Helmet>
        <title>{post.frontmatter.subject}</title>
        <meta name="author" content={siteMetadata.author} />
      </Helmet>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query ReferencePageBySubject($subject: String!) {
    markdownRemark(frontmatter: { subject: { eq: $subject } }) {
      headings(depth: h2) {
        value
        depth
      }
      html
      frontmatter {
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
