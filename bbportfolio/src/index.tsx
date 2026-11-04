import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import WebsiteRouter from './website-router';
import { ThemeModeProvider } from './context/theme-mode-context';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeModeProvider>
      <WebsiteRouter />
    </ThemeModeProvider>
  </React.StrictMode>
)
