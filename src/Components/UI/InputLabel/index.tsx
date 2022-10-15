import { Input } from '../Input';
import { Label } from '../Label';
import { Container } from './styled';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function InputLabel({ id, value, min, onChange, onBlur, type = 'text', label, max }: Props) {
  return (
    <Container>
      <Label htmlFor={id}>{label}</Label>
      <Input onBlur={onBlur} onChange={onChange} id={id} value={value} type={type} min={min} max={max} />
    </Container>
  );
}
