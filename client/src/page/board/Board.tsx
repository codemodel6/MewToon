/** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
- /board 컴포넌트
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/

import door from "../../components/CSS/image/door.jpg";
import OrTitle from "../../components/Organism/OrTitle";
import { GlobalWrapper } from "../../components/CSS/Global/GlobalWrapper";
import { boardTabArr } from "../../components/dummy/TabArr";
import OrTab from "../../components/Organism/OrTab";
import BoardList from "./Area/BoardList";

const Board = () => {
  return (
    <GlobalWrapper height="2000px">
      <OrTitle imageUrl={door} mainText="게시판을 만들껍니다" subText="Board" />
      <OrTab tabArr={boardTabArr} />
      <BoardList />
    </GlobalWrapper>
  );
};

export default Board;
