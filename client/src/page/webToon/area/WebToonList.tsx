import { useState } from "react";
import styled from "styled-components";
import { FontSize, GrayColor } from "../../../components/CSS/Color/ColorNote";
import {
  betweenRow,
  centerRow,
} from "../../../components/CSS/Global/GlobalDisplay";
import 화산귀환 from "../../../components/CSS/image/WebToonImg/화산귀환.png";
import { ToonProps } from "../WebToon";

const WebToonListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 80%;
  height: 1500px;
  /* background-color: blue; */
  margin-top: 20px;
  cursor: pointer;
  position: absolute;
`;

const WebToonWrapper = styled.div<{ $hoverState: boolean }>`
  border: 1px solid ${GrayColor.Gray300};
  width: 24%;
  height: 33%;
  padding: 1.1%;
  color: ${GrayColor.Gray100};
  animation: ${(props) =>
    props.$hoverState ? "rotateLeft 1s forwards" : "rotateRevoke 1s forwards"};

  .webtoon-block {
    width: 100%;
    height: 100%;
    position: relative;

    img {
      width: 100%;
      height: 82%;
    }

    .title {
      ${centerRow}
      font-size: ${FontSize.large};
      /* background-color: darkblue; */
      width: 100%;
      height: 10%;
      transform: ${(props) =>
        props.$hoverState ? "rotateY(180deg);" : "rotateY(0);"};
    }

    .author {
      ${betweenRow}
      font-size: ${FontSize.medium};
      padding: 0 10px 0 10px;
      /* background-color: darkcyan; */
      width: 100%;
      height: 8%;
      transform: ${(props) =>
        props.$hoverState ? "rotateY(180deg);" : "rotateY(0);"};
    }
  }

  @keyframes rotateLeft {
    0% {
      transform: rotateY(0deg);
    }
    100% {
      transform: rotateY(-180deg);
    }
  }

  @keyframes rotateRevoke {
    0% {
      transform: rotateY(-180deg);
    }
    100% {
      transform: rotateY(0deg);
    }
  }
`;

const WebToonOverlay = styled.div<{ $overLayState: boolean }>`
  margin: -1.1%;
  position: absolute;
  padding: 20px;
  width: 92%;
  height: 94%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 10;
  opacity: ${({ $overLayState }) => ($overLayState ? "1" : "0")};
  transition: opacity 1.3s ease-in;
  color: white;
  font-weight: 20px;
  font-size: ${FontSize.xlarge};
  transform: rotateY(-180deg);
`;

const dummyList = [
  { id: 1, title: "히어로킬러", author: "작가", score: 9.32, img: 화산귀환 },
  { id: 2, title: "히어로킬러", author: "작가", score: 9.32, img: 화산귀환 },
  { id: 3, title: "히어로킬러", author: "작가", score: 9.32, img: 화산귀환 },
  { id: 4, title: "히어로킬러", author: "작가", score: 9.32, img: 화산귀환 },
  { id: 5, title: "히어로킬러", author: "작가", score: 9.32, img: 화산귀환 },
  { id: 6, title: "히어로킬러", author: "작가", score: 9.32, img: 화산귀환 },
  { id: 7, title: "히어로킬러", author: "작가", score: 9.32, img: 화산귀환 },
  { id: 8, title: "히어로킬러", author: "작가", score: 9.32, img: 화산귀환 },
  { id: 9, title: "히어로킬러", author: "작가", score: 9.32, img: 화산귀환 },
  { id: 10, title: "히어로킬러", author: "작가", score: 9.32, img: 화산귀환 },
  { id: 11, title: "히어로킬러", author: "작가", score: 9.32, img: 화산귀환 },
  { id: 12, title: "히어로킬러", author: "작가", score: 9.32, img: 화산귀환 },
];

interface WebToonListInterface {
  webToonData: ToonProps[];
  modalState: boolean;
  setModalState: React.Dispatch<React.SetStateAction<boolean>>;
}

const WebToonList: React.FC<WebToonListInterface> = ({
  webToonData,
  modalState,
  setModalState,
}) => {
  // 호버 상태 state
  const [hoverState, setHoverState] = useState<{ [key: number]: boolean }>({});

  /** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  - 함수 기능 : 마우스가 웹툰 블록에 접근할 때 실행하는 함수
  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
  const handleMouseEnter = (id: number) => {
    setHoverState((prevState) => ({
      ...prevState,
      [id]: true,
    }));
  };

  /** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  - 함수 기능 : 마우스가 웹툰 블록에서 나갈때 실행하는 함수
  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
  const handleMouseLeave = (id: number) => {
    const timer = setTimeout(() => {
      setHoverState((prevState) => ({
        ...prevState,
        [id]: false,
      }));
    }, 1000);
    return () => clearTimeout(timer);
  };

  return (
    <WebToonListWrapper>
      {webToonData.map((it, idx) => (
        <WebToonWrapper
          $hoverState={!!hoverState[it.id]}
          onMouseEnter={() => handleMouseEnter(it.id)}
          onMouseLeave={() => handleMouseLeave(it.id)}
          key={it.id}
          // onClick={() => handleModal(modalState, setModalState)}
        >
          <WebToonOverlay $overLayState={hoverState[it.id] === true}>
            오버레이 텍스트
          </WebToonOverlay>
          <div className="webtoon-block">
            <img src={it.thumbnail[0]} alt="썸네일" />
            <div className="title">{it.title}</div>
            <div className="author">
              {/* <p>★ {it.score}</p> */}
              <p>{it.authors}</p>
            </div>
          </div>
        </WebToonWrapper>
      ))}
    </WebToonListWrapper>
  );
};

export default WebToonList;
