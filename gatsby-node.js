const path = require('path')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)
  const refPageTemplate = path.resolve(`src/templates/reference-page.js`)

  return graphql(`
    {
      blogPosts: allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "blog" } } }
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            html
            id
            frontmatter {
              date
              path
              title
            }
          }
        }
      }
      refPages: allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "reference" } } }
      ) {
        edges {
          node {
            html
            id
            frontmatter {
              path
              subject
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }
    const posts = result.data.blogPosts.edges
    posts.forEach((post, i) => {
      //sorted by desc so these need to be reversed
      const previous =
        i < posts.length - 1
          ? posts[i + 1].node.frontmatter
          : posts[0].node.frontmatter

      const next =
        i > 0
          ? posts[i - 1].node.frontmatter
          : posts[posts.length - 1].node.frontmatter

      createPage({
        path: post.node.frontmatter.path,
        component: blogPostTemplate,
        context: { previous, next },
      })
    })
    const pages = result.data.refPages.edges
    pages.forEach(page =>
      createPage({
        path: page.node.frontmatter.path,
        component: refPageTemplate,
      })
    )
  })
}
