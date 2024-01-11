import React, { useEffect, useRef, useState } from "react";
import { GlobalWrapper } from "../../../components/CSS/Global/GlobalWrapper";
import styled from "styled-components";

const MoveWrapper = styled.section`
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

  h1 {
    position: absolute;
    font-size: 6em;
    width: 258px;
    color: white;
    font-family: sans-serif;
    top: 80px;
    left: 300px;
    opacity: 0;
  }

  @keyframes appear {
    0% {
      left: -100px;
      opacity: 0;
    }
    100% {
      left: 300px;
      opacity: 1;
    }
  }

  @keyframes disAppear {
    0% {
      left: 300px;
      opacity: 1;
    }

    100% {
      left: -100px;
      opacity: 0;
    }
  }
`;

const HmMove = () => {
  //   const [scrollValue, setScrollValue] = useState(0);
  const [nowAnimation, setNowAnimation] = useState("");
  const [animationCheck, setAnimationCheck] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      // 스크롤 값을 갖는 변수
      const scrollValue = window.scrollY;

      // 스크롤 300 이상일 때 글자가 생기는 애니메이션
      if (scrollValue >= 300 && scrollValue < 1000 && animationCheck !== "A") {
        setNowAnimation("appear");
        setTimeout(() => {
          setAnimationCheck("A");
        }, 1000);
        // 스크롤 1000 이상일 때 글자가 사라지는 애니메이션
      } else if (scrollValue >= 1000 && animationCheck !== "D") {
        setNowAnimation("disAppear");
        setTimeout(() => {
          setAnimationCheck("D");
        }, 1000);
        // 스크롤을 위로 올릴 시 200 이하일 때 글자가 사라지는 애니메이션
      } else if (scrollValue <= 200 && animationCheck !== "D") {
        setNowAnimation("disAppear");
        setAnimationCheck("D");
      }
    };

    // 스크롤 이벤트 발생 시 실행
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [nowAnimation, animationCheck]);

  return (
    <GlobalWrapper>
      <MoveWrapper>
        <h1 style={{ animation: `${nowAnimation} 1s ease-out forwards` }}>
          PICK YOUR FAVORITE
        </h1>
        <img
          src="https://image.istarbucks.co.kr/upload/common/img/main/2022/2022_NewYear_pick_img.png"
          className="photo"
        />
      </MoveWrapper>
    </GlobalWrapper>
  );
};

export default HmMove;
