import styled from "styled-components";
import { centerColumn } from "../../../components/CSS/Global/GlobalDisplay";
import MyCarousel from "../../../components/Molecule/Carousel/MyCarousel";
import { GlobalWrapper } from "../../../components/CSS/Global/GlobalWrapper";

const HomeCarousel = () => {
  return (
    <GlobalWrapper>
      <MyCarousel />
    </GlobalWrapper>
  );
};

export default HomeCarousel;
