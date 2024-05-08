import styled from "styled-components";
import car from "../../../components/CSS/image/car.jpg";
import {
  FontSize,
  GrayColor,
  MainColor,
} from "../../../components/CSS/Color/ColorNote";

const ProjectIntroWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 90vh;
  width: 90%;
  background-color: red;

  .introImgDiv {
    height: 100%;
    width: 50%;
    background-color: blue;
    padding: 40px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .introInfo {
    height: 100%;
    width: 50%;
    background-color: yellowgreen;
    padding: 40px;

    .title {
      display: flex;
      flex-direction: row;
      align-items: center;
      background-color: red;
      color: black;
      font-size: 38px;
      font-weight: bold;
      height: 10%;
      width: 100%;
    }

    .sub {
      display: flex;
      flex-direction: row;
      align-items: center;
      background-color: yellow;
      font-size: ${FontSize.xxlarge};
      width: 100%;
      color: ${GrayColor.Gray100};
      margin-bottom: 10px;
    }

    img {
      height: 5%;
      width: 100%;
    }

    .link {
      display: flex;
      flex-direction: row;
      align-items: center;
      background-color: brown;
      font-size: ${FontSize.xlarge};
      height: 5%;
      width: 100%;
      margin-bottom: 20px;

      button {
        background-color: white;
        font-weight: bold;
        font-size: ${FontSize.large};
        height: 100%;
        margin-right: 20px;
      }
      .siteBtn {
        color: ${MainColor.Main300};
        border-bottom: 2px solid ${MainColor.Main300};
      }
      .gitBtn {
        color: black;
        border-bottom: 2px solid black;
      }
      .velogBtn {
        color: #3fbe3f;
        border-bottom: 2px solid #3fbe3f;
      }
    }

    .contents {
      height: 70%;
      width: 100%;
      background-color: thistle;
      font-size: ${FontSize.xxlarge};
      color: ${GrayColor.Gray100};
    }
  }
`;

interface LinkFunction {
  (url: string): void;
}

const url1 =
  "https://github.com/codemodel6/OracleDictionary/tree/main/client/src/image";

/** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
- 함수 기능 : url의 새로운 탭을 여는 함수
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
const handleLink: LinkFunction = (url) => {
  window.open(url);
};

const ProjectIntro = () => {
  return (
    <ProjectIntroWrapper>
      <div className="introImgDiv">
        <img src={car} alt="프로젝트 메인" />
      </div>
      <div className="introInfo">
        <div className="title">제목이에요</div>
        <div className="sub">이거에 대한 간단한 설명이에요</div>
        <img src={car} alt="심플아이콘" />
        <div className="link">
          <button className="siteBtn" onClick={() => handleLink(url1)}>
            배포
          </button>
          <button className="gitBtn" onClick={() => handleLink(url1)}>
            Github
          </button>
          <button className="velogBtn" onClick={() => handleLink(url1)}>
            Velog
          </button>
        </div>
        <div className="contents">
          자세한 정보
          <br />
          <br />
          어떻게되나
        </div>
      </div>
    </ProjectIntroWrapper>
  );
};

export default ProjectIntro;
