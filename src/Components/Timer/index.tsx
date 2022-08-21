import { convertToTime } from '../../utils/convertToTime';
import './style.css';

interface Props {
  time: number;
}

export function Timer({ time }: Props) {
  return <div id="timer">{convertToTime(time)}</div>;
}
