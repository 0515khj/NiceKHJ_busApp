import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  /* ===== 디자인 토큰 ===== */
  :root {
    --bg: #0e1116;
    --card: #161b22;
    --text: #e8ecf2;
    --sub: #8b95a5;
    --line: #232a35;
    --accent: #ff8a3d;

    --bus-seat: #e5483a;
    --bus-general: #3fa45b;
    --bus-village: #b08a2e;

    --chip-bg: #e2eafb;
    --chip-text: #1a3f9e;
    --warn-bg: #fdebd8;
    --warn-text: #ffb27a;

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
    padding: 28px 18px 40px; 
    overflow-x: hidden;  
  }
`;
