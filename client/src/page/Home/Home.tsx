import { GlobalBody } from "../../components/CSS/Global/GlobalBody";
import { GlobalWrapper } from "../../components/CSS/Global/GlobalWrapper";
import HomeCarousel from "./Area/HomeCarousel";

const Home = () => {
  return (
    <GlobalBody>
      <GlobalWrapper>
        <HomeCarousel />
      </GlobalWrapper>
    </GlobalBody>
  );
};

export default Home;
