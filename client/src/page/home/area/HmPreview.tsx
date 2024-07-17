import { useEffect, useState } from "react";
import styled from "styled-components";
import { GrayColor } from "../../../components/CSS/Color/ColorNote";
import {
  aroundRow,
  centerColumn,
} from "../../../components/CSS/Global/GlobalDisplay";
import boardImg from "../../../components/CSS/image/HomeImg/board.jpg";
import mapImg from "../../../components/CSS/image/HomeImg/map.jpg";
import musicImg from "../../../components/CSS/image/HomeImg/music.png";
import pencilImg from "../../../components/CSS/image/HomeImg/pencil.jpg";
import { handleScrollAnimation } from "../../../components/Function/scroll";

const PreviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 70vh;
  padding-top: 100px;
  margin-bottom: 50px;

  .title {
    display: flex;
    height: 30%;
    font-size: 30px;
    color: ${GrayColor.Gray100};
    font-weight: bold;
    text-align: center;
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
    ${centerColumn}
    height: 300px;
    width: 200px;
    position: relative;
    opacity: 0;
    animation: ${(props) => props.upAnimation} 1s ease-out forwards;
    font-size: 25px;
    color: ${GrayColor.Gray100};
  }

  & .one {
    animation-delay: 0.4s;
  }

  .downImg {
    ${centerColumn}
    height: 300px;
    width: 200px;
    position: relative;
    opacity: 0;
    animation: ${(props) => props.downAnimation} 1s ease-out forwards;
    animation-delay: 0.2s;
    font-size: 25px;
    color: ${GrayColor.Gray100};
  }

  & .two {
    animation-delay: 0.6s;
  }

  img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 2px solid black;
    margin-bottom: 20px;
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
        2300,
        3400,
        2000,
        "upAppear",
        "upDisAppear",
        upCheck,
        setUpCheck,
        setUpAnimation
      );
    // sub 관련 함수 정의
    const downFn = () =>
      handleScrollAnimation(
        2300,
        3400,
        2000,
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
      <div className="title">
        특색있고 다양한 프로젝트들을
        <br />
        경험할 수 있습니다
      </div>
      <ContentsWrapper upAnimation={upAnimation} downAnimation={downAnimation}>
        <div className="upImg">
          <img src={musicImg} alt="유튜브" />
          뮤직 플레이
        </div>
        <div className="downImg">
          <img src={pencilImg} alt="그림" />
          그림판
        </div>
        <div className="upImg one">
          <img src={boardImg} alt="게시판" />
          움직이는 게시판
        </div>
        <div className="downImg two">
          <img src={mapImg} alt="지도" />
          카카오 맵
        </div>
      </ContentsWrapper>
    </PreviewWrapper>
  );
};

export default HmSample;
