import React, { SetStateAction, useEffect, useRef, useState } from "react";
import { GlobalBlock } from "../../../components/CSS/Global/GlobalBlock";
import styled from "styled-components";
import codeLand from "../../../components/CSS/image/FooterImg/github.png";
import { Dispatch } from "@reduxjs/toolkit";

const DreamWrapper = styled.section<{
  firstAnimation: string;
  secondAnimation: string;
  handAnimation: string;
}>`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: royalblue;

  .photo {
    position: absolute;
    top: 100px;
    right: 200px;
  }

  .firstText {
    width: 100px;
    position: absolute;
    font-size: 50px;
    width: 500px;
    color: white;
    top: 150px;
    left: 200px;
    opacity: 0;
    animation: ${(props) => props.firstAnimation} 1s ease-out forwards;
  }

  .secondText {
    width: 200px;
    position: absolute;
    font-size: 50px;
    width: 500px;
    color: white;
    bottom: 200px;
    right: 100px;
    opacity: 1;
    font-weight: bold;
    animation: ${(props) => props.secondAnimation} 1s ease-out forwards;
  }

  .handImg {
    height: 300px;
    width: 300px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 1;
    animation: ${(props) => props.handAnimation} 1s ease-out forwards;
  }

  //--- 상단 글자 애니메이션 ---
  @keyframes firstAppear {
    0% {
      left: -100px;
      opacity: 0;
    }
    100% {
      left: 200px;
      opacity: 1;
    }
  }

  @keyframes firstDisAppear {
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
  @keyframes secondAppear {
    0% {
      right: -100px;
      opacity: 0;
    }
    100% {
      right: 100px;
      opacity: 1;
    }
  }
  @keyframes secondDisAppear {
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
  @keyframes handAppear {
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
`;

/** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
- 인터페이스 : 스크롤에 따라 애니메이션을 보여주는 함수의 인터페이스
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
interface ScrollFunction {
  (
    first: number,
    second: number,
    mySetState: React.Dispatch<React.SetStateAction<string>>,
    myAppear: string,
    myDisAppear: string
  ): void;
}

const HmDream = () => {
  const [firstAnimation, setFirstAnimation] = useState<string>("");
  const [secondAnimation, setSecondAnimation] = useState<string>("");
  const [thirdAnimation, setThirdAnimation] = useState<string>("");
  const [handAnimation, setHandAnimation] = useState<string>("");

  useEffect(() => {
    // 스크롤 이벤트 발생 시 실행
    window.addEventListener("scroll", () =>
      handleScroll(100, 200, setFirstAnimation, "firstAppear", "firstDisAppear")
    );
    window.addEventListener("scroll", () =>
      handleScroll(
        200,
        500,
        setSecondAnimation,
        "secondAppear",
        "secondDisAppear"
      )
    );

    return () => {
      window.removeEventListener("scroll", () =>
        handleScroll(
          2000,
          2400,
          setFirstAnimation,
          "firstAppear",
          "firstDisAppear"
        )
      );
      window.removeEventListener("scroll", () =>
        handleScroll(
          2600,
          2900,
          setSecondAnimation,
          "secondAppear",
          "secondDisAppear"
        )
      );
    };
  }, [firstAnimation, secondAnimation, thirdAnimation, handAnimation]);

  /** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  - 함수 기능 : 첫번째 글자 애니메이션 효과
  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
  const handleScroll: ScrollFunction = (
    first,
    second,
    mySetState,
    myAppear,
    myDisAppear
  ) => {
    // 스크롤 값을 갖는 변수
    const scrollValue = window.scrollY;

    // 스크롤 300 이상일 때 글자가 생기는 애니메이션
    if (scrollValue >= first && scrollValue < second) {
      mySetState(myAppear);
      // 스크롤 1000 이상일 때 글자가 사라지는 애니메이션
    } else if (scrollValue >= second) {
      mySetState(myDisAppear);
    }
  };

  /** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  - 함수 기능 : 중앙 이미지 애니메이션 효과
  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
  const handleImgScroll = () => {
    // 스크롤 값을 갖는 변수
    const scrollValue = window.scrollY;
    console.log(scrollValue);

    // 스크롤 500 이상일 때 글자가 생기는 애니메이션
    if (scrollValue >= 500 && scrollValue < 1200) {
      setHandAnimation("handAppear");

      // 스크롤 1400 이상일 때 글자가 사라지는 애니메이션
    } else if (scrollValue >= 1200) {
      setHandAnimation("imgDisAppear");
    }
  };

  return (
    <GlobalBlock>
      <DreamWrapper
        firstAnimation={firstAnimation}
        secondAnimation={secondAnimation}
        handAnimation={handAnimation}
      >
        <h1 className="firstText">상상하는 모든것!</h1>
        <img className="handImg" src={codeLand} alt="메인화면이미지" />
        <h1 className="secondText">
          코드랜드에 오신걸
          <br />
          환영합니다!
        </h1>
        <img
          src="https://image.istarbucks.co.kr/upload/common/img/main/2022/2022_NewYear_pick_img.png"
          className="photo"
        />
      </DreamWrapper>
    </GlobalBlock>
  );
};

export default HmDream;
