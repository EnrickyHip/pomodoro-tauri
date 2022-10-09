import { useEffect } from 'react';
import { useInterval } from '../../Hooks/useInterval';
import { usePomodoro } from '../../store/Pomodoro';
import { Mode } from '../../store/Pomodoro/initialState';
import { Timer } from '../Timer';
import { Button } from '../UI/Button';
import { ActionsContainer, ModesContainer } from './styled';

const audioStart = new Audio('/sounds/bell-start.mp3');
const audioFinish = new Audio('/sounds/bell-finish.mp3');

export function Pomodoro() {
  const { state, actions } = usePomodoro();
  const { currentTime, isPlaying, mode, currentCycle, settings, pastTime } = state;
  const { reset, decrement, togglePlay, setMode, completeCycle, updateCurrentTime } = actions;

  const interval = isPlaying ? 1000 : null;

  function next() {
    if (mode === Mode.default) {
      if (currentCycle >= settings.cycles) setMode(Mode.longRest);
      else setMode(Mode.shortRest);
    }

    if (mode === Mode.shortRest) {
      setMode(Mode.default);
      completeCycle();
    }

    if (mode === Mode.longRest) reset();
    isPlaying && playAudio();
  }

  function playAudio() {
    if (mode === Mode.default) {
      audioFinish.play();
    } else {
      audioStart.play();
    }
  }

  function handleReset() {
    isPlaying && togglePlay();
    reset();
  }

  useEffect(() => {
    if (mode === Mode.default) updateCurrentTime(settings.defaultMainTime * 60 - pastTime);
    if (mode === Mode.shortRest) updateCurrentTime(settings.shortRestTime * 60 - pastTime);
    if (mode === Mode.longRest) updateCurrentTime(settings.longRestTime * 60 - pastTime);
  }, [settings]);

  useEffect(() => {
    if (isPlaying && mode === Mode.default) audioStart.play();
  }, [isPlaying]);

  useEffect(() => {
    if (currentTime === 0) next();
  }, [currentTime]);

  useInterval(() => {
    decrement();
  }, interval);

  return (
    <>
      <ModesContainer>
        <Button className={mode === Mode.default ? 'active' : ''} onClick={() => setMode(Mode.default)}>
          Pomodoro
        </Button>
        <Button className={mode === Mode.shortRest ? 'active' : ''} onClick={() => setMode(Mode.shortRest)}>
          Short Rest
        </Button>
        <Button className={mode === Mode.longRest ? 'active' : ''} onClick={() => setMode(Mode.longRest)}>
          Long Rest
        </Button>
      </ModesContainer>

      <Timer time={currentTime} />

      <ActionsContainer>
        <Button onClick={togglePlay}>{isPlaying ? 'Pause' : 'Play'}</Button>
        <Button onClick={next}>Next</Button>
        <Button onClick={handleReset}>Reset</Button>
      </ActionsContainer>
    </>
  );
}
