import styled from "styled-components";
import {
  aroundRow,
  betweenRow,
  centerColumn,
  centerRow,
} from "../../../../components/CSS/Global/GlobalDisplay";
import MusicList from "./MusicList";
import { useEffect, useRef, useState } from "react";
import QWER from "../../../../components/Music/QWER 고민중독.mp3";
import pause from "../../../../components/CSS/image/MusicImg/pause.png";
import play from "../../../../components/CSS/image/MusicImg/play.png";
import reStart from "../../../../components/CSS/image/MusicImg/restart.png";
import next from "../../../../components/CSS/image/MusicImg/next.png";
import { musicArr } from "./musicArr";

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
  background-color: pink;
  padding-left: 350px;

  .player {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 90%;
    width: 650px;
    background-color: red; // 이미지로 변경
    padding-top: 50px;
    border-radius: 20px;

    .imgDiv {
      background-color: orange;
      width: 70%;
      height: 400px;
      margin-bottom: 30px;
    }

    .title {
      background-color: yellow;
      font-size: 30px;
      font-weight: bold;
      margin-bottom: 10px;
    }

    .author {
      background-color: green;
      font-size: 20px;
      margin-bottom: 10px;
    }

    .time {
      ${betweenRow}
      width: 70%;
      background-color: blue;
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
      background-color: gray;
      width: 70%;
      height: 60px;

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
  const [playMusic, setPlayMusic] = useState<string>(QWER);
  // 노래 재생 상태
  const [audioState, setAudioState] = useState<boolean>(false);
  // 노래 현재 시간
  const [currentTime, setCurrentTime] = useState<number>(0);
  // 노래 전체 길이
  const [duration, setDuration] = useState<number>(0);
  // 노래 ref
  const audioRef = useRef<HTMLAudioElement | null>(null);
  // 재생되는 노래 id
  const [musicId, setMusicId] = useState<number | null>(null);

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

  /** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  - 함수 기능 : 노래의 시간을 00:00 형식으로 바꿔주는 함수
  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
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
        if (audioRef.current) {
          audioRef.current.play(); // 노래 시작
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
      if (audioRef.current) {
        audioRef.current.pause(); // 노래 일시정지
      }
      return nowState;
    });
  };

  /** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  - 함수 기능 : 노래의 진행도를 표시해주는 함수
  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    setCurrentTime(newTime);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
    }
  };

  /** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  - 함수 기능 : 노래를 처음으로 되돌리는 함수
  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
  const handleReset = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.currentTime = 0; // 오디오 처음으로
      setCurrentTime(0); // 진행도 초기화
      audio.pause();
      setAudioState(false); // 재생 상태를 초기화
    }
  };

  /** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  - 함수 기능 : 이전 노래를 실행하는 함수
  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
  const handlePrev = () => {
    // 리스트의 길이가 0일 경우 return
    if (musicArr.length === 0) return;
    // 1번째 곡일 경우 return
    if (musicArr[0].play === playMusic) return;

    // 현재 음악의 배열값을 찾은 후 전단계로 이동
    for (let i = 0; i < musicArr.length; i++) {
      if (musicArr[i].play === playMusic) {
        // 현재 노래의 전 단계의 음악을 리스트에서 가져온다
        const prevMusic = musicArr[i - 1].play;
        const prevId = musicArr[i - 1].id;
        // 이후 음악 설정
        setPlayMusic(prevMusic);
        setMusicId(prevId);
        break;
      }
    }

    // 음악 플레이 함수 실행
    handlePlay();
  };

  /** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  - 함수 기능 : 이전 노래를 실행하는 함수
  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
  const handleNext = () => {
    // 리스트의 길이가 0일 경우 return
    if (musicArr.length === 0) return;
    // 마지막 곡일 경우 return
    if (musicArr[musicArr.length - 1].play === playMusic) return;

    // 현재 음악의 배열값을 찾은 후 전단계로 이동
    for (let i = 0; i < musicArr.length; i++) {
      if (musicArr[i].play === playMusic) {
        // 현재 노래의 전 단계의 음악을 리스트에서 가져온다
        const prevMusic = musicArr[i + 1].play;
        const prevId = musicArr[i + 1].id;
        // 이후 음악 설정
        setPlayMusic(prevMusic);
        setMusicId(prevId);
        break;
      }
    }

    // 음악 플레이 함수 실행
    handlePlay();
  };

  return (
    <MusicBoxWrapper>
      <MusicPlayerWrapper>
        <div className="player">
          <audio ref={audioRef} src={playMusic} />
          <div className="imgDiv"></div>
          <div className="title">제목입니다</div>
          <div className="author">가수입니다</div>
          <div className="time">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
          <input
            type="range"
            value={currentTime}
            min="0"
            max={duration}
            step={0.1}
            onChange={handleChange}
          />
          <div className="tool">
            <button onClick={handleReset}>
              <img src={reStart} alt="다시시작" />
            </button>
            <button onClick={handlePrev}>
              <img className="rotateImg" src={next} alt="이전곡" />
            </button>
            <button onClick={audioState ? handleStop : handlePlay}>
              <img src={audioState ? pause : play} alt="재생도구" />
            </button>
            <button onClick={handleNext}>
              <img src={next} alt="다음곡" />
            </button>
            <button>흠냐</button>
          </div>
        </div>
      </MusicPlayerWrapper>
      <MusicList
        setPlayMusic={setPlayMusic}
        handlePlay={handlePlay}
        musicId={musicId}
        setMusicId={setMusicId}
      />
    </MusicBoxWrapper>
  );
};

export default MusicBox;
