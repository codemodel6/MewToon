import styled from "styled-components";
import { GrayColor } from "../../../components/CSS/Color/ColorNote";
import { centerColumn } from "../../../components/CSS/Global/GlobalDisplay";
import BoardCarousel from "../../../components/Molecule/Carousel/BoardCarousel";

const BoardTopicWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${GrayColor.Gray400};
  padding-top: 5%;

  .title {
    text-align: center;
    font-size: 30px;
    font-weight: bold;
    color: "black";
    margin-bottom: 5%;
    width: 50%;
  }
`;

const BoardCarouselDiv = styled.div`
  ${centerColumn}
  width: 100%;
  height: 60%;
  background-color: orange;
`;

const BoardTopic = () => {
  return (
    <BoardTopicWrapper>
      <div className="title">
        가장 인기가
        <br />
        많았던 화제의 게시글!
      </div>
      <BoardCarouselDiv>
        <BoardCarousel />
      </BoardCarouselDiv>
    </BoardTopicWrapper>
  );
};

export default BoardTopic;
