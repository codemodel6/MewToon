/** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
- 게시판 리스트 컴포넌트
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/

import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import {
  FontSize,
  GrayColor,
  MainColor,
  WhiteColor,
} from "../../../components/CSS/Color/ColorNote";
import {
  centerColumn,
  centerRow,
} from "../../../components/CSS/Global/GlobalDisplay";
import { GlobalButton } from "../../../components/CSS/Global/GlobalItem";
import { handleModal } from "../../../components/Function/modal";
import PagiNation from "../../../components/Molecule/PagiNation/PagiNation";
import { auth } from "../../../firebase/firebase";
import { BoardListProp, getBoardList } from "../../../firebase/getBoardList";

const BoardListBlock = styled.div<{ $toggle: boolean }>`
  height: 100%;
  width: ${(props) => (props.$toggle ? "50%" : "100%")};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: width 0.8s ease;
  position: relative;
  z-index: 1;
  background-color: ${MainColor.Main400};

  .boardTitleLine {
    ${centerRow}
    width: 80%;
    height: 60px;
    background-color: ${MainColor.Main100};
    color: ${WhiteColor.White100};
    font-size: ${FontSize.medium};
    font-weight: bold;

    .common {
      ${centerColumn}
      width: 15%;
    }

    .title {
      ${centerColumn}
      width: 55%;
    }
  }

  .boardWrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${WhiteColor.White100};
    width: 80%;
    height: 550px;

    .boardContents {
      ${centerRow}
      width: 100%;
      height: 37px;
      border-bottom: 2px solid ${GrayColor.Gray000};
      cursor: pointer;
      font-size: ${FontSize.small};
      color: ${GrayColor.Gray100};

      &:hover {
        background-color: ${GrayColor.Gray000};
      }

      .common {
        ${centerColumn}
        width: 15%;
      }

      .title {
        display: block;
        flex-direction: column;
        justify-content: center;
        padding-left: 30px;
        width: 55%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .author {
        ${centerColumn}
        width: 15%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }

  .writeDiv {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 40px;
    width: 80%;
  }

  .pagiNationDiv {
    width: 30%;
    height: 60px;
  }
`;

const EmptyWrapper = styled.div`
  ${centerColumn}
  width: 80%;
  height: 500px;
  color: ${MainColor.Main200};
  font-size: 30px;
  border-bottom: 3px solid ${MainColor.Main100};
`;

const PageWrapper = styled.div`
  height: 40px;
  margin-top: 20px;
  width: 100%;
`;

interface ListInterface {
  modalState: boolean;
  setModalState: React.Dispatch<React.SetStateAction<boolean>>;
  toggle: boolean;
  handleBoardDetail: (boardId: string, boardUid: string) => void;
}

const BoardList: React.FC<ListInterface> = ({
  modalState,
  setModalState,
  toggle,
  handleBoardDetail,
}) => {
  // 총 페이지 수 state
  const [totalPage, setTotalPage] = useState<number | undefined>(0);
  // url의 페이지를 가져오는 state
  const [searchParams] = useSearchParams();
  // boardList
  const [boardList, setBoardList] = useState<BoardListProp[] | undefined>([]);

  // 현재 page 쪽 정보
  const searchPage = searchParams.get("page");
  const page = Number(searchPage);

  /** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  - 훅 기능 : firebase 서버 데이터 실시간 가져오기
  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
  useEffect(() => {
    const unsubscribe = getBoardList((boardList, boardDivisionPage) => {
      setBoardList(boardList);
      setTotalPage(boardDivisionPage);
    });

    // 컴포넌트가 언마운트될 때 리스너 해제
    return () => unsubscribe();
  }, []);

  /** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  - 함수 기능 : 글쓰기 모달을 불러온다
  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
  const handleModalWrite = () => {
    const user = auth.currentUser;
    if (user) handleModal(modalState, setModalState);
    else {
      alert("로그인해주세요");
      return;
    }
  };

  return (
    <BoardListBlock $toggle={toggle}>
      <div className="boardTitleLine">
        <div className="common">글번호</div>
        <div className="title">제목</div>
        <div className="common">작성자</div>
        <div className="common">날짜</div>
      </div>
      {totalPage === 0 ? (
        <EmptyWrapper>검색된 결과는 존재하지 않습니다.</EmptyWrapper>
      ) : (
        <div className="boardWrapper">
          {boardList?.map((it, idx) => (
            <div
              className="boardContents"
              key={it.seq}
              onClick={() => handleBoardDetail(it.id, it.uid)}
            >
              <div className="common">{it.seq}</div>
              <div className="title">{it.title}</div>
              <div className="author">{it.email.split("@")[0]}</div>
              <div className="common">{it.updateDT}</div>
            </div>
          ))}
        </div>
      )}
      <div className="writeDiv">
        <GlobalButton width="120px" height="30px" onClick={handleModalWrite}>
          글 쓰기
        </GlobalButton>
      </div>
      <div className="pagiNationDiv">
        {totalPage === 0 ? (
          ""
        ) : (
          <PageWrapper>
            <PagiNation totalPage={totalPage} page={page} />
          </PageWrapper>
        )}
      </div>
    </BoardListBlock>
  );
};

export default BoardList;
