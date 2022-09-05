import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Pages/Home';
import Settings from './Pages/Settings';
import { ThemeProvider } from 'styled-components';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PomodoroProvider } from './store/Pomodoro';
import { TitleBar } from './components/TitleBar';
import GlobalStyles from './styles/global';
import theme from './styles/theme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <TitleBar />
        <PomodoroProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </PomodoroProvider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
);
