import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    box-sizing: border-box;
`

export const PlanningRow = styled.div`
    display: flex;
    height: 50%;
    gap: 30px;
    box-sizing: border-box;
    @media (max-width: 1420px) {
        flex-direction: column;
        gap: 20px;
        height: auto;
    }
`
