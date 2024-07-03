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
import PageNation from "../../components/Molecule/PagiNation/PagiNation";

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

interface WebToonResponse {
  webtoons: ToonProps[];
  total: number;
}

// 웹툰 모달 데이터의 초기 값
const initialToonObj = { id: 0, authors: [], title: "", thumbnail: [] };

const WebToon = () => {
  // 모달 state
  const [modalState, setModalState] = useState<boolean>(false);
  // 웹툰 리스트
  const [webToonList, setWebToonList] = useState<ToonProps[]>([]);
  // 웹툰 토탈 페이지
  const [toonTotalPage, setToonTotalPage] = useState<number>(0);
  // 웹툰 모달 데이터
  const [webToonData, setWebToonData] = useState<ToonProps>(initialToonObj);

  // url의 쿼리스트링을 가져온다
  const location = useLocation();
  const queryString = new URLSearchParams(location.search);
  const queryPage = Number(queryString.get("page"));

  useEffect(() => {
    const handleWebToon = async () => {
      const webToonResponse = await axios.get<WebToonResponse>(
        `https://korea-webtoon-api-cc7dda2f0d77.herokuapp.com/webtoons${location.search}&perPage=12`
      );

      // 페이지 총 개수
      const totalPage = webToonResponse.data.total;
      setToonTotalPage(Math.ceil(totalPage / 12));

      // 웹툰 리스트
      const filterData = webToonResponse.data.webtoons.map(
        ({ id, title, authors, thumbnail }) => ({
          id,
          title,
          authors,
          thumbnail,
          episode: [],
        })
      );

      setWebToonList([...filterData]);

      console.log("filterData : ", filterData);
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
          webToonList={webToonList}
          modalState={modalState}
          setModalState={setModalState}
          setWebToonData={setWebToonData}
        ></WebToonList>
      </WebToonWrapper>
      <WebToonModal
        modalState={modalState}
        setModalState={setModalState}
        webToonData={webToonData}
      />
      <PageNation totalPage={toonTotalPage} page={queryPage} />
    </GlobalWrapper>
  );
};

export default WebToon;
