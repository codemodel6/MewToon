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

const HmMove = () => {
  const [topAnimation, setTopAnimation] = useState<string>("");
  const [topAnimationCheck, setTopAnimationCheck] = useState("");

  const [bottomAnimation, setBottomAnimation] = useState<string>("");
  const [bottomAnimationCheck, setBottomAnimationCheck] = useState("");

  const [imgAnimation, setImgAnimation] = useState<string>("");
  const [imgAnimationCheck, setImgAnimationCheck] = useState("");

  useEffect(() => {
    // 스크롤 이벤트 발생 시 실행
    window.addEventListener("scroll", handleTopScroll);
    window.addEventListener("scroll", handleBottomScroll);
    window.addEventListener("scroll", handleImgScroll);

    return () => {
      window.removeEventListener("scroll", handleTopScroll);
      window.removeEventListener("scroll", handleBottomScroll);
      window.removeEventListener("scroll", handleImgScroll);
    };
  }, [
    topAnimation,
    topAnimationCheck,
    bottomAnimation,
    bottomAnimationCheck,
    imgAnimation,
    imgAnimationCheck,
  ]);

  /** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  - 함수 기능 : 상단 글자 애니메이션 효과
  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
  const handleTopScroll = () => {
    // 스크롤 값을 갖는 변수
    const scrollValue = window.scrollY;

    // 스크롤 300 이상일 때 글자가 생기는 애니메이션
    if (scrollValue >= 300 && scrollValue < 1000 && topAnimationCheck !== "A") {
      setTopAnimation("topAppear");
      setTimeout(() => {
        setTopAnimationCheck("A");
      }, 1000);
      // 스크롤 1000 이상일 때 글자가 사라지는 애니메이션
    } else if (scrollValue >= 1000 && topAnimationCheck !== "D") {
      setTopAnimation("topDisAppear");
      setTimeout(() => {
        setTopAnimationCheck("D");
      }, 1000);
      // 스크롤을 위로 올릴 시 150 이상일 때 글자가 사라지는 애니메이션
    } else if (scrollValue <= 150 && topAnimationCheck !== "D") {
      setTopAnimation("topDisAppear");
      setTopAnimationCheck("D");
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
    if (
      scrollValue >= 700 &&
      scrollValue < 1400 &&
      bottomAnimationCheck !== "A"
    ) {
      setBottomAnimation("bottomAppear");
      setTimeout(() => {
        setBottomAnimationCheck("A");
      }, 1000);
      // 스크롤 1400 이상일 때 글자가 사라지는 애니메이션
    } else if (scrollValue >= 1400 && bottomAnimationCheck !== "D") {
      setBottomAnimation("bottomDisAppear");
      setTimeout(() => {
        setBottomAnimationCheck("D");
      }, 1000);
      // 스크롤을 위로 올릴 시 550 이상일 때 글자가 사라지는 애니메이션
    } else if (scrollValue <= 550 && bottomAnimationCheck !== "D") {
      setBottomAnimation("bottomDisAppear");
      setBottomAnimationCheck("D");
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
    if (scrollValue >= 500 && scrollValue < 1200 && imgAnimationCheck !== "A") {
      setImgAnimation("imgAppear");
      setTimeout(() => {
        setImgAnimationCheck("A");
      }, 1000);
      // 스크롤 1400 이상일 때 글자가 사라지는 애니메이션
    } else if (scrollValue >= 1200 && imgAnimationCheck !== "D") {
      setImgAnimation("imgDisAppear");
      setTimeout(() => {
        setImgAnimationCheck("D");
      }, 1000);
      // 스크롤을 위로 올릴 시 550 이상일 때 글자가 사라지는 애니메이션
    } else if (scrollValue <= 350 && imgAnimationCheck !== "D") {
      setImgAnimation("imgDisAppear");
      setImgAnimationCheck("D");
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
