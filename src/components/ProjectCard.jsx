/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom'
import SkillTags from './SkillTags';

const ProjectCard = ({project}) => {
  const navigate = useNavigate();

  const Container = styled.div`
  display: grid;
  grid-template-columns: 40% 1fr;
  justify-content: space-between;
  gap: 48px;

  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
 }

  > img{

    align-self:center;
    height: 380px;
    height:auto;
    max-width:100%;
    max-height:100%;
    border-radius: 8px;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin-top: 10px;
  margin-bottom: 5px;
`;

const SkillsContainer = styled.div`
  margin-top: 10px;
  display:flex;
  gap:8px;
  width: 85%;
  flex-wrap: wrap;
`;

const Header = styled.h4`
  font-size: 3.5rem;
  letter-spacing: 0px;
  font-weight: 500;
  margin: 0;
`;
const Text = styled.p`
    font-weight:400;
    letter-spacing: 0px;
    margin: 0;
    text-align: left;
    padding-block: 16px;
`;

const Button = styled.button`
  align-items: center;
  background-clip: padding-box;
  background-color: steelblue;
  border: 1px solid transparent;
  border-radius: .25rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-flex;
  font-size: 20px;
  font-weight: 600;
  height: 70px;
  width: 200px;
  justify-content: center;
  line-height: 1.25;
  margin: 0;
  position: relative;
  text-decoration: none;
  transition: all 250ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;


  &:hover,
  focus {
  background-color: #fb8332;
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  }

  &:hover {
  transform: translateY(-1px);
  }

  &:active {
    background-color: #c85000;
    box-shadow: rgba(0, 0, 0, .06) 0 2px 4px;
    transform: translateY(0);
  }
`
  return (
  <Container>
    <TextContainer>
        <Header>{project.title}</Header>
        <SkillsContainer>
          <SkillTags skills={project.skills}/>
        </SkillsContainer>
        <Text>{project.description}</Text>
        <Button onClick = {() => navigate(`/${project.title}`, { state: project })}>View Project</Button>
    </TextContainer>
    <img src={project.image}/>
  </Container>
  )
}

export default ProjectCard