import styled from "styled-components";
import {
  betweenRow,
  centerColumn,
  centerRow,
} from "../../../components/CSS/Global/GlobalDisplay";
import { FontSize } from "../../../components/CSS/Color/ColorNote";

const SkillContentsWrapper = styled.div`
  ${centerColumn}
  width: 23%;
  height: 45%;
  background-color: yellow;
  border-radius: 5%;
  padding: 5px;

  .skillImgDiv {
    height: 50%;
    width: 100%;
    border-radius: 5%;
    background-color: black;
    margin-bottom: 10px;
  }

  .skillAuthor {
    ${betweenRow};
    height: 10%;
    width: 100%;
    background-color: blue;
    margin-bottom: 5px;
    font-size: ${FontSize.medium};
  }

  .skillTitle {
    display: flex;
    flex-direction: column;
    height: 20%;
    width: 100%;
    color: black;
    background-color: green;
    margin-bottom: 5px;
    font-size: ${FontSize.large};
  }

  .skillPrice {
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

const SkillContents = () => {
  return (
    <SkillContentsWrapper>
      <div className="skillImgDiv"></div>
      <div className="skillAuthor">작성자</div>
      <div className="skillTitle">제목</div>
      <div className="skillPrice">1000원</div>
    </SkillContentsWrapper>
  );
};

export default SkillContents;
