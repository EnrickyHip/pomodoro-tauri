import './style.css';

interface Props {
  children: JSX.Element | JSX.Element[] | string;
  handleClick?: () => void;
  classes?: string;
}

export function Button({ children, handleClick, classes }: Props) {
  return (
    <button className={classes} onClick={handleClick}>
      {children}
    </button>
  );
}
