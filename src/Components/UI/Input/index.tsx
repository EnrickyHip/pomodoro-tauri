import { ChangeEvent } from 'react';
import './style.css';

interface Props {
  type: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  id?: string;
  min?: string;
}

export function Input({ type, id, min, value, onChange }: Props) {
  return <input onChange={onChange} value={value} id={id} type={type} min={min} />;
}
