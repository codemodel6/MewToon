import React, { useEffect, useRef, useState } from "react";
import { GlobalBlock } from "../../../components/CSS/Global/GlobalBlock";
import styled from "styled-components";
import codeLand from "../../../components/CSS/image/FooterImg/github.png";
import { handleScrollAnimation } from "../../../components/Function/MyFunction";
import jersey from "../../../components/CSS/image/HomeImg/jersey.jpg";

const MoveWrapper = styled.section<{
  topAnimation: string;
  bottomAnimation: string;
  imgAnimation: string;
}>`
  position: relative;
  background-image: url(${jersey}); // 스크롤에 따라 움직임 없이 고정
  background-size: cover; /* 이미지를 배경에 꽉 채움 */
  background-position: center; /* 배경의 초기값을 가운데로 */
  background-repeat: no-repeat; /* 배경보다 이미지가 작아도 반복하지 않음 */
  background-attachment: fixed; /* 스크롤에 따라 움직임 없이 고정 */
  width: 100%;
  height: 100%;

  .photo {
    position: absolute;
    top: 100px;
    right: 200px;
  }

  .topText {
    width: 100px;
    position: absolute;
    font-size: 50px;
    width: 500px;
    color: white;
    top: 150px;
    left: 200px;
    opacity: 0;
    animation: ${(props) => props.topAnimation} 1s ease-out forwards;
  }

  .bottomText {
    width: 200px;
    position: absolute;
    font-size: 50px;
    width: 500px;
    color: white;
    bottom: 200px;
    right: 100px;
    opacity: 1;
    font-weight: bold;
    animation: ${(props) => props.bottomAnimation} 1s ease-out forwards;
  }

  .codelandImg {
    height: 300px;
    width: 300px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 1;
    animation: ${(props) => props.imgAnimation} 1s ease-out forwards;
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

  //--- 중앙 이미지 애니메이션 ---
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

const HmMove = () => {
  const [topAnimation, setTopAnimation] = useState<string>("");
  const [topCheck, setTopCheck] = useState<string>("");

  const [bottomAnimation, setBottomAnimation] = useState<string>("");
  const [bottomCheck, setBottomCheck] = useState<string>("");

  const [imgAnimation, setImgAnimation] = useState<string>("");
  const [imgCheck, setImgCheck] = useState<string>("");

  useEffect(() => {
    // top 관련 함수 정의
    const topFn = () =>
      handleScrollAnimation(
        300,
        1000,
        150,
        "topAppear",
        "topDisAppear",
        topCheck,
        setTopCheck,
        setTopAnimation
      );
    // bottom 관련 함수 정의
    const bottomFn = () =>
      handleScrollAnimation(
        700,
        1400,
        150,
        "bottomAppear",
        "bottomDisAppear",
        bottomCheck,
        setBottomCheck,
        setBottomAnimation
      );

    const imgFn = () =>
      handleScrollAnimation(
        500,
        1200,
        150,
        "imgAppear",
        "imgDisAppear",
        imgCheck,
        setImgCheck,
        setImgAnimation
      );

    // 스크롤 이벤트 발생 시 실행
    window.addEventListener("scroll", topFn);
    window.addEventListener("scroll", bottomFn);
    window.addEventListener("scroll", imgFn);

    return () => {
      window.removeEventListener("scroll", topFn);
      window.removeEventListener("scroll", bottomFn);
      window.removeEventListener("scroll", imgFn);
    };
  }, [
    topAnimation,
    topCheck,
    bottomAnimation,
    bottomCheck,
    imgAnimation,
    imgCheck,
  ]);

  return (
    <GlobalBlock>
      <MoveWrapper
        topAnimation={topAnimation}
        bottomAnimation={bottomAnimation}
        imgAnimation={imgAnimation}
      >
        <h1 className="topText">개발자의 낙원</h1>
        <img className="codelandImg" src={codeLand} alt="메인화면이미지" />
        <h1 className="bottomText">
          코드랜드에 오신걸
          <br />
          환영합니다!
        </h1>
      </MoveWrapper>
    </GlobalBlock>
  );
};

export default HmMove;
