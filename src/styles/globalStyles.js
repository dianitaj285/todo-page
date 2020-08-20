import { createGlobalStyle } from "styled-components";

export const COLORS = {
  grey: "#435058",
  blue: "#5FB0B7",
  yellow: "#FAFFD8",
  brown: "#9C6615",
};
export const GlobalStyle = createGlobalStyle`
  html{
    font-size: 18px;
  }

  body {
    background-color:${COLORS.grey};
    color:${COLORS.yellow};
    font-family:sans-serif;
  }

  #root {
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
`;
