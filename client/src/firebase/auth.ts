import { createUserWithEmailAndPassword, UserCredential } from "firebase/auth";
import { auth } from "./firebase";

interface SignUpDataProps {
  email: string;
  password: string;
}

// 회원가입 함수
export const signUp = async ({
  email,
  password,
}: SignUpDataProps): Promise<UserCredential> => {
  try {
    // Firebase Auth를 사용하여 사용자 생성
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    console.log("회원가입 성공 : ", userCredential.user);

    return userCredential; // 성공적으로 생성된 사용자 객체 반환
  } catch (error) {
    console.error("회원가입 에러 : ", error);
    throw error; // 에러 발생 시 에러를 throw하여 상위에서 처리할 수 있도록 함
  }
};
