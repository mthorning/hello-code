import React from 'react'
import { graphql } from 'gatsby'
import Layout from 'layouts/main-layout'
import { SEO } from 'components'

export default function({ data }) {
  const { edges: posts } = data.allMarkdownRemark
  const { siteMetadata } = data.site

  return (
    <Layout>
      <SEO
        title="Reference Pages"
        description={siteMetadata.description}
        author={siteMetadata.author}
        keywords={['git', 'bash']}
      />
      <div>
        {posts
          .filter(post => post.node.frontmatter.title.length > 0)
          .map(({ node: post }) => (
            <div>{post.frontmatter.title}</div>
          ))}
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query ReferenceQuery {
    site {
      siteMetadata {
        description
        title
        author
      }
    }
    allMarkdownRemark(filter: { frontmatter: { type: { eq: "reference" } } }) {
      edges {
        node {
          id
          timeToRead
          frontmatter {
            title
          }
        }
      }
    }
  }
`
