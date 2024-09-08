import {
  collection,
  getCountFromServer,
  getDocs,
  limit,
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

export const getBoardList = async () => {
  // firestore 컬렉션으로 board를 가져온다
  const boardCollection = collection(db, "board");
  const pageSize = 10; // 한 페이지에 보여줄 board 수
  const boardGetCount = await getCountFromServer(boardCollection);
  const boardAllPage = boardGetCount.data().count; // 총 문서 수

  const boardDivisionPage = Math.ceil(boardAllPage / pageSize); // 올림
  // setTotalPage(boardDivisionPage);
  console.log("Total documents: ", boardDivisionPage);
  // 페이지 사이즈

  // 게시글을 seq 기준 내림차순 정렬
  const boardQuery = query(
    boardCollection,
    orderBy("seq", "desc"),
    limit(pageSize)
  );
  // 쿼리 실행하여 문서 가져오기
  const boardGetDocs = await getDocs(boardQuery);

  const boardList = boardGetDocs.docs.map((it) => ({
    id: it.id, // 문서 ID
    ...it.data(), // 문서 데이터
  })) as BoardListProp[];
  console.log("boardList : ", boardList);
  return { boardList, boardDivisionPage };
};
