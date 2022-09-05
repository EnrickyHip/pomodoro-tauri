import { convertToTime } from '../../utils/convertToTime';
import { TimerContainer } from './styled';

interface Props {
  time: number;
}

export function Timer({ time }: Props) {
  return <TimerContainer>{convertToTime(time)}</TimerContainer>;
}
