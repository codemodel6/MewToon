import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import {
  FontSize,
  GrayColor,
  MainColor,
} from "../../../components/CSS/Color/ColorNote";
import {
  handleLink,
  handleScrollMove,
} from "../../../components/Function/scroll";
import { introObj } from "./IntroObj";

const ProjectIntroWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 700px;
  width: 90%;
  box-shadow: 10px 10px 20px 0px ${GrayColor.Gray300};
  padding: 40px;
  margin-bottom: 40px;

  .introImgDiv {
    height: 100%;
    width: 48%;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .introInfo {
    width: 48%;
    padding: 40px;

    .title {
      display: flex;
      flex-direction: row;
      align-items: center;
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
      font-size: ${FontSize.xlarge};
      width: 100%;
      margin-bottom: 50px;

      button {
        background-color: white;
        font-weight: bold;
        font-size: ${FontSize.large};
        height: 100%;
        margin-right: 20px;
      }
      .playBtn {
        color: ${MainColor.Main300};
        border-bottom: 2px solid ${MainColor.Main300};
      }
      .gitBtn {
        color: black;
        border-bottom: 2px solid black;
      }
      .vlgBtn {
        color: #3fbe3f;
        border-bottom: 2px solid #3fbe3f;
      }
    }

    .contents {
      height: 70%;
      width: 100%;
      font-size: ${FontSize.xxlarge};
      color: ${GrayColor.Gray100};
    }
  }
`;

const ProjectIntro = () => {
  const [urlName, setUrlName] = useState<string | null>("musicBox");
  const [searchParams] = useSearchParams();

  useEffect(() => {
    // ulr 경로의 name으로 설정
    const name = searchParams.get("name");
    setUrlName(name);
  }, [searchParams]);

  // 타입 가드 및 오류 페이지
  // urlName이 null인지 확인 || urlName이 introObj에 있는지 확인
  if (!urlName || !(urlName in introObj)) {
    return (
      <ProjectIntroWrapper>
        <div>오류페이지</div>
      </ProjectIntroWrapper>
    );
  }

  return (
    <ProjectIntroWrapper>
      <div className="introImgDiv">
        <img src={introObj[urlName].mainImage} alt="프로젝트 메인" />
      </div>
      <div className="introInfo">
        <div className="title">{introObj[urlName].title}</div>
        <div className="sub">{introObj[urlName].sub}</div>
        <div className="link">
          <button
            className="gitBtn"
            onClick={() => handleLink(introObj[urlName].gitURL)}
          >
            Github
          </button>
          <button
            className="vlgBtn"
            onClick={() => handleLink(introObj[urlName].vlgURL)}
          >
            Velog
          </button>
          <button className="playBtn" onClick={() => handleScrollMove(600)}>
            Play
          </button>
        </div>
        <textarea
          readOnly
          className="contents"
          value={introObj[urlName].contents}
        />
      </div>
    </ProjectIntroWrapper>
  );
};

export default ProjectIntro;
