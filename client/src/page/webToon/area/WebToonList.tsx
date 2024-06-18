import styled from "styled-components";
import { FontSize, GrayColor } from "../../../components/CSS/Color/ColorNote";
import {
  betweenRow,
  centerRow,
} from "../../../components/CSS/Global/GlobalDisplay";
import 화산귀환 from "../../../components/CSS/image/WebToonImg/화산귀환.png";
import { handleModal } from "../../../components/Function/modal";
import { useState } from "react";

const WebToonListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 80%;
  height: 1500px;
  /* background-color: blue; */
  margin-top: 20px;
  cursor: pointer;
`;

const WebToonWrapper = styled.div<{ hoverState: boolean }>`
  border: 1px solid ${GrayColor.Gray300};
  width: 24%;
  height: 33%;
  padding: 20px;
  color: ${GrayColor.Gray100};
  animation: ${(props) =>
    props.hoverState ? "rotateLeft 1s forwards" : "rotateRevoke 1s forwards"};

  /* &:hover {
    animation: rotateLeft 1s forwards;
    //opacity: 0.5;
  } */

  .webtoon-block {
    width: 100%;
    height: 100%;
    /* background-color: orange; */

    .img-block {
      width: 100%;
      height: 82%;
      background-image: url(${화산귀환});
      background-size: cover; // 이미지를 배경에 꽉 채움
      background-position: center; // 배경의 초기값을 가운데로
      background-repeat: no-repeat; // 배경보다 이미지가 작아도 반복하지 않음
    }

    .img-block-click {
      width: 100%;
      height: 82%;
      background-image: url(${화산귀환});
      background-size: cover; // 이미지를 배경에 꽉 채움
      background-position: center; // 배경의 초기값을 가운데로
      background-repeat: no-repeat; // 배경보다 이미지가 작아도 반복하지 않음
    }

    .title {
      ${centerRow}
      font-size: ${FontSize.large};
      /* background-color: darkblue; */
      width: 100%;
      height: 10%;
    }

    .author {
      ${betweenRow}
      font-size: ${FontSize.medium};
      padding: 0 10px 0 10px;
      /* background-color: darkcyan; */
      width: 100%;
      height: 8%;
    }
  }

  @keyframes rotateLeft {
    0% {
      transform: rotateY(0deg);
    }
    100% {
      transform: rotateY(-180deg);
    }
  }

  @keyframes rotateRevoke {
    0% {
      transform: rotateY(-180deg);
    }
    100% {
      transform: rotateY(0deg);
    }
  }
`;

const dummyList = [
  { id: 1, title: "히어로킬러", author: "작가", score: 9.32, img: 화산귀환 },
  { id: 2, title: "히어로킬러", author: "작가", score: 9.32, img: 화산귀환 },
  { id: 3, title: "히어로킬러", author: "작가", score: 9.32, img: 화산귀환 },
  { id: 4, title: "히어로킬러", author: "작가", score: 9.32, img: 화산귀환 },
  { id: 5, title: "히어로킬러", author: "작가", score: 9.32, img: 화산귀환 },
  { id: 6, title: "히어로킬러", author: "작가", score: 9.32, img: 화산귀환 },
  { id: 7, title: "히어로킬러", author: "작가", score: 9.32, img: 화산귀환 },
  { id: 8, title: "히어로킬러", author: "작가", score: 9.32, img: 화산귀환 },
  { id: 9, title: "히어로킬러", author: "작가", score: 9.32, img: 화산귀환 },
  { id: 10, title: "히어로킬러", author: "작가", score: 9.32, img: 화산귀환 },
  { id: 11, title: "히어로킬러", author: "작가", score: 9.32, img: 화산귀환 },
  { id: 12, title: "히어로킬러", author: "작가", score: 9.32, img: 화산귀환 },
];

interface WebToonListInterface {
  modalState: boolean;
  setModalState: React.Dispatch<React.SetStateAction<boolean>>;
}

const WebToonList: React.FC<WebToonListInterface> = ({
  modalState,
  setModalState,
}) => {
  // 호버 상태 state
  const [hoverState, setHoverState] = useState<{ [key: number]: boolean }>({});

  const handleMouseEnter = (id: number) => {
    console.log("실행");
    setHoverState((prevState) => ({
      ...prevState,
      [id]: true,
    }));

    // const timer = setTimeout(() => {
    //   console.log("입장");
    //   setHoverState((prevState) => ({
    //     ...prevState,
    //     [id]: false,
    //   }));
    // }, 1000);

    // return () => clearTimeout(timer);
  };

  const handleMouseLeave = (id: number) => {
    const timer = setTimeout(() => {
      console.log("입장");
      setHoverState((prevState) => ({
        ...prevState,
        [id]: false,
      }));
    }, 1000);

    return () => clearTimeout(timer);
  };
  // useEffect(() => {
  //   const handleWebToon = async () => {
  //     const webToonResponse = await axios.get(
  //       "https://korea-webtoon-api.herokuapp.com/?&page=3&perPage=12&service=naver&updateDay=sun",
  //       { withCredentials: true }
  //     );
  //     console.log(webToonResponse.data);
  //   };
  //   handleWebToon();
  // }, []);

  return (
    <WebToonListWrapper>
      {dummyList.map((it, idx) => (
        <WebToonWrapper
          hoverState={!!hoverState[it.id]}
          onMouseEnter={() => handleMouseEnter(it.id)}
          onMouseLeave={() => handleMouseLeave(it.id)}
          onClick={() => handleModal(modalState, setModalState)}
        >
          <div className="webtoon-block">
            <div className="img-block" />
            <div className="title">{it.title}</div>
            <div className="author">
              <p>{it.author}</p>
              <p>★ {it.score}</p>
            </div>
          </div>
        </WebToonWrapper>
      ))}
    </WebToonListWrapper>
  );
};

export default WebToonList;
