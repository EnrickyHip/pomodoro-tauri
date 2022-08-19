interface Props {
  children: string;
  handleClick: () => void;
  classes?: string;
}

export function Button({ children, handleClick, classes }: Props) {
  return (
    <button className={classes} onClick={handleClick}>
      {children}
    </button>
  );
}
