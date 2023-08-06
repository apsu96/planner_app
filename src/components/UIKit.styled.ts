import styled from "styled-components";

export const AppContainer = styled.div`
  min-height: 100vh;
  max-width: 100vw;
  width: 100%;
  background-color: #f9f9f9;
  display: flex;
`;

export const DrawerContainer = styled.div`
  display: ${({ visible }: { visible: boolean }) =>
    visible ? "flex" : "none"};
  max-width: 242px;
  width: ${({ visible, isMobile }: { visible: boolean; isMobile: boolean }) =>
    visible && isMobile ? "none" : "100%"};
  box-sizing: border-box;
`;

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ isMobile }: { isMobile: boolean }) =>
    isMobile ? "68px 20px 40px" : "40px 40px 44px 30px"};
  gap: ${({ isMobile }: { isMobile: boolean }) => (isMobile ? "20px" : "28px")};
  width: 100%;
`;

export const MobileMenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PageTitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const PageTitle = styled.p`
  font-family: OpenSans, sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  color: #53514d;
`;

export const Container = styled.div`
  display: flex;
  border-radius: 20px;
  padding: 30px 40px;
  background-color: white;
  min-width: 549px;
  width: 100%;
  box-sizing: border-box;
  margin: 0 auto;
  flex-direction: column;
  @media (max-width: 1420px) {
    min-width: 335px;
    padding: 20px;
  }
`;

export const Title = styled.h1`
  font-size: 20px;
  font-family: "OpenSans", sans-serif;
  font-weight: 600;
  color: #53514d;
  margin: 0;
`;

export const Text = styled.p`
  font-size: 14px;
  font-family: "OpenSans", sans-serif;
  font-weight: 400;
  color: #53514d;
  @media (min-width: 1441px) {
    font-size: 18px;
  }
`;

export const Input = styled.input`
  padding: 16px 20px;
  font-size: 12px;
  font-family: "OpenSans", sans-serif;
  font-weight: 400;
  background-color: #f9f9f9;
  outline: none;
  border-radius: 12px;
  border: none;
  width: 100%;
  box-sizing: border-box;
  @media (min-width: 1441px) {
    font-size: 16px;
  }
`;

export const TimeInput = styled.input`
  padding: 16px 20px;
  font-size: 12px;
  font-family: "OpenSans", sans-serif;
  font-weight: 400;
  background-color: #f9f9f9;
  outline: none;
  border-radius: 12px;
  border: none;
  width: 100%;
  max-width: 80px;
  box-sizing: border-box;
  text-align: center;
  @media (min-width: 1441px) {
    font-size: 16px;
  }
  @media (max-width: 820px) {
    max-width: 100%;
  }
`;

export const LargeButton = styled.button`
  padding: 16px 75px;
  color: white;
  font-size: 14px;
  font-weight: 400;
  border-radius: 12px;
  background-color: #53514d;
  outline: none;
  border: none;
  height: 48px;
  max-width: 180px;
  cursor: pointer;
  &:hover:enabled {
    background-color: #aa84a1;
  }
  &:active {
    transform: translateY(1px);
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }

  @media (min-width: 1441px) {
    font-size: 16px;
    height: 54px;
  }
  @media (max-width: 820px) {
    max-width: 100%;
    height: 50px;
  }
`;

export const SmallButton = styled(LargeButton)`
  padding: 0px 16px;
  height: 24px;
  font-size: 12px;
  @media (min-width: 1441px) {
    font-size: 14px;
    height: 40px;
  }
`;

export const IconWrapperButton = styled.button`
  background: transparent;
  margin: 0;
  padding: 0;
  width: auto;
  height: 30px;
  outline: 0;
  border: none;
  text-align: center;
  &:disabled {
    cursor: not-allowed;
    transform: none;
  }
`;

export const RowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CustomSelect = styled.select`
  background-color: #f9f9f9;
  width: 100%;
  font-size: 12px;
  font-family: "OpenSans", sans-serif;
  font-weight: 400;
  padding: 15px 20px;
  border-radius: 12px;
  border: none;
  outline: none;
  box-sizing: border-box;
  @media (min-width: 1441px) {
    font-size: 16px;
  }
`;

export const CustomSelectOption = styled.option`
  background-color: #f9f9f9;
  width: 260px;
  font-size: 12px;
  font-family: "OpenSans", sans-serif;
  font-weight: 400;
  padding: 16px 20px 16px;
  @media (min-width: 1441px) {
    font-size: 16px;
  }
`;

export const SmallText = styled.p`
  color: #979797;
  font-size: 12px;
  font-family: "OpenSans", sans-serif;
  font-weight: 400;
  margin: 0;
  cursor: default;
  @media (min-width: 1441px) {
    font-size: 14px;
  }
`;

export const TaskLineContainer = styled.div`
  display: flex;
  background-color: #f9f9f9;
  border-radius: 16px;
  padding: 12px 12px 12px 0;
  height: 48px;
  box-sizing: border-box;
  align-items: center;
  width: 97%;
`;

export const MoveButton = styled.div`
  width: 3px;
  height: 28px;
  background-color: #aa84a1;
  margin-right: 17px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 12px;
`;

export const ActionIcon = styled.img`
  height: 24px;
  width: 24px;
  cursor: ${({ disable }: { disable: boolean }) =>
    disable ? "not-allowed" : "pointer"};
  &:active {
    transform: ${({ disable }: { disable: boolean }) =>
      disable ? "none" : "translateY(1px)"};
  }

  @media (min-width: 1441px) {
    width: 30px;
    height: 30px;
  }
`;

export const BadgesContainer = styled.div`
  margin-left: auto;
  display: flex;
  gap: 15px;
  align-items: center;
  min-width: 201px;
  justify-content: flex-end;
`;

export const ChartBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;
  margin: 0 auto;
  @media (min-width: 1441px) {
    width: 70%;
    height: 70%;
  }
`;

export const CategoryContainer = styled.div`
  /* width: 41px; */
`;

export const TimeContainer = styled.div`
  /* width: 70px; */
  /* text-align: center; */
  display: flex;
  align-items: center;
  @media (min-width: 1441px) {
    min-width: 100px;
  }
`;
