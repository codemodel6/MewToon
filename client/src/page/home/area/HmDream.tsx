import React, { SetStateAction, useEffect, useRef, useState } from "react";
import { GlobalBlock } from "../../../components/CSS/Global/GlobalBlock";
import styled from "styled-components";
import codeLand from "../../../components/CSS/image/FooterImg/github.png";
import { handleScrollAnimation } from "../../../components/Function/MyFunction";
// import { handleScroll } from "../../../components/Function/MyFunction";

const DreamWrapper = styled.section<{
  firstAnimation: string;
  secondAnimation: string;
  handAnimation: string;
}>`
  position: relative;
  width: 100%;
  height: 90vh;
  background-color: royalblue;

  .firstText {
    width: 100px;
    position: absolute;
    font-size: 30px;
    width: 1000px;
    color: white;
    top: 50px;
    left: 150px;
    opacity: 0;
    animation: ${(props) => props.firstAnimation} 1s ease-out forwards;
  }

  .secondText {
    width: 200px;
    position: absolute;
    font-size: 30px;
    width: 1000px;
    color: white;
    top: 180px;
    left: 150px;
    opacity: 0;
    font-weight: bold;
    animation: ${(props) => props.secondAnimation} 1.5s ease-out forwards;
  }

  .thirdText {
    width: 200px;
    position: absolute;
    font-size: 30px;
    width: 1000px;
    color: white;
    top: 350px;
    left: 150px;
    opacity: 0;
    font-weight: bold;
    animation: ${(props) => props.secondAnimation} 1s ease-out forwards;
    animation-delay: 0.5s;
  }

  img {
    height: 500px;
    width: 500px;
    position: absolute;
    top: 20%;
    right: 5%;
    opacity: 1;
    animation: ${(props) => props.handAnimation} 1s ease-out forwards;
  }

  //--- 1번째 애니메이션 ---
  @keyframes firstAppear {
    0% {
      top: 0px;
      opacity: 0;
    }
    100% {
      top: 50px;
      opacity: 1;
    }
  }

  @keyframes firstDisAppear {
    0% {
      top: 50px;
      opacity: 1;
    }
    100% {
      top: 0;
      opacity: 0;
    }
  }

  //--- 2번째 애니메이션 ---
  @keyframes secondAppear {
    0% {
      left: 0px;
      opacity: 0;
    }
    100% {
      left: 150px;
      opacity: 1;
    }
  }
  @keyframes secondDisAppear {
    0% {
      left: 150px;
      opacity: 1;
    }
    100% {
      left: 0px;
      opacity: 0;
    }
  }

  //--- 이미지 애니메이션 ---
  @keyframes imgAppear {
    0% {
      right: 0;
      opacity: 0;
    }

    100% {
      right: 7%;
      opacity: 1;
    }
  }
  @keyframes imgDisAppear {
    0% {
      right: 7%;
      opacity: 1;
    }
    100% {
      right: 0;
      opacity: 0;
    }
  }
`;

const HmDream = () => {
  const [firstAnimation, setFirstAnimation] = useState<string>("");
  const [firstCheck, setFirstCheck] = useState<string>("");

  const [secondAnimation, setSecondAnimation] = useState<string>("");
  const [secondCheck, setSecondCheck] = useState<string>("");

  const [imgAnimation, setImgAnimation] = useState<string>("");
  const [imgCheck, setImgCheck] = useState<string>("");

  useEffect(() => {
    // 1번 함수
    const upFn = () =>
      handleScrollAnimation(
        2500,
        4000,
        2400,
        "firstAppear",
        "firstDisAppear",
        firstCheck,
        setFirstCheck,
        setFirstAnimation
      );
    // 2번 함수
    const downFn = () =>
      handleScrollAnimation(
        2600,
        4000,
        2500,
        "secondAppear",
        "secondDisAppear",
        secondCheck,
        setSecondCheck,
        setSecondAnimation
      );

    // img 함수
    const imgFn = () =>
      handleScrollAnimation(
        2600,
        4000,
        2500,
        "imgAppear",
        "imgDisAppear",
        imgCheck,
        setImgCheck,
        setImgAnimation
      );

    // 스크롤 이벤트 발생 시 실행
    window.addEventListener("scroll", upFn);
    window.addEventListener("scroll", downFn);
    window.addEventListener("scroll", imgFn);

    return () => {
      window.removeEventListener("scroll", upFn);
      window.removeEventListener("scroll", downFn);
      window.removeEventListener("scroll", imgFn);
    };
  }, [
    firstAnimation,
    firstCheck,
    secondAnimation,
    secondCheck,
    imgAnimation,
    imgCheck,
  ]);

  return (
    <DreamWrapper
      firstAnimation={firstAnimation}
      secondAnimation={secondAnimation}
      handAnimation={imgAnimation}
    >
      <h1 className="firstText">
        가장 많은 것을 이루는 자들은 아마 가장 많은 꿈을 꾸는 자들이다.
        <br />
        -Stephen Leacock
      </h1>
      <h1 className="secondText">
        코드랜드는 꿈꾸고 만들어 보고 싶은 것을 개발하는 페이지 입니다.
        <br />
        높은 곳을 바라보며 꿈꾸는 것은 성공을 위한 필수 사상입니다.
        <br />그 여정을 코드랜드에서 시작하겠습니다.
      </h1>
      <h1 className="thirdText">당신의 꿈을. 저의 꿈을 함께 이뤄봐요!</h1>
      <img src={codeLand} alt="악수이미지" />
    </DreamWrapper>
  );
};

export default HmDream;
