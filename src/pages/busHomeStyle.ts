import styled, { keyframes } from "styled-components";

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

export const BusHomeWrap = styled.div`
  .box_today {
    font-size: 13px;
    font-weight: 500;
    color: var(--sub);
  }
  .box_bus-reload {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 8px 0 20px;
    .text_bus-title {
      font-weight: 700;
      font-size: 26px;
      letter-spacing: -0.02em;
    }
    .button_reload {
      display: flex;
      align-items: center;
      gap: 6px;
      min-height: 40px;
      padding: 0 14px;
      border-radius: 20px;
      border: 1px solid #d5d8d2;
      background: #fff;
      font-size: 13px;
      font-weight: 500;
      color: #3a3d42;
      &:disabled {
        opacity: 0.7;
      }
      &:disabled svg {
        animation: ${spin} 0.8s linear infinite;
      }
    }
  }
  .box_button {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4px;
    background: #e5e5e5;
    padding: 3px;
    height: 40px;
    border-radius: 6px;
    .button_mode {
      width: 100%;
      border-radius: 6px;
      &.active {
        background: #fff;
      }
    }
  }
`;
