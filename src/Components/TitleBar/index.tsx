import { appWindow } from '@tauri-apps/api/window';

import { VscChromeMinimize, VscChromeMaximize, VscChromeRestore, VscChromeClose } from 'react-icons/vsc';
import { useState } from 'react';
import { ButtonsContainer, Logo, Title, TitleBarButton, WindowTitle, Wrapper } from './styled';

export function TitleBar() {
  const [maximized, setMaximized] = useState(true);

  function toggleMaximize() {
    appWindow.toggleMaximize();
    setMaximized(!maximized);
  }

  const minimize = () => appWindow.minimize();
  const close = () => appWindow.close();

  return (
    <Wrapper data-tauri-drag-region>
      <WindowTitle>
        <Logo src="/44x44-gray.png" alt="pomodoro logo" />
        <Title>Pomodoro</Title>
      </WindowTitle>

      <ButtonsContainer>
        <TitleBarButton onClick={minimize} id="titlebar-minimize">
          <VscChromeMinimize />
        </TitleBarButton>

        <TitleBarButton onClick={toggleMaximize} id="titlebar-maximize">
          {maximized ? <VscChromeRestore /> : <VscChromeMaximize />}
        </TitleBarButton>

        <TitleBarButton onClick={close} id="titlebar-close">
          <VscChromeClose />
        </TitleBarButton>
      </ButtonsContainer>
    </Wrapper>
  );
}
