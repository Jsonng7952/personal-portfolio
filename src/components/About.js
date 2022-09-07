import React from 'react'
import { AboutSection, AboutTitle, AboutBody, AboutText, AboutSkills } from './styles/About.styled';

function About() {
  return (
    <AboutSection>
      <AboutTitle>About Me</AboutTitle>
      <AboutBody>
        <AboutText>I'm a front-end developer located in New York. I love to create simple yet beautiful websites with great user experience. I work with React, JavaScript (ES6+), CSS and HTML to deliver quality front-end products.</AboutText>
        <AboutText>I'm plan on working with NodeJS and EXPRESS for the back-end.</AboutText>
        <AboutSkills>Skills Here</AboutSkills>
      </AboutBody>
    </AboutSection>
  )
}

export default About