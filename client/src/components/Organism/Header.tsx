import styled from "styled-components";
import { MainColor, FontSize, BlackColor } from "../CSS/Color/ColorNote";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { aroundRow, betweenRow } from "../CSS/Global/GlobalDisplay";
import onion from "../CSS/image/onion.png";

const MyHeader = styled.header<{ scrolling: boolean }>`
  display: flex;
  flex-direction: row;
  background-color: rgba(0, 0, 0, 0.2);
  height: 80px;
  width: 100%;
  position: fixed;
  z-index: 999;
  // 스크롤에 따라 보이고 안보임
  transform: translateY(${(props) => (props.scrolling ? "-100%" : "0")});
  transition: transform 0.8s ease; // 속성, 지속시간, 타이밍함수

  .menuDiv {
    ${betweenRow}
    width: 100%;
    height: 100%;

    .menuButton {
      width: 200px;
      height: 40px;
      font-size: ${FontSize.large};
      color: ${MainColor.Main100};
      border-radius: 10px;
      font-weight: bold;
      transform: translateY(${(props) => (props.scrolling ? "-100%" : "0")});
      transition: transform 1s ease; // 속성, 지속시간, 타이밍함수
    }

    & .here {
      background-color: ${MainColor.Main100};
      color: white;
    }

    .imgDiv {
      width: 100px;
      height: 100%;
      font-weight: bold;
      border: 1px solid black;
      background-image: url(${onion});
      background-size: contain; // 이미지를 배경에 꽉 채움
      background-position: center; // 배경의 초기값을 가운데로
      background-repeat: no-repeat; // 배경보다 이미지가 작아도 반복하지 않음
      cursor: pointer;
      transform: translateY(${(props) => (props.scrolling ? "-100%" : "0")});
      transition: transform 1s ease; // 속성, 지속시간, 타이밍함수
    }

    .loginDiv {
      width: 300px;
      height: 100%;
      background-color: ${MainColor.Main100};
    }
  }
`;

interface HedaerProps {}

const Header: React.FC<HedaerProps> = () => {
  const [scrolling, setScrolling] = useState<boolean>(false);
  const [scrollData, setScrollData] = useState<number>(0);
  const navigate = useNavigate();
  const location = useLocation();
  const mapPage = location.pathname.startsWith("/map");
  const boardPage = location.pathname.startsWith("/board");

  /** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  - 훅 기능 : 스크롤이 위, 아래로 이동함에 따라 헤더를 숨기고 보여줌
  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > scrollData) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }

      setScrollData(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollData]);

  // 로그인 화면일 경우 보여주지 않음
  if (location.pathname === "/") {
    return null;
  }

  return (
    <MyHeader scrolling={scrolling}>
      <div className="menuDiv">
        <div
          className="imgDiv"
          onClick={() => {
            navigate("/home");
          }}
        ></div>
        <button
          className={`menuButton ${boardPage ? "here" : ""}`}
          onClick={() => {
            navigate("/board");
          }}
        >
          Board
        </button>
        <button
          className={`menuButton ${mapPage ? "here" : ""}`}
          onClick={() => {
            navigate("/map");
          }}
        >
          Map
        </button>
        <div className="loginDiv"></div>
      </div>
    </MyHeader>
  );
};

export default Header;
