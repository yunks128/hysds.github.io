import React from 'react'
import { Link } from 'gatsby'

import Image from '../image'

const Primary = ({ data }) => (
  <section id="primary">
    {data.map((content, i) => (
      <Link to={content.link}>
        <section className="mb-2">
          <div className="row no-gutters">
            {i % 2 === 0 && (
              <div className="col-sm-6">
                <Image name={content.image} className="card-img-top" alt="" />
              </div>
            )}
            <div className="col-sm-6">
              <div className="card-body">
                <h3 className="card-title">{content.title}</h3>
                <p className="card-text">{content.description}</p>
              </div>
            </div>
            {i % 2 !== 0 && (
              <div className="col-sm-6">
                <Image name={content.image} className="card-img-top" alt="" />
              </div>
            )}
          </div>
        </section>
        <hr className="my-4" />
      </Link>
    ))}
  </section>
)

export default Primary
