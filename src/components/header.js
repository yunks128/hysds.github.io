import React from 'react'
import { Link } from 'gatsby'
import logo from '../images/hysds-logo.png'

export default () => (
  <header>
    <nav className="navbar">
      <div id="logo">
        <Link to="/">
          <img src={logo} className="header-logo" alt="..." />
        </Link>
      </div>

      <ul className="nav justify-content-end">
        <li className="nav-item">
          <Link to="/about/">About</Link>{' '}
        </li>
        <li className="nav-item">
          <Link to="/features/">Features</Link>{' '}
        </li>
        <li className="nav-item">
          <Link to="/contribute/">Contribute</Link>{' '}
        </li>
        <li className="nav-item">
          <Link to="/docs/hysds/hysds-overview/">Docs</Link>{' '}
        </li>
      </ul>
    </nav>
  </header>
)
