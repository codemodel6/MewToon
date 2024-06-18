import { GlobalWrapper } from "../../components/CSS/Global/GlobalWrapper";
import OrTitle from "../../components/Organism/OrTitle";
import OrTab from "../../components/Organism/OrTab";
import { webToonArr } from "../../components/dummy/TabArr";
import building from "../../components/CSS/image/building.jpg";
import styled from "styled-components";
import WebToonList from "./area/WebToonList";
import WebToonModal from "../../components/Molecule/Modal/WebToonModal";
import { useState } from "react";

const WebToonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const WebToon = () => {
  // 모달 state
  const [modalState, setModalState] = useState<boolean>(false);

  return (
    <GlobalWrapper height="2500px">
      <OrTitle
        imageUrl={building}
        mainText="웹툰을 선택해보아요"
        subText="WebToon"
      />
      <OrTab tabArr={webToonArr} />
      <WebToonWrapper>
        <WebToonList
          modalState={modalState}
          setModalState={setModalState}
        ></WebToonList>
      </WebToonWrapper>
      <WebToonModal modalState={modalState} setModalState={setModalState} />
    </GlobalWrapper>
  );
};

export default WebToon;
