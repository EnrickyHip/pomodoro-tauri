import { BaseDirectory, writeTextFile } from '@tauri-apps/api/fs';
import { useEffect } from 'react';
import { usePomodoro } from '../../store/Pomodoro';
import { Form } from '../UI/Form';
import { InputLabel } from '../UI/InputLabel';

import './style.css';

export function SettingsForm() {
  const { state, actions } = usePomodoro();
  const { settings } = state;
  const { changeDefaultTime, changeLongTime, changeShortTime, ChangeCycles } = actions;

  useEffect(() => {
    writeTextFile('settings.json', JSON.stringify(settings), { dir: BaseDirectory.App });
  }, [settings]);

  function handleChange(value: string, max: number, action: (payload: number) => void) {
    let valueNumber = parseInt(value);
    if (valueNumber < 1) valueNumber = 1;
    if (valueNumber > max) valueNumber = max;
    action(valueNumber);
  }

  return (
    <Form id="settings-form">
      <InputLabel
        label="Work Time (in minutes):"
        id="main-time"
        onChange={(event) => handleChange(event.target.value, 1439, changeDefaultTime)}
        value={settings.defaultMainTime.toString()}
        type="number"
        min="1"
      />

      <InputLabel
        label="Short Rest Time:"
        onChange={(event) => handleChange(event.target.value, 1439, changeShortTime)}
        id="short-rest-time"
        value={settings.shortRestTime.toString()}
        type="number"
        min="1"
      />

      <InputLabel
        label="Long Rest Time:"
        onChange={(event) => handleChange(event.target.value, 1439, changeLongTime)}
        id="long-rest-time"
        value={settings.longRestTime.toString()}
        type="number"
        min="1"
      />

      <InputLabel
        label="Cycles:"
        onChange={(event) => handleChange(event.target.value, 100, ChangeCycles)}
        id="cycles"
        value={settings.cycles.toString()}
        type="number"
        min="1"
      />
    </Form>
  );
}
