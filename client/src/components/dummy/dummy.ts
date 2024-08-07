interface ScrollArrInterface {
  title: string;
  move: number;
}

interface MoveArrInterface {
  title: string;
  moveURL: string;
}

export interface DropdownItem {
  name: string;
}

// skill 탭
export const skillTabArr: ScrollArrInterface[] = [
  { title: "프로젝트", move: 600 },
  { title: "소개", move: 1500 },
];
// Map 탭
export const mapTabArr: ScrollArrInterface[] = [
  { title: "지도", move: 600 },
  { title: "문의사항", move: 1450 },
];
// Board 탭
export const boardTabArr: ScrollArrInterface[] = [
  { title: "자유게시판", move: 600 },
  { title: "인기게시글", move: 1600 },
];
// Board 탭
export const webToonArr: MoveArrInterface[] = [
  { title: "월", moveURL: "MON" },
  { title: "화", moveURL: "TUE" },
  { title: "수", moveURL: "WED" },
  { title: "목", moveURL: "THU" },
  { title: "금", moveURL: "FRI" },
  { title: "토", moveURL: "SAT" },
  { title: "일", moveURL: "SUN" },
];

export const itemArr: DropdownItem[] = [
  { name: "musicBox" },
  { name: "drawing" },
  { name: "youtube" },
  { name: "report" },
];

export const platformArr: DropdownItem[] = [
  { name: "NAVER" },
  { name: "KAKAO" },
  { name: "KAKAO_PAGE" },
];
