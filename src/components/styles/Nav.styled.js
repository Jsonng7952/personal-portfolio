import styled from "styled-components";

export const NavContainer = styled.header`
  background-color: ${props => props.theme.colorBlue};
  font-family: ${props => props.theme.fontFamily};
  padding: 0.2em 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const NavLogo = styled.div`
  color: ${props => props.theme.colorPrimary};
  font-weight: ${props => props.theme.fontWeight700};
  font-size: 2rem;
  cursor: pointer;
`

export const NavList = styled.ul`
  display: flex;
  list-style: none;
`

export const NavLink = styled.li`
  color: ${props => props.theme.colorPrimary};  
  font-weight: ${props => props.theme.fontWeight400};
  font-size: 1rem;
  margin: 0 1em;
  cursor: pointer;
`