import styled from "styled-components";

export const ProjectSection = styled.section`
  background-color: ${props => props.theme.colorYellow};
  font-family: ${props => props.theme.fontFamily};  
  padding: 5em 0;

  @media (max-width: 768px) {
    padding: 3em 0;
  }
`
export const ProjectSectionTitle = styled.h1`
  font-size: 4em;
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
`

export const ProjectImage = styled.img`
  max-width: 100%;
`

export const ProjectContent = styled.div`
  margin: 0.5em 2em;
`

export const ProjectTitle = styled.h2`
  font-size: 2em;
`
export const ProjectDescription = styled.p``

export const ProjectButtons = styled.button``
