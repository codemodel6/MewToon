/** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
- 푸터 컴포넌트
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/

import styled from "styled-components";
import { BlackColor, WhiteColor } from "../CSS/Color/ColorNote";
import { useLocation } from "react-router-dom";
import { centerColumn, centerRow } from "../CSS/Global/GlobalDisplay";
import car from "../CSS/image/car.jpg";

const MyFooter = styled.footer`
  ${centerColumn}
  background-color: ${BlackColor.Black100};
  width: 100%;
  height: 180px;
  color: ${WhiteColor.White100};

  .snsDiv {
    ${centerRow}
    width: 50%;
    height: 40px;
    /* background-color: orange; */
    margin-bottom: 10px;

    img {
      width: 40px;
      height: 100%;
      border-radius: 10px;
      margin-right: 10px;
      cursor: pointer;
    }
  }

  .infoDiv {
    ${centerRow}
    width: 50%;
    height: 25px;

    .bold {
      font-weight: bold;
    }
  }
`;

const Footer = () => {
  const location = useLocation();
  // 인트로 화면일 경우 보여주지 않음
  if (location.pathname === "/") {
    return null;
  }

  return (
    <MyFooter>
      <div className="snsDiv">
        <img src={car}></img>
        <img src={car}></img>
        <img src={car}></img>
        <img src={car}></img>
      </div>
      <div className="infoDiv">상호: (주)코드링딩딩 | 대표자명: 김하눌</div>
      <div className="infoDiv">
        연락처: 010-1234-5678 | 이메일: asdf@gmail.com | 제작: React, Typescript
      </div>
      <br />
      <div className="infoDiv">
        이용약관&nbsp;&nbsp;
        <div className="bold">개인정보처리방침</div>
      </div>
    </MyFooter>
  );
};

export default Footer;
