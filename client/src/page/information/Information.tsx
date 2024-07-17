import styled from "styled-components";
import { GlobalWrapper } from "../../components/CSS/Global/GlobalWrapper";
import macao from "../../components/CSS/image/macao.jpg";
import { mapTabArr } from "../../components/dummy/dummy";
import GlobalTitle from "../../components/Organism/GlobalTitle";
import OrTab from "../../components/Organism/ScrollTab";
import InfoQuestion from "./area/InfoQuestion";
import Map from "./area/Map";

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  height: 100%;
`;

const Information = () => {
  return (
    <GlobalWrapper height="2700px">
      <GlobalTitle
        imageUrl={macao}
        mainText="상세한 정보를"
        subText="Information"
      />
      <OrTab tabArr={mapTabArr} />
      <InfoWrapper>
        <Map />
        <InfoQuestion />
      </InfoWrapper>
    </GlobalWrapper>
  );
};

export default Information;
