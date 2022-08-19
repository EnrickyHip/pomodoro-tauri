import { convertToTime } from '../../utils/convertToTime';

interface Props {
  time: number;
}

export function Timer({ time }: Props) {
  return <div>{convertToTime(time)}</div>;
}
