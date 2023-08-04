import { styled as styledMui } from "@mui/system";
import { Select, Option, selectClasses, optionClasses } from "@mui/base";
import ArrowDownIcon from "../images/ArrowDownIcon.png";
import ArrowUpIcon from "../images/ArrowUpIcon.png";
import styled from "styled-components";

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
    cursor: pointer;
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
    &:disabled {
      cursor: not-allowed;
      transform: none;
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
    padding: 0 1Opx;
    margin: 0;
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
    cursor: pointer;
    @media (min-width: 1441px) {
        font-size: 14px;
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
