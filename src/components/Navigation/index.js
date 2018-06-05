import React from 'react'
import Link from 'gatsby-link'
import styles from './navigation.module.css'
import Logo from '../../assets/images/Logo'

const Header = ({ siteTitle }) => (
  <header className={`${styles.menu} col-12 px4 xs-px3`}>
    <nav className="flex justify-between items-baseline">
      <ul className="py3">
        <li>
          <Link to="/">
            <Logo />
          </Link>
        </li>
        <li>
          <Link to="">Explore</Link>
        </li>
        <li>
          <Link to="">Invest</Link>
        </li>
        <li>
          <Link to="">Your project scope</Link>
        </li>
        <li>
          <Link to="">Learn</Link>
        </li>
      </ul>
      <ul className="py3">
        <li className="xs-hide">
          <Link to="" className="text-blue strong">
            Login
          </Link>
        </li>
        <li>
          <Link
            className="text-white strong green green-shadow rounded px2 py1 xs-px1"
            to=""
          >
            Sign up
          </Link>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header
