import React, { useState } from 'react';
import { NavContainer, NavLogo, NavList, NavLink, NavButton, NavHamburgerOpen, NavHamburgerClose } from './styles/Nav.styled';

function Nav() {

  const [click, setClick] = useState(false);

  const displayNav = () => {
    setClick(!click);
  };

  return (
    <NavContainer>
      <NavLogo>JN</NavLogo>
      <NavList click={click} >
        <NavLink click={click} onClick={displayNav}><a a href='#home'>Home</a></NavLink>
        <NavLink click={click} onClick={displayNav}><a a href='#about'>About</a></NavLink>
        <NavLink click={click} onClick={displayNav}><a a href='#projects'>Projects</a></NavLink>
        <NavLink click={click} onClick={displayNav}><a a href='#contact'>Contact</a></NavLink>
      </NavList>
      <NavButton onClick={displayNav}>
        <NavHamburgerOpen click={click} />       
        <NavHamburgerClose click={click} /> 
      </NavButton>
    </NavContainer>
  )
}

export default Nav