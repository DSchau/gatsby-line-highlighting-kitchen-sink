import React from 'react'
import { graphql } from 'gatsby'

import 'prismjs/themes/prism-okaidia.css'
import './index.css'

import Layout from '../components/layout'

const IndexPage = ({ data }) => (
  <Layout>
    <div dangerouslySetInnerHTML={{ __html: data.markdown.html }} />
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    markdown:markdownRemark(frontmatter:{title:{eq:"Kitchen Sink"}}) {
      html
    }
  }
`