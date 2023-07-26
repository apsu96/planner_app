import styled from "styled-components";

export const AppContainer = styled.div`
  min-height: 100vh;
  max-width: 100vw;
  width: 100%;
  background-color: #E5E5E5;
  display: flex;
`;

export const DrawerContainer = styled.div`
    display: ${({visible}: {visible: boolean}) => visible? 'flex': 'none'};
    max-width: 242px;
    width: 100%;
`;

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 40px 44px 30px;
  padding: ${({ isMobile }: { isMobile: boolean }) => {
        if (isMobile) {
            return '68px auto 40px';
        }
        return '40px 40px 44px 30px';
    }};
  gap: ${({ isMobile }: { isMobile: boolean }) => isMobile ? '20px' : '28px'};
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
    color: #53514D;
`;

export const Container = styled.div`
    display: flex;
    border-radius: 20px;
    padding: 30px 40px;
    background-color: white;
    max-width: 549px;
    width: 100%;
    box-sizing: border-box;
    margin: 0 auto;
    flex-direction: column;
`;

export const Title = styled.h1`
    font-size: 20px;
    font-family: 'OpenSans', sans-serif;
    font-weight: 600;
    color: #53514D;
    margin: 0;
`;

export const Text = styled.p`
    font-size: 14px;
    font-family: 'OpenSans', sans-serif;
    font-weight: 400;
    color: #53514D;
`;

export const Input = styled.input`
    padding: 16px 20px;
    font-size: 12px;
    font-family: 'OpenSans', sans-serif;
    font-weight: 400;
    background-color: #F9F9F9;
    outline: none;
    border-radius: 12px;
    border: none;
    width: 260px;   
    box-sizing: border-box;
`

export const TimeInput = styled.input`
    padding: 16px 20px;
    font-size: 12px;
    font-family: 'OpenSans', sans-serif;
    font-weight: 400;
    background-color: #F9F9F9;
    outline: none;
    border-radius: 12px;
    border: none;
    width: 80px;   
    box-sizing: border-box;
    text-align: center;
`

export const LargeButton = styled.button`
    padding: 16px 75px;
    color: white;
    font-size: 14px;
    font-weight: 400;
    border-radius: 12px;
    background-color: #53514D;
    outline: none;
    border: none;
    &:hover {
        background-color: #AA84A1;
    }
    &:active {
        transform: translateY(1px);
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
    background-color: #F9F9F9;
    width: 260px;
    font-size: 12px;
    font-family:'OpenSans', sans-serif;
    font-weight: 400;
    padding: 15px 20px;
    border-radius: 12px;
    border: none;
    outline: none;
    box-sizing: border-box;
`;

export const CustomSelectOption = styled.option`
    background-color: #F9F9F9;
    width: 260px;
    font-size: 12px;
    font-family:'OpenSans', sans-serif;
    font-weight: 400;
    padding: 16px 20px 16px;
`;

export const SmallText = styled.p`
    color: #979797;
    font-size: 12px;
    font-family: 'OpenSans', sans-serif;
    font-weight: 400;
    margin: 0;
`;

export const TaskLineContainer = styled.div`
    display: flex;
    background-color: #F9F9F9;
    border-radius: 16px;
    padding: 12px 12px 12px 0;
    height: 48px;
    box-sizing: border-box;
    align-items: center;
    max-width: 460px;
    width: 100%;
`;

export const MoveButton = styled.div`
    width: 3px;
    height: 28px;
    background-color: #AA84A1;
    margin-right: 17px;
`;

export const ButtonsContainer = styled.div`
    display: flex;
    gap: 12px;
`

export const ActionIcon = styled.img`
    height: 24px;
    width: 24px;
    &:active {
        transform: translateY(1px);
    }
`;

export const BadgesContainer = styled.div`
    margin-left: auto;
    display: flex;
    gap: 31px;
    align-items: center;
`;

export const ChartBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 400px;
    height: 220px;
    margin: 20px auto;
`;