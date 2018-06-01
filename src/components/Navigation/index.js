import React from 'react'
import Link from 'gatsby-link'
import styles from './navigation.module.css'
import Logo from '../../assets/images/Logo.svg'

const Header = ({ siteTitle }) => (
  <header className={`${styles.menu} col-12 px3`}>
    <nav className='flex justify-between items-baseline'>
      <ul className='py3'>
        <li>
          <Link to="/">
            <img src={Logo} alt={siteTitle} />
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
      <ul className='py3'>
        <li>
          <Link to="" className="text-blue strong">
            Login
          </Link>
        </li>
        <li>
          <Link className="text-white strong green green-shadow rounded px2 py1" to="">
            Sign up
          </Link>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header
