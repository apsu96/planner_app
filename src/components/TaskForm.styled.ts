import styled from "styled-components";

export const TaskFormRowContainer = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 30px;
  width: 100%;
  @media (max-width: 820px) {
    flex-direction: column;
    gap: 12px;
  }
`;

export const TaskFormRowMContainer = styled(TaskFormRowContainer)`
  margin-top: 30px;
  @media (max-width: 820px) {
    margin-top: 20px;
  }
`;

export const TaskFormLongColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  @media (max-width: 820px) {
    width: 100%;
  }
`;

export const TaskFormShortColumnContainer = styled(TaskFormLongColumnContainer)`
  width: 40%;
  @media (max-width: 820px) {
    width: 100%;
  }
`;

export const RowContainer = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const TimeIconImage = styled.img`
  margin: auto 0;
`;
