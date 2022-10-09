import styled, { css } from 'styled-components';
import { Button } from '../UI/Button';

interface Props {
  top: string;
  bottom: string;
  right: string;
  left: string;
}

export const StyledButton = styled(Button)<Props>`
  ${({ theme: { colors }, top, bottom, right, left }) => css`
    min-width: 3.7rem;
    position: absolute;
    top: ${top};
    bottom: ${bottom};
    right: ${right};
    left: ${left};
    background-color: transparent;
    border-radius: 50%;
    display: inline-block;
    z-index: 1;

    &:hover {
      background-color: ${colors.background.quartenary};
    }
  `}
`;
