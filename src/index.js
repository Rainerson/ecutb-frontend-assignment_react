import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Lägger in allt i min div som heter root
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

