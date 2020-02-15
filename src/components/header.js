import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import styled from "styled-components"
import menu from "../images/menu.svg"
import cancel from "../images/x.svg"
import terminal from "../images/terminal.svg"
import terminalBlack from "../images/terminal-black.svg"

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin: 16px;
  display: flex;
  justify-content: space-between;
`

const StyledButton = styled.button`
  background: none;
  border: none;

  &:hover {
    cursor: pointer;
  }
`

const Menu = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  background: #fff;
  display: flex;
  flex-direction: column;
`

const MenuItems = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
`

const MenuItem = styled.li`
  list-style: none;
  margin: 24px 0px;
`
const StyledLink = styled(Link)`
  color: #000;
  font-size: 30px;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`

const CancelButtonContainer = styled.div`
  width: 50px;
  height: 50px;
  align-self: flex-end;
  margin: 16px 8px;
`

const Header = props => {
  const [isMenuOpen, toggleMenuOpen] = useState(false)
  console.log(props.leftIconDark)
  return (
    <StyledHeader>
      <div>
        <Link
          to="/"
          style={{
            color: "#fff",
            textDecoration: "none",
            fontSize: "28px",
            fontWeight: "bold",
          }}
        >
          <img
            src={props.leftIconDark ? terminalBlack : terminal}
            alt="Terminal"
          />
        </Link>
      </div>
      <div>
        <StyledButton onClick={() => toggleMenuOpen(!isMenuOpen)}>
          <img src={menu} alt="Menu" />
        </StyledButton>
      </div>

      {isMenuOpen && (
        <Menu>
          <CancelButtonContainer>
            <StyledButton onClick={() => toggleMenuOpen(!isMenuOpen)}>
              <img src={cancel} alt="Cancel" />
            </StyledButton>
          </CancelButtonContainer>
          <nav style={{ display: "flex", justifyContent: "center" }}>
            <MenuItems>
              <MenuItem>
                <StyledLink to="projects">Projects</StyledLink>
              </MenuItem>
              <MenuItem>
                <StyledLink to="about">About</StyledLink>
              </MenuItem>
              <MenuItem>
                <StyledLink to="contact">Contact</StyledLink>
              </MenuItem>
            </MenuItems>
          </nav>
        </Menu>
      )}
    </StyledHeader>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
