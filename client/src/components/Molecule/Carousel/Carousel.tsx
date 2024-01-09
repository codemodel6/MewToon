import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import { centerColumn } from "../../CSS/Global/GlobalDisplay";

const FirstCarousel = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: orange;

  .divWrapper {
    /* width: 20%; */
    text-align: center;
    background-color: red;
  }
`;

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
  };

  return (
    <div className="carousel">
      <Slider {...settings}>
        <FirstCarousel>
          Slide1
          {/* <div className="divWrapper">Slide1</div> */}
        </FirstCarousel>
        <div>Slide2</div>
        <div>Slide3</div>
      </Slider>
    </div>
  );
};

export default Carousel;
