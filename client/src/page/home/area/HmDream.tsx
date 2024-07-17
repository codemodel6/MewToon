import { useEffect, useState } from "react";
import styled from "styled-components";
import central from "../../../components/CSS/image/HomeImg/central.jpg";
import handshake from "../../../components/CSS/image/HomeImg/handshake.png";
import { handleScrollAnimation } from "../../../components/Function/scroll";

const DreamWrapper = styled.section<{
  firstAnimation: string;
  secondAnimation: string;
  handAnimation: string;
}>`
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: url(${central});
  background-size: cover; // 이미지를 배경에 꽉 채움
  background-position: center; // 배경의 초기값을 가운데로
  background-repeat: no-repeat; // 배경보다 이미지가 작아도 반복하지 않음
  opacity: 1;
  z-index: 1;
  color: white;
  text-rendering: optimizeLegibility;
  text-shadow: 1px 3px 5px black;

  .firstText {
    width: 100px;
    position: absolute;
    font-size: 30px;
    width: 1000px;
    top: 120px;
    left: 150px;
    opacity: 0;
    animation: ${(props) => props.firstAnimation} 1s ease-out forwards;
  }

  .secondText {
    width: 200px;
    position: absolute;
    font-size: 30px;
    width: 1000px;
    top: 250px;
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
    top: 420px;
    left: 150px;
    opacity: 0;
    font-weight: bold;
    animation: ${(props) => props.secondAnimation} 1s ease-out forwards;
    animation-delay: 0.5s;
  }

  .handImg {
    bottom: 10%;
    height: 500px;
    width: 300px;
    position: absolute;
    opacity: 0;
    animation: ${(props) => props.handAnimation} 1.5s ease-out forwards;
  }

  //--- 1번째 애니메이션 ---
  @keyframes firstAppear {
    0% {
      top: 0px;
      opacity: 0;
    }
    100% {
      top: 120px;
      opacity: 1;
    }
  }

  @keyframes firstDisAppear {
    0% {
      top: 120px;
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
  @keyframes handAppear {
    0% {
      right: 14%;
      opacity: 0;
    }

    100% {
      right: 20%;
      opacity: 1;
    }
  }
  @keyframes handDisAppear {
    0% {
      right: 20%;
      opacity: 1;
    }
    100% {
      right: 14%;
      opacity: 0;
    }
  }
`;

const HmDream = () => {
  const [firstAnimation, setFirstAnimation] = useState<string>("");
  const [firstCheck, setFirstCheck] = useState<string>("");

  const [secondAnimation, setSecondAnimation] = useState<string>("");
  const [secondCheck, setSecondCheck] = useState<string>("");

  const [handAnimation, setHandAnimation] = useState<string>("");
  const [handCheck, setHandCheck] = useState<string>("");

  useEffect(() => {
    // 1번 함수
    const upFn = () =>
      handleScrollAnimation(
        3000,
        4000,
        2700,
        "firstAppear",
        "firstDisAppear",
        firstCheck,
        setFirstCheck,
        setFirstAnimation
      );
    // 2번 함수
    const downFn = () =>
      handleScrollAnimation(
        3200,
        4200,
        2900,
        "secondAppear",
        "secondDisAppear",
        secondCheck,
        setSecondCheck,
        setSecondAnimation
      );

    // img 함수
    const handFn = () =>
      handleScrollAnimation(
        3200,
        4200,
        2900,
        "handAppear",
        "handDisAppear",
        handCheck,
        setHandCheck,
        setHandAnimation
      );

    // 스크롤 이벤트 발생 시 실행
    window.addEventListener("scroll", upFn);
    window.addEventListener("scroll", downFn);
    window.addEventListener("scroll", handFn);

    return () => {
      window.removeEventListener("scroll", upFn);
      window.removeEventListener("scroll", downFn);
      window.removeEventListener("scroll", handFn);
    };
  }, [
    firstAnimation,
    firstCheck,
    secondAnimation,
    secondCheck,
    handAnimation,
    handCheck,
  ]);

  return (
    <DreamWrapper
      firstAnimation={firstAnimation}
      secondAnimation={secondAnimation}
      handAnimation={handAnimation}
    >
      <h1 className="firstText">
        가장 많은 것을 이루는 자들은 아마 가장 많은 꿈을 꾸는 자들이다.
        <br />
        -Stephen Leacock
      </h1>
      <h1 className="secondText">
        뮤툰은 사업성을 꿈꾸며 더 좋은 미래를 위해 만든 페이지 입니다.
        <br />
        높은 곳을 바라보며 꿈꾸는 것은 성공을 위한 필수 사상이기에
        <br />그 여정을 이곳에서 시작하겠습니다.
      </h1>
      <h1 className="thirdText">당신의 꿈을. 저의 꿈을.</h1>
      <img className="handImg" src={handshake} alt="악수이미지" />
    </DreamWrapper>
  );
};

export default HmDream;
