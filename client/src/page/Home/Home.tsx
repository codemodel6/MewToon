import styled from "styled-components";
import { GlobalBody } from "../../components/CSS/Global/GlobalBody";
import { GlobalWrapper } from "../../components/CSS/Global/GlobalWrapper";
import Carousel from "../../components/Molecule/Carousel/Carousel";
import { centerColumn } from "../../components/CSS/Global/GlobalDisplay";

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 500px;
  height: 500px;
  background-color: blue;
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
