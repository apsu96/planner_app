import styled from "styled-components";
import { Link } from "react-router-dom";

export const ProfileContainer = styled.div`
  background: white;
  width: ${({ isMobile }: { isMobile: boolean }) =>
    isMobile ? "222px" : "242px"};
  box-sizing: border-box;
  padding: ${({ isMobile }: { isMobile: boolean }) =>
    isMobile ? "57px 0 0 20px" : "32px 0 0 40px"};
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.06);
`;

export const AvatarUsernameContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 20px;
  margin-top: 60px;
`;

export const Username = styled.p`
  font-family: OpenSans, sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: #53514d;
  margin: 0;
  @media (min-width: 1441px) {
    font-size: 16px;
  }
`;

export const Status = styled.p`
  font-family: OpenSans, sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #979797;
  margin: 0;
  @media (min-width: 1441px) {
    font-size: 14px;
  }
`;

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 60px;
`;

export const MenuItem = styled(Link)`
  background: transparent;
  color: ${({ color }) => {
    if (color === "selected") {
      return "#AA84A1";
    }
    return "#53514D";
  }};
  font-family: OpenSans, sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 39px;
  border-color: transparent;
  border-right: ${({ color }) => {
    if (color === "selected") {
      return "3px solid #AA84A1";
    }
    return "none";
  }};
  border-radius: 2px;
  text-align: left;
  display: flex;
  align-items: center;
  text-decoration: none;

  &:hover {
    background: rgba(170, 132, 161, 0.1);
    border-radius: 5px;
  }
  @media (min-width: 1441px) {
    font-size: 16px;
  }
`;

export const MenuIconContainer = styled.div`
  margin-right: 16px;
  display: flex;
  align-items: center;
`;

export const MobileLogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding-right: 27px;
`;

export const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f9f9f9;
  border-radius: 50%;
  width: 50px;
  height: 50px;
`;
