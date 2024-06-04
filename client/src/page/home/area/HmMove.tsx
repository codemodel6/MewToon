import React, { useEffect, useRef, useState } from "react";
import { GlobalBlock } from "../../../components/CSS/Global/GlobalBlock";
import styled from "styled-components";
import codeLand from "../../../components/CSS/image/FooterImg/github.png";

const MoveWrapper = styled.section<{
  topAnimation: string;
  bottomAnimation: string;
  imgAnimation: string;
}>`
  position: relative;
  background: url(https://www.starbucks.co.kr/common/img/main/fav_prod_bg_new.jpg)
    fixed; // 스크롤에 따라 움직임 없이 고정
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

/** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  * 인터페이스 : 스크롤에 따라 애니메이션을 보여주는 함수의 인터페이스
  * Param     :
  *   first: 화면이 처음으로 나타날 때의 스크롤 값
  *   second: 화면이 처음으로 나타나고 사라질 때의 스크롤 값
  *   last: 화면의 스크롤을 위로 올릴 때 사라지게 할 때의 스크롤 값
  *   myAppear: 나타날때의 애니메이션 이름,
  *   myDisAppear: 사라질때의 애니메이션 이름
  *   animationCheck: 애니메이션 on/off 값
  *   setAnimationCheck: 애니메이션 on/off 상태 변화
  *   setAnimation: 적용시킬 애니메이션을 고르는 상태 변화

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
interface ScrollFunction {
  (
    first: number,
    second: number,
    last: number,
    myAppear: string,
    myDisAppear: string,
    animationCheck: string,
    setAnimationCheck: React.Dispatch<React.SetStateAction<string>>,
    setAnimation: React.Dispatch<React.SetStateAction<string>>
  ): void;
}

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
        350,
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

  /** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  - 함수 기능 : 애니메이션 효과
  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
  const handleScrollAnimation: ScrollFunction = (
    first,
    second,
    last,
    myAppear,
    myDisAppear,
    animationCheck,
    setAnimationCheck,
    setAnimation
  ) => {
    // 스크롤 값을 갖는 변수
    const scrollValue = window.scrollY;
    console.log(scrollValue);

    // 스크롤 first 이상일 때 글자가 생기는 애니메이션
    if (
      scrollValue >= first &&
      scrollValue < second &&
      animationCheck !== "A"
    ) {
      setAnimation(myAppear);
      setTimeout(() => {
        setAnimationCheck("A");
      }, 1000);

      // 스크롤이 second 이상일 때 글자가 사라지는 애니메이션
    } else if (scrollValue >= second && animationCheck !== "D") {
      setAnimation(myDisAppear);
      setTimeout(() => {
        setAnimationCheck("D");
      }, 1000);

      // 스크롤을 위로 올릴 시 last 이상일 때 글자가 사라지는 애니메이션
    } else if (scrollValue <= last && animationCheck !== "D") {
      setAnimation(myDisAppear);
      setAnimationCheck("D");
    }
  };

  /** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  - 함수 기능 : 상단 글자 애니메이션 효과
  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
  const handleTopScroll = () => {
    // 스크롤 값을 갖는 변수
    const scrollValue = window.scrollY;
    console.log(scrollValue);

    // 스크롤 300 이상일 때 글자가 생기는 애니메이션
    if (scrollValue >= 300 && scrollValue < 1000 && topCheck !== "A") {
      setTopAnimation("topAppear");
      setTimeout(() => {
        setTopCheck("A");
      }, 1000);
      // 스크롤 1000 이상일 때 글자가 사라지는 애니메이션
    } else if (scrollValue >= 1000 && topCheck !== "D") {
      setTopAnimation("topDisAppear");
      setTimeout(() => {
        setTopCheck("D");
      }, 1000);
      // 스크롤을 위로 올릴 시 150 이상일 때 글자가 사라지는 애니메이션
    } else if (scrollValue <= 150 && topCheck !== "D") {
      setTopAnimation("topDisAppear");
      setTopCheck("D");
    }
  };

  /** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  - 함수 기능 : 하단 글자 애니메이션 효과
  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
  const handleBottomScroll = () => {
    // 스크롤 값을 갖는 변수
    const scrollValue = window.scrollY;
    console.log(scrollValue);

    // 스크롤 700 이상일 때 글자가 생기는 애니메이션
    if (scrollValue >= 700 && scrollValue < 1400 && bottomCheck !== "A") {
      setBottomAnimation("bottomAppear");
      setTimeout(() => {
        setBottomCheck("A");
      }, 1000);
      // 스크롤 1400 이상일 때 글자가 사라지는 애니메이션
    } else if (scrollValue >= 1400 && bottomCheck !== "D") {
      setBottomAnimation("bottomDisAppear");
      setTimeout(() => {
        setBottomCheck("D");
      }, 1000);
      // 스크롤을 위로 올릴 시 550 이상일 때 글자가 사라지는 애니메이션
    } else if (scrollValue <= 550 && bottomCheck !== "D") {
      setBottomAnimation("bottomDisAppear");
      setBottomCheck("D");
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
    if (scrollValue >= 500 && scrollValue < 1200 && imgCheck !== "A") {
      setImgAnimation("imgAppear");
      setTimeout(() => {
        setImgCheck("A");
      }, 1000);
      // 스크롤 1400 이상일 때 글자가 사라지는 애니메이션
    } else if (scrollValue >= 1200 && imgCheck !== "D") {
      setImgAnimation("imgDisAppear");
      setTimeout(() => {
        setImgCheck("D");
      }, 1000);
      // 스크롤을 위로 올릴 시 550 이상일 때 글자가 사라지는 애니메이션
    } else if (scrollValue <= 350 && imgCheck !== "D") {
      setImgAnimation("imgDisAppear");
      setImgCheck("D");
    }
  };

  return (
    <GlobalBlock>
      <MoveWrapper
        topAnimation={topAnimation}
        bottomAnimation={bottomAnimation}
        imgAnimation={imgAnimation}
      >
        <h1 className="topText">상상하는 모든것!</h1>
        <img className="codelandImg" src={codeLand} alt="메인화면이미지" />
        <h1 className="bottomText">
          코드랜드에 오신걸
          <br />
          환영합니다!
        </h1>
        <img
          src="https://image.istarbucks.co.kr/upload/common/img/main/2022/2022_NewYear_pick_img.png"
          className="photo"
        />
      </MoveWrapper>
    </GlobalBlock>
  );
};

export default HmMove;
