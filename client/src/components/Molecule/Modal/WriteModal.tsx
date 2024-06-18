/** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
- 그래프 결과를 저장 할 수 있는 모달
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/

import { useState } from "react";
import styled from "styled-components";
import { CancelButton, GlobalButton } from "../../CSS/Global/GlobalItem";
import { Overlay } from "./Overlay";
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

  .buttonDiv {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
  }
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
    <Overlay modalState={modalState}>
      <WriteModalWrapper className={`${modalState ? "open" : ""}`}>
        <div className="modalDataDiv"></div>
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
