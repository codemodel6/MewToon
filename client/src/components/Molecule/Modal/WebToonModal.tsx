/** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
- 그래프 결과를 저장 할 수 있는 모달
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/

import styled from "styled-components";
import { ToonProps } from "../../../page/webToon/WebToon";
import {
  BlackColor,
  FontSize,
  GrayColor,
  MainColor,
  SubColor,
} from "../../CSS/Color/ColorNote";
import { centerColumn } from "../../CSS/Global/GlobalDisplay";
import { handleModal } from "../../Function/modal";
import { Overlay } from "./Overlay";
import WebToonMusic from "../../../page/webToon/area/WebToonMusic";
import { useRef, useState } from "react";

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

  .modal-data-div {
    width: 60vw;
    height: 95vh;
    background-color: white;
    border-radius: 5%;
  }
`;

const WebToonModalClose = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  height: 8%;
  width: 100%;
  padding-right: 30px;

  button {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 1px solid ${MainColor.Main100};
    background-color: white;
    font-size: 15px;
    font-weight: bold;
    color: ${MainColor.Main100};

    &:hover {
      background-color: ${MainColor.Main100};
      color: white;
    }
  }
`;

const WebToonModalBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 80%;
  padding: 0 80px 0 80px;
  overflow: auto;

  .modal-intro {
    display: flex;
    height: 500px;
    width: 100%;

    .img-area {
      /* ${centerColumn} */
      width: 45%;
      height: 100%;

      img {
        width: 85%;
        height: 100%;
      }
    }

    .modal-contents {
      width: 55%;

      .title {
        width: 100%;
        font-size: 30px;
        font-weight: bold;
        margin-bottom: 5px;
      }

      .author {
        width: 100%;
        font-size: 20px;
        margin-bottom: 10px;
      }

      .tag-area {
        display: flex;
        height: 10%;
        width: 100%;
        margin-bottom: 10px;

        .tag-button {
          ${centerColumn}
          width: 120px;
          height: 25px;
          color: ${BlackColor.Black100};
          border-radius: 10px;
          font-size: ${FontSize.small};
          margin-right: 10px;
          font-weight: bold;
        }

        & .action {
          background-color: ${MainColor.Main200};
        }

        & .romance {
          background-color: ${SubColor.Sub100};
        }
      }

      .contents {
        height: 70%;
        width: 100%;
        font-size: ${FontSize.large};
      }
    }
  }

  .modal-music-list {
    width: 100%;
    height: 1000px;
    margin-top: 50px;
    border: 1px solid black;
    border-bottom: none;
  }
`;

interface WebToonModalProps {
  modalState: boolean;
  setModalState: React.Dispatch<React.SetStateAction<boolean>>;
  webToonData: ToonProps;
}

const WebToonModal: React.FC<WebToonModalProps> = ({
  modalState,
  setModalState,
  webToonData,
}) => {
  /** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  - 함수 기능 : 취소 버튼을 눌렀을 때 모달을 닫는 함수
  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
  const handleCancel = () => {
    handleModal(modalState, setModalState);
  };

  const dummy = [0, 1, 2];

  return (
    <Overlay $modalState={modalState}>
      <WebToonModalWrapper className={`${modalState ? "open" : ""}`}>
        <div className="modal-data-div">
          <WebToonModalClose>
            <button onClick={handleCancel}>X</button>
          </WebToonModalClose>
          <WebToonModalBlock>
            <div className="modal-intro">
              <div className="img-area">
                <img src={webToonData.thumbnail[0]} alt="웹툰이미지" />
              </div>
              <div className="modal-contents">
                <div className="title">{webToonData.title}</div>
                <div className="author">{webToonData.authors.join(" / ")}</div>
                <div className="tag-area">
                  <button className="tag-button action">액션</button>
                  <button className="tag-button romance">로맨스</button>
                </div>
                <div className="contents">{webToonData.summary}</div>
              </div>
            </div>
            <div className="modal-music-list">
              {webToonData.story.map((it, idx) => (
                <WebToonMusic webToonStoryData={it} />
              ))}
            </div>
          </WebToonModalBlock>
        </div>
      </WebToonModalWrapper>
    </Overlay>
  );
};

export default WebToonModal;
