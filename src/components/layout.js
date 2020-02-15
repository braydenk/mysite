import React from "react"
import styled from "styled-components"
import Header from "./header"

const PageContainer = styled.div``
const Main = styled.main``
const Layout = ({ leftIconBlack, children }) => (
  <PageContainer>
    <Header leftIconDark={leftIconBlack} />
    <Main>{children}</Main>
  </PageContainer>
)

export default Layout
