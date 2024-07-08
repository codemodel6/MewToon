import styled from "styled-components";
import {
  aroundRow,
  betweenRow,
  centerColumn,
} from "../../../../components/CSS/Global/GlobalDisplay";
import MusicList from "./MusicList";
import { useEffect, useRef, useState } from "react";
import pause from "../../../../components/CSS/image/MusicImg/pause.png";
import play from "../../../../components/CSS/image/MusicImg/play.png";
import reStart from "../../../../components/CSS/image/MusicImg/restart.png";
import next from "../../../../components/CSS/image/MusicImg/next.png";
import random from "../../../../components/CSS/image/MusicImg/random.png";
import { musicArr } from "./musicArr";
import {
  GrayColor,
  SubColor,
} from "../../../../components/CSS/Color/ColorNote";
import {
  handleNext,
  handlePlay,
  handlePrev,
  handleRandom,
  handleReset,
  handleStop,
  handleTimeChange,
  handleTimeFormat,
} from "../../../../components/Function/music";

const MusicBoxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const MusicPlayerWrapper = styled.div`
  ${centerColumn}
  height: 100%;
  width: 80%;
  padding-left: 350px;

  .player {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: linear-gradient(
      0.4turn,
      ${SubColor.Sub300},
      ${GrayColor.Gray000},
      ${SubColor.Sub100}
    );
    height: 90%;
    width: 650px;
    padding-top: 50px;
    border-radius: 20px;

    .imgDiv {
      width: 70%;
      height: 400px;
      margin-bottom: 30px;

      img {
        border-radius: 20px;
        width: 100%;
        height: 100%;
      }
    }

    .title {
      font-size: 30px;
      font-weight: bold;
      margin-bottom: 10px;
    }

    .author {
      font-size: 20px;
      margin-bottom: 10px;
    }

    .time {
      ${betweenRow}
      width: 70%;
      font-size: 15px;
      font-weight: bold;
      margin-bottom: 1px;
    }

    input {
      width: 70%;
      margin-bottom: 10px;
    }

    .tool {
      ${aroundRow}
      width: 70%;
      height: 50px;

      button {
        width: 30px;
        height: 30px;
        background-color: transparent;
      }

      img {
        width: 100%;
        height: 100%;
      }

      .rotateImg {
        width: 100%;
        height: 100%;
        transform: rotate(180deg);
      }
    }
  }
`;

const MusicBox = () => {
  // 작동시킬 노래
  const [playMusic, setPlayMusic] = useState<string | undefined>(
    musicArr[0].play
  );
  // 노래 재생 상태
  const [audioState, setAudioState] = useState<boolean>(false);
  // 노래 현재 시간
  const [currentTime, setCurrentTime] = useState<number>(0);
  // 노래 전체 길이
  const [duration, setDuration] = useState<number>(0);
  // 노래 ref
  const audioRef = useRef<HTMLAudioElement | null>(null);
  // 재생되는 노래 id
  const [musicId, setMusicId] = useState<number>(musicArr[0].id);

  /** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  - 훅 기능 : 오디오와 관련된 설정
  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
  useEffect(() => {
    const audio = audioRef.current;

    const updateTime = () => {
      if (audio) {
        setCurrentTime(audio.currentTime);
      }
    };

    const metadataLoad = () => {
      if (audio) {
        setDuration(audio.duration);
      }
    };

    if (audio) {
      // timeupdate는 오디오의 변경될 때 마다 실행
      audio.addEventListener("timeupdate", updateTime);
      audio.addEventListener("loadedmetadata", metadataLoad);
    }

    // 1초에 한번씩 현재 시간 반영
    const timeInterval = setInterval(() => {
      if (audio) {
        setCurrentTime(audio.currentTime);
      }
    }, 1000);

    return () => {
      if (audio) {
        audio.removeEventListener("timeupdate", updateTime);
        audio.removeEventListener("loadedmetadata", metadataLoad);
      }

      clearInterval(timeInterval);
    };
  }, []);

  return (
    <MusicBoxWrapper>
      <MusicPlayerWrapper>
        <div className="player">
          <audio ref={audioRef} src={playMusic} />
          <div className="imgDiv">
            <img src={musicArr[musicId - 1].img} alt="음악이미지" />
          </div>
          <div className="title">{musicArr[musicId - 1].name}</div>
          <div className="author">{musicArr[musicId - 1].author}</div>
          <div className="time">
            <span>{handleTimeFormat(currentTime)}</span>
            <span>{handleTimeFormat(duration)}</span>
          </div>
          <input
            type="range"
            value={currentTime}
            min="0"
            max={duration}
            step={0.1}
            onChange={(e) =>
              handleTimeChange(e.target.value, setCurrentTime, audioRef)
            }
          />
          <div className="tool">
            <button
              onClick={() =>
                handleReset(audioRef, setCurrentTime, setAudioState)
              }
            >
              <img src={reStart} alt="다시시작" />
            </button>
            <button
              onClick={() =>
                handlePrev(
                  musicArr,
                  playMusic,
                  setPlayMusic,
                  setMusicId,
                  setAudioState,
                  audioRef
                )
              }
            >
              <img className="rotateImg" src={next} alt="이전곡" />
            </button>
            <button
              onClick={() =>
                audioState
                  ? handleStop(setAudioState, audioRef)
                  : handlePlay(setAudioState, audioRef)
              }
            >
              <img src={audioState ? pause : play} alt="재생도구" />
            </button>
            <button
              onClick={() =>
                handleNext(
                  musicArr,
                  playMusic,
                  setPlayMusic,
                  setMusicId,
                  setAudioState,
                  audioRef
                )
              }
            >
              <img src={next} alt="다음곡" />
            </button>
            <button
              onClick={() =>
                handleRandom(
                  musicArr,
                  musicId,
                  setPlayMusic,
                  setMusicId,
                  setAudioState,
                  audioRef
                )
              }
            >
              <img src={random} alt="다음곡" />
            </button>
          </div>
        </div>
      </MusicPlayerWrapper>
      <MusicList
        setPlayMusic={setPlayMusic}
        musicId={musicId}
        setMusicId={setMusicId}
        setAudioState={setAudioState}
        audioRef={audioRef}
      />
    </MusicBoxWrapper>
  );
};

export default MusicBox;
