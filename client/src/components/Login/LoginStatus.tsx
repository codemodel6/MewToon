import { onAuthStateChanged, User } from "firebase/auth";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { auth } from "../../firebase/firebase";
import { FontSize, MainColor } from "../CSS/Color/ColorNote";
import {
  aroundRow,
  centerColumn,
  centerRow,
} from "../CSS/Global/GlobalDisplay";
import logout from "../CSS/image/LoginImg/logout.png";
import { handleModal } from "../Function/modal";
import { LoginModalProps } from "../Organism/Header";
import { toast } from "react-toastify";

const LoginStatusWrapper = styled.div<{ $scrollAction: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  width: 250px;
  height: 70%;
  background-color: ${MainColor.Main100};
  border-radius: 10px;
  font-weight: bold;
  color: white;
  transform: translateY(${(props) => (props.$scrollAction ? "-100%" : "0")});
  transition: transform 1s ease; // 속성, 지속시간, 타이밍함수
`;

const LoginOffBlock = styled.button`
  ${centerColumn}
  height: 70%;
  width: 70%;
  font-size: ${FontSize.xmedium};
  background-color: white;
  border-radius: 10px;
  color: ${MainColor.Main100};
  font-weight: bold;
`;
const LoginOnBlock = styled.div`
  ${centerRow}
  height: 100%;
  width: 100%;

  .loginInfoBlock {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    width: 70%;
    padding-left: 10px;
  }

  .userInfo {
    font-size: ${FontSize.medium};
    margin-bottom: 2px;
  }

  .welcome {
    font-size: ${FontSize.small};
  }

  .loginToolBlock {
    ${aroundRow}
    height: 100%;
    width: 30%;

    button {
      width: 30px;
      height: 30px;
      background-color: transparent;
    }

    img {
      width: 100%;
      height: 100%;
    }
  }
`;

const LoginStatus: React.FC<LoginModalProps> = ({
  loginModalState,
  setLoginModalState,
  scrollAction,
}) => {
  // 로그인한 유저의 데이터
  const [loginUser, setLoginUser] = useState<User | null>(null);

  /** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
   * 훅 기능 : 파이어베이스 로그인 정보가 있는지 지속적인 확인
   * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
  useEffect(() => {
    // 사용자의 인증 상태를 지속적으로 감시
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setLoginUser(currentUser);
    });

    console.log("로그인유저 ---->", loginUser);

    // 컴포넌트가 언마운트될 때 감시 중지
    return () => unsubscribe();
  }, [loginUser]);

  const handleLogout = async () => {
    await auth.signOut();
    toast.success("로그아웃 되었습니다.");
  };

  return (
    <LoginStatusWrapper $scrollAction={scrollAction}>
      {loginUser ? (
        <LoginOnBlock>
          <div className="loginInfoBlock">
            <span className="userInfo">
              {loginUser?.email?.split("@")[0]} 님
            </span>
            <span className="welcome">안녕하세요</span>
          </div>
          <div className="loginToolBlock">
            <button onClick={handleLogout}>
              <img src={logout} alt="로그아웃"></img>
            </button>
          </div>
        </LoginOnBlock>
      ) : (
        <LoginOffBlock
          onClick={() => handleModal(loginModalState, setLoginModalState)}
        >
          Login
        </LoginOffBlock>
      )}
    </LoginStatusWrapper>
  );
};

export default LoginStatus;
