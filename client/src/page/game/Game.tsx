/** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
- /skill 컴포넌트
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/

import styled from "styled-components";
import building from "../../components/CSS/image/building.jpg";
import OrTitle from "../../components/Organism/OrTitle";
import { GlobalWrapper } from "../../components/CSS/Global/GlobalWrapper";
import { skillTabArr } from "../../components/dummy/TabArr";
import OrTab from "../../components/Organism/OrTab";
import GameIntro from "./area/GameIntro";
import { centerColumn } from "../../components/CSS/Global/GlobalDisplay";
import { FontSize } from "../../components/CSS/Color/ColorNote";
import GameList from "./area/GameList";
import GameContents from "./contents/GameContents";

const GameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const GameTitle = styled.div`
  ${centerColumn}
  border-radius: 20px;
  background-color: black;
  color: white;
  width: 25%;
  height: 50px;
  margin-bottom: 50px;
  font-size: ${FontSize.xxlarge};
  font-weight: bold;
`;

const Game = () => {
  return (
    <GlobalWrapper height="3000px">
      <OrTitle
        imageUrl={building}
        mainText="기술을 자랑해봐요"
        subText="Skill"
      />
      <OrTab tabArr={skillTabArr} />
      <GameList />
      <GameWrapper>
        <GameContents />
        <GameTitle>소개</GameTitle>
        <GameIntro />
      </GameWrapper>
    </GlobalWrapper>
  );
};

export default Game;
