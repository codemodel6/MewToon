import door from "../../components/CSS/image/door.jpg";
import GlobalTitle from "../../components/CSS/Global/GlobalTitle";
import { GlobalWrapper } from "../../components/CSS/Global/GlobalWrapper";
import { boardTabArr } from "../../components/dummy/TabArr";
import GlobalTab from "../../components/CSS/Global/GlobalTab";
import BoardList from "./Area/BoardList";

const Board = () => {
  return (
    <GlobalWrapper height="2000px">
      <GlobalTitle
        imageUrl={door}
        mainText="게시판을 만들껍니다"
        subText="Board"
      />
      <GlobalTab tabArr={boardTabArr} />
      <BoardList />
    </GlobalWrapper>
  );
};

export default Board;
