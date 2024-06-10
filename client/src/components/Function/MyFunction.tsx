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

/** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
- 인터페이스 : handleLink의 인터페이스
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
interface LinkFunction {
  (url: string): void;
}

/** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
- 함수 기능 : url의 새로운 탭을 여는 함수
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
export const handleLink: LinkFunction = (url) => {
  window.open(url);
};

/** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
- 인터페이스 : 스크롤에 따라 애니메이션을 보여주는 함수의 인터페이스
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
interface ScrollAnimationFunction {
  (
    first: number,
    second: number,
    last: number,
    myAppear: string,
    myDisAppear: string,
    animationCheck: string,
    setAnimationCheck: React.Dispatch<React.SetStateAction<string>>,
    setAnimation: React.Dispatch<React.SetStateAction<string>>
  ): void;
}

/** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  * 함수 기능 : 스크롤에 따라 애니메이션을 보여주는 함수의 인터페이스
  * Param     :
  *   first: 화면이 처음으로 나타날 때의 스크롤 값
  *   second: 화면이 처음으로 나타나고 사라질 때의 스크롤 값
  *   last: 화면의 스크롤을 위로 올릴 때 사라지게 할 때의 스크롤 값
  *   myAppear: 나타날때의 애니메이션 이름,
  *   myDisAppear: 사라질때의 애니메이션 이름
  *   animationCheck: 애니메이션 on/off 값
  *   setAnimationCheck: 애니메이션 on/off 상태 변화
  *   setAnimation: 적용시킬 애니메이션을 고르는 상태 변화
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
export const handleScrollAnimation: ScrollAnimationFunction = (
  first,
  second,
  last,
  myAppear,
  myDisAppear,
  animationCheck,
  setAnimationCheck,
  setAnimation
) => {
  // 스크롤 값을 갖는 변수
  const scrollValue = window.scrollY;
  console.log(scrollValue);

  // 스크롤 first 이상일 때 글자가 생기는 애니메이션
  if (scrollValue >= first && scrollValue < second && animationCheck !== "A") {
    setAnimation(myAppear);
    setTimeout(() => {
      setAnimationCheck("A");
    }, 1000);

    // 스크롤이 second 이상일 때 글자가 사라지는 애니메이션
  } else if (scrollValue >= second && animationCheck !== "D") {
    setAnimation(myDisAppear);
    setTimeout(() => {
      setAnimationCheck("D");
    }, 1000);

    // 스크롤을 위로 올릴 시 last 이상일 때 글자가 사라지는 애니메이션
  } else if (scrollValue <= last && animationCheck !== "D") {
    setAnimation(myDisAppear);
    setAnimationCheck("D");
  }
};
