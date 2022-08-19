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
  const [interval, setInterval] = useState<number | null>(1000);

  useInterval(() => {
    if (mainTime === 0) setMainTime(defaultTime);
    else setMainTime(mainTime - 1);
  }, interval);

  const play = () => {
    setInterval(1000);
  };

  const pause = () => {
    setInterval(null);
  };

  return (
    <div id="pomodoro">
      <Timer time={mainTime} />
      <Button handleClick={play}>Play</Button>
      <Button handleClick={pause}>Pause</Button>
    </div>
  );
}
