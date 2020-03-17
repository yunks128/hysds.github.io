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
      <div class="jumbotron">
        <h5>
          <Link>
            <span class="badge badge-pill badge-success">New</span>
            <span> Introducing HySDS feature name...</span>
          </Link>
        </h5>
        <h2 class="display-4">Hybrid Cloud Science Data System</h2>
        <p class="lead">
          The Hybrid Cloud Science Data System, or HySDS (pronounced Hi-S-D-S)
          started development in 2009 at the NASA Jet Propulsion Laboratory.
          Science data systems ingest raw scientific data as input and process
          it into more useful information (climate models, CO2 levels, water
          levels, etc). JPL's HySDS processes satellite and radar data for use
          in natural disaster response (ARIA), climate monitoring and prediction
          (OCO2), and many other large scale projects that need real time
          environmental data.
        </p>
        <hr class="my-4" />
        <Link to="/get-started/" class="btn btn-primary btn-lg">
          Get Started
        </Link>
      </div>
      <div class="card text-center">
        <div class="card-body">
          <h5 class="card-title">Why HySDS</h5>
          <p class="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
            eius inventore? Veritatis, fugit ipsa, cupiditate nobis debitis
            corrupti inventore nihil fugiat molestiae necessitatibus
            perspiciatis doloribus libero aliquam pariatur voluptatem sunt?
          </p>
          <Link to="/about/" class="btn">
            About &rarr;
          </Link>
        </div>
      </div>

      <hr class="my-4" />

      <div class="card-deck">
        <div class="card">
          <img fluid={placeholder} class="card-img-top" alt="" />
          <div class="card-body">
            <h5 class="card-title">Feature</h5>
            <p class="card-text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatibus quae aut, eum alias, tenetur odit eveniet quas harum
              a atque nostrum beatae numquam commodi voluptate, debitis
              dignissimos pariatur neque. Ut?
            </p>
          </div>
        </div>
        <div class="card">
          <img fluid={placeholder} class="card-img-top" alt="" />
          <div class="card-body">
            <h5 class="card-title">Feature</h5>
            <p class="card-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
              explicabo cum repudiandae distinctio sapiente eveniet, qui est
              minus tenetur voluptates amet quis illo velit numquam quos autem
              accusantium quia? Nisi?
            </p>
          </div>
        </div>
        <div class="card">
          <img fluid={placeholder} class="card-img-top" alt="" />
          <div class="card-body">
            <h5 class="card-title">Feature</h5>
            <p class="card-text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae
              consequatur enim minus possimus quae, ipsa impedit culpa
              necessitatibus dolorem rem molestias pariatur nihil ab fugit ea
              numquam. Ea, quam. Deserunt.
            </p>
          </div>
        </div>
      </div>
    </section>

    <hr class="my-4" />

    <section id="primary">
      <section class="card mb-2">
        <div class="row no-gutters">
          <div class="col-sm-6">
            <img src={tosca} class="card-img" alt="..." />
          </div>
          <div class="col-sm-6">
            <div class="card-body">
              <h5 class="card-title">Facet Search</h5>
              <p class="card-text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Laborum ab unde voluptatibus nesciunt sapiente et, optio earum
                nihil cum dolor necessitatibus veritatis expedita quia at
                minima. Quia similique dignissimos a.
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr class="my-4" />

      <section class="card mb-2">
        <div class="row no-gutters">
          <div class="col-sm-6">
            <div class="card-body">
              <h5 class="card-title">Job Metrics</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
          <div class="col-sm-6">
            <img src={metrics} class="card-img" alt="..." />
          </div>
        </div>
      </section>

      <hr class="my-4" />

      <section class="card mb-2">
        <div class="row no-gutters">
          <div class="col-sm-6">
            <img src={projects} class="card-img" alt="..." />
          </div>
          <div class="col-sm-6">
            <div class="card-body">
              <h5 class="card-title">Projects using HySDS</h5>
              <p class="card-text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Laborum ab unde voluptatibus nesciunt sapiente et, optio earum
                nihil cum dolor necessitatibus veritatis expedita quia at
                minima. Quia similique dignissimos a.
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr class="my-4" />
    </section>
  </Layout>
)
