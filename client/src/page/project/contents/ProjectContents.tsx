import { ReactElement, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { MainColor } from "../../../components/CSS/Color/ColorNote";
import Canvas from "./canvas/Canvas";
import MusicBox from "./musicBox/MusicBox";
import Report from "./report/report";
import MyYoutube from "./youtube/MyYoutube";

const ProjectContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 20px 0px ${MainColor.Main200};
  width: 90%;
  height: 800px;
  margin-bottom: 80px;
`;

const ProjectContent = () => {
  const [searchParams] = useSearchParams();
  // url에 따라서 보여줄 컴포넌트
  const [nowComponent, setNowComponent] = useState<ReactElement | null>(null);

  // url의 이름을 가져온다
  const name = searchParams.get("name");
  console.log(name);

  useEffect(() => {
    const nameList: string[] = ["musicBox", "drawing", "youtube", "report"];
    const componentList: ReactElement[] = [
      <MusicBox />,
      <Canvas />,
      <MyYoutube />,
      <Report />,
    ];

    for (let i = 0; i < nameList.length; i++) {
      if (name === nameList[i]) {
        setNowComponent(componentList[i]);
      }
    }
  }, [name]);

  return <ProjectContentWrapper>{nowComponent}</ProjectContentWrapper>;
};

export default ProjectContent;
