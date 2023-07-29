import React from "react";
import styled from 'styled-components';
import SkillsList from "../components/SkillsList";

const Bio = () => {

    const BioContainer = styled.div`
    padding-top: 30px;
    margin:0 auto;
    width: 60%
  `;

  const Text = styled.p`
  font-size:1.5rem;
  `
  return (
    <BioContainer id='about-me'>
      <Text>
        Hi, my name is Kate - I'm a Sydney based Front End Developer. I am
        passionate about crafting beautiful, engaging and accessible user
        interfaces that enhance users' experience interacting with the web.
      </Text>

      <Text>
        I have a Bachelor's degree in Information Technology from Macquarie University, majoring in
        Web and Mobile Application Development. My experience includes developing
        responsive and accessible websites using React, Typescript,
        CSS, and JavaScript.
      </Text>
      <SkillsList/>
    </BioContainer>
  );
};

export default Bio;
