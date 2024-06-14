import styled from "styled-components";
import { GlobalBlock } from "../../../components/CSS/Global/GlobalBlock";
import { aroundRow } from "../../../components/CSS/Global/GlobalDisplay";
import { useEffect } from "react";
import axios from "axios";

const WebToonListWrapper = styled.div`
  ${aroundRow}
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  background-color: blue;
`;

const WebToonBlock = styled.div`
  width: 10%;
`;

const WebToonList = () => {
  useEffect(() => {
    const handleWebToon = async () => {
      const webToonResponse = await axios.get(
        "https://korea-webtoon-api.herokuapp.com/?&page=3&perPage=12&service=naver&updateDay=sun"
      );
      console.log(webToonResponse.data);
    };
    handleWebToon();
  }, []);

  return (
    <GlobalBlock>
      <WebToonListWrapper></WebToonListWrapper>
    </GlobalBlock>
  );
};

export default WebToonList;
