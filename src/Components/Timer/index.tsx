import { convertToTime } from '../../utils/convertToTime';
import { H1 } from '../H1';
import './style.css';

interface Props {
  time: number;
}

export function Timer({ time }: Props) {
  return <H1 id="timer">{convertToTime(time)}</H1>;
}
