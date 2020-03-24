import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

export default ({ data }) => (
  <Layout>
    <h2>
      About{` `}
      {data.site.siteMetadata.title}
    </h2>
    <p>{data.site.siteMetadata.description}</p>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
