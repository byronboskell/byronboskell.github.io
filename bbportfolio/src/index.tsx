import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { ThemeProvider } from '@mui/material';
import { theme } from "./theme/index";

import WebsiteRouter from './website-router';
import { ThemeModeProvider } from './context/theme-mode-context';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ThemeModeProvider>
        <WebsiteRouter />
      </ThemeModeProvider>
    </ThemeProvider>
  </React.StrictMode>
)
