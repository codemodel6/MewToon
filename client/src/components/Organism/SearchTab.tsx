import React, { useEffect, useState } from "react";
import {
  GlobalSecondTabWrapper,
  GlobalTabWrapper,
} from "../CSS/Global/GlobalWrapper";
import { handleScroll } from "../Function/scroll";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import searchImg from "../../components/CSS/image/search.png";
import Dropdown from "../Molecule/Dropdown/Dropdown";

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

  /** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  - 함수 기능 : 요일 변경 함수
  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
  const handleNavigate = (moveURL: string) => {
    // 쿼리스트링 객체 세팅
    queryString.set("updateDay", moveURL);
    // 변경된 쿼리스트링으로 이동
    navigate(`${location.pathname}?${queryString.toString()}`);
  };

  return (
    <GlobalSecondTabWrapper $scrollAction={scrollAction}>
      <div className="img-wrapper"></div>
      <div className="dropdown-wrapper">
        {/* <Dropdown
          itemArr={itemArr}
          toggle={toggle}
          setToggle={setToggle}
          value={value}
          setValue={setValue}
        /> */}
      </div>
      <div className="input-wrapper">
        <input placeholder="웹툰명을 검색하세요" />
        <button>
          <img src={searchImg} alt="돋보기" />
        </button>
      </div>
    </GlobalSecondTabWrapper>
  );
};

export default SearchTab;
