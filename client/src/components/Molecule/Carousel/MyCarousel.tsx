/** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
- 캐러셀 컴포넌트
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/

import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import styled from "styled-components";
import { MainColor } from "../../CSS/Color/ColorNote";
import { centerColumn } from "../../CSS/Global/GlobalDisplay";
import habugerCat from "../../CSS/image/HomeImg/gif/habugerCat.gif";
import masicCat from "../../CSS/image/HomeImg/gif/masicCat.gif";
import pizzaCat from "../../CSS/image/HomeImg/gif/pizzaCat.gif";

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
    height: 900px;
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
    height: 480px;
    text-align: center;
    margin: 0 auto;

    img {
      border-radius: 10%;
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
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: false, // 마우스 호버에도 자동으로 넘어감
  };

  return (
    <CarouselWrapper>
      <div className="carousel">
        <Slider {...settings}>
          <div className="textWrapper">
            <div className="title">MewToon</div>
            <div className="contents">
              뮤툰은 웹툰에 어울리는 노래를 들려주는,
              <br />
              웹툰에 재미를 더해주는 사이트입니다.
            </div>
          </div>
          <div className="gifWrapper">
            <img src={masicCat} alt="마법고양이" />
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
            <img src={habugerCat} alt="디자인고양이" />
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
            <img src={pizzaCat} alt="피자고양이" />
          </div>
        </Slider>
      </div>
    </CarouselWrapper>
  );
};

export default MyCarousel;
