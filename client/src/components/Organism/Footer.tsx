/** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
- 푸터 컴포넌트
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/

import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { BlackColor, WhiteColor } from "../CSS/Color/ColorNote";
import { centerColumn, centerRow } from "../CSS/Global/GlobalDisplay";
import facebook from "../CSS/image/FooterImg/facebook.png";
import github from "../CSS/image/FooterImg/github.png";
import instagram from "../CSS/image/FooterImg/instagram.png";
import twitter from "../CSS/image/FooterImg/twitter.png";
import { handleLink } from "../Function/scroll";

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
    margin-bottom: 10px;

    img {
      width: 40px;
      height: 100%;
      border-radius: 50%;
      margin-right: 10px;
      cursor: pointer;
      background-color: white;
      object-fit: cover;
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
        <img
          src={github}
          alt="깃허브"
          onClick={() => handleLink("https://github.com/codemodel6")}
        />
        <img
          src={facebook}
          alt="페이스북"
          onClick={() => handleLink("https://www.facebook.com/")}
        />
        <img
          src={instagram}
          alt="인스타그램"
          onClick={() => handleLink("https://www.instagram.com/")}
        />
        <img
          src={twitter}
          alt="트위터"
          onClick={() => handleLink("https://x.com/?lang=ko&mx=2")}
        />
      </div>
      <div className="infoDiv">상호: (주)코드랜드 | 대표자명: 김경배</div>
      <div className="infoDiv">
        연락처: 010-6625-0937 | 이메일: codemodel6@gmail.com | 제작: React,
        Typescript
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
