import React from "react"
import styled from "styled-components"
import Header from "./header"

const PageContainer = styled.div``

const Layout = ({ children }) => (
  <PageContainer>
    <Header />
    {children}
  </PageContainer>
)

export default Layout
