import { GlobalWrapper } from "../../components/CSS/Global/GlobalWrapper";
import HmCarousel from "./Area/HmCarousel";
import HmInfo from "./Area/HmInfo";
import HmMove from "./Area/HmMove";

const Home = () => {
  return (
    <GlobalWrapper height={"4000px"}>
      <HmCarousel />
      <HmMove />
      <HmInfo />
    </GlobalWrapper>
  );
};

export default Home;
