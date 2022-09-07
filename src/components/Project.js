import React from 'react'
import { ProjectSection, ProjectContainer, ProjectSectionTitle, ProjectCard, ProjectImage, ProjectContent, ProjectTitle, ProjectDescription, ProjectButtons } from './styles/Project.styled';
import StockProjectImage from '../assets/images/stock-project.png';

function Project() {
  return (
    <ProjectSection>
      <ProjectSectionTitle>Projects</ProjectSectionTitle>
      <ProjectContainer>
        {/*Project 1*/}
        <ProjectCard>
          <ProjectImage src={StockProjectImage} alt='stock project image'/>
          <ProjectContent>
            <ProjectTitle>Lorem Ipsum</ProjectTitle>
            <ProjectDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at lorem vitae neque faucibus feugiat. Donec aliquet, diam at sollicitudin accumsan, ex ex vehicula diam, sodales vestibulum justo eros eget nisi. Aliquam laoreet venenatis aliquet. Phasellus est quam, condimentum et ultricies tincidunt, malesuada nec augue. Cras nisl felis, hendrerit non auctor in, facilisis in leo. Aliquam ac tortor sed libero convallis consequat. Sed sed leo semper elit rutrum placerat convallis ut nisi.</ProjectDescription>           
          </ProjectContent>
          <ProjectButtons>Live Demo</ProjectButtons> 
          <ProjectButtons>Repository</ProjectButtons>
        </ProjectCard>

        {/*Project 2*/}
        <ProjectCard>
          <ProjectImage src={StockProjectImage} alt='stock project image'/>
          <ProjectContent>
            <ProjectTitle>Lorem Ipsum</ProjectTitle>
            <ProjectDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at lorem vitae neque faucibus feugiat. Donec aliquet, diam at sollicitudin accumsan, ex ex vehicula diam, sodales vestibulum justo eros eget nisi.</ProjectDescription>           
          </ProjectContent>
          <ProjectButtons>Live Demo</ProjectButtons> 
          <ProjectButtons>Repository</ProjectButtons>
        </ProjectCard>

        {/*Project 3*/}
        <ProjectCard>
          <ProjectImage src={StockProjectImage} alt='stock project image'/>
          <ProjectContent>
            <ProjectTitle>Lorem Ipsum</ProjectTitle>
            <ProjectDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at lorem vitae neque faucibus feugiat. Donec aliquet, diam at sollicitudin accumsan, ex ex vehicula diam, sodales vestibulum justo eros eget nisi.</ProjectDescription>           
          </ProjectContent>
          <ProjectButtons>Live Demo</ProjectButtons> 
          <ProjectButtons>Repository</ProjectButtons>
        </ProjectCard>       

        {/*Project 4*/}
        <ProjectCard>
          <ProjectImage src={StockProjectImage} alt='stock project image'/>
          <ProjectContent>
            <ProjectTitle>Lorem Ipsum</ProjectTitle>
            <ProjectDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at lorem vitae neque faucibus feugiat. Donec aliquet, diam at sollicitudin accumsan, ex ex vehicula diam, sodales vestibulum justo eros eget nisi.</ProjectDescription>           
          </ProjectContent>
          <ProjectButtons>Live Demo</ProjectButtons> 
          <ProjectButtons>Repository</ProjectButtons>
        </ProjectCard>

      </ProjectContainer>
    </ProjectSection>
  )
}

export default Project