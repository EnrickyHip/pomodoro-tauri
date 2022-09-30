import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { PomodoroProvider } from './store/Pomodoro';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <PomodoroProvider>
      <App />
    </PomodoroProvider>
  </React.StrictMode>,
);
