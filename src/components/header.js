import React from 'react'
import { Link } from 'gatsby'
import logo from '../images/hysds-logo.png'

export default () => (
  <header>

    <nav class="navbar">
      <div id="logo">
        <Link to="/">
          <img src={logo} class="header-logo" alt="..."/>
        </Link>
      </div>


      <ul class="nav justify-content-end">
        <li class="nav-item"> <Link to="/about/">About</Link> </li>
        <li class="nav-item"> <Link to="/features/">Features</Link> </li>
        <li class="nav-item"> <Link to="/contribute/">Contribute</Link> </li>
        <li class="nav-item"> <Link to="/docs/hysds/hysds-overview/">Docs</Link> </li>
      </ul>

    </nav>

  </header>
)
