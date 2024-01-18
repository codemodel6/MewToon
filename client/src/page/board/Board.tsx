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

const BoardListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 85%;
  background-color: red;
`;

const Board = () => {
  return (
    <GlobalWrapper height="2000px">
      <OrTitle imageUrl={door} mainText="게시판을 만들껍니다" subText="Board" />
      <OrTab tabArr={boardTabArr} />
      <GlobalAsideWrapper>
        <Aside />
        <BoardListWrapper>
          <BoardList />
          <BoardContent />
        </BoardListWrapper>
      </GlobalAsideWrapper>
    </GlobalWrapper>
  );
};

export default Board;
