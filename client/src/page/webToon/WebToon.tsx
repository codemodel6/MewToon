import { useEffect, useState } from "react";
import styled from "styled-components";
import { GlobalWrapper } from "../../components/CSS/Global/GlobalWrapper";
import building from "../../components/CSS/image/building.jpg";
import WebToonModal from "../../components/Molecule/Modal/WebToonModal";
import NavigateTab from "../../components/Organism/NavigateTab";
import GlobalTitle from "../../components/Organism/GlobalTitle";
import { webToonArr } from "../../components/dummy/TabArr";
import WebToonList from "./area/WebToonList";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import ScrollTab from "../../components/Organism/ScrollTab";
import SearchTab from "../../components/Organism/SearchTab";

const WebToonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export interface ToonProps {
  id: number;
  authors: string[];
  title: string;
  thumbnail: string[];
}

const WebToon = () => {
  // 모달 state
  const [modalState, setModalState] = useState<boolean>(false);
  // 웹툰 리스트
  const [webToonData, setWebToonData] = useState<ToonProps[]>([]);

  const location = useLocation();

  useEffect(() => {
    const handleWebToon = async () => {
      const webToonResponse = await axios.get<{
        webtoons: ToonProps[];
      }>(
        `https://korea-webtoon-api-cc7dda2f0d77.herokuapp.com/webtoons${location.search}&perPage=12`
      );
      console.log(location.search);
      console.log(webToonResponse.data.webtoons);
      const filterData = webToonResponse.data.webtoons.map(
        ({ id, title, authors, thumbnail }) => ({
          id,
          title,
          authors,
          thumbnail,
        })
      );
      console.log(filterData);
      setWebToonData([...filterData]);
    };
    handleWebToon();
  }, [location.search]);

  return (
    <GlobalWrapper height="2500px">
      <GlobalTitle
        imageUrl={building}
        mainText="웹툰을 선택해보아요"
        subText="WebToon"
      />
      <NavigateTab tabArr={webToonArr} />
      <SearchTab tabArr={webToonArr} />
      <WebToonWrapper>
        <WebToonList
          webToonData={webToonData}
          modalState={modalState}
          setModalState={setModalState}
        ></WebToonList>
      </WebToonWrapper>
      <WebToonModal modalState={modalState} setModalState={setModalState} />
    </GlobalWrapper>
  );
};

export default WebToon;
