/** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
- /skill 컴포넌트
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/

import styled from "styled-components";
import building from "../../components/CSS/image/building.jpg";
import GlobalTitle from "../../components/CSS/Global/GlobalTitle";
import { GlobalWrapper } from "../../components/CSS/Global/GlobalWrapper";
import { skillTabArr } from "../../components/dummy/TabArr";
import GlobalTab from "../../components/CSS/Global/GlobalTab";

const Skill = () => {
  return (
    <GlobalWrapper height="2000px">
      <GlobalTitle
        imageUrl={building}
        mainText="기술을 자랑해봐요"
        subText="Skill"
      />
      <GlobalTab tabArr={skillTabArr} />
    </GlobalWrapper>
  );
};

export default Skill;
