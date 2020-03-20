import React, { useState } from 'react'
import { Link } from 'gatsby'
import logo from '../images/hysds-logo.png'
import styled, { createGlobalStyle } from 'styled-components'

const Global = createGlobalStyle`
body{
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}`

const MenuIcon = styled.button`

  top: 2rem;
  right: 2rem;
  margin-top: 25px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 1.5rem;
  height: 1.5 rem;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 5;

  div {
    width: 1.5rem;
    height: 0.2rem;
    margin: 3px;
    background: #ffffff;
    border-radius: 5px;
    transform-origin 1px;
    position: relative;
    transition: opacity 300ms, transform 300ms;
    :first-child{
      transform: ${({ nav }) => (nav ? 'rotate(45deg)' : 'rotate(0)')};

    }

    :nth-child(2){
      opacity: ${({ nav }) => (nav ? '0' : '1')}
    }
    :nth-child(3){
      transform: ${({ nav }) => (nav ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }

`

const MenuLinks = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-item: center;
  text-align: center;
  height: 300px;
  width: 100%;
  background-color: #2e2e2e;
  margin: 20px;
  padding: 10px;
  position: static;
  top: 0;
  right: 0;
  transform: ${({ nav }) => (nav ? 'translateX(-50%)' : 'translateX(100%)')};

  ul {
    list-style-type: none;
  }
  li {
    margin-top: 1rem;
    font-family: 'Montserrat', sans-serif;
    font-weight: 200;
  }
  a {
    text-decoration: none;
    font-size: 1.5rem;
  }
`

const Index = () => {
  const [nav, showNav] = useState(false)

  return (
    <nav class="navbar">
      <div id="logo">
        <Link to="/">
          <img src={logo} className="header-logo" alt="..." />
        </Link>
      </div>
      <ul class="nav justify-content-end">
        <li class="nav-item">
          {' '}
          <Link to="/about/" id="nav-item">
            ABOUT
          </Link>{' '}
        </li>
        <li class="nav-item">
          {' '}
          <Link to="/features/" id="nav-item">
            FEATURES
          </Link>{' '}
        </li>
        <li class="nav-item">
          {' '}
          <Link to="/contribute/" id="nav-item">
            CONTRIBUTE
          </Link>{' '}
        </li>
        <li class="nav-item">
          {' '}
          <Link to="/docs/hysds/hysds-overview/" id="nav-item">
            DOCS
          </Link>{' '}
        </li>
        <div>
          <Global />
          <MenuIcon nav={nav} onClick={() => showNav(!nav)}>
            <div />
            <div />
            <div />
          </MenuIcon>
          <MenuLinks nav={nav}>
            <ul>
              <li>
                {' '}
                <Link to="/about/" id="nav-item">
                  {' '}
                  ABOUT{' '}
                </Link>
              </li>
              <li class>
                {' '}
                <Link to="/features/" id="nav-item">
                  {' '}
                  FEATURES{' '}
                </Link>{' '}
              </li>
              <li>
                {' '}
                <Link to="/contribute/" id="nav-item">
                  {' '}
                  CONTRIBUTE{' '}
                </Link>{' '}
              </li>
              <li>
                {' '}
                <Link to="/docs/hysds/hysds-overview/" id="nav-item">
                  {' '}
                  DOCS{' '}
                </Link>{' '}
              </li>
            </ul>
          </MenuLinks>
        </div>

        <li></li>
      </ul>
    </nav>
  )
}
export default Index
