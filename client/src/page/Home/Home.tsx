import { GlobalBody } from "../../components/CSS/Global/GlobalBody";
import HmCarousel from "./Area/HmCarousel";
import HmInfo from "./Area/HmInfo";
import HmMove from "./Area/HmMove";

const Home = () => {
  return (
    <GlobalBody>
      <HmCarousel />
      <HmMove />
      <HmInfo />
    </GlobalBody>
  );
};

export default Home;
