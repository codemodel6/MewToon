import styled from "styled-components";
import { GlobalWrapper } from "../../components/CSS/Global/GlobalWrapper";
import cat from "../../components/CSS/image/cat.jpg";
import GlobalTitle from "../../components/CSS/Global/GlobalTitle";

const Board = () => {
  return (
    <GlobalWrapper>
      <GlobalTitle
        imageUrl={cat}
        mainText="게시판을 만들껍니다"
        subText="Board"
      />
    </GlobalWrapper>
  );
};

export default Board;
