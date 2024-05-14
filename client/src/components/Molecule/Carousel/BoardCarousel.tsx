import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import { centerColumn, centerRow } from "../../CSS/Global/GlobalDisplay";
import { FontSize } from "../../CSS/Color/ColorNote";

const CarouselWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90%;
  height: 100%;
  font-size: 50px;
  font-weight: bold;
  color: white;
  background-color: pink;

  .slick-slider {
    background-color: blue;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .slick-list {
    border: 5px solid black;
    .slick-track {
      height: 100%;
      width: 100%;
      .slick-slide {
        ${centerColumn}
        height: 100%;
        width: 100%;
      }
    }
  }

  .boardContents {
    display: flex;
    flex-direction: column;
    height: 400px;
    width: 200px;
    background-color: red;

    .title {
      width: 100%;
      font-size: ${FontSize.xxlarge};
    }

    .contents {
      font-size: 20px;
      background-color: orange;
    }
  }
`;

const BoardCarousel = () => {
  const settings = {
    dots: true,
    slidesToShow: 3, // 캐러셀에 보여지는 div 개수
    slidesToScroll: 1, // 캐러셀 한번에 넘길 개수
    infinite: true,
    // autoplay: true,
    speed: 1500,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };

  return (
    <CarouselWrapper>
      <div className="carousel">
        <Slider {...settings}>
          <div className="boardContents"></div>
          <div className="boardContents">
            <div className="title">Nado</div>
            <div className="contents">나도에요!</div>
          </div>
          <div className="boardContents">
            <div className="title">Study</div>
            <div className="contents">공부해라</div>
          </div>
          <div className="boardContents">
            <div className="title">Study</div>
            <div className="contents">공부해라</div>
          </div>
        </Slider>
      </div>
    </CarouselWrapper>
  );
};

export default BoardCarousel;
