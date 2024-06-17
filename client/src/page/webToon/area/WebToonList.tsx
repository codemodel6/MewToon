import styled from "styled-components";
import { GlobalBlock } from "../../../components/CSS/Global/GlobalBlock";
import {
  aroundRow,
  betweenRow,
  centerRow,
} from "../../../components/CSS/Global/GlobalDisplay";
import { useEffect } from "react";
import axios from "axios";
import { FontSize, GrayColor } from "../../../components/CSS/Color/ColorNote";
import 화산귀환 from "../../../components/CSS/image/WebToonImg/화산귀환.png";

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

const WebToonWrapper = styled.div`
  border: 1px solid ${GrayColor.Gray300};
  width: 24%;
  height: 33%;
  padding: 20px;
  transition: padding 0.5s ease;
  color: ${GrayColor.Gray100};

  &:hover {
    padding: 10px;
  }

  .webtoon-block {
    width: 100%;
    height: 100%;
    /* background-color: orange; */

    img {
      width: 100%;
      height: 82%;
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

const WebToonList = () => {
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
        <WebToonWrapper>
          <div className="webtoon-block">
            <img src={it.img} alt="웹툰이미지" />
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
