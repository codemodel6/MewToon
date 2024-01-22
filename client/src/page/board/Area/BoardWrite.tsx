import styled from "styled-components";
import { GlobalCenterBlock } from "../../../components/CSS/Global/GlobalBlock";

const BoardWriteWrapper = styled.div`
  width: 50%;
  height: 80%;
  background-color: red;
`;

const BoardWrite = () => {
  return (
    <GlobalCenterBlock>
      <BoardWriteWrapper></BoardWriteWrapper>
    </GlobalCenterBlock>
  );
};

export default BoardWrite;
