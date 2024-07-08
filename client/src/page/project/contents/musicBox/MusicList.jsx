import styled from "styled-components";
import {
  BlackColor,
  FontSize,
  GrayColor,
  MainColor,
  SubColor,
  WhiteColor,
} from "../../../../components/CSS/Color/ColorNote";
import { handleMusic, musicArr } from "./musicArr";
import {
  aroundRow,
  centerRow,
} from "../../../../components/CSS/Global/GlobalDisplay";
import { useEffect, useState } from "react";
import { handlePlay } from "../../../../components/Function/music";

const MusicListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 80%;
  width: 15%;

  .top {
    ${aroundRow}
    width: 100%;
    height: 10%;
    background-color: ${MainColor.Main200};
    border-radius: 150px 150px 0 0;

    .eyes {
      background-color: ${BlackColor.Black100};
      width: 15px;
      height: 15px;
      border-radius: 100%;
    }

    .mouse {
      margin-top: 20px;
      background-color: ${SubColor.Sub200};
      width: 50px;
      height: 10px;
      border-radius: 0 0 150px 150px;
    }
  }

  .bottom {
    width: 100%;
    height: 10%;
    background-color: ${MainColor.Main200};
    border-radius: 0 0 150px 150px;
  }

  .list {
    width: 100%;
    height: 80%;
    background-color: white;
    overflow: scroll;
    position: relative;
    border-left: 1px solid ${MainColor.Main200};
    border-right: 1px solid ${MainColor.Main200};

    .musicInfo {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-left: 10px;
      padding-right: 10px;
      position: relative;
      z-index: 10;
      border-bottom: 2px solid ${MainColor.Main200};
      width: 100%;
      height: 10%;
      font-size: ${FontSize.medium};
      transition: transform 0.15s ease-in-out; /* 애니메이션 추가 */
      cursor: pointer;

      &:hover {
        background-color: ${GrayColor.Gray500};
        border-top: 2px solid ${MainColor.Main200};
        transform: translateY(-5px); /* 약간 위로 이동 */
      }
    }

    & .here {
      // 아름다운 색깔 설정
      background: linear-gradient(
        0.25turn,
        ${MainColor.Main300},
        ${MainColor.Main200},
        ${SubColor.Sub100}
      );
    }
  }
`;

const MusicList = ({
  setPlayMusic,
  musicId,
  setMusicId,
  setAudioState,
  audioRef,
}) => {
  /** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  - 함수 기능 : 리스트에서 노래 선택 후 실행시키는 함수
  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
  const handleClick = (it) => {
    setMusicId(it.id);
    setPlayMusic(it.play);
    handlePlay(setAudioState, audioRef);
  };

  return (
    <MusicListWrapper>
      <div className="top">
        <div className="eyes"></div>
        <div className="mouse"></div>
        <div className="eyes"></div>
      </div>
      <div className="list">
        {musicArr.map((it, idx) => (
          <div
            className={`musicInfo ${it.id === musicId ? "here" : ""}`}
            key={idx}
            onClick={() => handleClick(it)}
          >
            {it.name}
          </div>
        ))}
      </div>
      <div className="bottom" />
    </MusicListWrapper>
  );
};

export default MusicList;
