import { usePomodoro } from '../../store/Pomodoro';
import { InputLabel } from '../UI/InputLabel';
import { Form } from './styled';

export function SettingsForm() {
  const { state, actions } = usePomodoro();
  const { settings } = state;
  const { changeDefaultTime, changeLongTime, changeShortTime, ChangeCycles } = actions;

  function handleChange(value: string, max: number, action: (payload: number) => void, blur = false) {
    let valueNumber: number;

    if (blur && !value) {
      valueNumber = 1;
    } else {
      valueNumber = parseInt(value);
    }

    if (valueNumber < 1) valueNumber = 1;
    if (valueNumber > max) valueNumber = max;
    action(valueNumber);
  }

  return (
    <Form>
      <InputLabel
        label="Work Time (in minutes):"
        id="main-time"
        onBlur={({ target }) => handleChange(target.value, 1439, changeDefaultTime, true)}
        onChange={({ target }) => handleChange(target.value, 1439, changeDefaultTime)}
        value={settings.defaultMainTime.toString()}
        type="number"
        min="1"
      />

      <InputLabel
        label="Short Rest Time:"
        onBlur={({ target }) => handleChange(target.value, 1439, changeShortTime, true)}
        onChange={({ target }) => handleChange(target.value, 1439, changeShortTime)}
        id="short-rest-time"
        value={settings.shortRestTime.toString()}
        type="number"
        min="1"
      />

      <InputLabel
        label="Long Rest Time:"
        onBlur={({ target }) => handleChange(target.value, 1439, changeLongTime, true)}
        onChange={({ target }) => handleChange(target.value, 1439, changeLongTime)}
        id="long-rest-time"
        value={settings.longRestTime.toString()}
        type="number"
        min="1"
      />

      <InputLabel
        label="Cycles:"
        onBlur={({ target }) => handleChange(target.value, 1439, ChangeCycles, true)}
        onChange={({ target }) => handleChange(target.value, 100, ChangeCycles)}
        id="cycles"
        value={settings.cycles.toString()}
        type="number"
        min="1"
      />
    </Form>
  );
}
