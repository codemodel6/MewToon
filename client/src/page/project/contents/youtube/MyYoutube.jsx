import YouTube from "react-youtube";
import styled from "styled-components";
import { GrayColor } from "../../../../components/CSS/Color/ColorNote";

const YoutubeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  background-color: orange; // 영화 포스터 이미지로 변경합시다

  .info {
    display: flex;
    flex-direction: column;
    padding-top: 80px;
    padding-left: 100px;
    padding-right: 100px;
    background-color: orangered;
    width: 50%;
    height: 100%;
    color: white;

    .title {
      font-size: 60px;
      text-shadow: 5px 5px 5px ${GrayColor.Gray100};
    }

    .sub {
      font-size: 30px;
      text-shadow: 5px 5px 5px ${GrayColor.Gray100};
      margin-bottom: 30px;
    }

    textarea {
      background-color: transparent;
      font-size: 23px;
      color: white;
    }
  }

  .youtubeDiv {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 100%;
    background-color: skyblue;
  }
`;

const textContents = `안녕하세요 이 영화를 소개해볼게요 이 영화는 말이죠 계속 말을 이어나가 볼게요 어디어디`;

const MyYoutube = () => {
  return (
    <YoutubeWrapper>
      <div className="info">
        <p className="title">제목</p>
        <p className="sub">서브 타이틀 입니다</p>
        <textarea value={textContents}></textarea>
      </div>
      <div className="youtubeDiv">
        <YouTube
          videoId="https://www.youtube.com/watch?v=1KsgnZ9p1pI"
          opts={{
            width: "800px",
            height: "450px",
            playerVars: {
              autoplay: 1, //자동 재생 ㅇ
              modestbranding: 1, // 컨트롤 바에 youtube 로고를 표시하지 않음
              loop: 1, //반복 재생
            },
          }}
        />
      </div>
    </YoutubeWrapper>
  );
};

export default MyYoutube;
