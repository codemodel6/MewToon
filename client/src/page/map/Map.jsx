import styled from "styled-components";
import { GlobalWrapper } from "../../components/CSS/Global/GlobalWrapper";
import { centerColumn } from "../../components/CSS/Global/GlobalDisplay";

const MapWrapper = styled.div`
  ${centerColumn}
  width: 100%;
  height: 100%;
  background-color: orange;

  .mapDiv {
    width: 50%;
    height: 50%;
    background-color: white;
  }
`;

const Map = () => {
  return (
    <GlobalWrapper>
      <MapWrapper></MapWrapper>
    </GlobalWrapper>
  );
};

export default Map;
