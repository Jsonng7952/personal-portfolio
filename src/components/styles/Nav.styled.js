import styled from "styled-components";

export const NavContainer = styled.header`
  background-color: ${props => props.theme.colorRed};
  font-family: ${props => props.theme.fontFamily};
  padding: 0.2em 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
`
export const NavLogo = styled.div`
  color: ${props => props.theme.colorSecondary};
  font-weight: ${props => props.theme.fontWeight700};
  font-size: 2rem;
  cursor: pointer;
`

export const NavList = styled.ul`
  display: flex;
  list-style: none;

  // When screen gets smaller, use hamburger button with menu.
  @media (max-width: 768px) {
    position: fixed;
    background-color: ${props => props.click ? props.theme.colorPrimary : "none"};
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 100;

    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
`

export const NavLink = styled.li`
  margin: 0 1em;

  a {
    font-size: 1rem;
    color: ${props => props.theme.colorSecondary};
    font-weight: ${props => props.theme.fontWeight400};
    text-decoration: none;
  }

  // Hide text links when screen gets smaller, but if hamburger is clicked show the links.
  @media (max-width: 768px) {
    display: ${props => props.click ? "block" : "none"};

    a {
      font-size: 2rem;
    }
  }
`

export const NavButton = styled.button`
  padding: 0.5em;
  background: transparent;
  border: 0;
  cursor: pointer;
  z-index: 1000;

  // If screen gets big enough, hide the hamburger menu.
  @media (min-width: 768px) {
    display: none;
  }
`
export const NavHamburgerOpen = styled.span`
  width: 2em;
  height: 3px;
  display: block;
  position: relative;
  background-color: ${props => props.theme.colorSecondary};

  // On Click, remove the middle piece of the hamburger.
  transition: ${props => props.click ? "all 0.5s ease-in-out" : "all 0.5s ease-in-out 0.3s"};
  background: ${props => props.click ? "none" : ""};

  &::before,
  &::after {
    content: "";
    background-color: ${props => props.theme.colorSecondary};
    height: 3px;
    position: absolute;
    left: 0;
    right: 0;
    // On Click, split the hamburger (top and bottom piece).
    transition: ${props => props.click ? "all 0.5s ease-in-out" : "all 0.5s ease-in-out 0.3s"};
  }

  &::before {
    width: 2em;
    bottom: 6px;
    // On Click, top piece goes right.
    transform: ${props => props.click ? "translateX(10px)" : "translateX(0px)"};
    background: ${props => props.click ? "none" : ""};
  }

  &::after {
    width: 2em;
    top: 6px;
    // On Click, bottom piece goes left.
    transform: ${props => props.click ? "translateX(-10px)" : "translateX(0px)"};
    background: ${props => props.click ? "none" : ""};    
  }
`
export const NavHamburgerClose = styled.span`
  display: block;
  position: relative;

  &::before,
  &::after {
    content: "";
    background-color: ${props => props.theme.colorSecondary};
    height: 3px;
    border-radius: 1em;
    position: absolute;
    left: 0;
    right: 0;
    // When the nav button is clicked, transition into a X symbol.
    transition: ${props => props.click ? "all 0.5s ease-in-out 0.3s" : "all 0.5s ease-in-out"};
  }

  &::before {
    width: 2em;
    bottom: 6px;
    // On Click, rotate top piece.
    transform: ${props => props.click ? "translateY(6px) rotate(45deg) " : ""};
    background: ${props => props.click ? "" : "none"};
  }

  &::after {
    width: 2em;
    top: 6px;
    // On Click, rotate bottom piece
    transform: ${props => props.click ? "translateY(-9px) rotate(-45deg) " : ""};
    background: ${props => props.click ? "" : "none"};   
  }
`