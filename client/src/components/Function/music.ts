import { Dispatch } from "@reduxjs/toolkit";
import { MutableRefObject, SetStateAction } from "react";
import { MusicProps } from "../../page/project/contents/musicBox/musicArr";

/** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
- 함수 기능 : 노래의 시간을 00:00 형식으로 바꿔주는 함수
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
export const handleTimeFormat = (time: number): string => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);

  return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
};

interface PlayProps {
  (
    setState: React.Dispatch<React.SetStateAction<boolean>>,
    ref: MutableRefObject<HTMLAudioElement | null>
  ): void;
}
/** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
- 함수 기능 : 노래 시작
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
export const handlePlay: PlayProps = (setState, ref) => {
  // state가 반영이 느린 문제점을 해결 : prevState는 변하기 전 상태 ex) true -> false면 true
  setState((prevState) => {
    const nowState = true;
    /** 함수 : setTimeout 0
     *  비동기적으로 현재 실행중인 모든 코드가 실행되어서 호출 스택이 비워진 후
     *  즉시 실행하도록 하는 함수이다. 이후 setPlayMusic이 완벽하게 동작한 후 음악을 실행시킨다.
     *  함수를 나누지 않은 이유는 브라우저 정책에 의해 노래를 실행시키는 것은
     *  오직 Click 이벤트 등에 의해 실행해야 하기 때문이다.
     */
    setTimeout(() => {
      if (ref.current) {
        ref.current.play(); // 노래 시작
      }
    }, 0);
    return nowState;
  });
};

interface StopProps {
  (
    setState: React.Dispatch<React.SetStateAction<boolean>>,
    ref: MutableRefObject<HTMLAudioElement | null>
  ): void;
}

/** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
- 함수 기능 : 노래 멈춤
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
export const handleStop: StopProps = (setState, ref) => {
  // state가 반영이 느린 문제점을 해결
  setState((prevState) => {
    // 현재 상태를 false 로 변경
    const nowState = false;
    if (ref.current) {
      ref.current.pause(); // 노래 일시정지
    }
    return nowState;
  });
};

interface ChagneProps {
  (
    eValue: string,
    setState: React.Dispatch<React.SetStateAction<number>>,
    ref: MutableRefObject<HTMLAudioElement | null>
  ): void;
}
/** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
- 함수 기능 : 노래의 시간 진행도를 변경해주는 함수
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
export const handleTimeChange: ChagneProps = (eValue, setState, ref) => {
  const newTime = parseFloat(eValue);
  setState(newTime);
  if (ref.current) {
    ref.current.currentTime = newTime;
  }
};

interface ResetProps {
  (
    ref: MutableRefObject<HTMLAudioElement | null>,
    setCurrentTime: React.Dispatch<React.SetStateAction<number>>,
    setAudioState: React.Dispatch<React.SetStateAction<boolean>>
  ): void;
}
/** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
- 함수 기능 : 노래를 처음으로 되돌리는 함수
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
export const handleReset: ResetProps = (ref, setCurrentTime, setState) => {
  const audio = ref.current;
  if (audio) {
    audio.currentTime = 0; // 오디오 처음으로
    setCurrentTime(0); // 진행도 초기화
    audio.pause();
    setState(false); // 재생 상태를 초기화
  }
};

interface MoveProps {
  (
    musicArr: MusicProps[],
    playMusic: string | undefined,
    setPlayMusic: React.Dispatch<React.SetStateAction<string | undefined>>,
    setMusicId: React.Dispatch<React.SetStateAction<number>>,
    setState: React.Dispatch<React.SetStateAction<boolean>>,
    ref: MutableRefObject<HTMLAudioElement | null>
  ): void;
}
/** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
- 함수 기능 : 이전 노래를 실행하는 함수
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
export const handlePrev: MoveProps = (
  musicArr,
  playMusic,
  setPlayMusic,
  setMusicId,
  setState,
  ref
) => {
  // 리스트의 길이가 0일 경우 return
  if (musicArr.length === 0) return;

  // 노래, 노래 아이디
  let prevMusic: string;
  let prevId: number;

  // 현재 음악의 배열값을 찾은 후 전단계로 이동
  for (let i = 0; i < musicArr.length; i++) {
    if (musicArr[i].play === playMusic) {
      if (i === 0) {
        // 처음 노래라면 마지막 노래로 간다
        prevMusic = musicArr[musicArr.length - 1].play;
        prevId = musicArr[musicArr.length - 1].id;
      } else {
        // 현재 노래의 전 단계의 음악을 리스트에서 가져온다
        prevMusic = musicArr[i - 1].play;
        prevId = musicArr[i - 1].id;
      }

      // 이후 음악 설정
      setPlayMusic(prevMusic);
      setMusicId(prevId);
      break;
    }
  }

  // 음악 플레이 함수 실행
  handlePlay(setState, ref);
};

/** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
- 함수 기능 : 이전 노래를 실행하는 함수
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
export const handleNext: MoveProps = (
  musicArr,
  playMusic,
  setPlayMusic,
  setMusicId,
  setState,
  ref
) => {
  // 리스트의 길이가 0일 경우 return
  if (musicArr.length === 0) return;

  // 노래, 노래 아이디
  let nextMusic: string;
  let nextId: number;

  // 현재 음악의 배열값을 찾은 후 전단계로 이동
  for (let i = 0; i < musicArr.length; i++) {
    if (musicArr[i].play === playMusic) {
      if (i === musicArr.length - 1) {
        // 마지막 노래라면 0번째로 이동
        nextMusic = musicArr[0].play;
        nextId = musicArr[0].id;
      } else {
        // 현재 노래의 전 단계의 음악을 리스트에서 가져온다
        nextMusic = musicArr[i + 1].play;
        nextId = musicArr[i + 1].id;
      }

      // 이후 음악 설정
      setPlayMusic(nextMusic);
      setMusicId(nextId);
      break;
    }
  }

  // 음악 플레이 함수 실행
  handlePlay(setState, ref);
};

interface RandomProps {
  (
    musicArr: MusicProps[],
    musicId: number,
    setPlayMusic: React.Dispatch<React.SetStateAction<string | undefined>>,
    setMusicId: React.Dispatch<React.SetStateAction<number>>,
    setState: React.Dispatch<React.SetStateAction<boolean>>,
    ref: MutableRefObject<HTMLAudioElement | null>
  ): void;
}

/** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
- 함수 기능 : 랜덤 노래를 실행하는 함수
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
export const handleRandom: RandomProps = (
  musicArr,
  musicId,
  setPlayMusic,
  setMusicId,
  setState,
  ref
) => {
  // 랜덤으로 생성 될 아이디
  let myRandomId;

  // 똑같은 아이디가 나오지 않을 때 까지 랜덤 아이디를 찾는다
  do {
    myRandomId = Math.floor(Math.random() * musicArr.length);
  } while (myRandomId === musicId - 1);

  console.log(myRandomId);
  // 현재 음악의 배열값을 찾은 후 전단계로 이동
  // 마지막 노래라면 0번째로 이동
  const randomMusic = musicArr[myRandomId].play;
  const randomId = musicArr[myRandomId].id;

  // 이후 음악 설정
  setPlayMusic(randomMusic);
  setMusicId(randomId);

  // 음악 플레이 함수 실행
  handlePlay(setState, ref);
};
