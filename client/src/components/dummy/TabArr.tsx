interface TabTitleInter {
  title: string;
  url: string;
}

// skill 탭
export const skillTabArr: TabTitleInter[] = [
  { title: "Teacher", url: "/skill/teacher" },
  { title: "Student", url: "/skill/student" },
];
// Map 탭
export const mapTabArr: TabTitleInter[] = [
  { title: "정보", url: "/map/information" },
  { title: "오시는 길", url: "/map/map" },
];
// Board 탭
export const boardTabArr: TabTitleInter[] = [
  { title: "자유게시판", url: "/board/free" },
  { title: "정보게시판", url: "/board/information" },
  { title: "후기게시판", url: "/board/review" },
];
