import styled from "styled-components";

export const MyDayContainer = styled.div`
  width: 100%;
  height: calc(100vh - 88px - 44px);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 30px;
  box-sizing: border-box;
  @media (max-width: 1420px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(1fr);
    grid-row-gap: 20px;
  }
`;

export const MyDayColumnContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-row-gap: 20px;
  margin: 0 auto;
  height: 100%;
  width: 100%;
`;
