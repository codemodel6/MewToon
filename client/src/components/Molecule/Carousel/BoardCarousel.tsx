import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import {
  FontSize,
  MainColor,
  SubColor,
  WhiteColor,
} from "../../CSS/Color/ColorNote";
import { topicList } from "../../../page/board/area/topicList";

const CarouselWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 100%;

  .slick-arrow::before {
    color: ${MainColor.Main300};
    font-size: 30px;
  }

  .boardWrapper {
    height: 500px;
    padding: 20px 20px 0px 20px;
    width: 100px;

    .rankDiv {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: black;
      text-shadow: 2px 2px 5px ${MainColor.Main300};
      width: 100%;
      height: 40px;
      font-weight: bold;
      font-size: 40px;
      margin-bottom: 10px;
    }

    .boardContentBlock {
      border: 2px solid ${MainColor.Main300};
      width: 100%;
      height: 420px;

      .boardInfo {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 10%;
        padding: 0 10px;
        font-size: ${FontSize.medium};
        font-weight: bold;
        background-color: ${MainColor.Main300};
        color: ${WhiteColor.White100};
      }

      .scrollBoard {
        width: 100%;
        height: 90%;
        overflow: scroll;

        .boardContent {
          width: 100%;
          height: 450px;
          padding: 10px;
          font-size: ${FontSize.small};
        }
      }
    }
  }
`;

const BoardCarousel = () => {
  const settings = {
    dots: true,
    slidesToShow: 3, // 캐러셀에 보여지는 div 개수
    slidesToScroll: 1, // 캐러셀 한번에 넘길 개수
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 1500,
    cssEase: "linear",
  };

  return (
    <CarouselWrapper>
      <div className="carousel">
        <Slider {...settings}>
          {topicList.map((it, idx) => (
            <div className="boardWrapper" key={idx}>
              <div className="rankDiv">{it.rank}</div>
              <div className="boardContentBlock">
                <div className="boardInfo">
                  <p>{it.title}</p>
                  <p>
                    {it.author} || {it.date}
                  </p>
                </div>
                <div className="scrollBoard">
                  <div className="boardContent">{it.contents}</div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </CarouselWrapper>
  );
};

export default BoardCarousel;
