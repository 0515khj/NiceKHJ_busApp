import type { BusKind } from "@/utils/busFormat";
import styled from "styled-components";

const badgeColor: Record<BusKind, string> = {
  seat: "var(--bus-seat)",
  general: "var(--bus-general)",
  village: "var(--bus-village)",
};

export const BusRowWrap = styled.div<{
  $kind: BusKind;
  $soon: boolean;
  $warn: boolean;
}>`
  display: flex;
  flex-direction: column;
  gap: 10px;
  & + & {
    margin-top: 16px;
    padding-top: 16px;
    border-top: 1px solid var(--line);
  }
  .box_busrow {
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* gap: 10px; */
    .box_busnum {
      display: flex;
      align-items: center;
      gap: 8px;
      flex: 0.9;
      min-width: 0;
      .text_bus-number {
        flex-shrink: 0;
        padding: 2px 4px;
        background: ${({ $kind }) => badgeColor[$kind]};
        border-radius: 4px;
        font-weight: bold;
        font-family: "Apple SD Gothic Neo";
        color: #fff;
      }
      .text__bus-direction {
        min-width: 0;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 14px;
      }
    }
    .box_bustime {
      font-size: 18px;
      font-weight: 700;
      color: ${({ $soon }) => ($soon ? "var(--accent)" : "var(--text)")};
      span {
        font-size: 14px;
      }
    }
  }
  .test11 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .box_businfo {
      display: flex;
      align-items: center;
      gap: 8px;
      .text_bus-capacity {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        padding: 2px 8px;
        border-radius: 6px;
        font-size: 12px;
        font-weight: ${({ $warn }) => ($warn ? 700 : 500)};
        background: ${({ $warn }) =>
          $warn ? "var(--warn-bg)" : "var(--chip-bg)"};
        color: ${({ $warn }) =>
          $warn ? "var(--warn-text)" : "var(--chip-text)"};
        svg {
          flex-shrink: 0;
        }
        strong {
          display: grid;
          place-items: center;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: currentColor;
          color: #fff;
          font-size: 10px;
        }
      }
      .text_bus-soon {
        font-size: 12px;
        color: #8a4100;
      }
    }
    .box_nextbus {
      font-size: 14px;
    }
  }
  .box_off-stop {
    font-size: 14px;
    color: #1f4fd1;
  }
`;
