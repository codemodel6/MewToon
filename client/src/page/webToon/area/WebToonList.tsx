import { useState } from "react";
import styled from "styled-components";
import { FontSize, GrayColor } from "../../../components/CSS/Color/ColorNote";
import { centerRow } from "../../../components/CSS/Global/GlobalDisplay";
import { handleModal } from "../../../components/Function/modal";
import { ToonProps } from "../WebToon";

const WebToonListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 80%;
  height: 1500px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const WebToonWrapper = styled.div<{ $hoverState: boolean; $idx: number }>`
  border: 1px solid ${GrayColor.Gray300};
  width: 24%;
  height: 33%;
  padding: 20px;
  color: black;
  cursor: pointer;
  animation: ${(props) =>
    props.$hoverState ? "rotateLeft 1s forwards" : "rotateRevoke 1s forwards"};
  margin-right: ${(props) => (props.$idx ? "1.33%" : "0")};
  margin-bottom: 20px;

  .webtoonBlock {
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
  webToonList: ToonProps[];
  modalState: boolean;
  setModalState: React.Dispatch<React.SetStateAction<boolean>>;
  setWebToonData: React.Dispatch<React.SetStateAction<ToonProps>>;
}

const WebToonList: React.FC<WebToonListInterface> = ({
  webToonList,
  modalState,
  setModalState,
  setWebToonData,
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

  /** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  - 함수 기능 : 마우스가 웹툰 블록에서 나갈때 실행하는 함수
  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
  const handleToonModal = (it: ToonProps) => {
    // 모달 키는 함수 실행
    handleModal(modalState, setModalState);

    // 클릭한 데이터 전달
    setWebToonData({
      id: it.id,
      authors: it.authors,
      title: it.title,
      thumbnail: it.thumbnail,
      tag: it.tag,
      summary: it.summary,
      story: it.story,
    });
    console.log(it);
  };

  return (
    <WebToonListWrapper>
      {webToonList.map((it, idx) => (
        <WebToonWrapper
          $idx={(idx + 1) % 4}
          $hoverState={!!hoverState[it.id]}
          onMouseEnter={() => handleMouseEnter(it.id)}
          onMouseLeave={() => handleMouseLeave(it.id)}
          key={it.id}
          onClick={() => handleToonModal(it)}
        >
          <WebToonOverlay $overLayState={hoverState[it.id] === true}>
            <div>제목 : {it.title}</div>
            <div>작가 : {it.authors.join(" / ")}</div>
            <div>{it.summary}</div>
          </WebToonOverlay>
          <div className="webtoonBlock">
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
