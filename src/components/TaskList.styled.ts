import styled from "styled-components";
import {
  BadgesContainer,
  Container,
  SmallButton,
  TaskLineContainer,
  Text,
} from "./UIKit.styled";

export const TaskListContainer = styled(Container)`
  /* height: 100%; */
`;

export const TaskListBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  gap: 12px;
  overflow-y: auto;
  height: 530px;
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
  @media (max-width: 820px) {
    margin-top: 20px;
    height: auto;
  }
  @media (min-width: 1441px) {
    height: 90%;
  }
`;

export const TaskInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  p {
    margin: 0;
  }
`;

export const TaskContainer = styled(TaskLineContainer)`
  height: auto;
  opacity: ${({ isDone }: { isDone: boolean }) => (isDone ? "0.5" : "1")};
`;

export const StyledBadgesContainer = styled(BadgesContainer)`
  min-width: 100px;
  gap: 20px;
  @media (max-width: 820px) {
    gap: 5px;
  }
`;

export const TaskText = styled(Text)`
  @media (max-width: 820px) {
    font-size: 12px;
  }
`;

export const EditButton = styled(SmallButton)`
  padding: 0px 22.5px;
  opacity: 0.5;
  @media (max-width: 820px) {
    padding: 0px 21.7px;
  }
  &:hover:enabled {
    background-color: #53514d;
  }
`;
