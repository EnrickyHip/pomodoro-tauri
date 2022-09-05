import { createGlobalStyle, css, DefaultTheme } from 'styled-components';

interface Props {
  theme: DefaultTheme;
}

export default createGlobalStyle`
  ${({ theme: { colors } }: Props) => css`
    :root,
    html,
    body {
      font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
      font-weight: 400;

      padding: 0;
      margin: 0;
      box-sizing: border-box;

      color-scheme: light dark;
      color: ${colors.text.primary};
      background-color: ${colors.background.primary};

      font-synthesis: none;
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      -webkit-text-size-adjust: 100%;
    }

    a {
      text-decoration: none;
      color: ${colors.text.primary};
    }
  `}
`;
