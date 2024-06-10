/** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
- 캐러셀 컴포넌트
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import { centerColumn, centerRow } from "../../CSS/Global/GlobalDisplay";
import computerCat from "../../CSS/image/HomeImg/gif/computerCat.gif";
import pizzaCat from "../../CSS/image/HomeImg/gif/pizzaCat.gif";
import masicCat from "../../CSS/image/HomeImg/gif/masicCat.gif";
import habugerCat from "../../CSS/image/HomeImg/gif/habugerCat.gif";
import { GrayColor, MainColor } from "../../CSS/Color/ColorNote";

const CarouselWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: 50px;
  background: linear-gradient(
    0.4turn,
    #8ec5fc,
    #ffffff,
    #eef1f2,
    #348afd,
    #ffffff
  );

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
      font-size: 60px;
      font-weight: bold;
      margin-bottom: 10px;
      font-style: oblique;
      color: black;
      text-shadow: 2px 2px 5px ${MainColor.Main100};
    }
    .contents {
      /* padding-left: 1px; */
      font-size: 20px;
    }
  }

  .gifWrapper {
    width: 1000px;
    height: 50vh;
    text-align: center;
    margin: 0 auto;
    background-color: orange;

    img {
      width: 100%;
      height: 100%;
    }
  }
`;

const MyCarousel = () => {
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
            <div className="title">CodeLand</div>
            <div className="contents">
              코드랜드는 좋은 아이디어를 표현하는 사이트로
              <br />
              상상하는 모든걸 개발할 수 있습니다.
            </div>
          </div>
          <div className="gifWrapper">
            <img src={habugerCat} alt="코드랜드" />
          </div>
          <div className="textWrapper">
            <div className="title">Design</div>
            <div className="contents">
              화려한 애니메이션과 깔끔한 디자인으로
              <br />
              경험하지 못한 UI/UX를 느껴 볼 수 있습니다
            </div>
          </div>
          <div className="gifWrapper">
            <img src={masicCat} alt="디자인" />
          </div>
          <div className="textWrapper">
            <div className="title">Experience</div>
            <div className="contents">
              유용한 기능들을 편리하게 사용함으로써
              <br />
              좋은 경험을 선사합니다.
            </div>
          </div>
          <div className="gifWrapper">
            <img src={pizzaCat} alt="경험" />
          </div>
        </Slider>
      </div>
    </CarouselWrapper>
  );
};

export default MyCarousel;
