import styled from "styled-components";

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
`

export const Title = styled.h1`
    font-size: 20px;
    font-family: 'OpenSans', sans-serif;
    font-weight: 600;
    color: #53514D;
`

export const InputLabel = styled.p`
    font-size: 14px;
    font-family: 'OpenSans', sans-serif;
    font-weight: 400;
    color: #53514D;
    
`

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
`

export const RowContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
`

export const ColumnContainer = styled.div`
    display: flex;
    flex-direction: column;
`

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
`

export const CustomSelectOption = styled.option`
    background-color: #F9F9F9;
    width: 260px;
    font-size: 12px;
    font-family:'OpenSans', sans-serif;
    font-weight: 400;
    padding: 16px 20px 16px;
`
