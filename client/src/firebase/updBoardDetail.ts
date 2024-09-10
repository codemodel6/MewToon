import { doc, updateDoc } from "firebase/firestore";
import { db } from "./firebase";
import { BoardDetailProp } from "./getBoardDetail";

// 게시글 수정 함수
export const updBoardDetail = async (
  boardDetailId: string,
  updatedData: Partial<BoardDetailProp>
) => {
  try {
    // 수정할 게시글 문서 참조 생성
    const docRef = doc(db, "board", boardDetailId);

    // Firestore에서 해당 게시글 문서의 데이터 업데이트
    await updateDoc(docRef, updatedData);

    console.log("게시글이 성공적으로 수정되었습니다.");
  } catch (error) {
    console.error("게시글 수정 중 오류 발생: ", error);
  }
};
