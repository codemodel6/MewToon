interface handleModalInterface {
  (
    modalState: boolean,
    setModalState: React.Dispatch<React.SetStateAction<boolean>>
  ): void;
}
/** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
- 함수 기능 : 글쓰기 모달을 키고 끄는 함수
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
export const handleModal: handleModalInterface = (
  modalState,
  setModalState
) => {
  setModalState(!modalState);
};
