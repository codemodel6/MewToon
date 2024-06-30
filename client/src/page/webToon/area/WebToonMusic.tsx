import styled from "styled-components";
import { centerColumn } from "../../../components/CSS/Global/GlobalDisplay";
import pause from "../../../components/CSS/image/MusicImg/pause.png";
import play from "../../../components/CSS/image/MusicImg/play.png";

const WebToonMusicList = styled.div`
  display: flex;
  border-bottom: 1px solid black;
  width: 100%;
  height: 75px;

  .episode-area {
    ${centerColumn}
    width: 10%;
    height: 100%;
    font-weight: bold;
  }

  .music-area {
    width: 80%;
    height: 100%;
  }

  .on-off-area {
    ${centerColumn}
    width: 10%;
    height: 100%;

    button {
      background-color: transparent;
      width: 30px;
      height: 30px;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }
`;

const WebToonMusic = () => {
  return (
    <WebToonMusicList>
      <div className="episode-area">1화</div>
      <div className="music-area"></div>
      <div className="on-off-area">
        <button>
          <img src={play} alt="on/off" />
        </button>
      </div>
    </WebToonMusicList>
  );
};

export default WebToonMusic;
