import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import {
  aroundRow,
  betweenRow,
  centerColumn,
} from "../../../components/CSS/Global/GlobalDisplay";
import pause from "../../../components/CSS/image/MusicImg/pause.png";
import play from "../../../components/CSS/image/MusicImg/play.png";
import reStart from "../../../components/CSS/image/MusicImg/restart.png";
import {
  handlePlay,
  handleReset,
  handleStop,
  handleTimeChange,
  handleTimeFormat,
} from "../../../components/Function/music";
import { episodProps } from "../WebToon";

const WebToonMusicList = styled.div`
  display: flex;
  border-bottom: 1px solid black;
  width: 100%;
  height: 75px;

  .episode-area {
    ${centerColumn}
    width: 10%;
    height: 100%;
    font-weight: bold;
    border-right: 1px solid black;
  }

  .music-area {
    display: flex;
    flex-direction: column;
    width: 78%;
    height: 100%;
    padding: 1% 2% 0 2%;
    border-right: 1px solid black;

    .time {
      ${betweenRow}
      width: 100%;
      font-size: 15px;
      font-weight: bold;
      margin-bottom: 3px;
    }

    input {
      width: 100%;
    }
  }

  .on-off-area {
    ${aroundRow}
    width: 12%;
    height: 100%;

    button {
      background-color: transparent;
      width: 30px;
      height: 30px;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }
`;

interface WebToonMusicProps {
  webToonStoryData: episodProps;
  modalState: boolean;
}

const WebToonMusic: React.FC<WebToonMusicProps> = ({
  webToonStoryData,
  modalState,
}) => {
  console.log("흠냐=-------------------", webToonStoryData);
  // 노래 ref
  const tonnAudioRef = useRef<HTMLAudioElement | null>(null);
  // 작동시킬 노래
  const [playMusic] = useState<string | undefined>(
    webToonStoryData.episodeMusic
  );
  // 노래 재생 상태
  const [audioState, setAudioState] = useState<boolean>(false);
  // 노래 현재 시간
  const [currentTime, setCurrentTime] = useState<number>(0);
  // 노래 전체 길이
  const [duration, setDuration] = useState<number>(0);

  /** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  - 훅 기능 : 오디오와 관련된 설정
  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
  useEffect(() => {
    const audio = tonnAudioRef.current;

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

  /** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  - 훅 기능 : 모달이 꺼질 시 음악 데이터 초기 설정
  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
  useEffect(() => {
    // 현재 더미데이터 이기때문에 강제로 리셋해준다
    handleReset(tonnAudioRef, setCurrentTime, setAudioState);
  }, [modalState]);

  return (
    <WebToonMusicList>
      <audio ref={tonnAudioRef} src={playMusic} />
      <div className="episode-area">{webToonStoryData.episode}</div>
      <div className="music-area">
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
            handleTimeChange(e.target.value, setCurrentTime, tonnAudioRef)
          }
        />
      </div>
      <div className="on-off-area">
        <button
          onClick={() =>
            audioState
              ? handleStop(setAudioState, tonnAudioRef)
              : handlePlay(setAudioState, tonnAudioRef)
          }
        >
          <img src={audioState ? pause : play} alt="재생도구" />
        </button>
        <button
          onClick={() =>
            handleReset(tonnAudioRef, setCurrentTime, setAudioState)
          }
        >
          <img src={reStart} alt="처음으로" />
        </button>
      </div>
    </WebToonMusicList>
  );
};

export default WebToonMusic;
