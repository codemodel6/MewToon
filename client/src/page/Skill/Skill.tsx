/** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
- /skill 컴포넌트
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/

import styled from "styled-components";
import building from "../../components/CSS/image/building.jpg";
import GlobalTitle from "../../components/CSS/Global/GlobalTitle";
import { GlobalWrapper } from "../../components/CSS/Global/GlobalWrapper";

const Skill = () => {
  return (
    <GlobalWrapper height="2000px">
      <GlobalTitle
        imageUrl={building}
        mainText="기술을 자랑해봐요"
        subText="Skill"
      />
    </GlobalWrapper>
  );
};

export default Skill;
