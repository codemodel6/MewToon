import styled from "styled-components";
import { aroundRow, centerColumn } from "./GlobalDisplay";
import { GrayColor, WhiteColor } from "../Color/ColorNote";
import { useEffect, useState } from "react";
import { handleScroll } from "../Function/MyFunction";

const GlobalTabWrapper = styled.div<{ scrollBoolean: boolean }>`
  ${centerColumn}
  width: 100%;
  height: 80px;
  position: sticky;
  // 스크롤에 따라 위치 변경
  top: ${(props) => (props.scrollBoolean ? "0" : "80px")};
  transition: top 0.8s ease; // 속성, 지속시간, 타이밍함수
  background-color: ${WhiteColor.White100};

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
    }
  }
`;

/** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
- 인터페이스 : 해당 컴포넌트의 props
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
interface TabProps {
  tabArr: string[];
}

const GlobalTab: React.FC<TabProps> = ({ tabArr }) => {
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
    <GlobalTabWrapper scrollBoolean={scrollBoolean}>
      <ul>
        {tabArr.map((it, idx) => (
          <li key={idx}>{it}</li>
        ))}
      </ul>
    </GlobalTabWrapper>
  );
};

export default GlobalTab;
