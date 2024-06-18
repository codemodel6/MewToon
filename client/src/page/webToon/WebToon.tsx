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
  // 웹툰을 보여주는 state
  const [toggle, setToggle] = useState<boolean>(false);
  // DB에서 가져온 BoardList State
  const [myContent, setMyContent] = useState<{}>({});
  // 모달 state
  const [modalState, setModalState] = useState<boolean>(false);

  /** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 - 함수 기능 : 글쓰기 모달을 키고 끄는 함수
 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
  const handleModal = (): void => {
    setModalState(!modalState);
  };

  return (
    <GlobalWrapper height="2500px">
      <OrTitle
        imageUrl={building}
        mainText="웹툰을 선택해보아요"
        subText="WebToon"
      />
      <OrTab tabArr={webToonArr} />
      <WebToonWrapper>
        <WebToonList></WebToonList>
      </WebToonWrapper>
      <WebToonModal modalState={modalState} handleModal={handleModal} />
    </GlobalWrapper>
  );
};

export default WebToon;
