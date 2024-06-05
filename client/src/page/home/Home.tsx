/** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
- /home 컴포넌트
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/

import { GlobalWrapper } from "../../components/CSS/Global/GlobalWrapper";
import HmBook from "./area/HmBook";
import HmCarousel from "./area/HmCarousel";
import HmDream from "./area/HmDream";
import HmMove from "./area/HmMove";
import HmPreview from "./area/HmPreview";

const Home = () => {
  return (
    <GlobalWrapper height={"4000px"}>
      <HmCarousel />
      <HmMove />
      <HmPreview />
      <HmBook />
    </GlobalWrapper>
  );
};

export default Home;
