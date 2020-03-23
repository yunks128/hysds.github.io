import React from 'react'
import { Link } from 'gatsby'

export default () => (
  <header>
    <nav class="navbar">
      <Link to="/">HySDS</Link>
      <ul class="nav justify-content-end">
        <li class="nav-item">
          <Link to="/docs/">Docs</Link>
        </li>
        <li class="nav-item">
          <Link to="/docs/">Tutorial</Link>
        </li>
        <li class="nav-item">
          <Link to="/">Community</Link>
        </li>
        <li class="nav-item">
          <a href="https://github.com/hysds-web/hysds-web.github.io">GitHub</a>
        </li>
      </ul>
    </nav>
  </header>
)
