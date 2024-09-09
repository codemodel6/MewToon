import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";

// 게시글 타입 정의
export interface BoardDetailProp {
  email: string;
  title: string;
  content: string;
  heart: number;
  updateDT: string;
}

export const getBoardDetail = async (
  boardId: string
): Promise<BoardDetailProp | null> => {
  try {
    // firestore에서 해당 게시글 문서를 가져오기
    const docRef = doc(db, "board", boardId);
    const boardDetailGetDoc = await getDoc(docRef);

    if (boardDetailGetDoc.exists()) {
      // 문서가 존재하면 데이터 반환
      const boardDetaildata = boardDetailGetDoc.data();
      console.log(boardDetaildata);
      return {
        title: boardDetaildata.title,
        email: boardDetaildata.email,
        content: boardDetaildata.content,
        updateDT: boardDetaildata.updateDT,
        heart: boardDetaildata.heart,
      };
    } else {
      // 문서가 없으면 null 반환
      console.log("해당 id에 맞는 게시글이 없습니다.");
      return null;
    }
  } catch (error) {
    console.error("getBoardDetail 에러 발생 : ", error);
    return null;
  }
};
