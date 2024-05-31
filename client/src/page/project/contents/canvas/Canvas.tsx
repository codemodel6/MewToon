import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { aroundRow } from "../../../../components/CSS/Global/GlobalDisplay";
import {
  CancelButton,
  GlobalButton,
} from "../../../../components/CSS/Global/GlobalItem";
import Palette from "./Palette";

const CanvasWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 40px;

  .contents {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 100%;

    canvas {
      border: 1px solid black;
      background-color: white;
      margin-bottom: 20px;
      margin-left: 15%;
      margin-right: 5%;
    }
  }

  .buttonDiv {
    ${aroundRow}
    width: 70%;
    height: 80px;
  }
`;

const Canvas = () => {
  // 캔버스 ref
  const canvasRef = useRef<HTMLCanvasElement>(null);
  // 드로잉 컨텍스트 참조 ref
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);
  // 드로잉 컨텍스트
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | undefined>();
  // 드로잉 진행중인지 확인
  const [isDrawing, setIsDrawing] = useState<boolean>(false);
  // 선 색깔
  const [lineColor, setLineColor] = useState<string>("black");

  useEffect(() => {
    // null 타입 방지를 위한 체크
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    // 2D 그래픽을 그리기 위한 객체
    const context = canvas.getContext("2d");

    canvas.width = window.innerWidth * 0.6;
    canvas.height = window.innerHeight * 0.6;

    // null 타입 방지를 위한 체크
    if (!context) return;

    context.lineCap = "round"; // 끝을 둥글게
    context.strokeStyle = "black"; // 선 색깔
    context.lineWidth = 5; // 선 굵기

    contextRef.current = context; // 그림을 그리는 기준
    setCtx(contextRef.current);
  }, []);

  /** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  - 함수 기능 : 그림그리기 시작하는 시점
  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
  const startDrawing = () => {
    setIsDrawing(true);
  };

  /** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  - 함수 기능 : 그림그리기 끝나는 시점
  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
  const finishDrawing = () => {
    setIsDrawing(false);
  };

  /** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  - 함수 기능 : 현재 그리기 동작이 진행 중인 확인하는 함수
  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
  const drawing = ({
    nativeEvent,
  }: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    const { offsetX, offsetY } = nativeEvent;
    // canvas.getContext('2d')의 값이 있을 때
    if (ctx) {
      // 그리는 중 이라면
      if (!isDrawing) {
        // null 타입 방지를 위한 체크
        if (!canvasRef.current) return;

        // 그릴 때 ref를 다시 가져와서 canvas와 관련된 설정을 다시 해준다 - 리렌더링을 하지 않고 적용이 된다
        const canvas = canvasRef.current;

        const context = canvas.getContext("2d");
        // null 타입 방지를 위한 체크
        if (!context) return;

        context.strokeStyle = lineColor; // 선 색깔 설정

        ctx.beginPath();
        ctx.moveTo(offsetX, offsetY);
      } else {
        ctx.lineTo(offsetX, offsetY);
        ctx.stroke();
      }
    }
  };

  /** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  - 함수 기능 : 그린 그림을 초기화 하는 함수
  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
  const handleClear = () => {
    // null 타입 방지를 위한 체크
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    // null 타입 방지를 위한 체크
    if (!context) return;

    context.clearRect(0, 0, canvas.width, canvas.height);
  };

  /** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  - 함수 기능 : 그린 그림을 저장 하는 함수
  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
  const handleSave = () => {
    // null 타입 방지를 위한 체크
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    // 이미지 데이터 URL을 가져온다
    const imgURL = canvas.toDataURL();

    // 가상의 링크를 생성하고 클릭하여 이미지를 다운로드 한다
    const link = document.createElement("a");
    link.href = imgURL;
    link.download = "그림.png";
    link.click();
  };

  return (
    <CanvasWrapper>
      <div className="contents">
        <canvas
          ref={canvasRef}
          onMouseDown={startDrawing}
          onMouseUp={finishDrawing}
          onMouseMove={drawing}
          onMouseLeave={finishDrawing}
        ></canvas>
        <Palette setLineColor={setLineColor} />
      </div>
      <div className="buttonDiv">
        <GlobalButton width="20%" height="70%" onClick={handleSave}>
          저장
        </GlobalButton>
        <CancelButton width="20%" height="70%" onClick={handleClear}>
          초기화
        </CancelButton>
      </div>
    </CanvasWrapper>
  );
};

export default Canvas;
