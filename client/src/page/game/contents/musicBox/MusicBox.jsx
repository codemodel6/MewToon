import styled from "styled-components";
import {
  centerColumn,
  centerRow,
} from "../../../../components/CSS/Global/GlobalDisplay";
import MusicList from "./MusicList";

const MusicBoxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const MusicPlayerWrapper = styled.div`
  ${centerColumn}
  height: 100%;
  width: 80%;
  background-color: pink;
  padding-left: 350px;

  .player {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 90%;
    width: 650px;
    background-color: red; // 이미지로 변경
    padding-top: 50px;
    border-radius: 20px;

    .imgDiv {
      background-color: orange;
      width: 70%;
      height: 400px;
      margin-bottom: 30px;
    }

    .title {
      background-color: yellow;
      font-size: 30px;
      font-weight: bold;
      margin-bottom: 10px;
    }

    .author {
      background-color: green;
      font-size: 20px;
      margin-bottom: 10px;
    }

    .bar {
      background-color: blue;
      width: 70%;
      height: 30px;
      border-radius: 20px;
      margin-bottom: 10px;
    }

    .tool {
      ${centerRow}
      background-color: gray;
      width: 100%;
      height: 40px;
    }
  }
`;

const MusicBox = () => {
  return (
    <MusicBoxWrapper>
      <MusicPlayerWrapper>
        <div className="player">
          <div className="imgDiv"></div>
          <div className="title">제목입니다</div>
          <div className="author">가수입니다</div>
          <div className="bar"></div>
          <div className="tool">
            <button>dd</button>
            <button>dd</button>
          </div>
        </div>
      </MusicPlayerWrapper>
      <MusicList />
    </MusicBoxWrapper>
  );
};

export default MusicBox;
