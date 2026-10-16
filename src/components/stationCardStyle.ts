import styled from "styled-components";

export const StationCardWrap = styled.section`
  margin-top: 14px;
  padding: 16px 16px 18px;
  background: repeating-radial-gradient() (255, 255, 255, 0.03);
  border-top: 1px solid var(--line);
  border-radius: 20px;

  .text_bus-station {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 16px;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: -0.01em;
    color: var(--text);

    &::before {
      content: "";
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: var(--accent);
      flex-shrink: 0;
    }
  }
`;
