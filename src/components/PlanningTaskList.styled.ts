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
  overflow-y: auto;
  margin: 20px 0 0;
  width: 100%;
  height: 230px;

  ::-webkit-scrollbar {
    width: 6px;
    height: 100%;
  }

  ::-webkit-scrollbar-thumb {
    background: #eeddea;
  }

  ::-webkit-scrollbar-track {
    background: #f9f9f9;
  }
  @media (min-width: 1441px) {
    height: 65%;
  }
  @media (max-width: 820px) {
    height: auto;
  }
`;
