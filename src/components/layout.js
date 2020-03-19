import React from 'react'
import { Helmet } from 'react-helmet'
import Header from './header'
import Footer from './footer'

export default ({ children }) => (
  <div>
    <Helmet>
      <meta charSet="utf-8" />
      <title>HySDS</title>
    </Helmet>
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
)
