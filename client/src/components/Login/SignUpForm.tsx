import { UserCredential } from "firebase/auth";
import { useState } from "react";
import { useMutation, UseMutationResult } from "react-query";
import styled from "styled-components";
import { FontSize, MainColor, WhiteColor } from "../CSS/Color/ColorNote";
import { centerColumn } from "../CSS/Global/GlobalDisplay";
import { GlobalButton } from "../CSS/Global/GlobalItem";
import { signUp } from "../../firebase/auth";

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

  .SignUpFormBlock {
    ${centerColumn}
    width: 100%;
    height: 100%;
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
  }
`;

interface SignUpProps {
  email: string;
  password: string;
}

const SignUpForm = () => {
  // 회원가입에 보낼 데이터 state
  const [singUpObj, setSingUpObj] = useState<SignUpProps>({
    email: "",
    password: "",
  });

  // 입력 필드 핸들러
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setSingUpObj((prev) => ({ ...prev, [name]: value }));
  };

  /** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  - 함수 기능 : React Query를 사용한 회원가입 Mutation
                UserCredential : signUp 함수가 성공했을 때 반환하는 타입
                                 Firebase Authentication의 createUserWithEmailAndPassword 메서드가 
                                 성공적으로 값을 반환했을 때 UserCredential 객체를 반환
                Error          : signUp 함수가 실패했을 때 반환되는 에러의 타입
                FormState      : signUp 함수를 호출할 때 필요한 입력 변수의 타입
  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
  const mutation: UseMutationResult<UserCredential, Error, SignUpProps> =
    useMutation(signUp, {
      onSuccess: (data) => {
        console.log("회원가입 성공:", data.user);
        alert("회원가입이 성공적으로 완료되었습니다.");
      },
      onError: (error) => {
        console.error("회원가입 실패:", error);
        alert("회원가입에 실패했습니다: " + error.message);
      },
    });

  /** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  - 함수 기능 : 입력한 form을 파이어베이스 서버에 전달
  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    mutation.mutate(singUpObj); // 회원가입
  };

  return (
    <SignUpFormWrapper>
      <form className="SignUpFormBlock" onSubmit={handleSubmit}>
        <span className="SignUpFormTitle">SignUp</span>
        <input
          type="email"
          name="email"
          className="SignUpFormIdInput"
          value={singUpObj.email}
          placeholder="E-mail"
          onChange={handleInputChange}
          required
        ></input>
        <span className="SignUpFormValidationArea"></span>
        <input
          type="password"
          name="password"
          className="SignUpFormPwInput"
          value={singUpObj.password}
          placeholder="Password"
          onChange={handleInputChange}
          required
        ></input>
        <span className="SignUpFormValidationArea"></span>
        <div className="SignUpFormToolBlock">
          <GlobalButton type="submit" width="100%" height="50px">
            {mutation.isLoading ? "가입 중..." : "회원가입"}
          </GlobalButton>
        </div>
      </form>
    </SignUpFormWrapper>
  );
};

export default SignUpForm;
