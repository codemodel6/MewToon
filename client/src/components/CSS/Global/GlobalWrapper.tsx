/** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
- 컴포넌트를 감싸는 css
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/

import styled from "styled-components";
import { aroundRow, betweenRow, centerColumn } from "./GlobalDisplay";
import { FontSize, GrayColor, MainColor, WhiteColor } from "../Color/ColorNote";

export const GlobalWrapper = styled.div<{ height: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: ${(props) => props.height};
`;

export const AsideWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  background-color: pink;
`;

export const GlobalTabWrapper = styled.div<{ $scrollAction: boolean }>`
  ${centerColumn}
  width: 100%;
  height: 80px;
  position: sticky;
  // 스크롤에 따라 위치 변경
  top: ${(props) => (props.$scrollAction ? "0" : "80px")};
  transition: top 0.8s ease; // 속성, 지속시간, 타이밍함수
  background-color: ${WhiteColor.White100};
  z-index: 99;
  border-bottom: 1px solid ${GrayColor.Gray000};
  padding: 0 10% 0 10%;

  ul {
    ${betweenRow}
    width: 100%;
    height: 100%;

    li {
      ${centerColumn}
      height: 80%;
      font-size: 20px;
      color: ${GrayColor.Gray100};
      font-weight: bold;
      cursor: pointer;
      border-radius: 50%;

      &.here {
        background-color: ${MainColor.Main100};
        color: white;
      }
    }

    .move {
      width: 50px;
    }
  }
`;

export const GlobalSecondTabWrapper = styled.div<{ $scrollAction: boolean }>`
  ${betweenRow}
  width: 100%;
  height: 80px;
  position: sticky;
  background-color: ${WhiteColor.White100};
  border-bottom: 1px solid ${GrayColor.Gray000};
  transition: opacity 0.8s ease, top 0.8s ease; // 속성, 지속시간, 타이밍함수
  transition-delay: ${(props) => (props.$scrollAction ? "0s" : "0.2s")};
  z-index: 98;
  top: ${(props) => (props.$scrollAction ? "0" : "137px")};
  opacity: ${(props) => (props.$scrollAction ? "0" : "1")};
  padding: 0 10% 0 10%;

  .img-wrapper {
    width: 24%;
    height: 100%;
    background-color: red;
  }

  .dropdown-wrapper {
    display: flex;
    width: 14%;
    height: 100%;
    background-color: orange;
  }

  .input-wrapper {
    display: flex;
    width: 59%;
    height: 100%;
    border: 1px solid ${MainColor.Main100};
    /* border: 1px solid ${GrayColor.Gray000}; */

    input {
      font-size: ${FontSize.large};
      width: 95%;
      height: 100%;
      padding: 0 20px 0 20px;
      border: none;

      &:focus-within {
        outline: none;
      }
    }

    input::placeholder {
      color: rgba(65, 105, 225, 0.3);
    }

    button {
      background-color: ${MainColor.Main100};
      width: 5%;
      height: 100%;

      img {
        border: none;
        width: 50%;
        height: 50%;
      }
    }

    &:focus-within {
      outline: none;
    }
  }
`;
