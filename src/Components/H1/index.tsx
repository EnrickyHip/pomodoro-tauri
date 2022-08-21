import './style.css';

interface Props {
  children: string;
  id?: string;
}

export function H1({ children, id }: Props) {
  return <h2 id={id}>{children}</h2>;
}
