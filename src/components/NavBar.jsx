import React from 'react'
import styled from 'styled-components';



const NavBar = () => {
 const StyledNavbarContainer = styled.nav`
    user-select: none;
    box-sizing: border-box;
    display: flex;
    align-items: center;

    min-height: 72px;
    max-height: 72px;
    width: 100%;
    padding: 0 32px;
`;

const NavbarBody = styled.div`
  font-weight: 500;
  box-sizing: border-box;
  display: flex;
  width: max-content;
  height: 32px;
  flex: 1;
`;

const NavButton = styled.button`
  font-weight: 500;
  box-sizing: border-box;
  display: flex;
  width: max-content;
  height: 32px;
  flex: 1;
`;

const handleClickScroll = (section) => {
    const element = document.getElementById(section);
    console.log(element)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
}
  return (
<StyledNavbarContainer>
      <NavbarBody>
      <NavButton onClick={() =>handleClickScroll('about-me')}>About Me</NavButton>
      <NavButton onClick={() =>handleClickScroll('skills')}>Skills</NavButton>
      <NavButton onClick={() =>handleClickScroll('projects')}>Projects</NavButton>
        </NavbarBody>
    </StyledNavbarContainer>
  )
}

export default NavBar