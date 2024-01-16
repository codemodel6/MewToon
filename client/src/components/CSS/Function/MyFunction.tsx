/** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
- 공통 함수 정리
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/

/** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
- 함수 기능 : 스크롤이 위로 움직이는지 아래로 움직이는 확인하는 함수
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
interface ScrollFunction {
  (
    scrollData: number,
    setScrollData: React.Dispatch<React.SetStateAction<number>>,
    setScrolling: React.Dispatch<React.SetStateAction<boolean>>
  ): void;
}

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
