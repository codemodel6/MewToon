import styled from "styled-components";
import { centerColumn } from "../../../components/CSS/Global/GlobalDisplay";
import MyCarousel from "../../../components/Molecule/Carousel/MyCarousel";
import { GlobalBlock } from "../../../components/CSS/Global/GlobalBlock";

const HomeCarousel = () => {
  return (
    <GlobalBlock>
      <MyCarousel />
    </GlobalBlock>
  );
};

export default HomeCarousel;
