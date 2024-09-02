import styled from "styled-components";
import {
  BlackColor,
  FontSize,
  MainColor,
  WhiteColor,
} from "../../CSS/Color/ColorNote";
import { centerColumn, centerRow } from "../../CSS/Global/GlobalDisplay";
import { Overlay } from "../Modal/WriteModal";
import { GlobalButton } from "../../CSS/Global/GlobalItem";
import computerCat from "../../CSS/image/HomeImg/gif/computerCat.gif";

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

    .loginRightBlock {
      ${centerColumn}
      width: 50%;
      height: 100%;

      .loginTitle {
        ${centerColumn}
        width: 70%;
        height: 7%;
        margin-bottom: 5%;
        font-size: ${FontSize.large};
      }

      .loginIdInput {
        ${centerColumn}
        width: 70%;
        height: 7%;
        border: 2px solid ${MainColor.Main100};
        border-radius: 10px;
        padding: 1%;
        font-size: ${FontSize.xsmall};
      }

      .loginPwInput {
        ${centerColumn}
        width: 70%;
        height: 7%;
        border: 2px solid ${MainColor.Main100};
        border-radius: 10px;
        padding: 1%;
        font-size: ${FontSize.xsmall};
      }

      .loginValidationArea {
        ${centerColumn}
        width: 70%;
        height: 5%;
        background-color: ${WhiteColor.White100};
      }

      .loginToolBlock {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        width: 70%;
        height: 15%;
      }
    }
  }
`;

interface LoginProps {
  modalState: boolean;
  setModalState: React.Dispatch<React.SetStateAction<boolean>>;
}

const Login: React.FC<LoginProps> = ({ modalState, setModalState }) => {
  return (
    <Overlay $modalState={modalState}>
      <LoginWrapper className={`${modalState ? "open" : ""}`}>
        <div className="loginBlock">
          <div className="loginLeftBlock">
            <img src={computerCat} alt="컴퓨터캣"></img>
          </div>
          <div className="loginRightBlock">
            <span className="loginTitle">MewToon</span>
            <input className="loginIdInput" placeholder="ID"></input>
            <span className="loginValidationArea"></span>
            <input className="loginPwInput" placeholder="Password"></input>
            <span className="loginValidationArea"></span>
            <div className="loginToolBlock">
              <GlobalButton width="100%" height="45%">
                로그인
              </GlobalButton>
              <GlobalButton width="100%" height="45%">
                회원가입
              </GlobalButton>
            </div>
          </div>
        </div>
      </LoginWrapper>
    </Overlay>
  );
};

export default Login;
