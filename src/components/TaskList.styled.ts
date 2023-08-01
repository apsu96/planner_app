import styled from "styled-components";
import {
  BadgesContainer,
  Container,
  TaskLineContainer,
  Text,
} from "./UIKit.styled";
import { styled as styledMui } from "@mui/system";
import { Select, Option, selectClasses, optionClasses } from "@mui/base";
import ArrowDownIcon from "../images/ArrowDownIcon.png";
import ArrowUpIcon from "../images/ArrowUpIcon.png";

export const TaskListContainer = styled(Container)`
  height: 100%;
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
`;

export const StyledBadgesContainer = styled(BadgesContainer)`
  min-width: 100px;
  gap: 20px;
  @media (max-width: 820px) {
    gap: 5px;
  }
`;

export const CustomSelect = styledMui(Select)`
    background: #F9F9F9;
    border: none;
    color: #979797;
    font-family: "OpenSans", sans-serif;
    font-size: 12px;
    font-weight: 400;
    margin-right: 6px;
    text-align: left;
    width: 62px;
    position: relative;
    @media (min-width: 1441px) {
        font-size: 14px;
        width: 71px;
    }
    @media (max-width: 820px) {
        width: 24px;
        margin: 0;
        padding: 0;
    }
    ::after {
        content: url(${ArrowDownIcon});
        width: 16px;
        height: 16px;
        position: absolute;
        top:3px;
        right: -10px;
        @media (max-width: 820px) {
            content: none;
        }
        
    }
    &.${selectClasses.expanded} {
        &::after {
          content: url(${ArrowUpIcon});
          @media (max-width: 820px) {
            content: none;
        }
        }
      }
`;

export const OptionContainer = styled.ul`
  background-color: #f9f9f9;
  border-radius: 16px;
  padding: 10px 10px 16px;
  @media (max-width: 820px) {
    padding: 0px;
  }
`;

export const CustomOption = styledMui(Option)`
    list-style: none;
    color: #979797;
    font-family: "OpenSans", sans-serif;
    font-size: 12px;
    font-weight: 500;
    padding-bottom: 6px;
    line-height: 24px;
    cursor: default;
    @media (min-width: 1441px) {
        font-size: 14px;
    }
    @media (max-width: 820px) {
        padding: 0;
    }
    &:hover {
        color: #aa84a1;
    }
    &.${optionClasses.selected} {
       font-weight: 600;
    }
    &:last-of-type {
       padding-bottom: 0px;
      }
`;

export const TaskText = styled(Text)`
  @media (max-width: 820px) {
    font-size: 12px;
  }
`;
