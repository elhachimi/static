import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import 'normalize.css'

import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import './index.css'

const Layout = ({ children, data }) => (
  <div className="container" style={{minHeight:'100vh'}}>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Navigation siteTitle={data.site.siteMetadata.title} />
    <div className="white col-12 overflow-hidden">{children()}</div>
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
