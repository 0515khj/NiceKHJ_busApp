import type { BusKind } from "@/utils/busFormat";
import styled from "styled-components";

const kindColor: Record<BusKind, string> = {
  seat: "var(--bus-seat)",
  general: "var(--bus-general)",
  village: "var(--bus-village)",
};

export const BusRowWrap = styled.div<{
  $kind: BusKind;
  $color: string;
  $pos: number;
  $warn: boolean;
}>`
  display: flex;
  flex-direction: column;
  gap: 10px;
  & + & {
    margin-top: 22px;
  }
  .box_busrow {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 12px;
    .box_busnum {
      display: flex;
      align-items: baseline;
      gap: 8px;
      flex: 1;
      min-width: 0;
      .text_bus-number {
        flex-shrink: 0;
        font-size: 16px;
        color: ${({ $kind }) => kindColor[$kind]};
        font-weight: 700;
        font-family: var(--mono);
      }
      .text__bus-direction {
        min-width: 0;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 12px;
        color: var(--sub);
      }
    }
    .box_bustime {
      flex-shrink: 0;
      white-space: nowrap;
      font-family: var(--mono);
      font-size: 26px;
      font-weight: 700;
      letter-spacing: -0.04em;
      line-height: 1;
      color: ${({ $color }) => $color};
      span {
        margin-left: 2px;
        font-family: var(--font);
        font-size: 12px;
        font-weight: 600;
        color: var(--sub);
      }
    }
  }

  .box_track {
    position: relative;
    height: 26px;

    .line {
      position: absolute;
      left: 0;
      right: 10px;
      top: 12px;
      height: 2px;
      border-radius: 1px;
      background: var(--line);
    }
    .trail {
      position: absolute;
      top: 12px;
      right: 10px;
      left: ${({ $pos }) => $pos}%;
      height: 2px;
      border-radius: 1px;
      background: linear-gradient(
        90deg,
        ${({ $color }) => $color},
        transparent
      );
      transition: left 0.8s ease;
    }
    .pin {
      position: absolute;
      right: 0;
      top: 6px;
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background: var(--accent);
      box-shadow: 0 0 10px var(--accent);
    }
    .bus {
      position: absolute;
      top: 0;
      left: ${({ $pos }) => $pos}%;
      transform: translateX(-50%);
      width: 30px;
      height: 26px;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: ${({ $kind }) => kindColor[$kind]};
      box-shadow:
        0 0 0 3px var(--bg),
        0 0 14px ${({ $color }) => $color};
      transition: left 0.8s ease;
    }
  }

  .box_meta {
    display: flex;
    justify-content: space-between;
    font-size: 11px;
    color: #7d8796;

    .text_bus-capacity {
      font-weight: 600;
      color: ${({ $warn }) => ($warn ? "var(--warn-text)" : "var(--sub)")};
    }
  }
`;
