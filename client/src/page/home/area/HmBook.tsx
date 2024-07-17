import { useEffect, useState } from "react";
import styled from "styled-components";
import { GrayColor, MainColor } from "../../../components/CSS/Color/ColorNote";
import { aroundRow } from "../../../components/CSS/Global/GlobalDisplay";
import homeRight from "../../../components/CSS/image/HomeImg/homeRight.png";
import { handleScrollAnimation } from "../../../components/Function/scroll";

const BookWrapper = styled.div`
  ${aroundRow}
  width: 100%;
  height: 100vh;
  background: linear-gradient(
    0.4turn,
    #b3b3ff,
    #8080ff,
    #ffffff,
    #8080ff,
    #eef1f2,
    #ffffff
  );
`;

const BookTitle = styled.div<{
  mainAnimation: string;
  subAnimation: string;
  clickAnimation: string;
}>`
  width: 50%;
  height: 80%;
  padding-left: 150px;
  padding-top: 30px;
  padding: 30px 0 0 150px;
  position: relative;
  color: white;
  font-weight: bold;
  text-shadow: 5px 7px 3px black;

  .main {
    position: relative;
    font-size: 50px;
    animation: ${(props) => props.mainAnimation} 1s ease-out forwards;
  }
  .sub {
    position: relative;
    font-size: 40px;
    top: 50px;
    animation: ${(props) => props.subAnimation} 1s ease-out forwards;
  }

  .click {
    position: absolute;
    font-size: 60px;
    font-weight: bold;
    bottom: 40px;
    animation: ${(props) => props.clickAnimation} 1s ease-out forwards;
    text-shadow: 1px 5px 3px black;

    img {
      width: 60px;
      height: 50px;
    }
  }

  //--- 메인 글자 애니메이션 ---
  @keyframes mainAppear {
    0% {
      top: -50px;
      opacity: 0;
    }
    100% {
      top: 30px;
      opacity: 1;
    }
  }

  @keyframes mainDisAppear {
    0% {
      top: 30px;
      opacity: 1;
    }

    100% {
      top: -50px;
      opacity: 0;
    }
  }

  //--- 서브 글자 애니메이션 ---
  @keyframes subAppear {
    0% {
      left: -100px;
      opacity: 0;
    }
    100% {
      left: 0px;
      opacity: 1;
    }
  }

  @keyframes subDisAppear {
    0% {
      left: 0px;
      opacity: 1;
    }

    100% {
      left: -100px;
      opacity: 0;
    }
  }

  //--- 책 애니메이션 ---
  @keyframes clickAppear {
    0% {
      right: -50px;
      opacity: 0;
    }

    100% {
      right: 20px;
      opacity: 1;
    }
  }

  @keyframes clickDisAppear {
    0% {
      right: 20px;
      opacity: 1;
    }

    100% {
      right: -50px;
      opacity: 0;
    }
  }
`;

const BookListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 80%;
  padding-right: 100px;

  // 책들을 담는 캐러셀 div
  .bookCarouse {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
    width: 700px;
    height: 90%;
    position: relative;
    margin-bottom: 10px;

    // 하나의 책 div
    .book {
      width: 350px;
      position: absolute;

      // 책 이미지
      img {
        width: 100%;
        height: 100%;
      }
      transition: all 0.5s ease;
    }

    // 책의 추가 클래스. book 뒤에 클래스 명이 붙는다 ex) book item-0
    & .item-0 {
      height: 350px;
      z-index: 1;
      left: 5%;
    }
    & .item-1 {
      height: 450px;
      z-index: 2;
      left: 15%;
    }
    & .item-2 {
      height: 550px;
      z-index: 3;
      left: 25%;
    }
    & .item-3 {
      height: 450px;
      z-index: 2;
      left: 35%;
    }
    & .item-4 {
      height: 350px;
      z-index: 1;
      left: 45%;
    }
  }

  .bookDot {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 200px;
    height: 5%;

    .dot {
      border-radius: 50%;
      height: 8px;
      width: 8px;
      background-color: ${GrayColor.Gray300};
    }

    & .now {
      background-color: ${MainColor.Main100};
    }
  }
`;

const dummyBook = [
  {
    id: 0,
    mainImg:
      "https://image-comic.pstatic.net/webtoon/769209/thumbnail/thumbnail_IMAG21_3511dcdd-6e33-4171-8839-598d6d266215.jpg",
  },
  {
    id: 1,
    mainImg:
      "https://image-comic.pstatic.net/webtoon/820897/thumbnail/thumbnail_IMAG21_90f68f1d-cc97-4357-b7e8-de994918ff8d.jpg",
  },
  {
    id: 2,
    mainImg:
      "https://image-comic.pstatic.net/webtoon/816809/thumbnail/thumbnail_IMAG21_55348686-22ee-49ed-ae07-ad9b39ec748f.jpg",
  },
  {
    id: 3,
    mainImg:
      "https://image-comic.pstatic.net/webtoon/602910/thumbnail/thumbnail_IMAG21_e861f2cf-6157-4d33-8e02-7b4cbf0a8baf.jpg",
  },
  {
    id: 4,
    mainImg:
      "https://image-comic.pstatic.net/webtoon/648419/thumbnail/thumbnail_IMAG21_d9398229-cbfd-47dc-9208-0a6fb936f3a7.jpg",
  },
];

const HmBook = () => {
  // 책 리스트
  const [bookList, setBookList] = useState(dummyBook);
  // 캐러셀 진행도
  const [dot, setDot] = useState(0);

  // 메인 글자 애니메이션
  const [mainAnimation, setMainAnimation] = useState<string>("");
  const [mainCheck, setMainCheck] = useState<string>("");

  // 서브 글자 애니메이션
  const [subAnimation, setSubAnimation] = useState<string>("");
  const [subCheck, setSubCheck] = useState<string>("");

  // 책 애니메이션
  const [clickAnimation, setClickAnimation] = useState<string>("");
  const [clickCheck, setClickCheck] = useState<string>("");

  useEffect(() => {
    // main 관련 함수 정의
    const mainFn = () =>
      handleScrollAnimation(
        1200,
        2100,
        1000,
        "mainAppear",
        "mainDisAppear",
        mainCheck,
        setMainCheck,
        setMainAnimation
      );
    // sub 관련 함수 정의
    const subFn = () =>
      handleScrollAnimation(
        1400,
        2200,
        1300,
        "subAppear",
        "subDisAppear",
        subCheck,
        setSubCheck,
        setSubAnimation
      );

    // click 관련 함수 정의
    const clickFn = () =>
      handleScrollAnimation(
        1800,
        2700,
        1400,
        "clickAppear",
        "clickDisAppear",
        clickCheck,
        setClickCheck,
        setClickAnimation
      );

    // 스크롤 이벤트 발생 시 실행
    window.addEventListener("scroll", mainFn);
    window.addEventListener("scroll", subFn);
    window.addEventListener("scroll", clickFn);

    return () => {
      window.removeEventListener("scroll", mainFn);
      window.removeEventListener("scroll", subFn);
      window.removeEventListener("scroll", clickFn);
    };
  }, [
    mainAnimation,
    mainCheck,
    subAnimation,
    subCheck,
    clickAnimation,
    clickCheck,
  ]);

  /** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  - 함수 기능 : 원하는 책으로 인덱스를 변경하는 함수
  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
  const handleBookList = (selectIndex: number, dotIdx: number): void => {
    const myBookList = [...bookList];

    let newBookList; // 새로운 책 list

    // 선택한 책 위치에 따라 기능 처리
    if (selectIndex > Math.floor(myBookList.length / 2)) {
      // 책 리스트 아이디 - 1 하여 새로운 배열로 만든다
      newBookList = myBookList.map((it, idx) => ({
        ...it,
        id: it.id - 1 < 0 ? myBookList.length - 1 : it.id - 1,
      }));
      if (dot === myBookList.length - 1) setDot(0);
      else setDot(dot + 1);
    } else if (selectIndex < Math.floor(myBookList.length / 2)) {
      // 책 리스트 아이디 + 1 하여 새로운 배열로 만든다
      newBookList = myBookList.map((it, idx) => ({
        ...it,
        id: it.id + 1 > myBookList.length - 1 ? 0 : it.id + 1,
      }));
      if (dot === 0) setDot(myBookList.length - 1);
      else setDot(dot - 1);
    } else {
      return;
    }

    setBookList(newBookList);
  };

  return (
    <BookWrapper>
      <BookTitle
        mainAnimation={mainAnimation}
        subAnimation={subAnimation}
        clickAnimation={clickAnimation}
      >
        <p className="main">인기있는 웹툰을</p>
        <p className="sub">노래와 함께 즐겨보세요</p>
        <p className="click">
          CLICK <img src={homeRight} alt="오른쪽 화살표"></img>
        </p>
      </BookTitle>
      <BookListWrapper>
        <div className="bookCarouse">
          {bookList.map((it, idx) => (
            <div
              className={`book item-${it.id}`}
              onClick={() => handleBookList(it.id, idx)}
            >
              <img src={it.mainImg} alt="책 이미지" />
            </div>
          ))}
        </div>
        <div className="bookDot">
          {bookList.map((it, idx) => (
            <div className={idx === dot ? "dot now" : "dot"}></div>
          ))}
        </div>
      </BookListWrapper>
    </BookWrapper>
  );
};

export default HmBook;
