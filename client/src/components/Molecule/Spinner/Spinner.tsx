import { Triangle } from "react-loader-spinner";
import styled from "styled-components";
import {
  BlackColor,
  FontSize,
  MainColor,
  SubColor,
} from "../../CSS/Color/ColorNote";
import { centerColumn } from "../../CSS/Global/GlobalDisplay";

export const SpinnerContainer = styled.div`
  ${centerColumn}
  width: 100%;
  height: 100%;
  color: ${MainColor.Main100};
  font-size: 40px;
`;

const Spinner = () => {
  return (
    <SpinnerContainer>
      <Triangle
        height="400"
        width="400"
        color={MainColor.Main100}
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
      Loading..
    </SpinnerContainer>
  );
};

export default Spinner;
