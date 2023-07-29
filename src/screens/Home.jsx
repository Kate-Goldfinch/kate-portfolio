import styled from 'styled-components';
import Bio from './Bio';
import Hero from './Hero';
import Projects from './Projects';

const projectDetails = [
  {title:'Skill Visualiser',
description: "A data visualization application built with a team as part of my internship at Faethm AI. Transformed an existing prototype into a production-ready application utilising the client's existing tech stack, which included ReactJS (using TypeScript).",
skills: ['Javascript', 'React', 'TypeScript', 'D3.js'],
image: new URL('../assets/skillsvisCover.JPG', import.meta.url).href,
imagePath: '../assets/SkillVis'
},
  {title:'OneStop',
description: 'An e-commerce site powered by a custom built management interface designed to allow boutique retailers to control their online offerings. Incorporates Auth0 for user authentication and Stripe API to facility transactions. ',
skills: ['Javascript', 'React', 'Express', 'MongoDB', 'Stripe API','Auth0', 'BootStrap'],
image: new URL('../assets/OneStopCover.JPG', import.meta.url).href,
imagePath: '../assets/OneStop'
},
{title:'KatChat',
description: 'A real-time group chat application built using an Express web server and a React front end.',
skills: ['Javascript', 'React', 'Express', 'MongoDB'],
image: new URL('../assets/katchatCover.JPG', import.meta.url).href,
imagePath: '../assets/KatChat'
}
]

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;



const Home = () => {
  return (
    <Container>
      <Hero/>
      <Bio/>
      <Projects projects={projectDetails}/>
    </Container>
  )
}

export default Home