import { useState } from 'react';
import { useInterval } from '../../Hooks/useInterval';
import { Button } from '../Button';
import { Timer } from '../Timer';
import './style.css';

interface Props {
  defaultTime: number;
}

export function Pomodoro({ defaultTime }: Props) {
  const [mainTime, setMainTime] = useState(defaultTime);
  const [isPlaying, setIsPlaying] = useState(false);
  const [interval, setInterval] = useState<number | null>(null);

  useInterval(() => {
    if (mainTime === 0) setMainTime(defaultTime);
    else setMainTime(mainTime - 1);
  }, interval);

  const play = () => {
    if (isPlaying) {
      setInterval(null);
      setIsPlaying(false);
    } else {
      setInterval(1000);
      setIsPlaying(true);
    }
  };

  return (
    <div id="pomodoro">
      <Timer time={mainTime} />
      <div id="buttons">
        <Button handleClick={play}>{isPlaying ? 'Pause' : 'Play'}</Button>
        <Button handleClick={play}>Settings</Button>
      </div>
    </div>
  );
}
