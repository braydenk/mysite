import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
const Container = styled.div`
  margin-top: 100px;
  width: 75vh;
  margin: 100px auto;
`
const AboutPage = () => (
  <Layout leftIconBlack={true}>
    <SEO title="About page" />
    <Container>
      <h1>
        My name is Brayden Killeen, I'm a graduate software engineer from
        Melbourne, Australia
      </h1>
    </Container>
  </Layout>
)

export default AboutPage
