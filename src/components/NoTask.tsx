import styled from "styled-components";
import { SmallText } from "./UIKit.styled";

const NoTaskContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px auto;
  width: 250px;
  height: 50px;
  border-radius: 12px;
  background-color: #f9f9f9;
  box-shadow: 0px 7px 16px rgba(0, 0, 0, 0.06);
  @media (max-width: 820px) {
    height: 50px;
    margin: 0 auto;
  }
`;

const NoTask = () => {
  return (
    <NoTaskContainer>
      <SmallText>No tasks scheduled for the day</SmallText>
    </NoTaskContainer>
  );
};

export default NoTask;
