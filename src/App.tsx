import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ProjectDetail from './pages/ProjectDetail';
import './i18n';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path="/" 
          element={
            <Layout darkMode={darkMode} toggleDarkMode={toggleDarkMode}>
              <HomePage />
            </Layout>
          } 
        />
        <Route 
          path="/projects/:id" 
          element={
            <Layout darkMode={darkMode} toggleDarkMode={toggleDarkMode}>
              <ProjectDetail />
            </Layout>
          } 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;