import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FontSize, MainColor } from "../CSS/Color/ColorNote";
import { betweenRow } from "../CSS/Global/GlobalDisplay";
import mewCat from "../CSS/image/mewCat.png";
import { handleScroll } from "../Function/scroll";
import Login from "../Login/Login";
import LoginStatus from "../Login/LoginStatus";

const MyHeader = styled.header<{
  $scrollAction: boolean;
  $hoverBoolean: boolean;
}>`
  display: flex;
  flex-direction: row;
  // 마우스 호버 시 색깔 변경
  background-color: ${(props) =>
    props.$hoverBoolean ? "white" : "rgba(0, 0, 0, 0.2)"};
  height: 80px;
  width: 100%;
  position: fixed;
  z-index: 999;
  // 스크롤에 따라 보이고 안보임
  transform: translateY(${(props) => (props.$scrollAction ? "-100%" : "0")});
  // 속도를 제어한다
  transition: background-color 0.5s ease, transform 0.8s ease; // 속성, 지속시간, 타이밍함수

  .menuDiv {
    ${betweenRow}
    width: 100%;
    height: 100%;

    .menuButton {
      height: 100%;
      font-size: ${FontSize.xmedium};
      color: ${(props) => (props.$hoverBoolean ? "black" : "white")};
      background-color: transparent;
      font-weight: bold;
      transform: translateY(
        ${(props) => (props.$scrollAction ? "-100%" : "0")}
      );
      transition: transform 1s ease; // 속성, 지속시간, 타이밍함수
    }

    & .here {
      color: ${MainColor.Main100};
    }

    .imgDiv {
      margin-left: 20px;
      width: 70px;
      height: 70px;
      font-weight: bold;
      background-image: url(${mewCat});
      background-size: contain; // 이미지를 배경에 꽉 채움
      background-position: center; // 배경의 초기값을 가운데로
      background-repeat: no-repeat; // 배경보다 이미지가 작아도 반복하지 않음
      cursor: pointer;
      transform: translateY(
        ${(props) => (props.$scrollAction ? "-100%" : "0")}
      );
      transition: transform 1s ease; // 속성, 지속시간, 타이밍함수
    }
  }
`;

interface HeaderProps {}

export interface LoginModalProps {
  loginModalState: boolean;
  setLoginModalState: React.Dispatch<React.SetStateAction<boolean>>;
  scrollAction: boolean;
}

const Header: React.FC<HeaderProps> = () => {
  // 스크롤 위치 값
  const [scrollData, setScrollData] = useState<number>(0);
  // 스크롤이 진행중인지 확인
  const [scrollAction, setScrollAction] = useState<boolean>(false);
  // 호버 유무
  const [hoverBoolean, setHoverBoolean] = useState<boolean>(false);
  // 로그인모달 state
  const [loginModalState, setLoginModalState] = useState<boolean>(false);

  const navigate = useNavigate();
  const location = useLocation();

  // 현재 페이지인지 확인
  const webToonPage = location.pathname.startsWith("/webToon");
  const projectPage = location.pathname.startsWith("/project");
  const boardPage = location.pathname.startsWith("/board");
  const informationPage = location.pathname.startsWith("/information");

  /** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
   * 훅 기능 : 스크롤이 위, 아래로 이동함에 따라 헤더를 숨기고 보여줌
   * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
  useEffect(() => {
    console.log();
    const scrollCallback = () => {
      handleScroll(scrollData, setScrollData, setScrollAction, 0);
    };
    window.addEventListener("scroll", scrollCallback);
    return () => {
      window.removeEventListener("scroll", scrollCallback);
    };
  }, [scrollData]);

  // 인트로 화면일 경우 보여주지 않음
  if (location.pathname === "/") {
    return null;
  }

  return (
    <>
      <Login modalState={loginModalState} setModalState={setLoginModalState} />
      <MyHeader $scrollAction={scrollAction} $hoverBoolean={hoverBoolean}>
        <div
          className="menuDiv"
          onMouseEnter={() => setHoverBoolean(true)}
          onMouseLeave={() => setHoverBoolean(false)}
        >
          <div
            className="imgDiv"
            onClick={() => {
              navigate("/home");
            }}
          ></div>
          <button
            className={`menuButton ${webToonPage ? "here" : ""}`}
            onClick={() => {
              navigate("/webToon?provider=NAVER&updateDay=MON&page=1");
            }}
          >
            웹툰
          </button>
          <button
            className={`menuButton ${projectPage ? "here" : ""}`}
            onClick={() => {
              navigate("/project?name=musicBox");
            }}
          >
            프로젝트
          </button>
          <button
            className={`menuButton ${boardPage ? "here" : ""}`}
            onClick={() => {
              navigate("/board?page=1");
            }}
          >
            게시판
          </button>
          <button
            className={`menuButton ${informationPage ? "here" : ""}`}
            onClick={() => {
              navigate("/information");
            }}
          >
            상세
          </button>
          <LoginStatus
            scrollAction={scrollAction}
            loginModalState={loginModalState}
            setLoginModalState={setLoginModalState}
          />
        </div>
      </MyHeader>
    </>
  );
};

export default Header;
