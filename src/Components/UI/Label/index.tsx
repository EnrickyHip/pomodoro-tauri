import './style.css';

interface Props {
  children: JSX.Element | JSX.Element[] | string;
  inputId?: string;
}

export function Label({ inputId, children }: Props) {
  return <label htmlFor={inputId}>{children}</label>;
}
