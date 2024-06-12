import netflix from "../../../components/CSS/image/ProjectImg/netflix.jpg";
import painting from "../../../components/CSS/image/ProjectImg/painting.jpg";
import report from "../../../components/CSS/image/ProjectImg/report.jpg";
import recod from "../../../components/CSS/image/ProjectImg/recod.jpg";

export interface ProjetInterface {
  mainImage: any;
  title: string;
  sub: string;
  gitURL: string;
  vlgURL: string;
  contents: string;
}

export interface IntroInterface {
  [key: string]: ProjetInterface;
}

export const introObj: IntroInterface = {
  musicBox: {
    mainImage: recod,
    title: "Music Box",
    sub: "음악을 실행해주는 플레이어 입니다.",
    gitURL:
      "https://github.com/codemodel6/OracleDictionary/tree/main/client/src/image",
    vlgURL:
      "https://github.com/codemodel6/OracleDictionary/tree/main/client/src/image",
    contents:
      "원하는 음악을 넣고, 실행하고, 랜덤한 음악을 들을 수 있는 뮤직 플레이어 입니다.\n\n오디오의 Type에 대해 알 수 있었습니다",
  },

  drawing: {
    mainImage: painting,
    title: "그림판",
    sub: "그림을 그릴 수 있는 공간입니다.",
    gitURL:
      "https://github.com/codemodel6/OracleDictionary/tree/main/client/src/image",
    vlgURL:
      "https://github.com/codemodel6/OracleDictionary/tree/main/client/src/image",
    contents:
      "자유롭게 그림을 그릴 수 있는 그림판입니다. 색깔 변경이 가능하며 저장 시 배경화면이 없는 그림을 저장할 수 있습니다.\n\n색상을 변경할 때 평소 어렵게 느꼈던 useRef에 대해 많이 공부하고 알게 되었습니다.",
  },

  youtube: {
    mainImage: netflix,
    title: "넷플릭스",
    sub: "넷플릭스 미리보기 및 소개 홈페이지",
    gitURL:
      "https://github.com/codemodel6/OracleDictionary/tree/main/client/src/image",
    vlgURL:
      "https://github.com/codemodel6/OracleDictionary/tree/main/client/src/image",
    contents:
      "유튜브 미리보기 영상을 통해 넷플릭스 영화 소개를 볼 수 있습니다.",
  },

  report: {
    mainImage: report,
    title: "주간보고서",
    sub: "간편하게 작성할 수 있는 보고서 폼",
    gitURL:
      "https://github.com/codemodel6/OracleDictionary/tree/main/client/src/image",
    vlgURL:
      "https://github.com/codemodel6/OracleDictionary/tree/main/client/src/image",
    contents:
      "빠르고 간편하게 주간보고서를 작성할 수 있는 페이지 입니다.\n\n작성을 통해 완성본을 얻을 수 있으면 전체 복사를 눌러 보고서를 복사 할 수 있습니다.",
  },
};
