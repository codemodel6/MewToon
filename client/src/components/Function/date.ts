interface FormDataProps {
  (date: Date): string;
}
/** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
- 함수 기능 : 글쓰기 모달을 키고 끄는 함수
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
export const formatDate: FormDataProps = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // 월은 0부터 시작하므로 +1
  const day = String(date.getDate()).padStart(2, "0"); // 일은 두 자리로 맞춤
  return `${year}-${month}-${day}`;
};
