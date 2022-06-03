import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import { GreeterClient } from './stubs/MainServiceClientPb';

const greeterClient = new GreeterClient('http://localhost:8000');
export const ClientContext = React.createContext(greeterClient);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ClientContext.Provider value={greeterClient}>
      <App />
    </ClientContext.Provider>
  </React.StrictMode>
);
