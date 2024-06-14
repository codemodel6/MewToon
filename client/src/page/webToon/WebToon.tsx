import { GlobalWrapper } from "../../components/CSS/Global/GlobalWrapper";
import OrTitle from "../../components/Organism/OrTitle";
import OrTab from "../../components/Organism/OrTab";
import { webToonArr } from "../../components/dummy/TabArr";
import building from "../../components/CSS/image/building.jpg";
import styled from "styled-components";
import WebToonList from "./area/WebToonList";

const WebToonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: orange;
`;

const WebToon = () => {
  return (
    <GlobalWrapper height="2700px">
      <OrTitle
        imageUrl={building}
        mainText="웹툰을 선택해보아요"
        subText="WebToon"
      />
      <OrTab tabArr={webToonArr} />
      <WebToonWrapper>
        <WebToonList></WebToonList>
      </WebToonWrapper>
    </GlobalWrapper>
  );
};

export default WebToon;
