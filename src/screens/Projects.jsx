import React from 'react'
import ProjectCard from '../components/ProjectCard'
import styled from 'styled-components'

const Projects = ({projects}) => {

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin:0 auto;
  row-gap: 48px;
  margin-top: 5%;
  width: 50%;
`;

const Header = styled.h3`
font-size: 48px;
`;

  return (
    <CardContainer id='projects'>
        <Header>Projects</Header>
        {projects.map(project =>{
            return(
                  <ProjectCard project={project} key={project.title}/>
            )
        })}
    </CardContainer>
  )
}

export default Projects