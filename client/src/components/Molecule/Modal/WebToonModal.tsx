/** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
- 그래프 결과를 저장 할 수 있는 모달
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/

import { useState } from "react";
import styled from "styled-components";
import { Overlay } from "./Overlay";
import { handleModal } from "../../Function/modal";

const WebToonModalWrapper = styled.div`
  display: none;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;

  &.open {
    display: block;
  }
`;

interface WebToonModalProps {
  modalState: boolean;
  setModalState: React.Dispatch<React.SetStateAction<boolean>>;
}

const WebToonModal: React.FC<WebToonModalProps> = ({
  modalState,
  setModalState,
}) => {
  /** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  - 함수 기능 : 취소 버튼을 눌렀을 때 모달을 닫는 함수
  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
  const handleCancel = () => {
    handleModal(modalState, setModalState);
  };

  return (
    <Overlay $modalState={modalState}>
      <WebToonModalWrapper className={`${modalState ? "open" : ""}`}>
        <div className="modalDataDiv"></div>
      </WebToonModalWrapper>
    </Overlay>
  );
};

export default WebToonModal;
