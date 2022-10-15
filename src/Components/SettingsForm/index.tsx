import { useState, Dispatch, SetStateAction } from 'react';
import { usePomodoro } from '../../store/Pomodoro';
import { MaterialIcon } from '../MaterialIcon';
import { Input } from '../UI/Input';
import { InputLabel } from '../UI/InputLabel';
import { Form, ChangeSound } from './styled';

export function SettingsForm() {
  const { state, actions } = usePomodoro();
  const { settings } = state;
  const { changeDefaultTime, changeLongTime, changeShortTime, ChangeCycles, changeAudioVolume } = actions;

  const [defaultMainTime, setDefaultMainTime] = useState(settings.defaultMainTime.toString());
  const [shortTime, setShortTime] = useState(settings.shortRestTime.toString());
  const [longTime, setLongTime] = useState(settings.longRestTime.toString());
  const [cycles, setCycles] = useState(settings.cycles.toString());

  function saveSettings() {
    changeDefaultTime(defaultMainTime ? parseInt(defaultMainTime) : settings.defaultMainTime);
    changeShortTime(shortTime ? parseInt(shortTime) : settings.shortRestTime);
    changeLongTime(longTime ? parseInt(longTime) : settings.longRestTime);
    ChangeCycles(cycles ? parseInt(cycles) : settings.cycles);
  }

  function handleChange(value: string, max: number, set: Dispatch<SetStateAction<string>>) {
    if (!value) return set('');

    let valueNumber = parseInt(value);
    if (valueNumber < 1) valueNumber = 1;
    if (valueNumber > max) valueNumber = max;

    set(valueNumber.toString());
  }

  return (
    <Form>
      <InputLabel
        label="Work Time (in minutes):"
        id="main-time"
        onBlur={saveSettings}
        onChange={({ target }) => handleChange(target.value, 1439, setDefaultMainTime)}
        value={defaultMainTime}
        type="number"
        min="1"
      />

      <InputLabel
        label="Short Rest Time:"
        onBlur={saveSettings}
        onChange={({ target }) => handleChange(target.value, 1439, setShortTime)}
        id="short-rest-time"
        value={shortTime}
        type="number"
        min="1"
      />

      <InputLabel
        label="Long Rest Time:"
        onBlur={saveSettings}
        onChange={({ target }) => handleChange(target.value, 1439, setLongTime)}
        id="long-rest-time"
        value={longTime}
        type="number"
        min="1"
      />

      <InputLabel
        label="Cycles:"
        onBlur={saveSettings}
        onChange={({ target }) => handleChange(target.value, 100, setCycles)}
        id="cycles"
        value={cycles}
        type="number"
        min="1"
      />

      <ChangeSound>
        {settings.audioVolume > 0.5 ? (
          <MaterialIcon icon="volume_up" />
        ) : settings.audioVolume > 0 ? (
          <MaterialIcon style={{ marginRight: '4px' }} icon="volume_down" />
        ) : (
          <MaterialIcon icon="volume_off" />
        )}

        <Input
          onChange={({ target }) => changeAudioVolume(parseInt(target.value) / 100)}
          type="range"
          value={settings.audioVolume * 100}
          min={0}
          max={100}
        />
      </ChangeSound>
    </Form>
  );
}
