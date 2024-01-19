/** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
- /board 컴포넌트
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/

import door from "../../components/CSS/image/door.jpg";
import OrTitle from "../../components/Organism/OrTitle";
import {
  GlobalAsideWrapper,
  GlobalWrapper,
} from "../../components/CSS/Global/GlobalWrapper";
import { boardTabArr } from "../../components/dummy/TabArr";
import OrTab from "../../components/Organism/OrTab";
import BoardList from "./Area/BoardList";
import Aside from "../../components/Organism/Aside";
import styled from "styled-components";
import BoardContent from "./Area/BoardContent";
import { useState } from "react";

const BoardListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100%;
  position: relative;
`;

interface ToggleFun {
  (): void;
}

const Board = () => {
  // 게시판을 보여주는 state
  const [toggle, setToggle] = useState<boolean>(false);

  /** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  - 함수 기능 : 게시판을 불러오는 기능
  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
  const handleToggle: ToggleFun = () => {
    setToggle(true);
    // 데이터 불러오면 될듯?
  };

  console.log("토글", toggle);

  return (
    <GlobalWrapper height="2000px">
      <OrTitle imageUrl={door} mainText="게시판을 만들껍니다" subText="Board" />
      <OrTab tabArr={boardTabArr} />
      <GlobalAsideWrapper>
        <Aside />
        <BoardListWrapper>
          <BoardList toggle={toggle} handleToggle={handleToggle} />
          <BoardContent toggle={toggle} />
          {/* {toggle ? <BoardContent /> : ""} */}
        </BoardListWrapper>
      </GlobalAsideWrapper>
    </GlobalWrapper>
  );
};

export default Board;
