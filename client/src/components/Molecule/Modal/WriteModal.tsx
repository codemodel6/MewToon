import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import styled from "styled-components";
import boardCreate, { BoardCreateProps } from "../../../firebase/boardCreate";
import {
  BlackColor,
  FontSize,
  GrayColor,
  MainColor,
  SubColor,
  WhiteColor,
} from "../../CSS/Color/ColorNote";
import { centerColumn } from "../../CSS/Global/GlobalDisplay";
import { CancelButton, GlobalButton } from "../../CSS/Global/GlobalItem";
import { handleModal } from "../../Function/modal";

const WriteModalWrapper = styled.div`
  display: none;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;

  &.open {
    display: block;
  }

  .boardFormBlock {
    width: 100%;
    height: 100%;

    .modalDataDiv {
      background-color: ${WhiteColor.White100};
      width: 800px;
      height: 600px;
      margin-bottom: 40px;
      border: 3px solid ${MainColor.Main200};
      border-radius: 10px;
      font-weight: bold;
      color: ${BlackColor.Black100};

      .modalTitle {
        ${centerColumn}
        height: 15%;
        width: 100%;
        font-size: xx-large;
        border-bottom: 3px solid ${MainColor.Main200};
        font-weight: bold;
      }

      .modalContents {
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 85%;

        .titleDiv {
          width: 25%;
          height: 100%;
          font-size: x-large;
          border-right: 3px solid ${MainColor.Main200};

          .myTitle {
            ${centerColumn}
            width: 100%;
            height: 17%;
            border-bottom: 3px solid ${MainColor.Main200};
          }

          .noLineTitle {
            ${centerColumn}
            width: 100%;
            height: 17%;
          }
        }

        .contentsDiv {
          width: 75%;
          height: 100%;

          .modalInputDiv {
            ${centerColumn}
            height: 17%;
            width: 100%;
            border-bottom: 3px solid ${MainColor.Main200};

            input {
              width: 90%;
              height: 45px;
              border: 3px solid ${SubColor.Sub100};
              padding-left: 20px;
              background-color: ${WhiteColor.White100};
              color: ${GrayColor.Gray100};
              font-size: ${FontSize.small};
            }

            input:focus {
              outline: none;
              border: 3px solid ${SubColor.Sub300};
            }
          }

          .modalTextDiv {
            height: 83%;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            textArea {
              width: 90%;
              height: 90%;
              border: 3px solid ${SubColor.Sub100};
              padding: 10px 20px 10px 20px;
              background-color: ${WhiteColor.White100};
              resize: none;
              color: ${GrayColor.Gray100};
              font-size: ${FontSize.small};
            }

            textArea:focus {
              outline: none;
              border: 3px solid ${SubColor.Sub300};
            }
          }
        }
      }
    }
  }

  .buttonDiv {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
  }
`;

/** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  - CSS 기능 : 모달이 열렸을 경우 배경 설정
  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
export const Overlay = styled.div<{ $modalState: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: ${({ $modalState }) => ($modalState ? "block" : "none")};
  z-index: 999;
`;

interface WriteProps {
  modalState: boolean;
  setModalState: React.Dispatch<React.SetStateAction<boolean>>;
}

const WriteModal: React.FC<WriteProps> = ({ modalState, setModalState }) => {
  const [boardObj, setBoardObj] = useState<BoardCreateProps>({
    title: "",
    content: "",
  });

  const handleBoardObjInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> // input과 textarea 2개의 타입 가능
  ) => {
    const { name, value } = event.target;
    setBoardObj((prev) => ({ ...prev, [name]: value }));
  };

  /** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  - 함수 기능 : 파이어베이스에 게시판 생성을 하는 mutation을 실행시키는 함수
  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
  const handleBoardCreateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    boardCreateMutation.mutate(boardObj); // mutate 함수 호출
  };

  /** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  - mutation : boardCreate 함수를 실행하는 mutation
  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
  const boardCreateMutation = useMutation({
    mutationFn: boardCreate,
    onSuccess: () => {
      console.log("boardCreateMutation - onSuccess");
    },
    onError: (error: Error) => {
      alert("게시글 업로드에 실패했습니다: " + error.message);
    },
  });

  /** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  - 함수 기능 : 취소 버튼을 눌렀을 때 모달을 닫는 함수
  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
  const handleCancel = () => {
    handleModal(modalState, setModalState);
  };

  return (
    <Overlay $modalState={modalState}>
      <WriteModalWrapper className={`${modalState ? "open" : ""}`}>
        <form className="boardFormBlock" onSubmit={handleBoardCreateSubmit}>
          <div className="modalDataDiv">
            <div className="modalTitle">글 쓰기</div>
            <div className="modalContents">
              <div className="titleDiv">
                <div className="myTitle">제목</div>
                <div className="noLineTitle">내용</div>
              </div>
              <div className="contentsDiv">
                <div className="modalInputDiv">
                  <input
                    type="text"
                    name="title"
                    value={boardObj.title}
                    placeholder="제목"
                    onChange={handleBoardObjInputChange}
                    required
                  />
                </div>
                <div className="modalTextDiv">
                  <textarea
                    name="content"
                    className="SignUpFormPwInput"
                    value={boardObj.content}
                    placeholder="내용"
                    onChange={handleBoardObjInputChange}
                    required
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="buttonDiv">
            <GlobalButton type="submit" width="200px" height="40px">
              저장
            </GlobalButton>
            <CancelButton
              type="button"
              width="200px"
              height="40px"
              onClick={handleCancel}
            >
              취소
            </CancelButton>
          </div>
        </form>
      </WriteModalWrapper>
    </Overlay>
  );
};

export default WriteModal;
