import styled from "styled-components";
import {
  aroundRow,
  centerRow,
} from "../../../components/CSS/Global/GlobalDisplay";
import { FontSize, GrayColor } from "../../../components/CSS/Color/ColorNote";
import { useState } from "react";

const SampleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 40vh;
  background-color: orange;
  padding-top: 40px;

  .title {
    display: flex;
    height: 30%;
    font-size: 30px;
    color: ${GrayColor.Gray100};
  }
`;

const ContentsWrapper = styled.div`
  ${aroundRow}
  background-color: red;
  width: 100%;
  height: 70%;

  .codelandImg {
    height: 300px;
    width: 300px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 1;
  }

  //--- 상단 글자 애니메이션 ---
  @keyframes topAppear {
    0% {
      left: -100px;
      opacity: 0;
    }
    100% {
      left: 200px;
      opacity: 1;
    }
  }

  @keyframes topDisAppear {
    0% {
      left: 200px;
      opacity: 1;
    }

    100% {
      left: -100px;
      opacity: 0;
    }
  }

  //--- 하단 글자 애니메이션 ---
  @keyframes bottomAppear {
    0% {
      right: -100px;
      opacity: 0;
    }
    100% {
      right: 100px;
      opacity: 1;
    }
  }

  @keyframes bottomDisAppear {
    0% {
      right: 100px;
      opacity: 1;
    }

    100% {
      right: -100px;
      opacity: 0;
    }
  }

  //--- 상단 글자 애니메이션 ---
  @keyframes imgAppear {
    0% {
      width: 1px;
      height: 1px;
      opacity: 0;
    }

    100% {
      width: 300px;
      height: 300px;
      opacity: 1;
    }
  }

  @keyframes imgDisAppear {
    0% {
      width: 300px;
      height: 300px;
      opacity: 1;
    }

    100% {
      width: 1px;
      height: 1px;
      opacity: 0;
    }
  }
`;

const HmSample = () => {
  // const [topAnimation, setTopAnimation] = useState<string>("");
  // const [topCheck, setTopCheck] = useState<string>("");

  // const [bottomAnimation, setBottomAnimation] = useState<string>("");
  // const [bottomCheck, setBottomCheck] = useState<string>("");

  // const [imgAnimation, setImgAnimation] = useState<string>("");
  // const [imgCheck, setImgCheck] = useState<string>("");

  return (
    <SampleWrapper>
      <div className="title">여러 프로젝트를 구경</div>
      <ContentsWrapper></ContentsWrapper>
    </SampleWrapper>
  );
};

export default HmSample;
