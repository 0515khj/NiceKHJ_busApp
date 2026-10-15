import styled from "styled-components";

export const BusHomeWrap = styled.div`
  .box_today {
    font-size: 12px;
  }
  .box_bus-reload {
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
    .text_bus-title {
      font-weight: 700;
      font-size: 24px;
    }
    .button_reload {
      background: #fff;
    }
  }
  .box_button {
    display: flex;
    background: #dcdcdc;
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
