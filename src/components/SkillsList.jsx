import {SiHtml5,SiCss3, SiJavascript, SiReact, SiGit,SiGithub, SiJquery, SiTypescript, SiBootstrap, SiAdobe, SiMongodb, SiNodedotjs, SiPython, } from 'react-icons/si'
import d3js from '../assets/d3-js.svg'
import { IconContext } from "react-icons";
import styled from 'styled-components';

const SkillsList = () => {

    const SkillsContainer = styled.div`
`;
  return (
    <SkillsContainer id='skills'>
    <h3 style={{'font-size':'48px'}}>Skills & Tools</h3>
    <IconContext.Provider value={{ size: "65px"}}>
    <div className='skills-container'>
        <div className='skill-item'>
            <SiHtml5/>
            <h5>HTML5</h5>
        </div>
        <div className='skill-item'>
            <SiCss3/>
            <h5>CSS3</h5>
        </div>
        <div className='skill-item'>
            <SiJavascript/>
            <h5>Javascript</h5>
        </div>
        <div className='skill-item'>
            <SiReact/>
            <h5>React</h5>
        </div>
        <div className='skill-item'>
            <SiTypescript/>
            <h5>Typescript</h5>
        </div>
        <div className='skill-item'>
            <SiJquery/>
            <h5>jQuery</h5>
        </div>
        <div className='skill-item'>
            <img src={d3js}/>
            <h5>D3.js</h5>
        </div>
        <div className='skill-item'>
            <SiGit/>
            <h5>Git</h5>
        </div>
        <div className='skill-item'>
            <SiGithub/>
            <h5>Github</h5>
        </div>
        <div className='skill-item'>
            <SiBootstrap/>
            <h5>Bootstrap</h5>
        </div>
        <div className='skill-item'>
            <SiNodedotjs/>
            <h5>Node.js</h5>
        </div>
        <div className='skill-item'>
            <SiMongodb/>
            <h5>MongoDB</h5>
        </div>
        <div className='skill-item'>
            <SiPython/>
            <h5>Python</h5>
        </div>
        <div className='skill-item'>
            <SiAdobe/>
            <h5>Adobe Suite</h5>
        </div>
       </div>
       </IconContext.Provider>
    </SkillsContainer>
  )
}

export default SkillsList