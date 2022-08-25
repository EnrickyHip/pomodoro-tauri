import { usePomodoro } from '../../store/Pomodoro';
import { Form } from '../UI/Form';
import { Input } from '../UI/Input';
import { Label } from '../UI/Label';

import './style.css';

export function SettingsForm() {
  const { state, actions } = usePomodoro();
  const { settings } = state;
  const { changeDefaultTime, changeLongTime, changeShortTime, ChangeCycles } = actions;

  function handleChange(value: string, max: number, action: (payload: number) => void) {
    let valueNumber = parseInt(value);
    if (valueNumber < 1) valueNumber = 1;
    if (valueNumber > max) valueNumber = max;
    action(valueNumber);
  }

  return (
    <Form id="settings-form">
      <div className="input-group">
        <Label inputId="main-time">Work Time (in minutes):</Label>
        <Input
          onChange={(event) => handleChange(event.target.value, 1439, changeDefaultTime)}
          id="main-time"
          value={settings.defaultMainTime.toString()}
          type="number"
          min="1"
        />
      </div>

      <div className="input-group">
        <Label inputId="short-rest-time">Short Rest Time:</Label>
        <Input
          onChange={(event) => handleChange(event.target.value, 1439, changeShortTime)}
          id="short-rest-time"
          value={settings.shortRestTime.toString()}
          type="number"
          min="1"
        />
      </div>

      <div className="input-group">
        <Label inputId="long-rest-time">Long Rest Time:</Label>
        <Input
          onChange={(event) => handleChange(event.target.value, 1439, changeLongTime)}
          id="long-rest-time"
          value={settings.longRestTime.toString()}
          type="number"
          min="1"
        />
      </div>

      <div className="input-group">
        <Label inputId="cycles">Cycles:</Label>
        <Input
          onChange={(event) => handleChange(event.target.value, 100, ChangeCycles)}
          id="cycles"
          value={settings.cycles.toString()}
          type="number"
          min="1"
        />
      </div>
    </Form>
  );
}
