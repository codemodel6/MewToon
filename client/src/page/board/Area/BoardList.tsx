/** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
- 게시판 리스트 컴포넌트
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/

import { useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import {
  BlackColor,
  FontSize,
  GrayColor,
  MainColor,
  WhiteColor,
} from "../../../components/CSS/Color/ColorNote";
import { GlobalBlock } from "../../../components/CSS/Global/GlobalBlock";
import {
  centerColumn,
  centerRow,
} from "../../../components/CSS/Global/GlobalDisplay";

const BoardListBlock = styled.div<{ toggle: boolean }>`
  height: 100%;
  width: ${(props) => (props.toggle ? "50%" : "100%")};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: width 0.8s ease;
  position: relative;
  z-index: 1;

  .boardTitleLine {
    ${centerRow}
    width: 90%;
    height: 60px;
    background-color: ${MainColor.Main100};
    color: ${WhiteColor.White100};
    font-size: ${FontSize.large};
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
    width: 90%;
    height: 550px;

    .boardContents {
      ${centerRow}
      width: 100%;
      height: 33px;
      border-bottom: 2px solid ${GrayColor.Gray000};
      cursor: pointer;
      font-size: ${FontSize.medium};
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

  .pagiNationDiv {
    width: 16%;
    height: 60px;
  }
`;

const DatePcikerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 90%;
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
      width: 90%;
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
  width: 90%;
  height: 500px;
  color: ${MainColor.Main200};
  font-size: 30px;
  border-bottom: 3px solid ${MainColor.Main100};
`;

interface ListProps {
  toggle: boolean;
  handleToggle: () => void;
}

const BoardList: React.FC<ListProps> = ({ toggle, handleToggle }) => {
  // 페이지에 보여줄 게시글 state
  const [boardList, setBoardList] = useState<object[]>([{}, {}]);
  // 총 페이지 수 state
  const [totalPage, setTotalPage] = useState<number>();
  // url의 페이지를 가져오는 state
  const [searchParams, setSearchParams] = useSearchParams();
  // searchBar의 입력한 값 state
  const [searchValue, setSearchValue] = useState<string>("");
  // 시작 날짜 state
  const [startDate, setStartDate] = useState("");
  // 끝 날짜 state
  const [endDate, setEndDate] = useState("");

  const location = useLocation();
  const page = searchParams.get("page");
  const navigate = useNavigate();

  return (
    <BoardListBlock toggle={toggle}>
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
          {boardList.map((it, idx) => (
            <div className="boardContents" key={idx} onClick={handleToggle}>
              <div className="common">번호</div>
              <div className="title">제목</div>
              <div className="author">작성자</div>
              <div className="common">날짜</div>
            </div>
          ))}
        </div>
      )}
      <div className="pagiNationDiv">
        {totalPage === 0 ? (
          ""
        ) : (
          <div></div>
          //   <PagiNation location={location} totalPage={totalPage} page={page} />
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
