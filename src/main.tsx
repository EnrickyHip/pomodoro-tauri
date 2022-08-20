import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Pages/Home';
import Settings from './Pages/Settings';
import './global.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PomodoroProvider } from './store/Pomodoro';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <PomodoroProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </PomodoroProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
