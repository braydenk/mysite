import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"

const Container = styled.div`
  display: flex;
`

const LeftContainer = styled.div`
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
const DisplayH1Text = styled.h1`
  font-size: 2.625em;
  line-height: 44px;
  font-weight: 500;
`
const Circle = styled.div`
  background: #29bc80;
  height: 100px;
  width: 100px;
  border-radius: 50%;
`

const Triangle = styled.div`
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-bottom: 100px solid #ffe7aa;
`

const Square = styled.div`
  background: #b4d0e7;
  height: 100px;
  width: 100px;
`
const IndexPage = () => (
  <Layout>
    <SEO title="home page" />
    <Container>
      <LeftContainer>
        <TextContainer>
          <DisplayH1Text>Hey, I'm Brayden!</DisplayH1Text>
          <SubtitleText>
            I'm a graduate software engineer from Melbourne, Australia.
          </SubtitleText>
          <SubtitleText style={{ paddingTop: "16px" }}>
            <MoreLink to="/about">More about me.</MoreLink>
          </SubtitleText>
        </TextContainer>
      </LeftContainer>
      <div
        style={{
          display: "flex",
          width: "50%",
          alignItems: "center",
          justifyContent: "center",
          justifyItems: "center",
        }}
      >
        <Circle></Circle>
        <Square></Square>
        <Triangle></Triangle>
      </div>
    </Container>
  </Layout>
)

export default IndexPage
