import { doc, deleteDoc } from "firebase/firestore";
import { db } from "./firebase";

// 게시글 삭제 함수
export const delBoardDetail = async (boardDetailId: string) => {
  try {
    // 삭제할 게시글 문서 참조 생성
    const docRef = doc(db, "board", boardDetailId);

    // Firestore에서 해당 게시글 문서 삭제
    await deleteDoc(docRef);

    console.log("게시글이 성공적으로 삭제되었습니다.");
  } catch (error) {
    console.error("게시글 삭제 중 오류 발생: ", error);
  }
};
