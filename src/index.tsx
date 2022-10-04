import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import { GlobalFonts } from './fonts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalFonts />
    <App />
  </React.StrictMode>
);
