import styled from "styled-components";
import Img0 from "../../../components/CSS/image/BookImg/book_1.jpg";
import Img1 from "../../../components/CSS/image/BookImg/book_2.jpg";
import Img2 from "../../../components/CSS/image/BookImg/book_3.jpg";
import Img3 from "../../../components/CSS/image/BookImg/book_4.jpg";
import Img4 from "../../../components/CSS/image/BookImg/book_5.jpg";
import { useState } from "react";
import { aroundRow } from "../../../components/CSS/Global/GlobalDisplay";

const BookWrapper = styled.div`
  ${aroundRow}
  width: 90%;
  height: 90vh;
  background-color: rebeccapurple;
`;

const BookTitle = styled.div`
  display: flex;
  flex-direction: column;

  width: 50%;
  height: 80%;
  background-color: blue;
  padding-left: 50px;
  padding-top: 30px;

  .main {
    font-size: 50px;
  }
  .sub {
    font-size: 40px;
  }
`;

const BookListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 80%;
  background-color: green;

  // 책들을 담는 캐러셀 div
  .bookCarouse {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
    width: 700px;
    height: 90%;
    background-color: orange;
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
      background-color: gray;
    }

    & .now {
      background-color: blue;
    }
  }
`;

const dummyBook = [
  {
    isActive: false,
    id: 0,
    category: "소설",
    phrases: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem",
    mainImg: Img0,
    author: "김애란",
    title: "바깥은 여름",
  },
  {
    isActive: false,
    id: 1,
    category: "에세이",
    phrases: " eaque ipsa quae ab illo inventore",
    mainImg: Img1,
    author: "욘 표세",
    title: "샤이닝",
  },
  {
    isActive: false,
    id: 2,
    category: "인문학",
    phrases: " ipsum quia dolor sit amet",
    mainImg: Img2,
    author: "한강",
    title: "채식주의자",
  },
  {
    isActive: false,
    id: 3,
    category: "사회과학",
    phrases: " Quis autem vel eum iure reprehenderit qui in ea voluptate",
    mainImg: Img3,
    author: "최은영",
    title: "아주 희미한 빛으로도",
  },
  {
    isActive: false,
    id: 4,
    category: "역사",
    phrases: " cumque nihil impedit quo minus id",
    mainImg: Img4,
    author: "밀란 쿤데라",
    title: "참을 수 없는 존재의 가벼움",
  },
];

const HmBook = () => {
  // 책 리스트
  const [bookList, setBookList] = useState(dummyBook);
  // 캐러셀 진행도
  const [dot, setDot] = useState(0);

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
      <BookTitle>
        <p className="main">독서는 마음의 양식</p>
        <p className="sub">책을 읽도록 합시다</p>
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
