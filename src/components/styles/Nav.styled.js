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
`

export const NavLink = styled.li`
  margin: 0 1em;

  a {
    font-size: 1rem;
    color: ${props => props.theme.colorSecondary};
    font-weight: ${props => props.theme.fontWeight400};
    text-decoration: none;
  }

  // Hide text links when screen gets smaller
  @media (max-width: 768px) {
    display: none;
  }
`