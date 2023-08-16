import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 88px - 44px);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-row-gap: 30px;
  grid-column-gap: 20px;
  box-sizing: border-box;
  @media (max-width: 1420px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(1fr);
  }
`;
