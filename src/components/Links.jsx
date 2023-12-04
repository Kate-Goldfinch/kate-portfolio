import {SiGithub, SiLinkedin } from 'react-icons/si'
import {RxEnvelopeClosed} from 'react-icons/rx'
import { IconContext } from "react-icons";
import styled from 'styled-components';
const Links = () => {

    const LinkContainer = styled.li`
  font-weight: 500;
  font-size: 1.5rem;
  box-sizing: border-box;
  display: flex;
  gap: 1rem;
`;

  return (
    <LinkContainer>
<IconContext.Provider value={{ size: "48px", color: "white"}}>
    <a href="https://github.com/Kate-Goldfinch" rel='noreferrer' target="_blank"><SiGithub/></a>
    <a href="https://www.linkedin.com/in/kate-goldfinch/" rel='noreferrer' target="_blank"><SiLinkedin/></a>
    <a href="mailto:kate.a.goldfinch@gmail.com"><RxEnvelopeClosed/></a>
</IconContext.Provider>

    </LinkContainer>
  )
}

export default Links