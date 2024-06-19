/** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
- /skill 컴포넌트
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/

import styled from "styled-components";
import building from "../../components/CSS/image/building.jpg";
import OrTitle from "../../components/Organism/OrTitle";
import { GlobalWrapper } from "../../components/CSS/Global/GlobalWrapper";
import { skillTabArr } from "../../components/dummy/TabArr";
import OrTab from "../../components/Organism/ScrollTab";
import ProjectIntro from "./area/ProjectIntro";
import { centerColumn } from "../../components/CSS/Global/GlobalDisplay";
import { FontSize } from "../../components/CSS/Color/ColorNote";
import ProjectList from "./area/ProjectList";
import ProjectContents from "./contents/ProjectContents";

const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const ProjectTitle = styled.div`
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

const Project = () => {
  return (
    <GlobalWrapper height="2700px">
      <OrTitle
        imageUrl={building}
        mainText="재미있는 프로젝트를 만들어요"
        subText="Project"
      />
      <OrTab tabArr={skillTabArr} />
      <ProjectList />
      <ProjectWrapper>
        <ProjectContents />
        <ProjectTitle>소개</ProjectTitle>
        <ProjectIntro />
      </ProjectWrapper>
    </GlobalWrapper>
  );
};

export default Project;
