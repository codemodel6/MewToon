import styled from "styled-components";
import InfoQuestion from "./area/InfoQuestion";
import { GlobalWrapper } from "../../components/CSS/Global/GlobalWrapper";
import OrTab from "../../components/Organism/ScrollTab";
import OrTitle from "../../components/Organism/OrTitle";
import macao from "../../components/CSS/image/macao.jpg";
import { mapTabArr } from "../../components/dummy/TabArr";
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
      <OrTitle
        imageUrl={macao}
        mainText="카카오 지도를 이용해서 만들어보자"
        subText="Map"
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
