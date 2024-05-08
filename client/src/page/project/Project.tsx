/** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
- /skill 컴포넌트
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/

import styled from "styled-components";
import building from "../../components/CSS/image/building.jpg";
import OrTitle from "../../components/Organism/OrTitle";
import { GlobalWrapper } from "../../components/CSS/Global/GlobalWrapper";
import { skillTabArr } from "../../components/dummy/TabArr";
import OrTab from "../../components/Organism/OrTab";
import ProjectList from "./area/ProjectList";
import ProjectIntro from "./area/ProjectIntro";

const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: orange;
`;

const Skill = () => {
  return (
    <GlobalWrapper height="2000px">
      <OrTitle imageUrl={building} mainText="프로젝트 소개" subText="Project" />
      <OrTab tabArr={skillTabArr} />
      <ProjectList />
      <ProjectWrapper>
        <ProjectIntro />
      </ProjectWrapper>
    </GlobalWrapper>
  );
};

export default Skill;
