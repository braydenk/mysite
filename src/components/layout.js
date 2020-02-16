import React from "react"
import Header from "./header"

const Layout = ({ leftIconBlack, children }) => (
  <div>
    <Header leftIconDark={leftIconBlack} />
    <main>{children}</main>
  </div>
)

export default Layout
