import React from 'react'
import { Link } from 'gatsby'

const Intro = ({ data }) => (
  <section id="intro">
    <div className="jumbotron">
      <h5>
        <Link>
          <span className="badge badge-pill badge-success">New</span>
          <span> Introducing HySDS feature name...</span>
        </Link>
      </h5>
      <h2 className="display-4">Hybrid Cloud Science Data System</h2>
      <p className="lead">{data.edges[0].node.excerpt}</p>
      <hr className="my-4" />
      <Link to="/docs/" className="btn btn-primary btn-lg">
        Get Started
      </Link>
    </div>
    <div className="card text-center">
      <div className="card-body">
        <h5 className="card-title">Why HySDS</h5>
        <p className="card-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, eius inventore? Veritatis, fugit ipsa,
          cupiditate nobis debitis corrupti inventore nihil fugiat molestiae necessitatibus perspiciatis doloribus
          libero aliquam pariatur voluptatem sunt?
        </p>
        <Link to="/about/" className="btn">
          About &rarr;
        </Link>
      </div>
    </div>
    <hr className="my-4" />
  </section>
)

export default Intro
