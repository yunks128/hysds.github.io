import React from 'react'
import { Link } from 'gatsby'
import { css, jsx } from '@emotion/core'

import Image from '../image'

const introduction = css`
  text-align: center;
  border-bottom: 0.5px solid grey;
  padding-bottom: 1.5rem;

  h3 {
    // font-size: 1.3rem;
  }

  a {
    color: black;
    &:hover {
      text-decoration: none;
    }
  }

  .btn-primary {
    color: white;
  }

  .container {
    margin-bottom: 3rem;
    > div {
      margin-bottom: 3rem;
    }
  }

  .jumbotron,
  .jumbotron-fluid {
    margin: 0;
    background-color: transparent;
  }
`

const image = css`
  width: 5.5em;
  margin: 3em auto 1em;
`

const Intro = ({ data: [intro, featured] }) => (
  <section css={introduction}>
    <section className="jumbotron jumbotron-fluid">
      <h2>Our website is under construction</h2>
      <div className="container">
        <h1 className="display-4">{intro.metadata.siteMetadata.title}</h1>
        <p className="lead">{intro.hysds.edges[0].node.excerpt}</p>
        <hr />
        <Link to="/docs/getting-started/" className="btn btn-lg btn-primary">
          Get started with HySDS &rarr;
        </Link>
      </div>
    </section>

    <div className="container">
      <section>
        <h2>{intro.about.edges[0].node.frontmatter.title}</h2>
        <p>{intro.about.edges[0].node.excerpt}</p>
        <Link to="/docs/about-hysds/" className="btn">
          About HySDS &rarr;
        </Link>
      </section>

      <section className="row">
        {featured.map((content, i) => (
          <Link to={content.link} className="col-md-4">
            <div className="mx-md-3">
              <div css={image}>
                <Image name={content.image} alt={content.title} />
              </div>
              <div>
                <h3>{content.title}</h3>
                <p>{content.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </div>
  </section>
)

export default Intro
