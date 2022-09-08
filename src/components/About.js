import React from 'react'
import { AboutSection, AboutTitle, AboutBody, AboutText, AboutSkills, TechIcon, TechName } from './styles/About.styled';
import { JavaScriptLogo, HTMLLogo, CSSLogo, ReactLogo, NodeJSLogo, GITLogo } from '../assets/Svg';

function About() {
  return (
    <AboutSection>
      <AboutTitle>About Me</AboutTitle>
      <AboutBody>
        <AboutText>I'm a front-end developer located in New York. I love to create simple yet beautiful websites with great user experience. I work with React, JavaScript (ES6+), CSS and HTML to deliver quality front-end products.</AboutText>
        <AboutText>I'm plan on working with NodeJS and EXPRESS for the back-end.</AboutText>
        <AboutSkills>
          <TechIcon>
            <JavaScriptLogo />             
            <TechName>JAVASCRIPT</TechName>     
          </TechIcon>
          <TechIcon>
            <HTMLLogo />             
            <TechName>HTML</TechName>     
          </TechIcon>
          <TechIcon>
            <CSSLogo />             
            <TechName>CSS</TechName>     
          </TechIcon>
          <TechIcon>
            <ReactLogo />             
            <TechName>REACT</TechName>     
          </TechIcon>
          <TechIcon>
            <NodeJSLogo />             
            <TechName>NODE JS</TechName>     
          </TechIcon>
          <TechIcon>
            <GITLogo />             
            <TechName>GIT</TechName>     
          </TechIcon>      
        </AboutSkills>
      </AboutBody>
    </AboutSection>
  )
}

export default About