import React, { useEffect, useState } from "react";
import { GlobalTabWrapper } from "../CSS/Global/GlobalWrapper";
import { handleScroll } from "../Function/MyFunction";

const NavigateTab = () => {
  // 스크롤 위치 값
  const [scrollData, setScrollData] = useState<number>(0);
  // 스크롤이 진행중인지 확인
  const [scrollAction, setScrollAction] = useState<boolean>(false);

  /** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  - 훅 기능 : 스크롤이 위, 아래로 이동함에 따라 tabDiv 위치 변경
  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
  useEffect(() => {
    const scrollCallback = () => {
      handleScroll(scrollData, setScrollData, setScrollAction);
    };

    window.addEventListener("scroll", scrollCallback);
    console.log(scrollData);

    return () => {
      window.removeEventListener("scroll", scrollCallback);
    };
  }, [scrollData]);

  return <GlobalTabWrapper $scrollAction={scrollAction}></GlobalTabWrapper>;
};

export default NavigateTab;
