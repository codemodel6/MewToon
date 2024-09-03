import styled from "styled-components";
import { FontSize, MainColor, WhiteColor } from "../../CSS/Color/ColorNote";
import { centerColumn } from "../../CSS/Global/GlobalDisplay";
import { GlobalButton } from "../../CSS/Global/GlobalItem";

const SignUpFormWrapper = styled.div`
  ${centerColumn}
  width: 100%;
  height: 90%;

  .SignUpFormTitle {
    ${centerColumn}
    width: 70%;
    height: 7%;
    margin-bottom: 5%;
    font-size: ${FontSize.large};
  }

  .SignUpFormIdInput {
    ${centerColumn}
    width: 70%;
    height: 7%;
    border: 2px solid ${MainColor.Main100};
    border-radius: 10px;
    padding: 1%;
    font-size: ${FontSize.xsmall};
  }

  .SignUpFormPwInput {
    ${centerColumn}
    width: 70%;
    height: 7%;
    border: 2px solid ${MainColor.Main100};
    border-radius: 10px;
    padding: 1%;
    font-size: ${FontSize.xsmall};
  }

  .SignUpFormValidationArea {
    ${centerColumn}
    width: 70%;
    height: 5%;
    background-color: ${WhiteColor.White100};
  }

  .SignUpFormToolBlock {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 70%;
    height: 7%;
    background-color: orange;
  }
`;

const SignUpForm = () => {
  return (
    <SignUpFormWrapper>
      <span className="SignUpFormTitle">Welcome</span>
      <input className="SignUpFormIdInput" placeholder="ID"></input>
      <span className="SignUpFormValidationArea"></span>
      <input className="SignUpFormPwInput" placeholder="Password"></input>
      <span className="SignUpFormValidationArea"></span>
      <input className="SignUpFormPwInput" placeholder="Password"></input>
      <span className="SignUpFormValidationArea"></span>
      <div className="SignUpFormToolBlock">
        <GlobalButton width="100%" height="50px">
          가입완료
        </GlobalButton>
      </div>
    </SignUpFormWrapper>
  );
};

export default SignUpForm;
