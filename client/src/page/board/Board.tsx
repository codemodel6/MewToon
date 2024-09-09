/** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
- /board 컴포넌트
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/

import { useState } from "react";
import styled from "styled-components";
import { GlobalWrapper } from "../../components/CSS/Global/GlobalWrapper";
import towers from "../../components/CSS/image/towers.jpg";
import WriteModal from "../../components/Molecule/Modal/WriteModal";
import GlobalTitle from "../../components/Organism/GlobalTitle";
import OrTab from "../../components/Organism/ScrollTab";
import { boardTabArr } from "../../components/dummy/dummy";
import BoardContent from "./area/BoardContent";
import BoardList from "./area/BoardList";
import BoardTopic from "./area/BoardTopic";

const BoardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 90%;

  .boardListWrapper {
    display: flex;
    flex-direction: row;
    height: 900px;
    width: 100%;
    position: relative;
  }
`;

interface BoardDetailProps {
  (boardId: string): void;
}

const Board = () => {
  // 게시판을 보여주는 state
  const [toggle, setToggle] = useState<boolean>(false);
  // 모달 state
  const [modalState, setModalState] = useState<boolean>(false);
  // board detail
  const [boardDetailId, setBoardDetailId] = useState<string>("");

  /** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 - 함수 기능 : 게시판을 불러오는 기능
 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
  const handleBoardDetail: BoardDetailProps = (boardId) => {
    setBoardDetailId(boardId);
    setToggle(true);
  };

  return (
    <GlobalWrapper>
      <GlobalTitle
        imageUrl={towers}
        mainText="살아 숨쉬는 게시판"
        subText="Board"
      />
      <OrTab tabArr={boardTabArr} />
      <BoardWrapper>
        <div className="boardListWrapper">
          <BoardList
            modalState={modalState}
            setModalState={setModalState}
            toggle={toggle}
            handleBoardDetail={handleBoardDetail}
          />
          <BoardContent
            toggle={toggle}
            setToggle={setToggle}
            boardDetailId={boardDetailId}
          />
        </div>
        <div className="boardListWrapper">
          <BoardTopic />
        </div>
      </BoardWrapper>
      <WriteModal modalState={modalState} setModalState={setModalState} />
    </GlobalWrapper>
  );
};

export default Board;
