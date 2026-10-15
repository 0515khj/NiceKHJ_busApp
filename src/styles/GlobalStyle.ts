import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  /* ===== 디자인 토큰 ===== */
  :root {
    --bg: #f2f3f0;
    --card: #ffffff;
    --text: #17181a;
    --sub: #5a5e66;
    --line: #ecedea;
    --accent: #1f4fd1;

    --bus-seat: #c8321a;
    --bus-general: #2f7d3a;
    --bus-village: #7a5a00;

    --chip-bg: #e2eafb;
    --chip-text: #1a3f9e;
    --warn-bg: #fdebd8;
    --warn-text: #8a4100;

    --font: "IBM Plex Sans KR", "Apple SD Gothic Neo", "Malgun Gothic", sans-serif;
    --mono: "IBM Plex Mono", monospace;
  }

  /* ===== 리셋 ===== */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    -webkit-text-size-adjust: 100%;
  }

  body {
    margin: 0;
    min-height: 100vh;
    background: var(--bg);
    color: var(--text);
    font-family: var(--font);
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }

  h1,
  h2,
  h3,
  p {
    margin: 0;
  }

  ul,
  ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  button {
    font: inherit;
    color: inherit;
    background: none;
    border: 0;
    padding: 0;
    cursor: pointer;
  }

  button:disabled {
    cursor: default;
  }

  img,
  svg {
    display: block;
    max-width: 100%;
  }

  /* ===== 레이아웃 ===== */
  #root {
    max-width: 480px;
    margin: 0 auto;
    padding: 24px 16px 40px;
  }
`;
