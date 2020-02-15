import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 50%;
  background: #0d2f81;
  color: #fff;
`

const TextContainer = styled.div`
  margin: 16px;
  margin-top: 200px;
`

const MoreLink = styled(Link)`
  color: #fff;
  text-decoration: underline;
`

const Navbar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin: 16px;
  display: flex;
  justify-content: space-between;
`

const IndexPage = () => (
  <Layout>
    <Container>
      <TextContainer>
        <h1>Hey, I'm Brayden!</h1>
        <h2>I'm a graduate software engineer from Melbourne, Australia.</h2>
        <h2 style={{ paddingTop: "16px" }}>
          <MoreLink to="/">More about me.</MoreLink>
        </h2>
      </TextContainer>
    </Container>
  </Layout>
)

export default IndexPage
