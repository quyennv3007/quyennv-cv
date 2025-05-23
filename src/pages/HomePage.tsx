import React from 'react';
import Home from '../sections/Home';
import About from '../sections/About';
import Skills from '../sections/Skills';
import Experience from '../sections/Experience';
import Projects from '../sections/Projects';
// import Education from '../sections/Education';
import Contact from '../sections/Contact';
interface HomeProps {
  darkMode?: boolean;
}
const HomePage: React.FC<HomeProps> = ({darkMode}) => {
  return (
    <>
      <Home darkMode={darkMode}/>
      <About />
      <Skills />
      <Experience />
      <Projects />
      {/* <Education /> */}
      <Contact />
    </>
  );
};

export default HomePage; 