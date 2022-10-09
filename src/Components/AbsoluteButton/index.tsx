import { StyledButton } from './styled';

interface Props {
  children: JSX.Element | JSX.Element[];
  top?: string;
  bottom?: string;
  right?: string;
  left?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export function AbsoluteButton({
  top = 'none',
  bottom = 'none',
  right = 'none',
  left = 'none',
  children,
  onClick,
}: Props) {
  return (
    <StyledButton onClick={onClick} top={top} bottom={bottom} right={right} left={left}>
      {children}
    </StyledButton>
  );
}
