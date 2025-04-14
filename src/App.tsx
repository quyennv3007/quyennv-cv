import React, { useState } from 'react';
import Layout from './components/Layout';
import Home from './sections/Home';
import About from './sections/About';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Education from './sections/Education';
import Contact from './sections/Contact';
import './i18n';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Layout darkMode={darkMode} toggleDarkMode={toggleDarkMode}>
      <Home />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
    </Layout>
  );
}

export default App;