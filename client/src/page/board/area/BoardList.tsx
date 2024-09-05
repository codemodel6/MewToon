/** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
- 게시판 리스트 컴포넌트
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/

import { useQuery } from "@tanstack/react-query";
import { collection, getDocs } from "firebase/firestore";
import { useState } from "react";
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
import { db } from "../../../firebase/firebase";

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

const DatePcikerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 80%;
  height: 40px;
  margin-bottom: 2px;
  font-weight: bold;

  .datePickerDiv {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 30%;
    height: 100%;
    color: ${WhiteColor.White100};
    font-size: ${FontSize.medium};
  }

  .pickerArea {
    ${centerColumn}
    height: 100%;
    width: 30%;
  }

  .searchArea {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    height: 100%;
    width: 30%;

    .searchButton {
      text-align: center;
      width: 80%;
      height: 30px;
      background-color: ${WhiteColor.White100};
      border: 2px solid ${MainColor.Main200};
      color: ${GrayColor.Gray100};
      border-radius: 5px;
      font-weight: bold;

      &:hover {
        background-color: ${MainColor.Main200};
      }
    }
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
  handleToggle: () => void;
}

// interface BoardProps {
//   id: number;
//   title: string;
//   author: string;
//   date: string;
//   contents: string;
//   like: number;
// }

interface BoardListProp {
  id: string;
  content: string;
  createdDT: string;
  email: string;
  title: string;
  uid: string;
  updateDT: string;
}

// interface PageInfoProps {
//   page: number;
//   totalPage: number;
// }

// interface BoardInterface {
//   listInfo: BoardProps[];
//   pageInfo: PageInfoProps;
// }

const BoardList: React.FC<ListInterface> = ({
  modalState,
  setModalState,
  toggle,
  handleToggle,
}) => {
  // 페이지에 보여줄 게시글 state
  // const [boardList, setBoardList] = useState<BoardInterface>(serverBoardObj1);
  // 총 페이지 수 state
  const [totalPage] = useState<number>(2);
  // url의 페이지를 가져오는 state
  const [searchParams] = useSearchParams();

  // 현재 page 쪽 정보
  const searchPage = searchParams.get("page");
  const page = Number(searchPage);
  console.log(page);

  /** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  - 훅 기능 : 페이지 변경 시 데이터 변경.. 서버 없이 더미데이터 이기 때문에 임시 설정
  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
  // useEffect(() => {
  //   if (page === 1) setBoardList(serverBoardObj1);
  //   else setBoardList(serverBoardObj2);
  // }, [page]);

  /** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  - 함수 기능 : firebase에서 board의 데이터를 가져온다
  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
  const getBoardList = async () => {
    const boardCollection = collection(db, "board");
    const boardGetDocs = await getDocs(boardCollection);
    const boardList = boardGetDocs.docs.map((it) => ({
      id: it.id, // 문서 ID
      ...it.data(), // 문서 데이터
    })) as BoardListProp[];
    console.log("boardList : ", boardList);
    return boardList;
  };

  /** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  - Mutation : 페이지 변경 시 데이터 변경.. 서버 없이 더미데이터 이기 때문에 임시 설정
  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
  const {
    data: boardList,
    // isLoading,
    // error,
  } = useQuery({
    queryKey: ["boardList"], // 쿼리 키
    queryFn: getBoardList, // 데이터를 가져오는 함수
  });

  return (
    <BoardListBlock $toggle={toggle}>
      <DatePcikerWrapper>
        <div className="datePickerDiv">
          <div className="pickerArea">
            {/* <MyPicker setMyDate={setStartDate} type={"S"} /> */}
          </div>
          ~
          <div className="pickerArea">
            {/* <MyPicker setMyDate={setEndDate} type={"E"} /> */}
          </div>
          <div className="searchArea">
            <button className="searchButton">검색</button>
          </div>
        </div>
      </DatePcikerWrapper>
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
            <div className="boardContents" key={idx} onClick={handleToggle}>
              <div className="common">1</div>
              <div className="title">{it.title}</div>
              <div className="author">{it.email}</div>
              <div className="common">{it.updateDT}</div>
            </div>
          ))}
        </div>
      )}
      <div className="writeDiv">
        <GlobalButton
          width="120px"
          height="30px"
          onClick={() => handleModal(modalState, setModalState)}
        >
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
      {/* <SearchBar
    setBoardList={setBoardList}
    setTotalPage={setTotalPage}
    page={page}
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    pageData={pageData}
   /> */}
    </BoardListBlock>
  );
};

export default BoardList;
