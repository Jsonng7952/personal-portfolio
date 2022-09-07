import styled from "styled-components";

export const AboutSection = styled.section`
  max-width: 1000px;
  margin: 0 auto;
  padding: 1em;
  text-align: center;
`
export const AboutTitle = styled.h1`
  color: ${props => props.theme.colorBlue};
  font-family: ${props => props.theme.fontFamily};  
  font-size: 4em;
  position: relative;

  &::after {
    content: "";
    display: block;
    width: 5em;
    height: 2px;
    margin: 0.5em auto 0.3em;
    background: ${props => props.theme.colorBlue};
    opacity: 0.5;
  }

`
export const AboutBody = styled.div`

`
export const AboutText = styled.p`
  color: ${props => props.theme.colorBlue};
  font-family: ${props => props.theme.fontFamily};  
  font-size: 1.2em;
`
export const AboutSkills = styled.div`
  font-family: ${props => props.theme.fontFamily};  
`