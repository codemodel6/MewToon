import styled from "styled-components";
import { GlobalBody } from "../../components/CSS/Global/GlobalBody";
import { GlobalWrapper } from "../../components/CSS/Global/GlobalWrapper";
import Carousel from "../../components/Molecule/Carousel/Carousel";
import { centerColumn } from "../../components/CSS/Global/GlobalDisplay";

const HomeWrapper = styled.div`
  ${centerColumn}
  width: 100%;
  height: 90vh;
  /* background-color: red; */
`;

const Home = () => {
  return (
    <GlobalBody>
      <GlobalWrapper>
        <HomeWrapper>
          <Carousel />
        </HomeWrapper>
      </GlobalWrapper>
    </GlobalBody>
  );
};

export default Home;
