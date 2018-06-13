import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div
    style={{
      textAlign: 'center',
    }}
  >
    <h1>Some examples of jupyter notebooks</h1>
    <p>
      The notebooks are displayed using react component from the
      <a href="https://github.com/nteract/nteract/tree/master/packages">
        <code>@nteract/packages</code>
      </a>
    </p>
    <ul>
      <li>
        <Link to="/minimal-nodejs-notebook/">minimal - nodejs - notebook</Link>
      </li>
      <li>
        <Link to="/XKCD_plots/"> XKCD_plots by by Jake Vanderplas </Link>
      </li>
      <li>
        <Link to="/Three-Body Problem/">
          Three - Body Problem by Paulo Marques
        </Link>
      </li>
    </ul>
  </div>
)

export default IndexPage
