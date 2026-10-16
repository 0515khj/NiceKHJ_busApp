import styled, { keyframes } from "styled-components";
import type { Mode } from "@/conpig/presets";

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

export const BusHomeWrap = styled.div<{ $mode: Mode }>`
  --accent: ${({ $mode }) => ($mode === "work" ? "#ff8a3d" : "#a78bfa")};
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: -160px;
    right: -140px;
    width: 340px;
    height: 340px;
    border-radius: 50%;
    background: radial-gradient(circle, var(--accent) 0%, transparent 70%);
    opacity: 0.3;
    pointer-events: none;
  }

  .box_today {
    position: relative;
    margin-bottom: 24px;
    font-size: 13px;
    font-weight: 500;
    color: var(--sub);
  }
  .box_bus-reload {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 8px;

    .button_reload {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      min-height: 40px;
      padding: 0 12px;
      border-radius: 20px;
      border: 1px solid var(--line);
      background: var(--card);
      font-family: var(--mono);
      font-size: 12px;
      font-weight: 600;
      color: var(--sub);
      &:disabled {
        opacity: 0.7;
      }
      &:disabled svg {
        animation: ${spin} 0.8s linear infinite;
      }
    }
  }
  .box_button {
    display: flex;
    align-items: baseline;
    gap: 12px;
    .button_mode {
      width: 70px;
      min-height: 44px;
      font-size: 22px;
      font-weight: 700;
      letter-spacing: -0.02em;
      color: #3a4350;
      &.active {
        color: var(--text);
        text-decoration: underline;
        text-decoration-color: var(--accent);
        text-decoration-thickness: 3px;
        text-underline-offset: 6px;
      }
    }
  }
  .box_legend {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
    padding: 0 15px;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.06em;
    color: #5c6676;
  }
`;
