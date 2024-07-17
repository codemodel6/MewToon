/** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
- 그래프 결과를 저장 할 수 있는 모달
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/

import { useState } from "react";
import styled from "styled-components";
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
            font-size: ${FontSize.medium};
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
            font-size: ${FontSize.medium};
          }

          textArea:focus {
            outline: none;
            border: 3px solid ${SubColor.Sub300};
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
  // 저장할 이름 state
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  /** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  - 함수 기능 : 저장하는 함수
  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
  const handleSave = async () => {};

  /** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  - 함수 기능 : 취소 버튼을 눌렀을 때 모달을 닫는 함수
  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
  const handleCancel = () => {
    handleModal(modalState, setModalState);
  };

  return (
    <Overlay $modalState={modalState}>
      <WriteModalWrapper className={`${modalState ? "open" : ""}`}>
        <div className="modalDataDiv">
          <div className="modalTitle">글 쓰기</div>
          <div className="modalContents">
            <div className="titleDiv">
              <div className="myTitle">제목</div>
              <div className="noLineTitle">내용</div>
            </div>
            <div className="contentsDiv">
              <div className="modalInputDiv">
                <input />
              </div>
              <div className="modalTextDiv">
                <textarea />
              </div>
            </div>
          </div>
        </div>
        <div className="buttonDiv">
          <GlobalButton width="200px" height="40px" onClick={handleSave}>
            저장
          </GlobalButton>
          <CancelButton width="200px" height="40px" onClick={handleCancel}>
            취소
          </CancelButton>
        </div>
      </WriteModalWrapper>
    </Overlay>
  );
};

export default WriteModal;
