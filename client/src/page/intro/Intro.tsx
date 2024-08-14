/** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
- / 컴포넌트
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { GlobalBlock } from "../../components/CSS/Global/GlobalBlock";

const IntroWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  perspective: 1000px;
  perspective-origin: 50% 50%;
  width: 100vw;
  height: 100vh;
  background-color: black;
  padding-right: 25%;

  .AnimationDiv {
    width: 30vh;
    height: 30vw;
    border: 1px solid #215ba6;
    transform-style: preserve-3d;
    margin-left: 50%;
    animation: spin 5s ease-in-out forwards;

    .text {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      font-size: 2vw;
      color: #fff;
      font-weight: bold;
      transform: rotateZ(270deg) rotateY(10deg);

      span {
        display: inline-block;
        opacity: 0;
        animation: fadeIn 0.5s ease-in-out forwards;
      }

      span:nth-child(1) {
        animation-delay: 2s;
      }

      span:nth-child(2) {
        animation-delay: 2.2s;
      }
      span:nth-child(3) {
        animation-delay: 2.4s;
      }
      span:nth-child(4) {
        animation-delay: 2.6s;
      }
      span:nth-child(5) {
        animation-delay: 2.8s;
      }
      span:nth-child(6) {
        animation-delay: 3s;
      }
      span:nth-child(7) {
        animation-delay: 3.2s;
      }

      @keyframes spin {
        0% {
          transform: rotateY(0deg) rotateZ(0deg);
        }
        30% {
          transform: rotateY(60deg) rotateZ(90deg);
        }
        70% {
          transform: rotateY(30deg) rotateZ(90deg);
        }
        100% {
          transform: rotateY(30deg) rotateZ(90deg) translateY(70px);
          box-shadow: 0 0 200px rgba(33, 91, 166, 0.9);
        }
      }

      @keyframes fadeIn {
        0% {
          opacity: 0; /* 시작할 때 투명도를 0으로 설정 */
          transform: translateY(20px); /* 시작할 때 수직으로 20px 아래로 이동 */
        }
        100% {
          opacity: 1;
          transform: translateY(0);
        }
      }
    }
  }

  .welcomeDiv {
    opacity: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    width: 300px;
    color: white;
    font-size: 2vw;
    font-weight: bold;
    animation: welcome 1.5s ease-in-out forwards;
    animation-delay: 3.3s;
    padding-left: 100px;

    @keyframes welcome {
      0% {
        opacity: 0;
        transform: translateY(10px); /* 시작할 때 수직으로 20px 아래로 이동 */
      }
      100% {
        opacity: 1; /* 시작할 때 투명도를 0으로 설정 */
        transform: translateY(0px);
      }
    }
  }
`;

const Intro = () => {
  const navigate = useNavigate();

  /** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  - 훅 기능 : 애니메이션이 끝나는 시간에 /home 페이지로 이동
  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
  useEffect(() => {
    const endIntro = setTimeout(() => {
      navigate("/home");
    }, 5800);

    return () => clearTimeout(endIntro);
  }, [navigate]);

  return (
    <GlobalBlock>
      <IntroWrapper>
        <div className="AnimationDiv">
          <div className="text">
            <span>M</span>
            <span>e</span>
            <span>w</span>
            <span>T</span>
            <span>o</span>
            <span>o</span>
            <span>n</span>
          </div>
        </div>
        <div className="welcomeDiv">WELCOME</div>
      </IntroWrapper>
    </GlobalBlock>
  );
};

export default Intro;
