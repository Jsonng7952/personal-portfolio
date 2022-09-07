import React from 'react';
import { NavContainer, NavLogo, NavList, NavLink } from './styles/Nav.styled';

function Nav() {
  return (
    <NavContainer>
      <NavLogo>JN</NavLogo>
      <NavList>
        <NavLink>Home</NavLink>
        <NavLink>About</NavLink>
        <NavLink>Projects</NavLink>
        <NavLink>Contact</NavLink>
      </NavList>
    </NavContainer>
  )
}

export default Nav