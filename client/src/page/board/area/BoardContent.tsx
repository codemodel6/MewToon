/** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
- 개별 게시판 컴포넌트
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import styled from "styled-components";
import {
  FontSize,
  GrayColor,
  MainColor,
  SubColor,
  WhiteColor,
} from "../../../components/CSS/Color/ColorNote";
import {
  betweenRow,
  centerColumn,
  centerRow,
} from "../../../components/CSS/Global/GlobalDisplay";
import { delBoardDetail } from "../../../firebase/delBoardDetail";
import { auth } from "../../../firebase/firebase";
import {
  BoardDetailProp,
  getBoardDetail,
} from "../../../firebase/getBoardDetail";
import { updBoardDetail } from "../../../firebase/updBoardDetail";
import BoardComment from "./BoardComment";
import { toast } from "react-toastify";

const BoardContentWrapper = styled.div<{
  $toggle: boolean;
  $modeToggle: boolean;
}>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;
  background-color: white;
  position: absolute;
  transform: translate(${(props) => (props.$toggle ? "100%" : "0%")});
  opacity: ${(props) => (props.$toggle ? "1" : "0")};
  transition: transform 0.8s ease-in-out, opacity 1s ease;

  .boardContentBlock {
    border: 2px solid ${MainColor.Main100};
    width: 80%;
    height: 750px;
    margin-left: 100px;

    .boardContentForm {
      width: 100%;
      height: 100%;
    }

    .boardInfo {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 6%;
      padding: 0 10px;
      font-size: ${FontSize.medium};
      font-weight: bold;
      background-color: ${MainColor.Main100};
      color: ${WhiteColor.White100};

      input {
        background-color: ${(props) =>
          props.$modeToggle ? "white" : "transparent"};
        color: ${(props) => (props.$modeToggle ? "black" : "white")};
        font-weight: ${(props) => (props.$modeToggle ? "" : "bold")};
        font-size: ${FontSize.medium};
        border: none;
        height: 80%;
        padding: 2px;
        outline: none;
      }
    }

    .scrollBoard {
      width: 100%;
      height: 94%;
      overflow: scroll;
    }

    .boardContent {
      width: 100%;
      min-height: 400px;
      padding: 10px;

      textarea {
        padding: 10px;
        border: 1px solid
          ${(props) => (props.$modeToggle ? `${MainColor.Main100}` : "white")};
        font-size: ${FontSize.small};
        min-height: 360px;
        min-width: 100%;
      }
    }

    .heartWrapper {
      ${centerColumn}
      width: 100%;
      height: 80px;

      button {
        background-color: white;
        ${centerRow}
        width: 40px;
        height: 50px;
        color: ${MainColor.Main100};
        font-size: 35px;
      }

      .heartDiv {
        ${centerColumn}
        width: 100%;
        height: 30px;
        font-size: 20px;
      }
    }

    .boardUpdateDiv {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;
      width: 100%;
      height: 50px;
      padding-right: 10px;

      .updateButton {
        width: 30px;
        height: 100%;
        background-color: transparent;
        color: ${MainColor.Main100};
        font-size: ${FontSize.xsmall};
        margin-right: 10px;
      }

      .deleteButton {
        width: 30px;
        height: 100%;
        background-color: transparent;
        font-size: ${FontSize.xsmall};
        color: ${SubColor.Sub200};
      }
    }

    .commentCountDiv {
      ${centerColumn}
      width: 100%;
      height: 50px;
      background-color: ${MainColor.Main200};
      margin-bottom: 8px;
      color: ${GrayColor.Gray100};
      font-size: ${FontSize.small};
      font-weight: bold;
    }

    .commentDiv {
      ${betweenRow}
      width: 100%;
      height: 50px;
      color: ${MainColor.Main100};
      font-size: ${FontSize.medium};
      font-weight: bold;

      .commentInputDiv {
        ${centerColumn}
        padding-left: 10px;
        width: 83%;
        height: 90%;

        input {
          width: 100%;
          height: 85%;
          border: 2px solid ${MainColor.Main100};
          border-radius: 20px;
        }
      }

      .commentButtonDiv {
        ${centerColumn}
        width:15%;
        height: 70%;

        button {
          width: 100px;
          height: 100%;
          background-color: ${MainColor.Main100};
          border: 1px solid ${MainColor};
          border-radius: 10px;
          color: ${WhiteColor.White100};
        }
      }
    }
  }

  .boardClose {
    display: flex;
    justify-content: flex-end;
    width: 40px;
    height: 200px;

    button {
      background-color: ${MainColor.Main100};
      border-radius: 5px;
      color: white;
      width: 80%;
      height: 100%;
    }
  }
`;

interface ContentProps {
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  boardDetailId: string;
  boardDetaiUid: string;
}

const BoardContent: React.FC<ContentProps> = ({
  toggle,
  setToggle,
  boardDetailId,
  boardDetaiUid,
}) => {
  const [modeToggle, setModeToggle] = useState<boolean>(false);
  const queryClient = useQueryClient();
  const [heartState, setHeartState] = useState<number>(0);

  // React Query로 게시글 상세 정보 가져오기
  const { data } = useQuery({
    queryKey: ["boardDetail", boardDetailId], // 쿼리 키에 id 포함
    queryFn: () => getBoardDetail(boardDetailId), // id를 넘겨서 쿼리 실행
    enabled: !!boardDetailId, // id가 있을 때만 쿼리 실행
  });

  const user = auth.currentUser; // firebase user 정보

  // board detail 제목, 내용 데이터
  const [boardDetailObj, setBoardDetailObj] = useState<
    Partial<BoardDetailProp>
  >({
    title: data?.title,
    content: data?.content,
  });

  /** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  - 훅 기능 : firebase의 data가 변경 될 때 마다 firebase 데이터를 가져온다
  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
  useEffect(() => {
    if (data) {
      setBoardDetailObj({
        title: data.title,
        content: data.content,
      });
      setHeartState(data.heart);
    }
  }, [data]);

  /** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  - 함수 기능 : 게시글 읽기/수정 모드
  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
  const handleModeToggle = () => {
    setModeToggle(!modeToggle); // 모드 변경
  };

  /** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  - 함수 기능 : 화면의 제목과 타이틀이 변경될 때의 함수
  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
  const handleBoardDetailObjInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> // input과 textarea 2개의 타입 가능
  ) => {
    const { name, value } = event.target;
    setBoardDetailObj((prev) => ({ ...prev, [name]: value }));
  };

  /** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  - 함수 기능 : 화면의 데이터로 updateMutation을 실행시키는 함수
  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
  const handleUpdateBoardDetail = () => {
    updateMutation.mutate(boardDetailObj); // 수정 mutation 실행
  };

  /** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  - Mutation : board detail 수정 mutation
  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
  const updateMutation = useMutation({
    mutationFn: (boardDetailData: Partial<BoardDetailProp>) =>
      updBoardDetail(boardDetailId, boardDetailData),
    onSuccess: () => {
      // 캐시 무효화하여 데이터 업데이트
      queryClient.invalidateQueries({
        queryKey: ["boardDetail", boardDetailId],
      });
      handleModeToggle(); // 읽기 모드로 변경
      toast.success("게시글이 수정되었습니다.");
    },
    onError: (error: Error) => {
      console.error("게시글 수정 실패: ", error);
      toast.error("게시글 수정 실패.");
    },
  });

  /** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  - 함수 기능 : deleteMutation 실행 함수
  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
  const handleDeleteBoardDetail = () => {
    window.confirm("게시글을 삭제하시겠습니까?");
    deleteMutation.mutate(); // 삭제 mutation 실행
  };

  /** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  - Mutation : board detail 삭제 mutation
  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
  const deleteMutation = useMutation({
    mutationFn: () => delBoardDetail(boardDetailId),
    onSuccess: () => {
      // 캐시 무효화하여 데이터 업데이트
      queryClient.invalidateQueries({ queryKey: ["boardList"] }); // 게시글 목록 캐시 무효화
      queryClient.invalidateQueries({
        queryKey: ["boardDetail", boardDetailId], // 상세 게시글 캐시 무효화
      });
      setToggle(false);
      toast.success("게시글이 삭제되었습니다.");
    },
    onError: (error: Error) => {
      console.error("게시글 삭제 실패: ", error);
      toast.error("게시글 삭제 실패.");
    },
  });

  /** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  - 함수 기능 : 게시글 수정 취소 함수
  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
  const handleCancelUpdate = () => {
    setBoardDetailObj({
      title: data?.title,
      content: data?.content,
    });
    handleModeToggle();
  };

  /** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  - 함수 기능 : 하트 좋아요 추가 함수
  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
  const handleHeartCount = () => {
    setHeartState(heartState + 1);
  };

  /** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  - 함수 기능 : 미구현을 위한 함수
  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
  const handleAlert = () => {
    toast.error("권한이 없습니다.");
  };

  return (
    <BoardContentWrapper $toggle={toggle} $modeToggle={modeToggle}>
      <div className="boardContentBlock">
        <div className="boardInfo">
          <input
            name="title"
            value={boardDetailObj.title}
            onChange={handleBoardDetailObjInputChange}
            readOnly={!modeToggle}
          />
          <p>
            {data?.email.split("@")[0]} || {data?.updateDT}
          </p>
        </div>
        <div className="scrollBoard">
          <div className="boardContent">
            <textarea
              name="content"
              value={boardDetailObj.content}
              onChange={handleBoardDetailObjInputChange}
            />
          </div>

          <div className="heartWrapper">
            <button onClick={handleHeartCount}>♥</button>
            <div className="heartDiv">{heartState}</div>
          </div>
          <div className="boardUpdateDiv">
            {user?.uid === boardDetaiUid ? (
              !modeToggle ? (
                <>
                  <button
                    className="updateButton"
                    type="button"
                    onClick={handleModeToggle}
                  >
                    수정
                  </button>
                  <button
                    className="deleteButton"
                    type="button"
                    onClick={handleDeleteBoardDetail}
                  >
                    삭제
                  </button>
                </>
              ) : (
                <>
                  <button
                    className="updateButton"
                    type="submit"
                    onClick={handleUpdateBoardDetail}
                  >
                    완료
                  </button>
                  <button
                    type="button"
                    className="deleteButton"
                    onClick={handleCancelUpdate}
                  >
                    취소
                  </button>
                </>
              )
            ) : (
              ""
            )}
          </div>
          <div className="commentCountDiv">0개의 댓글이 있습니다 ▼</div>
          <div className="commentDiv">
            <div className="commentInputDiv">
              <input />
            </div>
            <div className="commentButtonDiv">
              <button onClick={handleAlert}>댓글 등록</button>
            </div>
          </div>
          <BoardComment />
        </div>
      </div>
      <div className="boardClose">
        <button onClick={() => setToggle(false)}>◀</button>
      </div>
    </BoardContentWrapper>
  );
};

export default BoardContent;
