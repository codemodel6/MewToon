import styled from "styled-components";
import {
  FontSize,
  GrayColor,
  SubColor,
} from "../../../components/CSS/Color/ColorNote";
import {
  aroundRow,
  centerColumn,
} from "../../../components/CSS/Global/GlobalDisplay";
import { GlobalButton } from "../../../components/CSS/Global/GlobalItem";
import { useEffect } from "react";
import axios from "axios";

const InfoQuestionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 90vh;
  padding-top: 5%;

  .title {
    font-size: 30px;
    font-weight: bold;
    color: "black";
    margin-bottom: 5%;
  }
`;

const InfoWriteContents = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  height: 95%;
  padding: 40px;
  box-shadow: 10px 10px 20px 0px ${GrayColor.Gray300};
  border-radius: 10px;

  .title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-weight: bold;
    width: 100%;
    height: 40px;
    margin-bottom: 5px;
    font-size: ${FontSize.large};
    color: black;
  }

  input {
    width: 100%;
    height: 50px;
    padding: 10px;
    font-size: ${FontSize.medium};
    margin-bottom: 30px;
    border: 3px ridge ${GrayColor.Gray500};
    border-radius: 5px;
  }

  textarea {
    width: 100%;
    height: 350px;
    padding: 10px;
    font-size: ${FontSize.medium};
    margin-bottom: 30px;
    border: 3px ridge ${GrayColor.Gray500};
    border-radius: 5px;
  }

  .buttonDiv {
    margin-top: 20px;
    ${aroundRow}
    width: 100%;
    height: 50px;
  }
`;

const InfoQuestion = () => {
  const handleSubmit = () => {
    alert("시스템 오류 발생\ncodemodel6@gmail.com로 메일 부탁드립니다.");
  };

  useEffect(() => {
    const handleWebToon = async () => {
      const webToonResponse = await axios.get(
        "https://korea-webtoon-api.herokuapp.com/?&page=3&service=naver&updateDay=sun"
      );
      console.log(webToonResponse.data);
    };
    handleWebToon();
  }, []);

  return (
    <InfoQuestionWrapper>
      <div className="title">문의사항이 있다면 언제든지 문의해주세요!</div>
      <InfoWriteContents>
        <div className="title">이름/회사</div>
        <input type="text" />
        <div className="title">연락처</div>
        <input type="text" />
        <div className="title">문의사항</div>
        <textarea></textarea>
        <div className="buttonDiv">
          <GlobalButton width="40%" height="100%" onClick={handleSubmit}>
            등록
          </GlobalButton>
        </div>
      </InfoWriteContents>
    </InfoQuestionWrapper>
  );
};

export default InfoQuestion;
