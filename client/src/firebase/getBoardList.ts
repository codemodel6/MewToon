import {
  collection,
  limit,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "./firebase";

export interface BoardListProp {
  seq: number;
  id: string;
  content: string;
  createdDT: string;
  email: string;
  title: string;
  heart: number;
  uid: string;
  updateDT: string;
}

export const getBoardList = (
  callback: (boardList: BoardListProp[], boardDivisionPage: number) => void
) => {
  const boardCollection = collection(db, "board");
  const pageSize = 10;

  // 게시글을 seq 기준으로 내림차순 정렬하고 페이지 크기만큼 제한
  const boardQuery = query(
    boardCollection,
    orderBy("seq", "desc"),
    limit(pageSize)
  );

  // 실시간으로 데이터 가져오기
  const unsubscribe = onSnapshot(boardQuery, (snapshot) => {
    const boardList = snapshot.docs.map((doc) => ({
      id: doc.id, // 문서 ID
      ...doc.data(),
    })) as BoardListProp[];

    // 총 페이지 수
    const boardDivisionPage = Math.ceil(snapshot.size / pageSize);

    // 데이터를 콜백을 통해 전달
    callback(boardList, boardDivisionPage);
  });

  return unsubscribe;
};
