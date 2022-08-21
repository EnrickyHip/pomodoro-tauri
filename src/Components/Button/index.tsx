import './style.css';

interface Props {
  children: JSX.Element | JSX.Element[] | string;
  onClick?: () => void;
  classes?: string;
}

export function Button({ children, onClick, classes }: Props) {
  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
