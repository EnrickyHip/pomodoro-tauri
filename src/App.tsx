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
import { ThemeButton } from './components/UI/ThemeButton';

function App() {
  const { state, actions } = usePomodoro();
  const { settings } = state;
  const lightMode = settings.lightMode;

  useEffect(() => {
    writeTextFile('settings.json', JSON.stringify(settings), { dir: BaseDirectory.App });
  }, [settings]);

  return (
    <ThemeProvider theme={lightMode ? lightTheme : darkTheme}>
      <GlobalStyles />
      <BrowserRouter>
        <ThemeButton onClick={actions.toggleTheme}>
          {lightMode ? <BsFillMoonFill size={22} /> : <BsFillSunFill size={22} />}
        </ThemeButton>
        <TitleBar />
        <Routes>
          <Route path="/" element={<Home lightMode={lightMode} />} />
          <Route path="/settings" element={<Settings lightMode={lightMode} />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
