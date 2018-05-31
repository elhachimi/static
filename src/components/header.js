import React from 'react'
import Link from 'gatsby-link'
import styles from './header.css';

const Header = ({ siteTitle }) => (
  <header className="flex px3 line-height-3 justify-between items-center">
   <Link to="/" className="py3">{siteTitle}</Link>
    <nav className='menu flex py3'>
      <ul className='items-baseline'>
        <li><a href="">Home</a></li>
        <li><a href="">How it Works</a></li>
        <li><a href="">Your project scope</a></li>
        <li><a href="">Properties</a></li>
        <li><a href="" className="button">Login</a></li>
      </ul>
    </nav>
  </header>
)

export default Header
