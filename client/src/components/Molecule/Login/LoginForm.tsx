import styled from "styled-components";
import { FontSize, MainColor, WhiteColor } from "../../CSS/Color/ColorNote";
import { centerColumn } from "../../CSS/Global/GlobalDisplay";
import { GlobalButton } from "../../CSS/Global/GlobalItem";

const LoginFormWrapper = styled.div`
  ${centerColumn}
  width: 50%;
  height: 100%;

  .LoginFormTitle {
    ${centerColumn}
    width: 70%;
    height: 7%;
    margin-bottom: 5%;
    font-size: ${FontSize.large};
  }

  .LoginFormIdInput {
    ${centerColumn}
    width: 70%;
    height: 7%;
    border: 2px solid ${MainColor.Main100};
    border-radius: 10px;
    padding: 1%;
    font-size: ${FontSize.xsmall};
  }

  .LoginFormPwInput {
    ${centerColumn}
    width: 70%;
    height: 7%;
    border: 2px solid ${MainColor.Main100};
    border-radius: 10px;
    padding: 1%;
    font-size: ${FontSize.xsmall};
  }

  .LoginFormValidationArea {
    ${centerColumn}
    width: 70%;
    height: 5%;
    background-color: ${WhiteColor.White100};
  }

  .LoginFormToolBlock {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 70%;
    height: 15%;
  }
`;

interface LoginFormProps {
  loginToggle: boolean;
  setLoginToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoginForm: React.FC<LoginFormProps> = ({
  loginToggle,
  setLoginToggle,
}) => {
  /** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  - 함수 기능 : 글쓰기 모달을 키고 끄는 함수
  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
  const handleLoginToggle = () => {
    setLoginToggle(!loginToggle);
  };
  return (
    <LoginFormWrapper>
      <span className="LoginFormTitle">MewToon</span>
      <input className="LoginFormIdInput" placeholder="ID"></input>
      <span className="LoginFormValidationArea"></span>
      <input className="LoginFormPwInput" placeholder="Password"></input>
      <span className="LoginFormValidationArea"></span>
      <div className="LoginFormToolBlock">
        <GlobalButton width="100%" height="50px">
          로그인
        </GlobalButton>
        <GlobalButton width="100%" height="50px" onClick={handleLoginToggle}>
          회원가입
        </GlobalButton>
      </div>
    </LoginFormWrapper>
  );
};

export default LoginForm;
