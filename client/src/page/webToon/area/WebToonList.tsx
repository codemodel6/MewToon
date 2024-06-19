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
  padding: 20px;
  color: black;
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
      font-size: ${FontSize.xlarge};
      /* background-color: darkblue; */
      width: 100%;
      height: 10%;
      transform: ${(props) =>
        props.$hoverState ? "rotateY(180deg);" : "rotateY(0);"};
    }

    .author {
      ${centerRow}
      font-size: ${FontSize.medium};
      padding: 0 10px 0 10px;
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
  display: flex;
  flex-direction: column;
  margin: -20px;
  position: absolute;
  padding: 40px;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  z-index: 10;
  opacity: ${({ $overLayState }) => ($overLayState ? "1" : "0")};
  transition: opacity 1s ease-in;
  color: white;
  font-weight: 20px;
  font-size: ${FontSize.xlarge};
  transform: rotateY(-180deg);

  div {
    height: 10%;
    width: 100%;
  }
`;

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
            <div>제목 : {it.title}</div>
            <div>작가 : {it.authors.join(" / ")}</div>
            <div>
              올해 고등학생 은우는 짝사랑하던 아린을 만난다 반가운 마음에
              다가갔지만 아린은...
            </div>
          </WebToonOverlay>
          <div className="webtoon-block">
            <img src={it.thumbnail[0]} alt="썸네일" />
            <div className="title">{it.title}</div>
            <div className="author">{it.authors.join(" / ")}</div>
          </div>
        </WebToonWrapper>
      ))}
    </WebToonListWrapper>
  );
};

export default WebToonList;
