import React from 'react'
import styled from 'styled-components';

const SkillTags = ({skills}) => {

const Tag = styled.p`
  background-color: steelblue;
  color: white;
  padding: 8px;
  font-weight: 500;
  margin-block:0px;
`;
  return (
    <>
    {console.log(skills)}
    {skills.map((skill) =>{
        return <Tag key={skill}>{skill}</Tag>
        
    })}
    </>
  )
}

export default SkillTags