import { ChangeEvent } from 'react';
import { Input } from '../Input';
import { Label } from '../Label';
import { Container } from './styled';

interface Props {
  id: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  type?: string;
  min?: string;
  label: string;
}

export function InputLabel({ id, value, min, onChange, onBlur, type = 'text', label }: Props) {
  return (
    <Container>
      <Label htmlFor={id}>{label}</Label>
      <Input onBlur={onBlur} onChange={onChange} id={id} value={value} type={type} min={min} />
    </Container>
  );
}
