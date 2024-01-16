import styled from "styled-components";
import { MainColor, WhiteColor } from "../Color/ColorNote";
import { aroundRow, centerColumn } from "./GlobalDisplay";
import { useEffect, useState } from "react";
import { handleScroll } from "../Function/MyFunction";

const GlobalTitleWrapper = styled.div<{ scrollBoolean: boolean }>`
  width: 100%;
  background-color: royalblue;
  height: 100%;

  .imgDiv {
    position: relative;
    width: 100%;
    height: 600px;
    background-size: cover; // 이미지가 배경을 다 채운다
    background-position: center; // 배경의 초기값을 가운데로
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

  .tabDiv {
    ${centerColumn}
    width: 100%;
    height: 80px;
    background-color: red;
    position: sticky;
    // 스크롤에 따라 위치 변경
    top: ${(props) => (props.scrollBoolean ? "0" : "80px")};

    transition: top 0.8s ease; // 속성, 지속시간, 타이밍함수

    ul {
      ${aroundRow}
      width: 80%;
      height: 100%;
      background-color: blue;

      li {
        ${centerColumn}
        width: 200px;
        height: 100%;
        font-size: 25px;
        color: ${MainColor.Main100};
        font-weight: bold;
      }
    }
  }
`;

// 인터페이스 : 프롭스
interface TitleProps {
  imageUrl: string;
  mainText: string;
  subText: string;
}

const GlobalTitle: React.FC<TitleProps> = ({ imageUrl, mainText, subText }) => {
  // 스크롤 위치 값
  const [scrollData, setScrollData] = useState<number>(0);
  // 스크롤이 진행중인지 확인
  const [scrollBoolean, setScrollBoolean] = useState<boolean>(false);

  /** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  - 훅 기능 : 스크롤이 위, 아래로 이동함에 따라  tabDiv 위치 변경
  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
  useEffect(() => {
    const scrollCallback = () => {
      handleScroll(scrollData, setScrollData, setScrollBoolean);
    };
    window.addEventListener("scroll", scrollCallback);
    return () => {
      window.removeEventListener("scroll", scrollCallback);
    };
  }, [scrollData]);

  return (
    <GlobalTitleWrapper scrollBoolean={scrollBoolean}>
      <div className="imgDiv" style={{ backgroundImage: `url(${imageUrl})` }}>
        <div className="textDiv">
          <p>{mainText}</p>
          <h1>{subText}</h1>
        </div>
      </div>
      <div className="tabDiv">
        <ul>
          <li>Teacher</li>
          <li>Student</li>
        </ul>
      </div>
    </GlobalTitleWrapper>
  );
};

export default GlobalTitle;
