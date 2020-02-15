import React from "react"
import styled from "styled-components"
import Header from "./header"

const PageContainer = styled.div``
const Main = styled.main`
  /* margin-top: 60px; */
`
const Layout = ({ children }) => (
  <PageContainer>
    <Header />
    <Main>{children}</Main>
  </PageContainer>
)

export default Layout
