import styled from "styled-components";
import { centerColumn } from "../../../components/CSS/Global/GlobalDisplay";
import MyCarousel from "../../../components/Molecule/Carousel/MyCarousel";

const HomeFirstWrapper = styled.div`
  ${centerColumn}
  width: 100%;
  height: 100vh;
  background-color: red;
`;

const HomeCarousel = () => {
  return (
    <HomeFirstWrapper>
      <MyCarousel />
    </HomeFirstWrapper>
  );
};

export default HomeCarousel;
