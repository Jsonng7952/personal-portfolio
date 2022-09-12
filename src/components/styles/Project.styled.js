import styled from "styled-components";
import nycImagePortrait from '../../assets/images/nyc-cyberpunk-portrait.png';

export const ProjectSection = styled.section`
  background: 
    linear-gradient(
      rgba(255, 255, 255, 0.8), 
      rgba(255, 255, 255, 0.5)
    ),
    url(${nycImagePortrait});
  background-size: cover;
  background-position: center center;  
  font-family: ${props => props.theme.fontFamily};  
  padding: 5em 0;

  @media (max-width: 768px) {
    padding: 3em 0;
  }
`
export const ProjectSectionTitle = styled.h1`
  text-shadow: 2px 2px 4px ${props => props.theme.colorBlue};
  font-size: clamp(2rem, 5vw, 4rem);
  text-align: center;
`

export const ProjectContainer = styled.div`
  max-width: 1500px;
  margin: 0 auto;
  padding: 1em;
  display: grid;
  grid-template-columns: repeat(2, minmax(300px, 1fr));
  grid-gap: 1em;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(300px, 1fr));
  }
`
export const ProjectCard = styled.div`
  background-color: ${props => props.theme.colorBlue};
  border: 5px solid ${props => props.theme.colorPrimary};
  padding: 0.5em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export const ProjectImage = styled.img`
  max-width: 100%;
`

export const ProjectContent = styled.div`

`

export const ProjectTextContainer = styled.div`
  margin: 0.5em 2em;
`

export const ProjectTitle = styled.h2`
  font-size: clamp(1.5rem, 2vw, 2rem);
`

export const ProjectDescription = styled.p`
  font-size: clamp(1rem, 2vw, 1.2rem);
`

export const ProjectButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
`

export const ProjectButtons = styled.button`
  background-color: ${props => props.theme.colorRed};
  color: ${props => props.theme.colorSecondary};
  font-family: ${props => props.theme.fontFamily};  
  font-size: clamp(1rem, 2vw, 1.5rem);
  padding: 0.5rem;
  border: none;
  cursor: pointer;
`
