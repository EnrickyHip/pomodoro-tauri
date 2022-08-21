import './style.css';
import { Button } from '../Button';

interface Props {
  children: JSX.Element | JSX.Element[];
}

export function TopButton({ children }: Props) {
  return <Button id="top-button">{children}</Button>;
}
