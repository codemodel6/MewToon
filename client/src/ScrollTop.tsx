/** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
- 페이지 이동시 화면 맨 위로 올려주는 컴포넌트
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
