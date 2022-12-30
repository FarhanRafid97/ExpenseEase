import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { LazyMotion, domAnimation } from 'framer-motion';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <LazyMotion features={domAnimation}>
        <App />
      </LazyMotion>
    </BrowserRouter>
  </React.StrictMode>,
);
