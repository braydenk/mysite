import React from "react"
import styled from "styled-components"
import { DisplayH1Text } from "../components/typography"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ProjectsPage = () => (
  <Layout>
    <SEO title="Projects page" />
    <Container>
      <div
        style={{
          background: "#ffafa2",
          width: "100%",
          height: "300px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <DisplayH1Text>Projects</DisplayH1Text>
      </div>

      <div style={{ marginTop: "32px", width: "100%", marginLeft: "30em" }}>
        <div>
          <h3 style={{ marginBottom: "0" }}>
            <span role="img" aria-label="emoji">
              &#9899;
            </span>
            Project Title
          </h3>
          <p style={{ marginTop: "12px" }}>This is a blurb for the project.</p>
        </div>
        <div>
          <h3 style={{ marginBottom: "0" }}>
            <span role="img" aria-label="emoji">
              &#9899;
            </span>
            Project Title
          </h3>
          <p style={{ marginTop: "12px" }}>This is a blurb for the project.</p>
        </div>
        <div>
          <h3 style={{ marginBottom: "0" }}>
            <span role="img" aria-label="emoji">
              &#9899;
            </span>
            Project Title
          </h3>
          <p style={{ marginTop: "12px" }}>This is a blurb for the project.</p>
        </div>
        <div>
          <h3 style={{ marginBottom: "0" }}>
            <span role="img" aria-label="emoji">
              &#9899;
            </span>
            Project Title
          </h3>
          <p style={{ marginTop: "12px" }}>This is a blurb for the project.</p>
        </div>
        <div>
          <h3 style={{ marginBottom: "0" }}>
            <span role="img" aria-label="emoji">
              &#9899;
            </span>
            Project Title
          </h3>
          <p style={{ marginTop: "12px" }}>This is a blurb for the project.</p>
        </div>
        <div>
          <h3 style={{ marginBottom: "0" }}>
            <span role="img" aria-label="emoji">
              &#9899;
            </span>
            Project Title
          </h3>
          <p style={{ marginTop: "12px" }}>This is a blurb for the project.</p>
        </div>
        <div>
          <h3 style={{ marginBottom: "0" }}>
            <span role="img" aria-label="emoji">
              &#9899;
            </span>
            Project Title
          </h3>
          <p style={{ marginTop: "12px" }}>This is a blurb for the project.</p>
        </div>
      </div>
    </Container>
  </Layout>
)

export default ProjectsPage
