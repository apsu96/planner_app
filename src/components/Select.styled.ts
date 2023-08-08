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
    text-align: ${({
      variant,
      timetype,
    }: {
      variant: string | undefined;
      timetype: string | undefined;
      hideicon: string | undefined;
    }) => (timetype === "true" && variant !== "taskLine" ? "center" : "left")};
    margin-right: ${({ variant }: { variant: string | undefined }) =>
      variant === "taskForm" || variant === "taskLine" || variant === "hidden"
        ? "0"
        : "6px"};
    max-width: ${({
      variant,
      timetype,
    }: {
      variant: string | undefined;
      timetype: string | undefined;
    }) => (timetype === "true" && variant !== "taskLine" ? "80px" : "unset")};
    width: ${({ variant }: { variant: string | undefined }) =>
      variant === "taskLine"
        ? "82px"
        : variant === "hidden"
        ? "16px"
        : variant === "taskForm"
        ? "100%"
        : "62px"};
        height: ${({ variant }: { variant: string | undefined }) =>
          variant === "hidden" ? "16px" : "none"};
    height: ${({ variant }: { variant: string | undefined }) =>
      variant === "hidden" ? "19px" : "none"};
    position: relative;
    cursor: pointer;
    border-radius: ${({ variant }: { variant: string | undefined }) =>
      variant === "taskForm" ? "12px" : "none"};
    padding: ${({
      variant,
      timetype,
    }: {
      variant: string | undefined;
      timetype: string | undefined;
    }) =>
      variant === "hidden"
        ? "none"
        : timetype === "true" && variant !== "taskLine"
        ? "16px 20px"
        : variant === "taskForm"
        ? "16px 12px 16px 20px"
        : "none"};
    @media (min-width: 1441px) {
        font-size: 14px;
        width: ${({ variant }: { variant: string | undefined }) =>
          variant === "taskLine"
            ? "auto"
            : variant === "taskForm" || variant === "taskLine"
            ? "100%"
            : variant === "hidden"
            ? "0px"
            : "71px"};
            height: ${({ variant }: { variant: string | undefined }) =>
              variant === "hidden" ? "21px" : "none"};
    }
    @media (max-width: 820px) {
        width:  ${({ variant }: { variant: string | undefined }) =>
          variant === "taskLine"
            ? "66px"
            : variant === "hidden"
            ? "0"
            : variant === "taskForm"
            ? "100%"
            : variant === "category"
            ? "41px"
            : "24px"};
        max-width: ${({ timetype }: { timetype: string | undefined }) =>
          timetype === "true" ? "100%" : "unset"};
        margin: 0;
        padding: ${({ variant }: { variant: string | undefined }) =>
          variant === "taskForm"
            ? "16px 12px 16px 20px"
            : variant === "category"
            ? "0 0 0 5px"
            : "0"};
            height: ${({ variant }: { variant: string | undefined }) =>
              variant === "hidden" ? "17px" : "none"};
    }
    ::after {
        content: ${({
          variant,
          hideicon,
        }: {
          variant: string | undefined;
          hideicon: string | undefined;
          timetype: string | undefined;
        }) =>
          hideicon === "true"
            ? "none"
            : variant === "taskForm"
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
            content: ${({
              variant,
              timetype,
            }: {
              variant: string | undefined;
              timetype: string | undefined;
            }) =>
              variant === "taskForm" && timetype !== "true"
                ? `url(${DownIcon})`
                : "none"};
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
          content: ${({
            variant,
            hideicon,
          }: {
            variant: string | undefined;
            hideicon: string | undefined;
          }) =>
            hideicon === "true"
              ? "none"
              : variant === "taskForm"
              ? `url(${UpIcon})`
              : `url(${ArrowUpIcon})`};;
          @media (max-width: 820px) {
            content: ${({
              variant,
              timetype,
            }: {
              variant: string | undefined;
              timetype: string | undefined;
            }) =>
              variant === "taskForm" && timetype !== "true"
                ? `url(${UpIcon})`
                : "none"};
        }
        }
      }
`;

export const OptionContainer = styled.ul`
  display: flex;
  flex-direction: column;
  border-radius: 0 0 16px 16px;
  margin: 10px 0;
  padding: 0 5px;
  background-color: #f9f9f9;
  width: 77px;
  @media (max-width: 820px) {
    padding: 0 1Opx;
    margin: 0;
  }
`;

export const CategoryOptionContainer = styled(OptionContainer)`
  @media (max-width: 820px) {
    width: 43px;
  }
`;

export const OptionBox = styled(OptionContainer)`
  border-radius: 0 0 14px 14px;
  padding: 0;
  margin: 0;
  gap: 12px;
  max-height: 98px;
  overflow-y: auto;
  width: auto;
  ::-webkit-scrollbar {
    width: 6px;
    height: 50%;
  }

  ::-webkit-scrollbar-thumb {
    background: #eeddea;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
    background-clip: padding-box;
  }
`;

export const LTimeOptionBox = styled(OptionBox)`
  position: absolute;
  top: 10px;
  border-radius: 0 0 0 14px;
  gap: 1px;
  padding-top: 1px;
  padding-bottom: 1px;
  ::-webkit-scrollbar {
    width: 1px;
    scroll-padding: 1em;
    scroll-margin: 3em;
    scroll-behavior: smooth;
  }
  @media (max-width: 820px) {
    top: 0;
  }
`;

export const RTimeOptionBox = styled(OptionBox)`
  position: absolute;
  left: -35px;
  top: 10px;
  border-radius: 0 0 14px 0;
  gap: 1px;
  padding-top: 1px;
  padding-bottom: 1px;
  ::-webkit-scrollbar {
    width: 1px;
    /* scroll-padding: 1em;
    scroll-margin: 3em;
    scroll-behavior: smooth; */
  }
  @media (max-width: 820px) {
    top: 0;
  }
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
    line-height: 24px;
    cursor: pointer;
    width: ${({
      variant,
      customwidth,
    }: {
      variant: string | undefined;
      customwidth: number | undefined;
    }) =>
      customwidth && (variant === "taskLine" || variant === "hidden")
        ? "50px"
        : customwidth
        ? customwidth - 20 + "px"
        : "auto"};
    padding-left: ${({
      variant,
      timetype,
    }: {
      variant: string | undefined;
      customwidth: number | undefined;
      timetype: string | undefined;
    }) =>
      variant === "taskForm" && timetype === "true"
        ? "12px"
        : variant === "taskForm"
        ? "20px"
        : "0"};
    text-align: ${({
      timetype,
    }: {
      timetype: string | undefined;
      variant: string | undefined;
      customwidth: number | undefined;
    }) => (timetype === "true" ? "center" : "left")};
    @media (min-width: 1441px) {
        font-size: 14px;
    }
    @media(max-width: 820px) {
      width: ${({
        variant,
      }: {
        variant: string | undefined;
        customwidth: number | undefined;
      }) => (variant === "taskLine" || variant === "hidden") && "33px"};
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
