import styled from "styled-components";
import { WhiteColor } from "../Color/ColorNote";

interface TitleProps {
  imageUrl: string;
  mainText: string;
  subText: string;
}

const GlobalTitleWrapper = styled.div`
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
`;

const GlobalTitle: React.FC<TitleProps> = ({ imageUrl, mainText, subText }) => {
  return (
    <GlobalTitleWrapper style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="textDiv">
        <p>{mainText}</p>
        <h1>{subText}</h1>
      </div>
    </GlobalTitleWrapper>
  );
};

export default GlobalTitle;
