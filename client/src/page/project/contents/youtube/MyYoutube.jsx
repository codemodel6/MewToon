import YouTube from "react-youtube";
import styled from "styled-components";
import { GrayColor } from "../../../../components/CSS/Color/ColorNote";
import movie from "../../../../components/CSS/image/ProjectImg/movie.png";

const YoutubeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  background-image: url(${movie}); // 영화 포스터 이미지로 변경합시다
  background-size: contain; // 이미지를 배경에 꽉 채움
  background-position: center; // 배경의 초기값을 가운데로
  background-repeat: no-repeat; // 배경보다 이미지가 작아도 반복하지 않음

  .info {
    display: flex;
    flex-direction: column;
    padding-top: 80px;
    padding-left: 100px;
    padding-right: 100px;
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
  }
`;

const textContents = `은둔형 외톨이 고등학생 현수가 가족을 잃고 이사 간 아파트에서 겪는 기괴하고도 충격적인 이야기`;

const MyYoutube = () => {
  return (
    <YoutubeWrapper>
      <div className="info">
        <p className="title">스위트홈</p>
        <p className="sub">죽어버리거나, 괴물로 살아남거나</p>
        <textarea value={textContents}></textarea>
      </div>
      <div className="youtubeDiv">
        <YouTube
          videoId="https://www.youtube.com/watch?v=AOiZ-IekJg0"
          opts={{
            width: "800px",
            height: "450px",
            playerVars: {
              autoplay: 1, //자동 재생 O
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
