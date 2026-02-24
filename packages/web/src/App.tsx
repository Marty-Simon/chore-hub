import { App } from '@chore-hub/shared';
import { BrowserRouter } from 'react-router-dom';

function WebApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default WebApp;
