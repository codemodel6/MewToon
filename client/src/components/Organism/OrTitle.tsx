/** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
- 모든 컴포넌트의 시작 - 이미지와 탭 div가 있는 컴포넌트
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/

import styled from "styled-components";
import { GrayColor, MainColor, WhiteColor } from "../CSS/Color/ColorNote";
import { aroundRow, centerColumn } from "../CSS/Global/GlobalDisplay";
import { useEffect, useState } from "react";
import { handleScroll } from "../Function/MyFunction";

const GlobalTitleWrapper = styled.div`
  width: 100%;
  background-color: royalblue;

  .imgDiv {
    position: relative;
    width: 100%;
    height: 600px;
    background-size: 100% auto;
    background-position: center 80%; // 배경의 초기값을 80%
    background-repeat: no-repeat; // 배경보다 이미지가 작아도 반복하지 않음

    .textDiv {
      position: absolute;
      bottom: 10%;
      left: 100px;
      color: ${WhiteColor.White100};

      p {
        font-size: 25px;
      }

      h1 {
        font-size: 50px;
      }
    }
  }
`;

/** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
- 인터페이스 : 해당 컴포넌트의 props
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
interface TitleProps {
  imageUrl: string;
  mainText: string;
  subText: string;
}

const GlobalTitle: React.FC<TitleProps> = ({ imageUrl, mainText, subText }) => {
  return (
    <GlobalTitleWrapper>
      <div className="imgDiv" style={{ backgroundImage: `url(${imageUrl})` }}>
        <div className="textDiv">
          <p>{mainText}</p>
          <h1>{subText}</h1>
        </div>
      </div>
    </GlobalTitleWrapper>
  );
};

export default GlobalTitle;
