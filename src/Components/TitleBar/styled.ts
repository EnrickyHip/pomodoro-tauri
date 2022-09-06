import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 30px;
  background-color: rgb(54, 54, 54);
  user-select: none;
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: space-between;
  top: 0;
  left: 0;
  right: 0;
`;

export const ButtonsContainer = styled.div`
  align-self: flex-end;
`;

export const TitleBarButton = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  color: rgb(207, 207, 207);
  width: 45px;
  height: 30px;

  &:hover {
    background-color: rgb(107, 107, 107);
  }

  &#titlebar-close:hover {
    background-color: brown;
  }
`;

export const WindowTitle = styled.div`
  display: flex;
  align-items: center;
  color: rgb(207, 207, 207);
  padding: 0 0.5rem;
  gap: 0.5rem;
`;

export const Logo = styled.img`
  width: 1.4rem;
`;

export const Title = styled.span`
  font-size: 0.9rem;
  margin-top: 2px;
`;
