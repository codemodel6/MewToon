import styled from "styled-components";
import {
  betweenRow,
  centerColumn,
  centerRow,
} from "../../../components/CSS/Global/GlobalDisplay";
import { FontSize } from "../../../components/CSS/Color/ColorNote";

const ProjectContentsWrapper = styled.div`
  ${centerColumn}
  width: 23%;
  height: 45%;
  background-color: yellow;
  border-radius: 5%;
  padding: 5px;

  .projectImgDiv {
    height: 50%;
    width: 100%;
    border-radius: 5%;
    background-color: black;
    margin-bottom: 10px;
  }

  .projectAuthor {
    ${betweenRow};
    height: 10%;
    width: 100%;
    background-color: blue;
    margin-bottom: 5px;
    font-size: ${FontSize.medium};
  }

  .projectTitle {
    display: flex;
    flex-direction: column;
    height: 20%;
    width: 100%;
    color: black;
    background-color: green;
    margin-bottom: 5px;
    font-size: ${FontSize.large};
  }

  .projectPrice {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: right;
    padding-right: 10px;
    height: 12%;
    width: 100%;
    color: white;
    background-color: purple;
    font-weight: bold;
    font-size: ${FontSize.xlarge};
  }
`;

const ProjectContents = () => {
  return (
    <ProjectContentsWrapper>
      <div className="projectImgDiv"></div>
      <div className="projectAuthor">작성자</div>
      <div className="projectTitle">제목</div>
      <div className="projectPrice">1000원</div>
    </ProjectContentsWrapper>
  );
};

export default ProjectContents;
