import styled from "styled-components";
import { MainColor, WhiteColor } from "../Color/ColorNote";
import { aroundRow, centerColumn } from "./GlobalDisplay";

interface TitleProps {
  imageUrl: string;
  mainText: string;
  subText: string;
}

const GlobalTitleWrapper = styled.div`
  width: 100%;
  background-color: royalblue;
  height: 100%;

  .imgDiv {
    position: relative;
    width: 100%;
    height: 600px;
    background-size: cover; // 이미지가 배경을 다 채운다
    background-position: center; // 배경의 초기값을 가운데로
    background-repeat: no-repeat; // 배경보다 이미지가 작아도 반복하지 않음

    .textDiv {
      position: absolute;
      bottom: 10%;
      left: 100px;
      color: ${WhiteColor.White100};

      p {
        font-size: 25px;
      }

      h1 {
        font-size: 50px;
      }
    }
  }

  .tabDiv {
    ${centerColumn}
    width: 100%;
    height: 80px;
    background-color: red;
    position: sticky;
    top: 0px;

    ul {
      ${aroundRow}
      width: 80%;
      height: 100%;
      background-color: blue;

      li {
        ${centerColumn}
        width: 200px;
        height: 100%;
        font-size: 25px;
        color: ${MainColor.Main100};
        font-weight: bold;
      }
    }
  }
`;

const GlobalTitle: React.FC<TitleProps> = ({ imageUrl, mainText, subText }) => {
  return (
    <GlobalTitleWrapper>
      <div className="imgDiv" style={{ backgroundImage: `url(${imageUrl})` }}>
        <div className="textDiv">
          <p>{mainText}</p>
          <h1>{subText}</h1>
        </div>
      </div>
      <div className="tabDiv">
        <ul>
          <li>Teacher</li>
          <li>Student</li>
        </ul>
      </div>
    </GlobalTitleWrapper>
  );
};

export default GlobalTitle;
