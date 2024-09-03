import styled from "styled-components";
import { BlackColor, MainColor, WhiteColor } from "../../CSS/Color/ColorNote";
import { centerColumn, centerRow } from "../../CSS/Global/GlobalDisplay";
import computerCat from "../../CSS/image/HomeImg/gif/computerCat.gif";
import { Overlay } from "../Modal/WriteModal";
import SignUpForm from "./SignUpForm";
import { useState } from "react";
import LoginForm from "./LoginForm";

const LoginWrapper = styled.div`
  display: none;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;

  &.open {
    display: block;
  }

  .loginBlock {
    ${centerRow}
    background-color: ${WhiteColor.White100};
    width: 1100px;
    height: 700px;
    margin-bottom: 40px;
    border: 1px solid ${MainColor.Main200};
    border-radius: 10px;
    font-weight: bold;
    color: ${BlackColor.Black100};

    .loginLeftBlock {
      ${centerColumn}
      width: 50%;
      height: 100%;
      background-color: ${MainColor.Main100};
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;

      .loginGif {
        width: 80%;
        height: 80%;
      }
    }
  }
`;

interface LoginProps {
  modalState: boolean;
  setModalState: React.Dispatch<React.SetStateAction<boolean>>;
}

const Login: React.FC<LoginProps> = ({ modalState, setModalState }) => {
  const [loginToggle, setLoginToggle] = useState<boolean>(false);

  return (
    <Overlay $modalState={modalState}>
      <LoginWrapper className={`${modalState ? "open" : ""}`}>
        <div className="loginBlock">
          <div className="loginLeftBlock">
            <img src={computerCat} alt="컴퓨터캣"></img>
          </div>
          {!loginToggle ? (
            <LoginForm
              loginToggle={loginToggle}
              setLoginToggle={setLoginToggle}
            />
          ) : (
            <SignUpForm />
          )}
        </div>
      </LoginWrapper>
    </Overlay>
  );
};

export default Login;
