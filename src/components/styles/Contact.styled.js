import styled from "styled-components";

export const ContactSection = styled.section`
  max-width: 1000px;
  margin: 0 auto;
  padding: 5em 0;
  text-align: center;

  @media (max-width: 1200px) {
    padding: 3em 1em;
  }
`
export const ContactTitle = styled.h1`
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
export const ContactBody = styled.div``

export const ContactText = styled.p`
  color: ${props => props.theme.colorBlue};
  font-family: ${props => props.theme.fontFamily};  
  font-size: clamp(1rem, 2vw, 1.2rem);
`