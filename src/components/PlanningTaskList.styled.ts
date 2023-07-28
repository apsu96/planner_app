import styled from "styled-components";

export const PlanningColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const TasksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  overflow-y: scroll;
  margin: 20px 0 0;
  height: 217px;
  max-width: 491px;
  width: 100%;

  ::-webkit-scrollbar {
    width: 6px;
    color: #eeddea;
    background-color: #f9f9f9;
    margin-left: 16px;
  }
`;
