import styled from "styled-components";
import { MainColor, FontSize, BlackColor } from "../CSS/Color/ColorNote";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { aroundRow, betweenRow } from "../CSS/Global/GlobalDisplay";
import onion from "../CSS/image/onion.png";

const MyHeader = styled.header<{ scrolling: boolean; hoverData: boolean }>`
  display: flex;
  flex-direction: row;
  // 마우스 호버 시 색깔 변경
  background-color: ${(props) =>
    props.hoverData ? "white" : "rgba(0, 0, 0, 0.2)"};
  height: 80px;
  width: 100%;
  position: fixed;
  z-index: 999;
  // 스크롤에 따라 보이고 안보임
  transform: translateY(${(props) => (props.scrolling ? "-100%" : "0")});
  // 속도를 제어한다
  transition: background-color 0.5s ease, transform 0.8s ease; // 속성, 지속시간, 타이밍함수

  .menuDiv {
    ${betweenRow}
    width: 100%;
    height: 100%;

    .menuButton {
      height: 40px;
      font-size: ${FontSize.xxlarge};
      color: ${(props) => (props.hoverData ? "black" : "white")};
      background-color: transparent;
      font-weight: bold;
      transform: translateY(${(props) => (props.scrolling ? "-100%" : "0")});
      transition: transform 1s ease; // 속성, 지속시간, 타이밍함수
    }

    & .here {
      color: ${MainColor.Main100};
    }

    .imgDiv {
      width: 100px;
      height: 100%;
      font-weight: bold;
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
  // 스크롤이 진행중인지 확인
  const [scrolling, setScrolling] = useState<boolean>(false);
  // 스크롤 위치 값
  const [scrollData, setScrollData] = useState<number>(0);
  // 버튼 호버 유무
  const [hoverData, setHoverData] = useState<boolean>(false);

  const navigate = useNavigate();
  const location = useLocation();
  const skillPage = location.pathname.startsWith("/skill");
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

  // 인트로 화면일 경우 보여주지 않음
  if (location.pathname === "/") {
    return null;
  }

  return (
    <MyHeader scrolling={scrolling} hoverData={hoverData}>
      <div
        className="menuDiv"
        onMouseEnter={() => setHoverData(true)}
        onMouseLeave={() => setHoverData(false)}
      >
        <div
          className="imgDiv"
          onClick={() => {
            navigate("/home");
          }}
        ></div>
        <button
          className={`menuButton ${skillPage ? "here" : ""}`}
          onClick={() => {
            navigate("/skill");
          }}
        >
          Skill
        </button>
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
