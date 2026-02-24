// Initialize unistyles BEFORE anything else
// import '@chore-hub/shared/styles';

import * as React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Render the app
const container = document.getElementById('root')!;
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
