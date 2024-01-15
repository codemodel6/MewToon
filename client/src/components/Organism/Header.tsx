import styled from "styled-components";
import { MainColor, FontSize, BlackColor } from "../CSS/Color/ColorNote";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const MyHeader = styled.header`
  display: flex;
  flex-direction: row;
  background-color: rgba(0, 0, 0, 0.2);
  height: 80px;
  width: 100%;
  position: fixed;
  z-index: 999;
  transition: transform 0.8s ease; // 속성, 지속시간, 타이밍함수

  .ImageDiv {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 13%;
    height: 100%;
    /* background-color: blue; */

    img {
      width: 50px;
      height: 50px;
      background-color: white;
      border-radius: 50%;
      cursor: pointer;
    }
  }

  .timeDiv {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    width: 7%;
    height: 100%;
    /* background-color: orange; */
    padding-right: 20px;
  }

  .MenuDiv {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 80%;
    height: 100%;

    .MenuButton {
      width: 300px;
      height: 40px;
      font-size: ${FontSize.large};
      color: ${MainColor.Main100};
      border-radius: 10px;
      font-weight: bold;
    }
    & .here {
      background-color: ${MainColor.Main100};
      color: white;
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
    <MyHeader style={{ transform: `translateY(${scrolling ? "-100%" : "0"})` }}>
      <div className="ImageDiv">
        {/* <img
          src={Logo}
          alt="로고"
          onClick={() => {
            navigate("/home");
          }}
        /> */}
      </div>
      <div className="MenuDiv">
        <button
          className={`MenuButton ${boardPage ? "here" : ""}`}
          onClick={() => {
            navigate("/board");
          }}
        >
          Board
        </button>
        <button
          className={`MenuButton ${mapPage ? "here" : ""}`}
          onClick={() => {
            navigate("/map");
          }}
        >
          Map
        </button>
      </div>
    </MyHeader>
  );
};

export default Header;
