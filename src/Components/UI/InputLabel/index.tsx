import { ChangeEvent } from 'react';
import { Input } from '../Input';
import { Label } from '../Label';

import './style.css';

interface Props {
  id: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  type: string;
  min: string;
  label: string;
}

export function InputLabel({ id, value, min, onChange, type, label }: Props) {
  return (
    <div className="input-label">
      <Label inputId={id}>{label}</Label>
      <Input onChange={onChange} id={id} value={value} type={type} min={min} />
    </div>
  );
}
