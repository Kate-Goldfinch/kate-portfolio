import React, {useState} from 'react'
import styled from 'styled-components';
import hamburger from '../assets/icon-hamburger.svg'


const NavBar = () => {

  const MenuButton = styled.button`
  position: absolute;
  z-index: 9999;
  background: url(${hamburger});
  background-repeat: no-repeat;
  width: 2rem;
  aspect-ratio:1;
  top: 2rem;
  right: 2rem;
  border: 0;
  cursor: pointer;
`;

 const StyledNavbarContainer = styled.nav`
    user-select: none;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    position:sticky;
    top: 0px;
    z-index: 999;
`;

const NavbarBody = styled.ul`
  font-weight: 500;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-end;
  gap: 2rem;
  height: 56px;
  width: 80%;
  margin: 0;
  padding-right: 5rem;
  list-style: none;
  background: hsl(0 0% 100% / 0.1);
  backdrop-filter: blur(1em);

  @media (max-width: 35em){
    position:fixed;
    height: 99vh;
    inset: 0 0 0 20%;
    flex-direction: column;
    justify-content: flex-start;
    padding: min(20vh, 8rem) 2rem;
  }
`;

const NavItem = styled.li`
  font-weight: 500;
  font-size: 1.5rem;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  width: max-content;
  height: 56px;
  cursor: pointer;
  color: white;

  & :after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0.1em;
    opacity: 0;
  }
  
  &:hover {
    cursor: pointer;
  }
  
`;
const [menuVisible, setMenuVisible] = useState(false)

const handleClickScroll = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
}
  return (
  <StyledNavbarContainer>
    <MenuButton onClick={() => setMenuVisible(!menuVisible)}/>
      {menuVisible &&<NavbarBody>
        <NavItem onClick={() =>handleClickScroll('home')}>Home</NavItem>
        <NavItem onClick={() =>handleClickScroll('about-me')}>About Me</NavItem>
        <NavItem onClick={() =>handleClickScroll('projects')}>Projects</NavItem>
      </NavbarBody>}
  </StyledNavbarContainer>
  )
}

export default NavBar