import React from 'react'
import { Link } from 'gatsby'

import Image from '../image'
import Accordion from '../accordion'

export default ({ data }) => (
  <section id="secondary">
    <Link to={data[0].link}>
      <section className="mb-2">
        <div className="row no-gutters">
          <div className="col-sm-6">
            <Image name={data[0].image} className="card-img-top" alt="" />
          </div>
          <div className="col-sm-6">
            <div className="card-body">
              <h2 className="card-title">{data[0].title}</h2>
              <p className="card-text">{data[0].description}</p>
            </div>
          </div>
        </div>
      </section>
      <hr className="my-4" />
    </Link>
    <section className="text-center">
      <h2 className="mb-4">{data[1].title}</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis eum ea, eius fugiat, ipsam vitae adipisci dolor,
        perspiciatis nulla aliquam officia rerum? Delectus neque sint accusamus eligendi quam odit sunt.
      </p>
    </section>
    <hr className="my-4" />
    <section>
      <h2 className="text-center mb-4">{data[2].title}</h2>
      <div className="bg-white row">
        <div className="col-sm-6">
          {data[2].items.map((faq, i) => (
            <>{i % 2 === 0 && <Accordion title={faq.question}>{faq.answer}</Accordion>}</>
          ))}
        </div>
        <div className="col-sm-6">
          {data[2].items.map((faq, i) => (
            <>{i % 2 !== 0 && <Accordion title={faq.question}>{faq.answer}</Accordion>}</>
          ))}
        </div>
      </div>
    </section>
  </section>
)
