import styled from 'styled-components';

const Hero = () => {

    const HeroContainer = styled.div`
    background-color: steelblue;
    height: 99vh;
  `;

  const TitleContainer = styled.div`
  position: relative;
  top: min(20%, 800px);
  padding: 30px;
  padding-left: min(15%,100px);
`;

  const PreHeader = styled.p`
  font-size: min(2rem, 10vw);
  color: lightblue;
  margin:0;
  `

  const Header = styled.h1`
  margin:0;
  line-height: 100%;
  font-size:min(5rem, 15vw);
  color: white;
  `

  const HeroText = styled.p`
  font-size:1.5rem;
  color: lightblue;
  width: 60%;
  `

  const Button = styled.button`
  background-color: #FFFFFF;
  border: 1px solid #222222;
  border-radius: 8px;
  box-sizing: border-box;
  color: #222222;
  cursor: pointer;
  display: inline-block;
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,"Helvetica Neue",sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  margin: 0;
  outline: none;
  padding: 13px 23px;
  position: relative;
  text-align: center;
  text-decoration: none;
  touch-action: manipulation;
  transition: box-shadow .2s,-ms-transform .1s,-webkit-transform .1s,transform .1s;
  user-select: none;
  -webkit-user-select: none;
  width: auto;
}

&:focus-visible {
  box-shadow: #222222 0 0 0 2px, rgba(255, 255, 255, 0.8) 0 0 0 4px;
  transition: box-shadow .2s;
}

&:active {
  background-color: #F7F7F7;
  border-color: #000000;
  transform: scale(.96);
}
`

  return (
    <HeroContainer>
        <TitleContainer>
        <PreHeader>Hi, my name is </PreHeader>
        <Header>Kate Goldfinch</Header>
        <HeroText>I'm a <strong>Front End Developer</strong> who loves making stuff on the web</HeroText>
        </TitleContainer>
        {/* <Button>See My Projects</Button> */}
    </HeroContainer>
  )
}

export default Hero