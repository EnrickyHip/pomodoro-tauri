import './style.css';

interface Props {
  children: JSX.Element | JSX.Element[] | string;
  onClick?: () => void;
  classes?: string;
  id?: string;
}

export function Button({ children, onClick, classes, id }: Props) {
  return (
    <button id={id} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
