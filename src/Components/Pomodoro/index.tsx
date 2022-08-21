import { useInterval } from '../../Hooks/useInterval';
import { usePomodoro } from '../../store/Pomodoro';
import { Button } from '../Button';
import { Content } from '../Content';
import { Timer } from '../Timer';

export function Pomodoro() {
  const { state, actions } = usePomodoro();
  const { currentTime, settings, isPlaying, mode } = state;
  const { reset, decrement, toggle, setMode } = actions;

  const interval = isPlaying ? 1000 : null;

  useInterval(() => {
    if (currentTime === 0) reset(settings.defaultMainTime);
    else decrement();
  }, interval);

  return (
    <Content>
      <div id="buttons">
        <Button classes={mode === 'MODE_POMODORO' ? 'active' : ''} onClick={() => setMode('MODE_POMODORO')}>
          Pomodoro
        </Button>
        <Button classes={mode === 'MODE_SHORT_REST' ? 'active' : ''} onClick={() => setMode('MODE_SHORT_REST')}>
          Short Rest
        </Button>
        <Button classes={mode === 'MODE_LONG_REST' ? 'active' : ''} onClick={() => setMode('MODE_LONG_REST')}>
          Long Rest
        </Button>
      </div>
      {/* <Link to="/settings">
        <Button>Settings</Button>
      </Link> */}
      <Timer time={currentTime} />
      <Button onClick={toggle}>{isPlaying ? 'Pause' : 'Play'}</Button>
    </Content>
  );
}
