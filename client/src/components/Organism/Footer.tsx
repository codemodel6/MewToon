import styled from "styled-components";
import { BlackColor, WhiteColor } from "../CSS/Color/ColorNote";
import { useLocation } from "react-router-dom";

const MyFooter = styled.footer`
  background-color: ${BlackColor.Black100};
  width: 100%;
  height: 120px;
  color: ${WhiteColor.White100};
`;

const Footer = () => {
  const location = useLocation();
  // 인트로 화면일 경우 보여주지 않음
  if (location.pathname === "/") {
    return null;
  }

  return <MyFooter>나의 푸터 입니다</MyFooter>;
};

export default Footer;
