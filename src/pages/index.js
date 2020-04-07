import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Intro from '../components/home/intro'
import Featured from '../components/home/featured'
import Primary from '../components/home/primary'
import Secondary from '../components/home/secondary'

import marketing from '../../content/home/marketing/marketing.yaml'

export default ({ data }) => (
  <Layout>
    <SEO />
    <Intro data={data.hysds} />
    <Featured data={marketing.featured} />
    <Primary data={marketing.primary} />
    <Secondary data={marketing.secondary} />
  </Layout>
)

export const query = graphql`
  {
    hysds: allMarkdownRemark(filter: { frontmatter: { id: { eq: "hysds-overview" } } }) {
      edges {
        node {
          frontmatter {
            title
          }
          excerpt(pruneLength: 495)
        }
      }
    }
  }
`
