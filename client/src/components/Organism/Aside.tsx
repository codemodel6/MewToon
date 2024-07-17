/** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
- 어사이드 컴포넌트
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/

import styled from "styled-components";
import { centerColumn } from "../CSS/Global/GlobalDisplay";

const MyAside = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 15%;
  height: 100%;
  background-color: orange;

  ul {
    ${centerColumn}
    width: 100%;
    margin: 0;
    background-color: green;

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
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </MyAside>
  );
};

export default Aside;
