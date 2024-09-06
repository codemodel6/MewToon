import {
  addDoc,
  collection,
  doc,
  getDocs,
  increment,
  runTransaction,
} from "firebase/firestore";
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
      const firebaseSeqDoc = doc(db, "boardSeq", "counter");

      // 트랜잭션 사용하여 seq 값 증가 로직
      await runTransaction(db, async (transaction) => {
        const seqDoc = await transaction.get(firebaseSeqDoc);

        // firebase에 문서가 없을 시 예외처리
        if (!seqDoc.exists()) {
          throw new Error("seq 관리 문서가 존재하지 않습니다.");
        }

        // 현재 seq 값 가져오기
        const currentSeq = seqDoc.data().seq;

        // Firestore의 "board" 컬렉션에 데이터 추가
        await addDoc(collection(db, "board"), {
          seq: currentSeq, // 시퀀스번호
          uid: user.uid, // 로그인한 사용자 ID
          email: user.email, // 로그인한 사용자 이메일
          title: title, // 게시글 제목
          content: content, // 게시글 내용
          createdDT: formatDate(new Date()), // 생성 날짜
          updateDT: formatDate(new Date()), // 수정 날짜
        });

        // 트랜잭션을 통해 seq 값 증가시킨다
        transaction.update(firebaseSeqDoc, { seq: increment(1) });
        console.log("boardCreate 성공");
      });
    } catch (error) {
      console.error("boardCreate 실패 : ", error);
      alert("게시글 업로드에 실패했습니다.");
    }
  } else {
    alert("로그인이 필요합니다.");
  }
};

export default boardCreate;
