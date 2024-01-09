/** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
- 아이템들의 CSS
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/

import styled from "styled-components";
import {
  MainColor,
  SubColor,
  GrayColor,
  FontSize,
  BlackColor,
} from "../Color/ColorNote";

/** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
- Button : 기본적인 버튼
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
export const SubmitButton = styled.button`
  width: 200px;
  height: 35px;
  border: 2px solid ${MainColor.Main100};
  border-radius: 5px;
  font-size: ${FontSize.medium};
  background-color: ${BlackColor.Black100};
  color: white;

  &:hover {
    background-color: ${MainColor.Main200};
    color: white;
    border: none;
  }
`;

/** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
- Button : 취소 버튼
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
export const CancleButton = styled(SubmitButton)`
  background-color: ${BlackColor.Black100};

  &:hover {
    background-color: ${SubColor.Sub200};
    border: none;
    color: white;
  }
`;

// 모달을 결과를 보여주는 Div
export const GlobalModal = styled.div`
  width: 100%;
  height: 160px;
  border-radius: 5px;
  border: 1px solid ${MainColor.Main200};
  font-size: ${FontSize.medium};
  margin-bottom: 10px;
  overflow: scroll;

  .modalResult {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: ${FontSize.small};
    width: 100%;
    height: 30px;
    text-align: center;
    border-bottom: 1px solid ${MainColor.Main200};
  }
`;

// 모달을 불러오는 등록 버튼
export const GlobalModalButton = styled.button`
  background-color: ${BlackColor.Black100};
  border: 1px solid ${MainColor.Main100};
  width: 100px;
  height: 30px;
  color: white;
  font-size: ${FontSize.small};
  border-radius: 5px;

  &:hover {
    background-color: ${MainColor.Main200};
    border: none;
  }
`;

// -------------------------------------------------------------------------

// Learn File Input
export const LearnFileInput = styled.input`
  display: none;
`;

// Learn File Input 실제 css
export const LearnFileInputCSS = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: ${FontSize.medium};
  border: 1px solid ${GrayColor.Gray300};
  background-color: white;
  cursor: pointer;
  width: 80px;
  height: 30px;
  color: ${GrayColor.Gray100};
  border-radius: 5px;
`;

export const XButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid ${MainColor.Main100};
  border-radius: 20%;
  background-color: ${BlackColor.Black100};
  color: red;
  width: 15px;
  height: 15px;
  font-size: ${FontSize.xsmall};
  margin-left: 5px;
  font-weight: bold;
`;

// Graph Input
export const GraphInput = styled.input`
  display: none;
`;

// Graph Input 실제 css
export const GraphInputCSS = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: ${FontSize.large};
  cursor: pointer;
  width: 200px;
  height: 50px;
  color: white;

  &:hover {
    background-color: yellow;
  }
`;

// 사용 불가 컴포넌트
export const AccessBlock = styled.div`
  z-index: 3; /* 다른 컴포넌트보다 위에 나타나도록 설정 */
  position: absolute; /* 화면에 고정 */
  width: 100%;
  height: 100%;
  background-color: rgba(255, 0, 0, 0.2);
`;

// 안정기 전용 사용 불가 컴포넌트
export const StablizerBlock = styled.div`
  z-index: 2;
  position: absolute;
  width: 50%;
  height: 50%;
  background-color: rgba(255, 255, 0, 0.2);
  /* 다른 스타일 추가 가능 */
`;
