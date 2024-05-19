import styled from "styled-components";
import { MainColor } from "../../../components/CSS/Color/ColorNote";
import MyYoutube from "./youtube/MyYoutube";
import MusicBox from "./musicBox/MusicBox";
import { useNavigate, useSearchParams } from "react-router-dom";
import Canvas from "./canvas/Canvas";
import Report from "./report/report";
import { useEffect } from "react";
import YouTube from "react-youtube";

const GameContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 20px 0px ${MainColor.Main200};
  width: 90%;
  height: 80vh;
  margin-bottom: 80px;
`;

const GameContent = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // url의 이름을 가져온다
  const name = searchParams.get("name");
  console.log(name);

  const navigate = useNavigate();

  let nowComponent;

  const nameList = ["musicBox", "drawing", "youtube", "report"];
  const componentList = [<MusicBox />, <Canvas />, <MyYoutube />, <Report />];

  useEffect(() => {
    for (let i = 0; i < nameList.length; i++) {
      console.log("--->", name, nameList[i], i);
      if (name === nameList[i]) {
        console.log("입장~~~~!");
        nowComponent = componentList[i];
        console.log("이거", componentList[i]);
      }
    }
  }, [name]);

  return (
    <GameContentWrapper>
      <Report />
    </GameContentWrapper>
  );
};

export default GameContent;
