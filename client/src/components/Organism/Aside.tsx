/** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
- 어사이드 컴포넌트
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/

import styled from "styled-components";
import { FontSize, MainColor } from "../CSS/Color/ColorNote";

const MyAside = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 3px solid ${MainColor.Main100};
  border-right: 3px solid ${MainColor.Main100};
  border-bottom: 3px solid ${MainColor.Main100};
  padding-top: 20px;
  height: 750px;
  width: 10%;
  color: white;
  font-size: ${FontSize.medium};
  font-weight: bold;

  ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 5px;
    margin: 0;

    li {
      width: 100%;
      text-align: center;
    }
  }
`;

const Aside = () => {
  return (
    <MyAside>
      <ul>
        <li></li>
      </ul>
    </MyAside>
  );
};

export default Aside;
