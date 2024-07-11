/** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
- /skill 컴포넌트
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/

import styled from "styled-components";
import building from "../../components/CSS/image/building.jpg";
import GlobalTitle from "../../components/Organism/GlobalTitle";
import { GlobalWrapper } from "../../components/CSS/Global/GlobalWrapper";
import { skillTabArr } from "../../components/dummy/TabArr";
import OrTab from "../../components/Organism/ScrollTab";
import ProjectIntro from "./area/ProjectIntro";
import { centerColumn } from "../../components/CSS/Global/GlobalDisplay";
import { FontSize } from "../../components/CSS/Color/ColorNote";
import ProjectContents from "./contents/ProjectContents";
import Dropdown from "../../components/Molecule/Dropdown/Dropdown";
import DropdowBlock from "../../components/Molecule/Dropdown/DropdownBlock";

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

const ProjectListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  margin-top: 15px;
  margin-bottom: 30px;
`;

const Project = () => {
  return (
    <GlobalWrapper height="2700px">
      <GlobalTitle
        imageUrl={building}
        mainText="재미있는 프로젝트를 만들어요"
        subText="Project"
      />
      <OrTab tabArr={skillTabArr} />
      <ProjectListWrapper>
        <DropdowBlock />
      </ProjectListWrapper>
      <ProjectWrapper>
        <ProjectContents />
        <ProjectTitle>소개</ProjectTitle>
        <ProjectIntro />
      </ProjectWrapper>
    </GlobalWrapper>
  );
};

export default Project;
