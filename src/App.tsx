import { BaseDirectory, writeTextFile } from '@tauri-apps/api/fs';
import { useEffect } from 'react';
import Home from './Pages/Home';
import Settings from './Pages/Settings';
import { ThemeProvider } from 'styled-components';

import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TitleBar } from './components/TitleBar';
import GlobalStyles from './styles/global';
import { darkTheme, lightTheme } from './styles/theme';
import { usePomodoro } from './store/Pomodoro';
import { AbsoluteButton } from './components/AbsoluteButton';
import { MaterialIcon } from './components/MaterialIcon';

function App() {
  const { state, actions } = usePomodoro();
  const { settings } = state;
  const lightMode = settings.lightMode;
  const silenceMode = settings.silenceMode;

  // useEffect(() => {
  //   document.addEventListener('contextmenu', (event) => event.preventDefault());
  //   document.addEventListener('keydown', (event) => {
  //     if (event.key === 'F5') event.preventDefault();
  //   });
  // }, []);

  useEffect(() => {
    writeTextFile('settings.json', JSON.stringify(settings), { dir: BaseDirectory.App });
  }, [settings]);

  return (
    <ThemeProvider theme={lightMode ? lightTheme : darkTheme}>
      <GlobalStyles />
      <BrowserRouter>
        <TitleBar />
        <AbsoluteButton top="2rem" left="0" onClick={actions.toggleSilenceMode}>
          {silenceMode ? <MaterialIcon icon="volume_off" /> : <MaterialIcon icon="volume_up" />}
        </AbsoluteButton>
        <AbsoluteButton top="2rem" right="0" onClick={actions.toggleTheme}>
          {lightMode ? <BsFillSunFill size={22} /> : <BsFillMoonFill size={22} />}
        </AbsoluteButton>
        <Routes>
          <Route path="/" element={<Home lightMode={lightMode} />} />
          <Route path="/settings" element={<Settings lightMode={lightMode} />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
