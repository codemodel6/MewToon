import styled from "styled-components";
import { aroundRow, centerColumn } from "../CSS/Global/GlobalDisplay";
import { GrayColor, MainColor, WhiteColor } from "../CSS/Color/ColorNote";
import { useEffect, useState } from "react";
import { handleScroll } from "../Function/MyFunction";
import { useLocation, useNavigate } from "react-router-dom";

const GlobalTabWrapper = styled.div<{ scrollBoolean: boolean }>`
  ${centerColumn}
  width: 100%;
  height: 80px;
  position: sticky;
  // 스크롤에 따라 위치 변경
  top: ${(props) => (props.scrollBoolean ? "0" : "80px")};
  transition: top 0.8s ease; // 속성, 지속시간, 타이밍함수
  background-color: ${WhiteColor.White100};
  z-index: 99;
  border-bottom: 1px solid ${GrayColor.Gray000};

  ul {
    ${aroundRow}
    width: 80%;
    height: 100%;

    li {
      ${centerColumn}
      width: 200px;
      height: 100%;
      font-size: 20px;
      color: ${GrayColor.Gray100};
      font-weight: bold;
      cursor: pointer;

      &.here {
        color: ${MainColor.Main100};
      }
    }
  }
`;

interface GlobalTabInter {
  tabArr: { title: string; url: string }[];
}

const GlobalTab: React.FC<GlobalTabInter> = ({ tabArr }) => {
  // 스크롤 위치 값
  const [scrollData, setScrollData] = useState<number>(0);
  // 스크롤이 진행중인지 확인
  const [scrollBoolean, setScrollBoolean] = useState<boolean>(false);
  const navigate = useNavigate();
  const location = useLocation();
  const nowPage = location.pathname;
  let moveTab = location.state;

  // useEffect(() => {
  //   window.scrollTo({
  //     top: 599.8079833984375,
  //     behavior: "smooth",
  //   });
  // }, [nowPage]);

  /** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  - 훅 기능 : 스크롤이 위, 아래로 이동함에 따라  tabDiv 위치 변경
  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
  useEffect(() => {
    const scrollCallback = () => {
      handleScroll(scrollData, setScrollData, setScrollBoolean);
    };
    window.addEventListener("scroll", scrollCallback);
    console.log(scrollData);

    return () => {
      window.removeEventListener("scroll", scrollCallback);
    };
  }, [scrollData]);

  return (
    <GlobalTabWrapper scrollBoolean={scrollBoolean}>
      <ul>
        {tabArr.map((it, idx) => (
          <li key={idx}>{it.title}</li>
        ))}
      </ul>
    </GlobalTabWrapper>
  );
};

export default GlobalTab;
