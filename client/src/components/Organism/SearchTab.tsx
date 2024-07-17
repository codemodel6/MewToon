import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import searchImg from "../../components/CSS/image/search.png";
import { GlobalSecondTabWrapper } from "../CSS/Global/GlobalWrapper";
import mewRun from "../CSS/image/mewRun.png";
import { handleScroll } from "../Function/scroll";
import DropdownBlock from "../Molecule/Dropdown/DropdownBlock";
import { platformArr } from "../dummy/dummy";

export interface SearchTabInterface {
  tabArr: { title: string; moveURL: string }[];
}

const SearchTab: React.FC<SearchTabInterface> = ({ tabArr }) => {
  const navigate = useNavigate();
  const location = useLocation();
  // url의 쿼리스트링을 가져온다
  const queryString = new URLSearchParams(location.search);
  const queryDay = queryString.get("updateDay");
  // 스크롤 위치 값
  const [scrollData, setScrollData] = useState<number>(0);
  // 스크롤이 진행중인지 확인
  const [scrollAction, setScrollAction] = useState<boolean>(false);
  // search내용
  const [searchData, setSearchData] = useState<string>("");

  /** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  - 훅 기능 : 스크롤이 위, 아래로 이동함에 따라 tabDiv 위치 변경
  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
  useEffect(() => {
    const scrollCallback = () => {
      handleScroll(scrollData, setScrollData, setScrollAction, 550);
    };

    window.addEventListener("scroll", scrollCallback);
    console.log(scrollData);

    return () => {
      window.removeEventListener("scroll", scrollCallback);
    };
  }, [scrollData]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault(); // 엔터 키가 입력 필드에서 기본 제출 동작을 하지 않도록 합니다.
      handleNavigate();
    }
  };

  /** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  - 함수 기능 : 요일 변경 함수
  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
  const handleNavigate = () => {
    // 검색
    queryString.set("keyword", searchData);
    queryString.set("page", "1");
    // 요일 삭제
    queryString.delete("updateDay");
    // input값 초기화
    setSearchData("");
    // 변경된 쿼리스트링으로 이동
    navigate(`${location.pathname}?${queryString.toString()}`);
  };

  return (
    <GlobalSecondTabWrapper $scrollAction={scrollAction}>
      <div className="dropdown-wrapper">
        <DropdownBlock
          itemArr={platformArr}
          urlKey={"provider"}
          firstTitle={"플랫폼 ▼"}
          size={"max"}
        />
      </div>
      <div className="img-wrapper">
        <img className="mewRunImg" src={mewRun} alt="달리는뮤켓" />
      </div>
      <div className="input-wrapper">
        <input
          placeholder="웹툰명을 검색하세요"
          value={searchData}
          onChange={(e) => setSearchData(e.target.value)}
          onKeyDown={(e) => handleKeyDown(e)}
        />
        <button onClick={handleNavigate}>
          <img src={searchImg} alt="돋보기" />
        </button>
      </div>
    </GlobalSecondTabWrapper>
  );
};

export default SearchTab;
