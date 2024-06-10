import styled from "styled-components";
import {
  aroundRow,
  centerRow,
} from "../../../components/CSS/Global/GlobalDisplay";
import { FontSize, GrayColor } from "../../../components/CSS/Color/ColorNote";
import { useEffect, useState } from "react";
import { handleScrollAnimation } from "../../../components/Function/MyFunction";

const PreviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 60vh;
  padding-top: 100px;
  margin-bottom: 50px;

  .title {
    display: flex;
    height: 30%;
    font-size: 40px;
    color: ${GrayColor.Gray100};
    font-weight: bold;
  }
`;

const ContentsWrapper = styled.div<{
  upAnimation: string;
  downAnimation: string;
}>`
  ${aroundRow}
  width: 90%;
  height: 70%;
  position: relative;
  padding: 0 5% 0 5%;

  .upImg {
    height: 190px;
    width: 190px;
    position: relative;
    border-radius: 50%;
    opacity: 0;
    background-color: black;
    animation: ${(props) => props.upAnimation} 1s ease-out forwards;
  }

  & .one {
    animation-delay: 0.4s;
  }

  .downImg {
    height: 190px;
    width: 190px;
    position: relative;
    border-radius: 50%;
    opacity: 0;
    background-color: black;
    animation: ${(props) => props.downAnimation} 1s ease-out forwards;
    animation-delay: 0.2s;
  }

  & .two {
    animation-delay: 0.6s;
  }

  //--- 위 -> 중간 애니메이션 ---
  @keyframes upAppear {
    0% {
      top: -50px;
      opacity: 0;
    }
    100% {
      top: 0;
      opacity: 1;
    }
  }

  @keyframes upDisAppear {
    0% {
      left: 0;
      opacity: 1;
    }

    100% {
      top: -50px;
      opacity: 0;
    }
  }

  //--- 아래 -> 중간 애니메이션 ---
  @keyframes downAppear {
    0% {
      bottom: -50px;
      opacity: 0;
    }
    100% {
      bottom: 0;
      opacity: 1;
    }
  }

  @keyframes downDisAppear {
    0% {
      bottom: 0;
      opacity: 1;
    }

    100% {
      bottom: -50px;
      opacity: 0;
    }
  }
`;

const HmSample = () => {
  // 위 -> 중간
  const [upAnimation, setUpAnimation] = useState<string>("");
  const [upCheck, setUpCheck] = useState<string>("");

  // 아래 -> 중간
  const [downAnimation, setDownAnimation] = useState<string>("");
  const [downCheck, setDownCheck] = useState<string>("");

  useEffect(() => {
    // main 관련 함수 정의
    const upFn = () =>
      handleScrollAnimation(
        2100,
        3200,
        1800,
        "upAppear",
        "upDisAppear",
        upCheck,
        setUpCheck,
        setUpAnimation
      );
    // sub 관련 함수 정의
    const downFn = () =>
      handleScrollAnimation(
        2100,
        3200,
        1800,
        "downAppear",
        "downDisAppear",
        downCheck,
        setDownCheck,
        setDownAnimation
      );

    // 스크롤 이벤트 발생 시 실행
    window.addEventListener("scroll", upFn);
    window.addEventListener("scroll", downFn);
    return () => {
      window.removeEventListener("scroll", upFn);
      window.removeEventListener("scroll", downFn);
    };
  }, [upAnimation, upCheck, downAnimation, downCheck]);

  return (
    <PreviewWrapper>
      <div className="title">여러 프로젝트를 구경</div>
      <ContentsWrapper upAnimation={upAnimation} downAnimation={downAnimation}>
        <div className="upImg"></div>
        <div className="downImg"></div>
        <div className="upImg one"></div>
        <div className="downImg two"></div>
      </ContentsWrapper>
    </PreviewWrapper>
  );
};

export default HmSample;
