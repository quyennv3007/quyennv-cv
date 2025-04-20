import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import '@fontsource/source-sans-pro';
import '@fontsource/source-sans-pro/400.css'; // Regular
import '@fontsource/source-sans-pro/600.css'; // Semi-bold
import '@fontsource/source-sans-pro/700.css'; // Bold
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='App'>
      <App />
    </div>
  </StrictMode>
);
