import styled from "styled-components";
import { centerColumn } from "../../../components/CSS/Global/GlobalDisplay";
import pause from "../../../components/CSS/image/MusicImg/pause.png";
import play from "../../../components/CSS/image/MusicImg/play.png";
import { useEffect, useRef, useState } from "react";
import { musicArr } from "../../project/contents/musicBox/musicArr";

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
  }

  .music-area {
    width: 80%;
    height: 100%;
    background-color: orange;
  }

  .on-off-area {
    ${centerColumn}
    width: 10%;
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

const WebToonMusic = () => {
  // 노래 ref
  const tonnAudioRef = useRef<HTMLAudioElement | null>(null);
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
  // 재생되는 노래 id
  const [musicId, setMusicId] = useState<number>(musicArr[0].id);

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

  return (
    <WebToonMusicList>
      <div className="episode-area">1화</div>
      <div className="music-area">
        <audio ref={tonnAudioRef} src={playMusic} />
      </div>
      <div className="on-off-area">
        <button>
          <img src={play} alt="on/off" />
        </button>
      </div>
    </WebToonMusicList>
  );
};

export default WebToonMusic;
