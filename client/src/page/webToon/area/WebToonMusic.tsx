import styled from "styled-components";
import { centerColumn } from "../../../components/CSS/Global/GlobalDisplay";
import pause from "../../../components/CSS/image/MusicImg/pause.png";
import play from "../../../components/CSS/image/MusicImg/play.png";
import { useEffect, useRef, useState } from "react";
import { musicArr } from "../../project/contents/musicBox/musicArr";
import { MainColor } from "../../../components/CSS/Color/ColorNote";

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
    ${centerColumn}
    width: 80%;
    height: 100%;
    padding: 0 2% 0 2%;
    border-right: 1px solid black;

    input {
      width: 100%;
    }
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

  /** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  - 함수 기능 : 노래의 진행도를 표시해주는 함수
  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    setCurrentTime(newTime);
    if (tonnAudioRef.current) {
      tonnAudioRef.current.currentTime = newTime;
    }
  };

  /** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  - 함수 기능 : 노래 시작
  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
  const handlePlay = () => {
    // state가 반영이 느린 문제점을 해결 : prevState는 변하기 전 상태 ex) true -> false면 true
    setAudioState((prevState) => {
      const nowState = true;
      /** 함수 : setTimeout 0
       *  비동기적으로 현재 실행중인 모든 코드가 실행되어서 호출 스택이 비워진 후
       *  즉시 실행하도록 하는 함수이다. 이후 setPlayMusic이 완벽하게 동작한 후 음악을 실행시킨다.
       *  함수를 나누지 않은 이유는 브라우저 정책에 의해 노래를 실행시키는 것은
       *  오직 Click 이벤트 등에 의해 실행해야 하기 때문이다.
       */
      setTimeout(() => {
        if (tonnAudioRef.current) {
          tonnAudioRef.current.play(); // 노래 시작
        }
      }, 0);
      return nowState;
    });
  };

  /** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  - 함수 기능 : 노래 멈춤
  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
  const handleStop = () => {
    // state가 반영이 느린 문제점을 해결
    setAudioState((prevState) => {
      // 현재 상태를 false 로 변경
      const nowState = false;
      if (tonnAudioRef.current) {
        tonnAudioRef.current.pause(); // 노래 일시정지
      }
      return nowState;
    });
  };

  return (
    <WebToonMusicList>
      <audio ref={tonnAudioRef} src={playMusic} />
      <div className="episode-area">1화</div>
      <div className="music-area">
        <input
          type="range"
          value={currentTime}
          min="0"
          max={duration}
          step={0.1}
          onChange={handleChange}
        />
      </div>
      <div className="on-off-area">
        <button onClick={audioState ? handleStop : handlePlay}>
          <img src={audioState ? pause : play} alt="재생도구" />
        </button>
      </div>
    </WebToonMusicList>
  );
};

export default WebToonMusic;
