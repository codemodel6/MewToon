import styled from "styled-components";
import { GlobalWrapper } from "../../components/CSS/Global/GlobalWrapper";
import cat from "../../components/CSS/image/cat.jpg";
import GlobalTitle from "../../components/CSS/Global/GlobalTitle";

const Board = () => {
  return (
    <GlobalWrapper>
      <GlobalTitle imageUrl={cat} mainText="안농" subText="할루" />
    </GlobalWrapper>
  );
};

export default Board;
