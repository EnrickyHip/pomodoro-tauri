import { appWindow } from '@tauri-apps/api/window';
import './style.css';

import { VscChromeMinimize, VscChromeMaximize, VscChromeRestore, VscChromeClose } from 'react-icons/vsc';
import { useState } from 'react';

export function TitleBar() {
  const [maximized, setMaximized] = useState(true);

  function toggleMaximize() {
    appWindow.toggleMaximize();
    setMaximized(!maximized);
  }

  return (
    <div data-tauri-drag-region className="titlebar">
      <div id="window-title">
        <img src="/44x44-gray.png" alt="pomodoro logo" />
        <span>Pomodoro</span>
      </div>

      <div id="title-buttons">
        <div onClick={() => appWindow.minimize()} className="titlebar-button" id="titlebar-minimize">
          <VscChromeMinimize />
        </div>

        <div onClick={toggleMaximize} className="titlebar-button" id="titlebar-maximize">
          {maximized ? <VscChromeRestore /> : <VscChromeMaximize />}
        </div>

        <div onClick={() => appWindow.close()} className="titlebar-button" id="titlebar-close">
          <VscChromeClose />
        </div>
      </div>
    </div>
  );
}
