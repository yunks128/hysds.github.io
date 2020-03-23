import React from 'react'
import { Link } from 'gatsby'

import logo from '../images/hysds-logo.png'
import footerData from '../../content/footer.yaml'

export default () => (
  <footer className="pt-4 my-md-5 pt-md-5 border-top">
    <div className="row">
      <div className="col-12 col-md">
        <img className="mb-2" src={logo} alt="" height="50" />
        <small className="d-block mb-3 text-muted">
          &copy; HySDS
          {new Date().getFullYear()}
        </small>
      </div>
      {footerData.map(section => (
        <div className="col-6 col-md">
          <h5>{section.title}</h5>
          <ul className="list-unstyled text-small">
            {section.items.map(item => (
              <li>
                <Link className="text-muted" to={item.to}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </footer>
)
