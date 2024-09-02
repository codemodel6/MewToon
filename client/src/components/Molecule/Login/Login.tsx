import styled from "styled-components";
import {
  BlackColor,
  FontSize,
  MainColor,
  WhiteColor,
} from "../../CSS/Color/ColorNote";
import { centerColumn, centerRow } from "../../CSS/Global/GlobalDisplay";
import { Overlay } from "../Modal/WriteModal";

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

    .loginHalfBlock {
      /* display: flex;
      flex-direction: column;
      align-items: center; */
      ${centerColumn}
      width: 50%;
      height: 100%;

      .loginGif {
        background-color: orange;
      }

      .loginTitle {
        ${centerColumn}
        width: 70%;
        height: 7%;
        background-color: orange;
        margin-bottom: 10%;
        font-size: ${FontSize.large};
      }

      .loginIdInput {
        width: 70%;
        height: 7%;
        background-color: orange;
      }

      .loginPwInput {
        width: 70%;
        height: 7%;
        background-color: orange;
      }

      .loginValidationArea {
        width: 70%;
        height: 7%;
        background-color: ${WhiteColor.White100};
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
          <div className="loginHalfBlock"></div>
          <div className="loginHalfBlock">
            <span className="loginTitle">MewToon</span>
            <span className="loginIdInput"></span>
            <span className="loginValidationArea"></span>
            <span className="loginPwInput"></span>
            <span className="loginValidationArea"></span>
          </div>
        </div>
      </LoginWrapper>
    </Overlay>
  );
};

export default Login;
