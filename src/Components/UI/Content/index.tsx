import './style.css';

interface Props {
  children: string | JSX.Element | JSX.Element[];
}

export function Content({ children }: Props) {
  return <main>{children}</main>;
}
