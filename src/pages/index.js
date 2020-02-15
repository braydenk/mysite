import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import Layout from "../components/layout"

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

const SubtitleText = styled.h2`
  font-size: 1.75em;
  font-weight: 400;
`

const IndexPage = () => (
  <Layout>
    <Container>
      <TextContainer>
        <h1 style={{ fontSize: "3em", fontWeight: "400" }}>
          Hey, I'm Brayden!
        </h1>
        <SubtitleText>
          I'm a graduate software engineer from Melbourne, Australia.
        </SubtitleText>
        <SubtitleText style={{ paddingTop: "16px" }}>
          <MoreLink to="/about">More about me.</MoreLink>
        </SubtitleText>
      </TextContainer>
    </Container>
  </Layout>
)

export default IndexPage
