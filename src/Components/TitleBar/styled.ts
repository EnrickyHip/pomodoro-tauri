import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme: { colors } }) => css`
    height: 30px;
    background-color: ${colors.background.secondary};
    user-select: none;
    display: flex;
    position: fixed;
    align-items: center;
    justify-content: space-between;
    top: 0;
    left: 0;
    right: 0;
  `}
`;

export const ButtonsContainer = styled.div`
  align-self: flex-end;
`;

export const TitleBarButton = styled.div`
  ${({ theme: { colors } }) => css`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    color: ${colors.text.secondary};
    width: 45px;
    height: 30px;

    &:hover {
      background-color: ${colors.background.tertiary};
    }

    &#titlebar-close:hover {
      background-color: brown;
    }
  `}
`;

export const WindowTitle = styled.div`
  ${({ theme: { colors } }) => css`
    display: flex;
    align-items: center;
    color: ${colors.text.secondary};
    padding: 0 0.5rem;
    gap: 0.5rem;
  `}
`;

export const Logo = styled.img`
  width: 1.4rem;
`;

export const Title = styled.span`
  font-size: 0.9rem;
  margin-top: 2px;
`;
