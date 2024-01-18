/** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
- 개별 게시판 컴포넌트
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/

import styled from "styled-components";
import { GlobalBlock } from "../../../components/CSS/Global/GlobalBlock";
const BoardContentWrapper = styled.div`
  width: 50%;
  height: 50%;
  background-color: orange;
`;

const BoardContent = () => {
  return (
    <GlobalBlock>
      <BoardContentWrapper></BoardContentWrapper>
    </GlobalBlock>
  );
};

export default BoardContent;
