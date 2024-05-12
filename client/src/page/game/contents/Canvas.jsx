import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import {
  aroundRow,
  betweenRow,
} from "../../../components/CSS/Global/GlobalDisplay";
import {
  CancelButton,
  GlobalButton,
} from "../../../components/CSS/Global/GlobalItem";

const CanvasWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 40px;

  canvas {
    border: 1px solid black;
    background-color: white;
    margin-bottom: 20px;
  }

  .buttonDiv {
    ${aroundRow}
    width: 70%;
    height: 80px;
  }
`;

const Canvas = () => {
  // 캔버스 ref
  const canvasRef = useRef(null);
  // 드로잉 컨텍스트 참조 ref
  const contextRef = useRef(null);

  const [canvasTag, setCanvasTag] = useState([]);
  // 드로잉 컨텍스트
  const [ctx, setCtx] = useState();

  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth * 0.6;
    canvas.height = window.innerHeight * 0.6;

    const context = canvas.getContext("2d");

    context.lineCap = "round"; // 끝을 둥글게
    context.strokeStyle = "black"; // 선 색깔
    context.lineWidth = 5; // 선 굵기
    contextRef.current = context; // 그림을 그리는 기준

    setCtx(contextRef.current);

    setCanvasTag(canvas);
  }, []);

  /** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  - 함수 기능 : 그림그리기 시작하는 시점
  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    setIsDrawing(true);
  };

  /** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  - 함수 기능 : 그림그리기 끝나는 시점
  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
  const finishDrawing = () => {
    setIsDrawing(false);
  };

  const drawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    // canvas.getContext('2d')의 값이 있을 때
    if (ctx) {
      if (!isDrawing) {
        ctx.beginPath();
        ctx.moveTo(offsetX, offsetY);
      } else {
        ctx.lineTo(offsetX, offsetY);
        ctx.stroke();
      }
    }
  };

  return (
    <CanvasWrapper>
      <canvas
        ref={canvasRef}
        onMouseDown={startDrawing}
        onMouseUp={finishDrawing}
        onMouseMove={drawing}
        onMouseLeave={finishDrawing}
      ></canvas>
      <div className="buttonDiv">
        <GlobalButton width="20%" height="70%">
          저장
        </GlobalButton>
        <CancelButton width="20%" height="70%">
          초기화
        </CancelButton>
      </div>
    </CanvasWrapper>
  );
};

export default Canvas;
