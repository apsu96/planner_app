import styled from "styled-components";

export const ProfileContainer = styled.div`
    background: white;
    max-width: 242px;
    width: 100%;
    box-sizing: border-box;
    padding: 32px 0 0 40px;
    disply: flex;
    flex-direction: column;
    min-height: 100vh;
`

export const AvatarUsernameContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    gap: 20px;
    margin-top: 60px;
`

export const UsernameContainer = styled.div`
`

export const Username = styled.p`
    font-family: OpenSans, sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    color: #53514D;
    margin: 0;
`

export const Status = styled.p`
    font-family: OpenSans, sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: #979797;
    margin: 0;
`

export const MenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 60px;
    gap: 16px;
`

export const MenuItem = styled.button`
    background: transparent;
    color: #53514D;
    font-family: OpenSans, sans-serif;
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
    border-color: transparent;
    text-align: left;
    display: flex;
    align-items: center;
`

export const MenuItemContainer = styled.div`
   
`

export const MenuIcon = styled.img`
    margin-right: 16px;
`


