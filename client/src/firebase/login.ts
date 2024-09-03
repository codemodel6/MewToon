import { signInWithEmailAndPassword, UserCredential } from "firebase/auth";
import { auth } from "./firebase";
import { LoginDataProps } from "./signUp";

// 로그인 함수
export const login = async ({
  email,
  password,
}: LoginDataProps): Promise<string> => {
  try {
    const userCredential: UserCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const idToken = await userCredential.user.getIdToken(); // JWT 토큰 가져오기
    return idToken;
  } catch (error) {
    console.error("로그인 오류:", error);
    throw error; // 에러를 던져서 상위에서 처리할 수 있도록 함
  }
};
