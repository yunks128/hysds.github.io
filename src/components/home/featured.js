import React from 'react'
import { Link } from 'gatsby'

import Image from '../image'

const Featured = ({ data }) => (
  <>
    <div className="card-deck">
      {data.map((content, i) => (
        <Link to={content.link} className="card">
          <Image name={content.image} className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">{content.title}</h5>
            <p className="card-text">{content.description}</p>
          </div>
        </Link>
      ))}
    </div>
    <hr className="my-4" />
  </>
)

export default Featured
