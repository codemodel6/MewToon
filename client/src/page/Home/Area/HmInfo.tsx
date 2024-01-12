import styled from "styled-components";
import { GlobalWrapper } from "../../../components/CSS/Global/GlobalWrapper";
import cogwheel from "../../../components/CSS/image/cogwheel.jpg";

const GlobalInfoWrapper = styled(GlobalWrapper)`
  height: 100vh;
`;

const InfoWrapper = styled.div`
  background: url(${cogwheel});
  width: 100%;
  height: 100%;
  background-size: cover;
`;
const HmInfo = () => {
  return (
    <GlobalInfoWrapper>
      <InfoWrapper>
        <div />
      </InfoWrapper>
    </GlobalInfoWrapper>
  );
};

export default HmInfo;
