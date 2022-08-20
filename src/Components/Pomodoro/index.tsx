import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useInterval } from '../../Hooks/useInterval';
import { usePomodoro } from '../../store/Pomodoro';
import { Button } from '../Button';
import { Content } from '../Content';
import { Timer } from '../Timer';

export function Pomodoro() {
  const { state, actions } = usePomodoro();
  const { currentTime, settings, interval, isPlaying } = state;
  const { reset, decrement, pause, play } = actions;

  useInterval(() => {
    if (currentTime === 0) reset(settings.defaultMainTime);
    else decrement();
  }, interval);

  const togglePlay = () => (isPlaying ? pause() : play());

  return (
    <Content>
      <Timer time={currentTime} />
      <div id="buttons">
        <Button handleClick={togglePlay}>{isPlaying ? 'Pause' : 'Play'}</Button>
        <Link to="/settings">
          <Button>Settings</Button>
        </Link>
      </div>
    </Content>
  );
}
