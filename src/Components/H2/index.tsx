import './style.css';

interface Props {
  children: string;
  id?: string;
}

export function H2({ children, id }: Props) {
  return <h1 id={id}>{children}</h1>;
}