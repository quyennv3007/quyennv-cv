import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ProjectDetail from './pages/ProjectDetail';
import './i18n';

// ScrollToTop component to handle navigation
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Only scroll to top if there's no hash in the URL
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
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