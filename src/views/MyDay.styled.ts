import styled from "styled-components"

export const MyDayContainer = styled.div`
    display: flex;
    gap: 30px;
    height: 100%;
    @media (max-width: 1420px) {
        flex-direction: column;
        gap: 20px;
    }
`;

export const MyDayRowContainer = styled.div`
    width: 50%;
    height: 100%;
    @media (max-width: 1420px) {
        width: 100%;
        height: auto
    }
`

export const MyDayColumnContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: 0 auto;
    height: 100%;
`


