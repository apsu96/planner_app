import { styled as styledMui } from "@mui/system";
import { Select, Option, selectClasses, optionClasses } from "@mui/base";
import ArrowDownIcon from "../images/ArrowDownIcon.png";
import ArrowUpIcon from "../images/ArrowUpIcon.png";
import UpIcon from "../images/UpIcon.png";
import DownIcon from "../images/DownIcon.png";
import styled from "styled-components";

export const CustomSelect = styledMui(Select)`
    background: #F9F9F9;
    border: none;
    color: ${({ variant }: { variant: string | undefined }) =>
      variant === "taskForm" ? "black" : "#53514D"};
    font-family: "OpenSans", sans-serif;
    font-size: 12px;
    font-weight: 400;
    margin-right: ${({ variant }: { variant: string | undefined }) =>
      variant === "taskForm" ? "0" : "6px"};
    text-align: left;
    width: ${({ variant }: { variant: string | undefined }) =>
      variant === "taskForm" ? "100%" : "62px"};
    position: relative;
    cursor: pointer;
    border-radius: ${({ variant }: { variant: string | undefined }) =>
      variant === "taskForm" ? "12px" : "none"};
    padding: ${({ variant }: { variant: string | undefined }) =>
      variant === "taskForm" ? "16px 12px 16px 20px" : "none"};
    @media (min-width: 1441px) {
        font-size: 14px;
        width: ${({ variant }: { variant: string | undefined }) =>
          variant === "taskForm" ? "100%" : "71px"};
    }
    @media (max-width: 820px) {
        width:  ${({ variant }: { variant: string | undefined }) =>
          variant === "taskForm" ? "100%" : "24px"};
        margin: 0;
        padding: ${({ variant }: { variant: string | undefined }) =>
          variant === "taskForm" ? "16px 12px 16px 20px" : "0"};
    }
    ::after {
        content: ${({ variant }: { variant: string | undefined }) =>
          variant === "taskForm"
            ? `url(${DownIcon})`
            : `url(${ArrowDownIcon})`};
        width: ${({ variant }: { variant: string | undefined }) =>
          variant === "taskForm" ? "24px" : "16px"};
        height: ${({ variant }: { variant: string | undefined }) =>
          variant === "taskForm" ? "24px" : "16px"};
        position: absolute;
        top:${({ variant }: { variant: string | undefined }) =>
          variant === "taskForm" ? "10px" : "3px"};
        right: ${({ variant }: { variant: string | undefined }) =>
          variant === "taskForm" ? "12px" : "-10px"};
        @media (max-width: 820px) {
            content: ${({ variant }: { variant: string | undefined }) =>
              variant === "taskForm" ? `url(${DownIcon})` : "none"};
        }
        img {
            width: 24px;
            height: 24px;
        }
        
    }
    &:disabled {
      cursor: not-allowed;
      transform: none;
    }
    &.${selectClasses.expanded} {
        border-radius: 12px 12px 0 0;
        &::after {
          content: ${({ variant }: { variant: string | undefined }) =>
            variant === "taskForm" ? `url(${UpIcon})` : `url(${ArrowUpIcon})`};;
          @media (max-width: 820px) {
            content: ${({ variant }: { variant: string | undefined }) =>
              variant === "taskForm" ? `url(${UpIcon})` : "none"};
        }
        }
      }
`;

export const OptionContainer = styled.ul`
  border-radius: 16px;
  padding: 10px 10px 16px;
  @media (max-width: 820px) {
    padding: 0 1Opx;
    margin: 0;
  }
`;

export const OptionBox = styled(OptionContainer)`
  display: flex;
  flex-direction: column;
  border-radius: 0 0 14px 14px;
  background-color: #f9f9f9;
  padding: 0;
  margin: 0;
  gap: 12px;
`;

export const CustomOption = styledMui(Option)`
    list-style: none;
    color: ${({
      variant,
    }: {
      variant: string | undefined;
      customwidth: number | undefined;
    }) => (variant === "taskForm" ? "#53514D" : "#979797")};
    font-family: "OpenSans", sans-serif;
    font-size: 12px;
    font-weight: 500;
    padding-bottom: ${({
      variant,
    }: {
      variant: string | undefined;
      customwidth: number | undefined;
    }) => (variant === "taskForm" ? "none" : "6px")};
    line-height: 24px;
    cursor: pointer;
    width: ${({
      customwidth,
    }: {
      variant: string | undefined;
      customwidth: number | undefined;
    }) => (customwidth ? customwidth - 20 + "px" : "auto")};
    padding-left: ${({
      customwidth,
    }: {
      variant: string | undefined;
      customwidth: number | undefined;
    }) => (customwidth ? "20px" : "none")};
    @media (min-width: 1441px) {
        font-size: 14px;
    }
    &:hover {
        opacity: 0.8;
    }
    &.${optionClasses.selected} {
       color: #AA84A1;
    }
    &:last-of-type {
       padding-bottom: ${({
         variant,
       }: {
         variant: string | undefined;
         customwidth: number | undefined;
       }) => (variant === "taskForm" ? "20px" : "0px")};
      }
`;
