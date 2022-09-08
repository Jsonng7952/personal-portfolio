import React from 'react';
import { NavContainer, NavLogo, NavList, NavLink } from './styles/Nav.styled';

function Nav() {
  return (
    <NavContainer>
      <NavLogo>JN</NavLogo>
      <NavList>
        <NavLink><a a href='#home'>Home</a></NavLink>
        <NavLink><a a href='#about'>About</a></NavLink>
        <NavLink><a a href='#projects'>Projects</a></NavLink>
        <NavLink><a a href='#contact'>Contact</a></NavLink>
      </NavList>
    </NavContainer>
  )
}

export default Nav