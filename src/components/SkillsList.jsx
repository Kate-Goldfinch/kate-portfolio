import {SiHtml5,SiCss3, SiJavascript, SiReact, SiGit,SiGithub, SiJquery, SiTypescript, SiBootstrap, SiAdobe, SiMongodb, SiNodedotjs, SiPython, } from 'react-icons/si'
import d3js from '../assets/d3-js.svg'
import { IconContext } from "react-icons";
import styled from 'styled-components';

const SkillsList = () => {

    const Container = styled.div`
`;
    const SkillsContainer = styled.div`
    display:flex;
    flex-wrap: wrap;
    gap: 30px;
    width: max(300px, 60%);
`;

const SkillsItem = styled.div`
display:flex;
flex-wrap: wrap;
flex-direction: column;

> img{
    height: 65px;
}
`;
const SkillsName = styled.h5`
text-align: center;
`;

  return (
    <Container>
    <h3 style={{'font-size':'48px'}}>Skills & Tools</h3>
    <IconContext.Provider value={{ size: "65px"}}>
    <SkillsContainer>
        <SkillsItem>
            <SiHtml5/>
            <SkillsName>HTML5</SkillsName>
        </SkillsItem>
        <SkillsItem>
            <SiCss3/>
            <SkillsName>CSS3</SkillsName>
        </SkillsItem>
        <SkillsItem>
            <SiJavascript/>
            <SkillsName>Javascript</SkillsName>
        </SkillsItem>
        <SkillsItem>
            <SiReact/>
            <SkillsName>React</SkillsName>
        </SkillsItem>
        <SkillsItem>
            <SiTypescript/>
            <SkillsName>Typescript</SkillsName>
        </SkillsItem>
        <SkillsItem>
            <SiJquery/>
            <SkillsName>jQuery</SkillsName>
        </SkillsItem>
        <SkillsItem>
            <img src={d3js}/>
            <SkillsName>D3.js</SkillsName>
        </SkillsItem>
        <SkillsItem>
            <SiGit/>
            <SkillsName>Git</SkillsName>
        </SkillsItem>
        <SkillsItem>
            <SiGithub/>
            <SkillsName>Github</SkillsName>
        </SkillsItem>
        <SkillsItem>
            <SiBootstrap/>
            <SkillsName>Bootstrap</SkillsName>
        </SkillsItem>
        <SkillsItem>
            <SiNodedotjs/>
            <SkillsName>Node.js</SkillsName>
        </SkillsItem>
        <SkillsItem>
            <SiMongodb/>
            <SkillsName>MongoDB</SkillsName>
        </SkillsItem>
        <SkillsItem>
            <SiPython/>
            <SkillsName>Python</SkillsName>
        </SkillsItem>
        <SkillsItem>
            <SiAdobe/>
            <SkillsName>Adobe Suite</SkillsName>
        </SkillsItem>
       </SkillsContainer>
       </IconContext.Provider>
    </Container>
  )
}

export default SkillsList