/** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
- 공통 함수 컴포넌트
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
interface ScrollFunction {
  (
    scrollData: number,
    setScrollData: React.Dispatch<React.SetStateAction<number>>,
    setScrolling: React.Dispatch<React.SetStateAction<boolean>>
  ): void;
}

/** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
- 함수 기능 : 스크롤이 위로 움직이는지 아래로 움직이는 확인하는 함수
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
export const handleScroll: ScrollFunction = (
  scrollData,
  setScrollData,
  setScrollBoolean
) => {
  if (window.scrollY > scrollData) {
    setScrollBoolean(true);
  } else {
    setScrollBoolean(false);
  }

  setScrollData(window.scrollY);
};

/** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  - 함수 기능 : 스크롤을 원하는 위치로 이동시키는 함수
  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
export const handleScrollMove = (move: number) => {
  window.scrollTo({
    top: move,
    behavior: "smooth",
  });

  handleTest(move);
};

const handleTest = (move: number) => {
  window.scrollTo({
    top: move + 1,
    behavior: "smooth",
  });
};

interface LinkFunction {
  (url: string): void;
}
/** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
- 함수 기능 : url의 새로운 탭을 여는 함수
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
export const handleLink: LinkFunction = (url) => {
  window.open(url);
};
