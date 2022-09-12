import React, { useEffect, useState } from "react";
import { NavContainer, NavLogo, NavList, NavLink, NavButton, NavHamburgerOpen, NavHamburgerClose } from './styles/Nav.styled';

function Nav() {

  const [windowWidth, setWindowWidth] = useState(getWindowWidth());
  
  function getWindowWidth() {
    const { innerWidth: width } = window;
    return { width };
  }

  useEffect(() => {
    function handleResize() {
      setWindowWidth(getWindowWidth());
    }

    // Everytime window resizes, get the width of the current window.
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { width } = windowWidth;

  const [click, setClick] = useState(false);

  // Stops the nav links from opening the menu when the screen size is greater than 768px.
  const displayNav = () => {
    if(width <= 768)
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