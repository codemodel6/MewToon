/** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
- /board 컴포넌트
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/

import { useState } from "react";
import styled from "styled-components";
import {
  AsideWrapper,
  GlobalWrapper,
} from "../../components/CSS/Global/GlobalWrapper";
import door from "../../components/CSS/image/door.jpg";
import Aside from "../../components/Organism/Aside";
import OrTab from "../../components/Organism/OrTab";
import OrTitle from "../../components/Organism/OrTitle";
import { boardTabArr } from "../../components/dummy/TabArr";
import BoardContent from "./Area/BoardContent";
import BoardList from "./Area/BoardList";
import BoardWrite from "./Area/BoardWrite";

const BoardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;

  .boardListWrapper {
    display: flex;
    flex-direction: row;
    height: 100vh;
    width: 90%;
    position: relative;
  }
`;

interface ToggleFun {
  (): void;
}

const Board = () => {
  // 게시판을 보여주는 state
  const [toggle, setToggle] = useState<boolean>(false);
  const [myContent, setMyContent] = useState<{}>({});

  /** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  - 함수 기능 : 게시판을 불러오는 기능
  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
  const handleToggle: ToggleFun = () => {
    setToggle(true);
    // 데이터 불러오면 될듯?
  };

  console.log("토글", toggle);

  return (
    <GlobalWrapper height="3000px">
      <OrTitle imageUrl={door} mainText="게시판을 만들껍니다" subText="Board" />
      <OrTab tabArr={boardTabArr} />
      <BoardWrapper>
        <div className="boardListWrapper">
          <BoardList toggle={toggle} handleToggle={handleToggle} />
          <BoardContent toggle={toggle} />
        </div>
        <BoardWrite />
      </BoardWrapper>
    </GlobalWrapper>
  );
};

export default Board;
