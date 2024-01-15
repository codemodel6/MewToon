import styled from "styled-components";
import cat from "../../components/CSS/image/cat.jpg";
import GlobalTitle from "../../components/CSS/Global/GlobalTitle";
import { GlobalWrapper } from "../../components/CSS/Global/GlobalWrapper";

const Board = () => {
  return (
    <GlobalWrapper heightData="2000px">
      <GlobalTitle
        imageUrl={cat}
        mainText="게시판을 만들껍니다"
        subText="Board"
      />
    </GlobalWrapper>
  );
};

export default Board;
