import { useInterval } from '../../Hooks/useInterval';
import { usePomodoro } from '../../store/Pomodoro';
import { Button } from '../Button';
import { Timer } from '../Timer';

export function Pomodoro() {
  const { state, actions } = usePomodoro();
  const { currentTime, isPlaying, mode } = state;
  const { reset, decrement, toggle, setMode } = actions;

  const interval = isPlaying ? 1000 : null;

  useInterval(() => {
    decrement();
  }, interval);

  return (
    <>
      <div id="modes">
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

      <Timer time={currentTime} />
      <div>
        <Button onClick={toggle}>{isPlaying ? 'Pause' : 'Play'}</Button>
        <Button onClick={reset}>Reset</Button>
      </div>
    </>
  );
}
