import { useEffect, useState } from "react";
import styled from "styled-components";
import { GlobalWrapper } from "../../components/CSS/Global/GlobalWrapper";
import building from "../../components/CSS/image/building.jpg";
import WebToonModal from "../../components/Molecule/Modal/WebToonModal";
import OrTab from "../../components/Organism/ScrollTab";
import GlobalTitle from "../../components/Organism/GlobalTitle";
import { webToonArr } from "../../components/dummy/TabArr";
import WebToonList from "./area/WebToonList";
import axios from "axios";

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

  useEffect(() => {
    const handleWebToon = async () => {
      const webToonResponse = await axios.get(
        "https://korea-webtoon-api-cc7dda2f0d77.herokuapp.com/webtoons?page=1&perPage=12&sort=ASC"
      );
      console.log(webToonResponse.data);
    };
    handleWebToon();
  }, []);

  return (
    <GlobalWrapper height="2500px">
      <GlobalTitle
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
