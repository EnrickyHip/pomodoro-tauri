import styled, { css, DefaultTheme } from 'styled-components';

interface Props {
  theme: DefaultTheme;
}

export const Content = styled.main`
  ${({ theme }: Props) => css`
    background-color: ${theme.colors.background.secondary};
    width: 50%;
    height: 50%;
    padding: 2rem;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    position: absolute;
  `}
`;
