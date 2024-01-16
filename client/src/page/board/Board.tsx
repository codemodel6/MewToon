import styled from "styled-components";
import door from "../../components/CSS/image/door.jpg";
import GlobalTitle from "../../components/CSS/Global/GlobalTitle";
import { GlobalWrapper } from "../../components/CSS/Global/GlobalWrapper";

const Board = () => {
  return (
    <GlobalWrapper height="2000px">
      <GlobalTitle
        imageUrl={door}
        mainText="게시판을 만들껍니다"
        subText="Board"
      />
    </GlobalWrapper>
  );
};

export default Board;
