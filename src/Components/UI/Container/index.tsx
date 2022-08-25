import './style.css';

interface Props {
  children: string | JSX.Element | JSX.Element[];
}

export function Container({ children }: Props) {
  return <div id="container">{children}</div>;
}
