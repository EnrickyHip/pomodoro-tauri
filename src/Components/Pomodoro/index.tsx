import { useEffect } from 'react';
import { useInterval } from '../../Hooks/useInterval';
import { usePomodoro } from '../../store/Pomodoro';
import { Button } from '../Button';
import { Timer } from '../Timer';

export function Pomodoro() {
  const { state, actions } = usePomodoro();
  const { currentTime, isPlaying, mode, currentCycle, settings } = state;
  const { reset, decrement, toggle, setMode, completeCycle } = actions;

  const interval = isPlaying ? 1000 : null;

  useEffect(() => {
    if (currentTime > 0) return;

    if (mode === 'MODE_POMODORO') {
      if (currentCycle === settings.cycles) setMode('MODE_LONG_REST');
      else setMode('MODE_SHORT_REST');
    }

    if (mode === 'MODE_SHORT_REST') {
      setMode('MODE_POMODORO');
      completeCycle();
    }

    if (mode === 'MODE_LONG_REST') {
      reset();
    }

    toggle();
  }, [currentTime]);

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
