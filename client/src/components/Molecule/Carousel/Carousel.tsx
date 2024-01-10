import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import { centerColumn, centerRow } from "../../CSS/Global/GlobalDisplay";
import smoke from "../../CSS/image/smoke.gif";
import box from "../../CSS/image/box.gif";
import solution from "../../CSS/image/solution.gif";

const CarouselWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: 50px;
  font-weight: bold;
  color: white;

  .slick-slider {
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .slick-list {
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

  .textWrapper {
    .title {
      font-size: 100px;
    }
    .contents {
      font-size: 50px;
    }
  }

  .gifWrapper {
    height: 50vh;
    text-align: center;
    margin: 0 auto;

    img {
      width: 100%;
      height: 100%;
    }
  }
`;

const Carousel = () => {
  const settings = {
    dots: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    infinite: true,
    arrows: false,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 4000,
    cssEase: "linear",
  };

  return (
    <CarouselWrapper>
      <div className="carousel">
        <Slider {...settings}>
          <div className="textWrapper">
            <div className="title">Molru</div>
            <div className="contents">모르겠나요?</div>
          </div>
          <div className="gifWrapper">
            <img src={smoke} alt="연기" />
          </div>
          <div className="textWrapper">
            <div className="title">Nado</div>
            <div className="contents">나도에요!</div>
          </div>
          <div className="gifWrapper">
            <img src={box} alt="박스" />
          </div>
          <div className="textWrapper">
            <div className="title">Study</div>
            <div className="contents">공부해라</div>
          </div>
          <div className="gifWrapper">
            <img src={solution} alt="솔류션" />
          </div>
        </Slider>
      </div>
    </CarouselWrapper>
  );
};

export default Carousel;
