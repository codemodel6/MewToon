import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { centerRow } from "../../components/CSS/Global/GlobalDisplay";
import { GlobalWrapper } from "../../components/CSS/Global/GlobalWrapper";
import building from "../../components/CSS/image/building.jpg";
import { handleScrollMove } from "../../components/Function/scroll";
import WebToonModal from "../../components/Molecule/Modal/WebToonModal";
import PageNation from "../../components/Molecule/PagiNation/PagiNation";
import Spinner from "../../components/Molecule/Spinner/Spinner";
import GlobalTitle from "../../components/Organism/GlobalTitle";
import NavigateTab from "../../components/Organism/NavigateTab";
import SearchTab from "../../components/Organism/SearchTab";
import { webToonArr } from "../../components/dummy/dummy";
import { musicArr } from "../project/contents/musicBox/musicArr";
import WebToonList from "./area/WebToonList";

const WebToonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  margin-bottom: 20px;
`;

const LoadingWrapper = styled.div`
  display: flex;
  height: 1500px;
  width: 100%;

  .LoadingBlock {
    height: 800px;
    width: 100%;
  }
`;

const PageWrapper = styled.div`
  height: 60px;
  width: 100%;
  margin-bottom: 30px;
`;

export interface episodProps {
  episode: string;
  episodeMusic: string;
}

export interface ToonProps {
  id: number;
  authors: string[];
  title: string;
  thumbnail: string[];
  tag: string[];
  summary: string;
  story: episodProps[];
}

interface WebToonResponse {
  webtoons: ToonProps[];
  total: number;
}

// 웹툰 모달 데이터의 초기 값
const initialToonObj = {
  id: 0,
  authors: [],
  title: "",
  thumbnail: [],
  tag: [],
  summary: "",
  story: [],
};

const WebToon = () => {
  // 모달 state
  const [modalState, setModalState] = useState<boolean>(false);
  // 웹툰 리스트
  const [webToonList, setWebToonList] = useState<ToonProps[]>([]);
  // 웹툰 토탈 페이지
  const [toonTotalPage, setToonTotalPage] = useState<number>(0);
  // 웹툰 모달 데이터
  const [webToonData, setWebToonData] = useState<ToonProps>(initialToonObj);
  // 로딩 상태
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // url의 쿼리스트링을 가져온다
  const location = useLocation();
  const queryString = new URLSearchParams(location.search);
  const queryPage = Number(queryString.get("page"));

  useEffect(() => {
    const handleWebToon = async () => {
      setIsLoading(true);
      handleScrollMove(506);
      try {
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
            tag: ["액션", "로맨스"],
            summary:
              "올해 고등학생 은우는 짝사랑하던 아린을 만난다 반가운 마음에 다가갔지만 아린은...",
            story: [
              {
                episode: "3화",
                episodeMusic: musicArr[0].play,
              },
              {
                episode: "2화",
                episodeMusic: musicArr[1].play,
              },
              {
                episode: "1화",
                episodeMusic: musicArr[2].play,
              },
            ],
          })
        );

        setWebToonList([...filterData]);
      } catch (error) {
        console.error("웹툰 데이터 로딩 실패 :", error);
      } finally {
        setIsLoading(false);
      }
    };
    handleWebToon();
  }, [location.search]);

  return (
    <GlobalWrapper height="2400px">
      <GlobalTitle
        imageUrl={building}
        mainText="웹툰과 노래를 함께"
        subText="WebToon"
      />
      <NavigateTab tabArr={webToonArr} />
      <SearchTab tabArr={webToonArr} />
      <WebToonWrapper>
        {isLoading ? (
          <LoadingWrapper>
            <div className="LoadingBlock">
              <Spinner />
            </div>
          </LoadingWrapper>
        ) : (
          <WebToonList
            webToonList={webToonList}
            modalState={modalState}
            setModalState={setModalState}
            setWebToonData={setWebToonData}
          ></WebToonList>
        )}
      </WebToonWrapper>
      <WebToonModal
        modalState={modalState}
        setModalState={setModalState}
        webToonData={webToonData}
      />
      <PageWrapper>
        <PageNation totalPage={toonTotalPage} page={queryPage} />
      </PageWrapper>
    </GlobalWrapper>
  );
};

export default WebToon;
