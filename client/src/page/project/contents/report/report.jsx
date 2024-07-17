import { useState } from "react";
import styled from "styled-components";
import {
  FontSize,
  MainColor,
  SubColor,
} from "../../../../components/CSS/Color/ColorNote";
import {
  aroundRow,
  centerColumn,
} from "../../../../components/CSS/Global/GlobalDisplay";
import {
  CancelButton,
  GlobalButton,
} from "../../../../components/CSS/Global/GlobalItem";

const ReportWrapper = styled.div`
  ${aroundRow}
  width: 100%;
  height: 100%;
  padding: 0 20px 0 20px;
`;

const ReportForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 35%;
  height: 90%;
  padding: 10px;
  box-shadow: 0px 0px 10px 5px ${SubColor.Sub100};
  border-radius: 10px;

  .title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-weight: bold;
    width: 100%;
    height: 40px;
    padding-left: 5px;
    margin-bottom: 5px;
    font-size: ${FontSize.large};
    color: black;
  }

  textarea {
    width: 100%;
    height: 100px;
    padding: 10px;
    font-size: ${FontSize.medium};
    margin-bottom: 5px;
    border: 3px ridge ${SubColor.Sub300};
    border-radius: 5px;
  }

  input {
    width: 100%;
    height: 50px;
    padding: 10px;
    font-size: ${FontSize.medium};
    margin-bottom: 5px;
    border: 3px ridge ${SubColor.Sub300};
    border-radius: 5px;
  }

  input:focus {
    outline: none;
  }

  .buttonDiv {
    margin-top: 40px;
    ${aroundRow}
    width: 100%;
    height: 50px;
  }
`;

const ReportResult = styled.div`
  ${centerColumn}
  width: 35%;
  height: 90%;
  box-shadow: 0px 0px 10px 5px ${MainColor.Main300};
  border-radius: 10px;
  padding: 20px;

  textarea {
    width: 100%;
    height: 85%;
    margin-bottom: 5%;
    border: 5px ridge ${MainColor.Main200};
    font-size: ${FontSize.medium};
    padding: 10px;
  }
`;

const Report = () => {
  // 이번주 진행사항
  const [thisWeek, setThisWeek] = useState("");
  // 다음주 진행사항
  const [nextWeek, setNextWeek] = useState("");
  // 기타사항
  const [other, setOther] = useState("");
  // 개인 만족도
  const [value, setValue] = useState(0);
  // 완성된 글
  const [final, setFinal] = useState("");
  // 합칠 글
  let combi = `<이번주 진행사항>\n${thisWeek}\n<다음주 진행사항>\n${nextWeek}\n`;
  combi += `<기타사항>\n${other}\n<개인 만족도>\n${value}`;

  /** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  - 함수 기능 : 주간보고서 작성하는 함수
  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
  const handleSubmit = () => {
    setFinal(combi);
  };

  /** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  - 함수 기능 : 작성한 내용 모두를 초기화 하는 함수
  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
  const handleClear = () => {
    setThisWeek("");
    setNextWeek("");
    setOther("");
    setValue(0);
    setFinal("");
  };

  /** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  - 함수 기능 : textarea 내용을 복사하는 함수
  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
  const handleCopy = async () => {
    try {
      // 클립보드에 textarea 내용 복사
      await navigator.clipboard.writeText(final);
      alert("복사 성공");
    } catch (e) {
      alert("복사 실패");
    }
  };

  return (
    <ReportWrapper>
      <ReportForm>
        <div className="title">이번주 진행사항</div>
        <textarea
          value={thisWeek}
          onChange={(e) => setThisWeek(e.target.value)}
        />
        <div className="title">다음주 진행사항</div>
        <textarea
          value={nextWeek}
          onChange={(e) => setNextWeek(e.target.value)}
        />
        <div className="title">기타사항</div>
        <textarea value={other} onChange={(e) => setOther(e.target.value)} />
        <div className="title">개인 만족도</div>
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        ></input>
        {/* <MySlider value={value} setValue={setValue} max={5} /> */}
        <div className="buttonDiv">
          <GlobalButton width="40%" height="50px" onClick={handleSubmit}>
            작성
          </GlobalButton>
          <CancelButton width="40%" height="50px" onClick={handleClear}>
            초기화
          </CancelButton>
        </div>
      </ReportForm>
      <ReportResult>
        <textarea readOnly={true} value={final} />
        <GlobalButton width="80%" height="50px" onClick={handleCopy}>
          전체 복사
        </GlobalButton>
      </ReportResult>
    </ReportWrapper>
  );
};

export default Report;
