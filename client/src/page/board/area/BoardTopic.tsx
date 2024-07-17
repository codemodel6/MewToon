import styled from "styled-components";
import { centerColumn } from "../../../components/CSS/Global/GlobalDisplay";
import BoardCarousel from "../../../components/Molecule/Carousel/BoardCarousel";

const BoardTopicWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-top: 5%;

  .title {
    text-align: center;
    font-size: 30px;
    font-weight: bold;
    color: "black";
    margin-bottom: 8%;
    width: 50%;
  }
`;

const BoardCarouselDiv = styled.div`
  ${centerColumn}
  width: 100%;
  height: 65%;
`;

const BoardTopic = () => {
  return (
    <BoardTopicWrapper>
      <div className="title">
        좋아요를 많이 받은
        <br />
        가장 인기있는 게시물 Top10
      </div>
      <BoardCarouselDiv>
        <BoardCarousel />
      </BoardCarouselDiv>
    </BoardTopicWrapper>
  );
};

export default BoardTopic;
