import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';  // Make sure the path to App is correct
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
