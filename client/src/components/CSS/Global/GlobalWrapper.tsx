/** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
- 가장 기본적인 CSS
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/

import styled from "styled-components";
import { centerColumn } from "./GlobalDisplay";

export const GlobalWrapper = styled.div`
  ${centerColumn}
  width: 100%;
  height: 100vh;
  background-color: green;
`;
