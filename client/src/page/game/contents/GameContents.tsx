import styled from "styled-components";
import { MainColor } from "../../../components/CSS/Color/ColorNote";
import Canvas from "./Canvas";

const GameContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 20px 0px ${MainColor.Main200};
  width: 90%;
  height: 80vh;
  margin-bottom: 80px;
`;

const GameContent = () => {
  return (
    <GameContentWrapper>
      <Canvas />
    </GameContentWrapper>
  );
};

export default GameContent;
