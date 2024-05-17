import styled from "styled-components";
import { GrayColor } from "../../../components/CSS/Color/ColorNote";

const BoardWriteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${GrayColor.Gray400};
  padding-top: 5%;

  .title {
    font-size: 30px;
    font-weight: bold;
    color: "black";
    margin-bottom: 5%;
  }
`;

const BoardWriteContents = styled.div`
  width: 50%;
  height: 75%;
  background-color: orange;
`;

const BoardWrite = () => {
  return (
    <BoardWriteWrapper>
      <div className="title">문의사항이 있다면 언제든지 문의해주세요!</div>
      <BoardWriteContents></BoardWriteContents>
    </BoardWriteWrapper>
  );
};

export default BoardWrite;
