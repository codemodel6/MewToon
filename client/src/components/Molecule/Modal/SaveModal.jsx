/** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
- 그래프 결과를 저장 할 수 있는 모달
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/

import { useState } from "react";
import { CancleButton, SubmitButton } from "../../GlobalCss/GlobalItem";
import { Overlay } from "./ScrollModal";
import styled from "styled-components";
import { BlackColor, MainColor, SubColor } from "../../GlobalCss/ColorNote";
import { useDispatch } from "react-redux";
import { URL } from "../../URL/URL";
import axios from "axios";

const SaveModalWrapper = styled.div`
  display: none;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  &.open {
    display: block;
  }

  .modalDataDiv {
    background-color: ${BlackColor.Black100};
    width: 800px;
    height: 500px;
    margin-bottom: 40px;
    border: 3px solid ${MainColor.Main200};
    overflow: scroll;
    border-radius: 10px;

    .modalTitle {
      text-align: center;
      padding-top: 10px;
      height: 15%;
      width: 100%;
      color: white;
      font-size: xx-large;
      border-bottom: 2px solid ${MainColor.Main200};
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
        border-right: 2px solid ${MainColor.Main200};

        .myTitle {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 17%;
          border-bottom: 2px solid ${MainColor.Main200};
        }

        .noLineTitle {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 17%;
        }
      }

      .contentsDiv {
        width: 75%;
        height: 100%;

        .modalInputDiv {
          height: 17%;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          border-bottom: 2px solid ${MainColor.Main200};

          input {
            width: 90%;
            height: 45px;
            border: 3px solid ${SubColor.Sub100};
            padding-left: 20px;
            background-color: ${BlackColor.Black100};
            color: white;
          }
          input:focus {
            outline: none;
            border: 3px solid white;
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
            padding-left: 20px;
            background-color: ${BlackColor.Black100};
            color: white;
            resize: none;
          }
          textArea:focus {
            outline: none;
            border: 3px solid white;
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

const SaveModal = ({ modalstate, handleOnOff, saveData, setSaveData }) => {
  // 저장할 이름 state
  const [myName, setMyName] = useState("");
  const [myContents, setMyContents] = useState("");
  const dispatch = useDispatch();

  /** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  - 함수 기능 : 저장 버튼을 눌렀을 때 그래프 csv 주소, 이름, 파람을 DB에 저장하는 함수
  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
  const handleSave = async () => {
    const mySaveData = {
      ...saveData,
      myName,
      myContents,
    };

    if (window.confirm("저장 하시겠습니까?")) {
      const saveMyData = await axios.post(
        `${URL}/save/saveOptData`,
        mySaveData
      );

      // 성공시 창을 닫는다
      if (saveMyData.status === 200) {
        handleCancle();
        alert("저장 성공");
      }
    }

    // 리덕스인데 나중에 쓸지도
    // dispatch(saveOptimalData(saveData));
  };

  /** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  - 함수 기능 : 취소 버튼을 눌렀을 때 모달을 닫는 함수
  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
  const handleCancle = () => {
    setMyName("");
    setMyContents("");
    handleOnOff();
  };

  return (
    <Overlay modalstate={modalstate}>
      <SaveModalWrapper className={`${modalstate ? "open" : ""}`}>
        <div className="modalDataDiv">
          <div className="modalTitle">결과 저장</div>
          <div className="modalContents">
            <div className="titleDiv">
              <div className="myTitle">제목</div>
              <div className="noLineTitle">내용</div>
            </div>
            <div className="contentsDiv">
              <div className="modalInputDiv">
                <input
                  value={myName}
                  onChange={(e) => setMyName(e.target.value)}
                />
              </div>

              <div className="modalTextDiv">
                <textarea
                  value={myContents}
                  onChange={(e) => setMyContents(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="buttonDiv">
          <SubmitButton onClick={handleSave}>저장</SubmitButton>
          <CancleButton onClick={handleCancle}>취소</CancleButton>
        </div>
      </SaveModalWrapper>
    </Overlay>
  );
};

export default SaveModal;
