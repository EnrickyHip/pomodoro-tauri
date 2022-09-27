import { useEffect } from 'react';
import { useInterval } from '../../Hooks/useInterval';
import { usePomodoro } from '../../store/Pomodoro';
import { Mode } from '../../store/Pomodoro/initialState';
import { Timer } from '../Timer';
import { Button } from '../UI/Button';

export function Pomodoro() {
  const { state, actions } = usePomodoro();
  const { currentTime, isPlaying, mode, currentCycle, settings, pastTime } = state;
  const { reset, decrement, toggle, setMode, completeCycle, updateCurrentTime } = actions;

  const interval = isPlaying ? 1000 : null;

  useEffect(() => {
    if (mode === Mode.default) updateCurrentTime(settings.defaultMainTime * 60 - pastTime);
    if (mode === Mode.shortRest) updateCurrentTime(settings.shortRestTime * 60 - pastTime);
    if (mode === Mode.longRest) updateCurrentTime(settings.longRestTime * 60 - pastTime);
  }, [settings]);

  useEffect(() => {
    if (currentTime > 0) return;

    if (mode === Mode.default) {
      if (currentCycle >= settings.cycles) setMode(Mode.longRest);
      else setMode(Mode.shortRest);
    }

    if (mode === Mode.shortRest) {
      setMode(Mode.default);
      completeCycle();
    }

    if (mode === Mode.longRest) {
      reset();
    }

    toggle();
  }, [currentTime]);

  useInterval(() => {
    decrement();
  }, interval);

  return (
    <>
      <div>
        <Button className={mode === Mode.default ? 'active' : ''} onClick={() => setMode(Mode.default)}>
          Pomodoro
        </Button>
        <Button className={mode === Mode.shortRest ? 'active' : ''} onClick={() => setMode(Mode.shortRest)}>
          Short Rest
        </Button>
        <Button className={mode === Mode.longRest ? 'active' : ''} onClick={() => setMode(Mode.longRest)}>
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
