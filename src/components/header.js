import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const Header = ({ siteTitle }) => (
  <header>
    <div>
      <h2>
        <Link to="/" style={{ color: "#fff" }}>
          BK.
        </Link>
      </h2>
      <h2>
        <Link to="/" style={{ color: "#000" }}>
          Menu.
        </Link>
      </h2>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
