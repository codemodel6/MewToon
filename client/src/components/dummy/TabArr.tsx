interface TabTitleInter {
  title: string;
  move: number;
}

// skill 탭
export const skillTabArr: TabTitleInter[] = [
  { title: "프로젝트", move: 700 },
  { title: "소개", move: 1500 },
];
// Map 탭
export const mapTabArr: TabTitleInter[] = [
  { title: "정보", move: 700 },
  { title: "오시는 길", move: 1500 },
];
// Board 탭
export const boardTabArr: TabTitleInter[] = [
  { title: "자유게시판", move: 700 },
  { title: "정보게시판", move: 1500 },
  { title: "후기게시판", move: 1500 },
];
