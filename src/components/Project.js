import React from 'react'
import { ProjectSection, ProjectContainer, ProjectSectionTitle, ProjectCard, ProjectImage, ProjectContent, ProjectTextContainer, ProjectTitle, ProjectDescription, ProjectButtonContainer, ProjectButtons } from './styles/Project.styled';
import StockProjectImage from '../assets/images/stock-project.png';

function Project() {
  return (
    <ProjectSection id='projects'>
      <ProjectSectionTitle>Projects</ProjectSectionTitle>
      <ProjectContainer>
        {/*Project 1*/}
        <ProjectCard>
          <ProjectContent>
            <ProjectImage src={StockProjectImage} alt='stock project image'/>
            <ProjectTextContainer>
              <ProjectTitle>Lorem Ipsum</ProjectTitle>
              <ProjectDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at lorem vitae neque faucibus feugiat. Donec aliquet, diam at sollicitudin accumsan, ex ex vehicula diam, sodales vestibulum justo eros eget nisi. Aliquam laoreet venenatis aliquet. Phasellus est quam, condimentum et ultricies tincidunt, malesuada nec augue. Cras nisl felis, hendrerit non auctor in, facilisis in leo. Aliquam ac tortor sed libero convallis consequat. Sed sed leo semper elit rutrum placerat convallis ut nisi.</ProjectDescription>           
            </ProjectTextContainer>
          </ProjectContent>
          <ProjectButtonContainer>
            <ProjectButtons>Live Demo</ProjectButtons> 
            <ProjectButtons>Repository</ProjectButtons>            
          </ProjectButtonContainer>
        </ProjectCard>

        {/*Project 2*/}
        <ProjectCard>
          <ProjectContent>
            <ProjectImage src={StockProjectImage} alt='stock project image'/>
            <ProjectTextContainer>
              <ProjectTitle>Lorem Ipsum</ProjectTitle>
              <ProjectDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at lorem vitae neque faucibus feugiat. Donec aliquet, diam at sollicitudin accumsan, ex ex vehicula diam, sodales vestibulum justo eros eget nisi.</ProjectDescription>           
            </ProjectTextContainer>
          </ProjectContent>
          <ProjectButtonContainer>
            <ProjectButtons>Live Demo</ProjectButtons> 
            <ProjectButtons>Repository</ProjectButtons>            
          </ProjectButtonContainer>
        </ProjectCard>

        {/*Project 3*/}
        <ProjectCard>
          <ProjectContent>
            <ProjectImage src={StockProjectImage} alt='stock project image'/>
            <ProjectTextContainer>
              <ProjectTitle>Lorem Ipsum</ProjectTitle>
              <ProjectDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at lorem vitae neque faucibus feugiat. Donec aliquet, diam at sollicitudin accumsan, ex ex vehicula diam, sodales vestibulum justo eros eget nisi.</ProjectDescription>           
            </ProjectTextContainer>
          </ProjectContent>
          <ProjectButtonContainer>
            <ProjectButtons>Live Demo</ProjectButtons> 
            <ProjectButtons>Repository</ProjectButtons>            
          </ProjectButtonContainer>
        </ProjectCard>       

        {/*Project 4*/}
        <ProjectCard>
          <ProjectContent>
            <ProjectImage src={StockProjectImage} alt='stock project image'/>
            <ProjectTextContainer>
              <ProjectTitle>Lorem Ipsum</ProjectTitle>
              <ProjectDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at lorem vitae neque faucibus feugiat. Donec aliquet, diam at sollicitudin accumsan, ex ex vehicula diam, sodales vestibulum justo eros eget nisi. Aliquam laoreet venenatis aliquet. Phasellus est quam, condimentum et ultricies tincidunt, malesuada nec augue. Cras nisl felis, hendrerit non auctor in, facilisis in leo. Aliquam ac tortor sed libero convallis consequat. Sed sed leo semper elit rutrum placerat convallis ut nisi.</ProjectDescription>           
            </ProjectTextContainer>
          </ProjectContent>
          <ProjectButtonContainer>
            <ProjectButtons>Live Demo</ProjectButtons> 
            <ProjectButtons>Repository</ProjectButtons>            
          </ProjectButtonContainer>
        </ProjectCard>

      </ProjectContainer>
    </ProjectSection>
  )
}

export default Project