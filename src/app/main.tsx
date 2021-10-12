import React from 'react';
import ReactDOM from 'react-dom';

import './styles/globalStyles.css';

import { ThemeContextProvider } from './hooks/ThemeContext';
import Router from './Router';

ReactDOM.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <Router />
    </ThemeContextProvider>
  </React.StrictMode>,
  document.querySelector('#root')
);
