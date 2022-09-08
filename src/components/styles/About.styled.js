import styled from "styled-components";

export const AboutSection = styled.section`
  max-width: 1000px;
  margin: 0 auto;
  padding: 5em 0;
  text-align: center;

  @media (max-width: 768px) {
    padding: 3em 1em;
  }
`
export const AboutTitle = styled.h1`
  color: ${props => props.theme.colorBlue};
  font-family: ${props => props.theme.fontFamily};  
  font-size: clamp(2rem, 5vw, 4rem);
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
  font-size: clamp(1rem, 2vw, 1.2rem);
`
export const AboutSkills = styled.div`
  font-family: ${props => props.theme.fontFamily};  
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 1em;

  border: 5px solid ${props => props.theme.colorBlue};
`

export const TechIcon = styled.div`
  padding: 0.8em;
  margin: 0.5em;

  svg {
    width: 100%;
    height: auto;
  }
`

export const TechName = styled.p`
  color: ${props => props.theme.colorBlue};
  font-size: clamp(0.7rem, 2vw, 1rem);
  font-weight: ${props => props.theme.fontWeight700};
`