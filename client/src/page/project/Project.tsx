/** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
- /skill 컴포넌트
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/

import styled from "styled-components";
import { FontSize } from "../../components/CSS/Color/ColorNote";
import { centerColumn } from "../../components/CSS/Global/GlobalDisplay";
import { GlobalWrapper } from "../../components/CSS/Global/GlobalWrapper";
import building from "../../components/CSS/image/building.jpg";
import { itemArr, skillTabArr } from "../../components/dummy/dummy";
import DropdowBlock from "../../components/Molecule/Dropdown/DropdownBlock";
import GlobalTitle from "../../components/Organism/GlobalTitle";
import OrTab from "../../components/Organism/ScrollTab";
import ProjectIntro from "./area/ProjectIntro";
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

const ProjectListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  height: 70px;
  margin-top: 15px;
  margin-bottom: 30px;
`;

const Project = () => {
  return (
    <GlobalWrapper height="2700px">
      <GlobalTitle
        imageUrl={building}
        mainText="특색있는 프로젝트의 경험"
        subText="Project"
      />
      <OrTab tabArr={skillTabArr} />
      <ProjectListWrapper>
        <DropdowBlock
          itemArr={itemArr}
          urlKey={"name"}
          firstTitle="프로젝트 리스트 ▼"
          size={"min"}
        />
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
