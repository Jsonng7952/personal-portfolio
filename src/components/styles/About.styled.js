import styled from "styled-components";

export const AboutSection = styled.section`
  max-width: 1000px;
  margin: 0 auto;
  padding: 5em 0;
  text-align: center;

  @media (max-width: 768px) {
    padding: 3em 0;
  }
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
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`

export const TechIcon = styled.div`
  flex: 1;
  padding: 1em;
  margin: 0.5em;
  border: 5px solid ${props => props.theme.colorBlue};

  svg {
    width: 100%;
    height: auto;
  }
`

export const TechName = styled.p`
  color: ${props => props.theme.colorBlue};
  font-size: 1rem;
  font-weight: ${props => props.theme.fontWeight700};
`