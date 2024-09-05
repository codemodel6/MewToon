import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "./firebase"; // Firebase 초기화한 파일
import { formatDate } from "../components/Function/date";

export interface BoardCreateProps {
  title: string;
  content: string;
}

const boardCreate = async ({ title, content }: BoardCreateProps) => {
  const user = auth.currentUser;

  if (user) {
    try {
      // Firestore의 "posts" 컬렉션에 데이터 추가
      await addDoc(collection(db, "board"), {
        uid: user.uid, // 로그인한 사용자 ID
        email: user.email, // 로그인한 사용자 이메일
        title: title, // 게시글 제목
        content: content, // 게시글 내용
        createdDT: formatDate(new Date()), // 생성 날짜
        updateDT: formatDate(new Date()), // 수정 날짜
      });
      alert("게시글이 성공적으로 업로드되었습니다.");
    } catch (error) {
      console.error("게시글 업로드 실패:", error);
      alert("게시글 업로드에 실패했습니다.");
    }
  } else {
    alert("로그인이 필요합니다.");
  }
};

export default boardCreate;
