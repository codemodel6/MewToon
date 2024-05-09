import styled from "styled-components";
import { MainColor } from "../../../components/CSS/Color/ColorNote";

const GameContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid ${MainColor.Main100};
  width: 90%;
  height: 80vh;
  margin-bottom: 80px;
`;

const GameContents = () => {
  return <GameContentsWrapper></GameContentsWrapper>;
};

export default GameContents;
