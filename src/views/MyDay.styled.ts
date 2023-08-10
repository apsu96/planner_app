import styled from "styled-components";

export const MyDayContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 30px;
  width: 100%;
  height: calc(100vh - 88px - 44px);
  @media (max-width: 1420px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(1fr);
    grid-row-gap: 20px;
  }
`;

export const MyDayColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0 auto;
  height: 100%;
  width: 100%;
`;
