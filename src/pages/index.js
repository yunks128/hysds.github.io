import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import projects from '../images/projects-using-hysds.png'
import placeholder from '../images/placeholder.png'
import tosca from '../images/tosca.png'
import metrics from '../images/metrics.png'

export default ({ data }) => (
  <Layout>
    <SEO />
    <section id="intro">
      <div className="jumbotron">
        <h5>
          <Link>
            <span className="badge badge-pill badge-success">New</span>
            <span> Introducing HySDS feature name...</span>
          </Link>
        </h5>
        <h2 className="display-4">Hybrid Cloud Science Data System</h2>
        <p className="lead">
          The Hybrid Cloud Science Data System, or HySDS (pronounced Hi-S-D-S) started development in 2009 at the NASA
          Jet Propulsion Laboratory. Science data systems ingest raw scientific data as input and process it into more
          useful information (climate models, CO2 levels, water levels, etc). JPL's HySDS processes satellite and radar
          data for use in natural disaster response (ARIA), climate monitoring and prediction (OCO2), and many other
          large scale projects that need real time environmental data.
        </p>
        <hr className="my-4" />
        <Link to="/get-started/" class="btn btn-primary btn-lg">
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
          <Link to="/about/" class="btn">
            About &rarr;
          </Link>
        </div>
      </div>

      <hr className="my-4" />

      <div className="card-deck">
        <div className="card">
          <img fluid={placeholder} className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">Feature</h5>
            <p className="card-text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus quae aut, eum alias, tenetur odit
              eveniet quas harum a atque nostrum beatae numquam commodi voluptate, debitis dignissimos pariatur neque.
              Ut?
            </p>
          </div>
        </div>
        <div className="card">
          <img fluid={placeholder} className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">Feature</h5>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt explicabo cum repudiandae distinctio
              sapiente eveniet, qui est minus tenetur voluptates amet quis illo velit numquam quos autem accusantium
              quia? Nisi?
            </p>
          </div>
        </div>
        <div className="card">
          <img fluid={placeholder} className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">Feature</h5>
            <p className="card-text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae consequatur enim minus possimus quae,
              ipsa impedit culpa necessitatibus dolorem rem molestias pariatur nihil ab fugit ea numquam. Ea, quam.
              Deserunt.
            </p>
          </div>
        </div>
      </div>
    </section>

    <hr className="my-4" />

    <section id="primary">
      <section className="card mb-2">
        <div className="row no-gutters">
          <div className="col-sm-6">
            <img src={tosca} className="card-img" alt="..." />
          </div>
          <div className="col-sm-6">
            <div className="card-body">
              <h5 className="card-title">Facet Search</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum ab unde voluptatibus nesciunt sapiente
                et, optio earum nihil cum dolor necessitatibus veritatis expedita quia at minima. Quia similique
                dignissimos a.
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className="my-4" />

      <section className="card mb-2">
        <div className="row no-gutters">
          <div className="col-sm-6">
            <div className="card-body">
              <h5 className="card-title">Job Metrics</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural lead-in to additional content. This content
                is a little bit longer.
              </p>
            </div>
          </div>
          <div className="col-sm-6">
            <img src={metrics} className="card-img" alt="..." />
          </div>
        </div>
      </section>

      <hr className="my-4" />

      <section className="card mb-2">
        <div className="row no-gutters">
          <div className="col-sm-6">
            <img src={projects} className="card-img" alt="..." />
          </div>
          <div className="col-sm-6">
            <div className="card-body">
              <h5 className="card-title">Projects using HySDS</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum ab unde voluptatibus nesciunt sapiente
                et, optio earum nihil cum dolor necessitatibus veritatis expedita quia at minima. Quia similique
                dignissimos a.
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className="my-4" />
    </section>
  </Layout>
)
