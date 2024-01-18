/** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
- /skill 컴포넌트
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/

import styled from "styled-components";
import building from "../../components/CSS/image/building.jpg";
import OrTitle from "../../components/Organism/OrTitle";
import { GlobalWrapper } from "../../components/CSS/Global/GlobalWrapper";
import { skillTabArr } from "../../components/dummy/TabArr";
import OrTab from "../../components/Organism/OrTab";

const Skill = () => {
  return (
    <GlobalWrapper height="2000px">
      <OrTitle
        imageUrl={building}
        mainText="기술을 자랑해봐요"
        subText="Skill"
      />
      <OrTab tabArr={skillTabArr} />
    </GlobalWrapper>
  );
};

export default Skill;
