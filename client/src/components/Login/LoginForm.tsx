import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import styled from "styled-components";
import { login } from "../../firebase/login";
import { LoginDataProps } from "../../firebase/signUp";
import { FontSize, MainColor, WhiteColor } from "../CSS/Color/ColorNote";
import { centerColumn } from "../CSS/Global/GlobalDisplay";
import { GlobalButton } from "../CSS/Global/GlobalItem";

const LoginFormWrapper = styled.div`
  ${centerColumn}
  width: 100%;
  height: 90%;

  .LoginFormBlock {
    ${centerColumn}
    height: 100%;
    width: 100%;
  }

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
    height: 110px;
  }
`;

interface LoginFormProps {
  handleLoginToggle: () => void;
  handleModalState: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({
  handleLoginToggle,
  handleModalState,
}) => {
  // 로그인에 보낼 데이터 state
  const [loginObj, setLoginObj] = useState<LoginDataProps>({
    email: "",
    password: "",
  });

  // 입력 필드 핸들러
  const handleLoginInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    setLoginObj((prev) => ({ ...prev, [name]: value }));
  };

  /** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  - 함수 기능 : 로그인 mutate 실행시키는 함수
  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
  const handleLoginSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    loginMutation.mutate(loginObj);
  };

  /** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  - 함수 기능 : React Query를 사용한 로그인 Mutation
                string         : login 함수가 성공했을 때 반환되는 값의 타입
                Error          : login 함수가 실패했을 때 반환되는 에러의 타입
                LoginDataProps : login 함수를 호출할 때 필요한 입력 변수의 타입
  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
  const loginMutation = useMutation({
    mutationFn: login, // login 함수 자체를 전달
    onSuccess: (token: string) => {
      console.log("로그인 성공, JWT 토큰:", token);
      // 토큰을 로컬 스토리지 또는 쿠키에 저장합니다.
      localStorage.setItem("jwtToken", token);
      handleModalState(); // 로그인 화면을 닫는다
      alert("로그인이 성공적으로 완료되었습니다.");
    },
    onError: (error: Error) => {
      console.error("로그인 실패:", error);
      alert("로그인에 실패했습니다. 다시 시도해 주세요.");
    },
  });

  return (
    <LoginFormWrapper>
      <form className="LoginFormBlock" onSubmit={handleLoginSubmit}>
        <span className="LoginFormTitle">Login</span>
        <input
          type="email"
          name="email"
          className="LoginFormIdInput"
          value={loginObj.email}
          placeholder="E-mail"
          onChange={handleLoginInputChange}
          required
        ></input>
        <span className="LoginFormValidationArea"></span>
        <input
          type="password"
          name="password"
          className="LoginFormPwInput"
          value={loginObj.password}
          placeholder="Password"
          onChange={handleLoginInputChange}
          required
        ></input>
        <span className="LoginFormValidationArea"></span>
        <div className="LoginFormToolBlock">
          <GlobalButton width="100%" height="50px">
            로그인
          </GlobalButton>
          <GlobalButton
            width="100%"
            height="50px"
            onClick={() => handleLoginToggle()}
          >
            회원가입
          </GlobalButton>
        </div>
      </form>
    </LoginFormWrapper>
  );
};

export default LoginForm;
