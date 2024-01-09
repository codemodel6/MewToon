import styled from "styled-components";
import { MainColor, FontSize, BlackColor } from "../CSS/Color/ColorNote";
import { useNavigate, useLocation } from "react-router-dom";
import * as moment from "moment";

const MyHeader = styled.header`
  display: flex;
  flex-direction: row;
  background-color: ${BlackColor.Black100};
  height: 60px;
  border-bottom: 3px solid ${MainColor.Main100};
  width: 100%;
  position: fixed;
  z-index: 999;

  .ImageDiv {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 13%;
    height: 100%;
    /* background-color: blue; */

    img {
      width: 50px;
      height: 50px;
      background-color: white;
      border-radius: 50%;
      cursor: pointer;
    }
  }

  .timeDiv {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    width: 7%;
    height: 100%;
    /* background-color: orange; */
    padding-right: 20px;
  }

  .MenuDiv {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 80%;
    height: 100%;

    .MenuButton {
      background-color: ${BlackColor.Black100};
      width: 300px;
      height: 40px;
      font-size: ${FontSize.large};
      color: ${MainColor.Main100};
      border-radius: 10px;
      font-weight: bold;
    }
    & .here {
      background-color: ${MainColor.Main100};
      color: white;
    }
  }
`;

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <MyHeader>
      <div className="ImageDiv">
        {/* <img
          src={Logo}
          alt="로고"
          onClick={() => {
            navigate("/home");
          }}
        /> */}
      </div>

      <div className="MenuDiv">
        {/* <button
          className={`MenuButton ${createPage ? "here" : ""}`}
          onClick={() => {
            navigate("/create");
          }}
        >
          Create
        </button>
        <button
          className={`MenuButton ${influencePage ? "here" : ""}`}
          onClick={() => {
            navigate("/influence");
          }}
        >
          Sensitivity Analysis
        </button>
        <button
          className={`MenuButton ${optimalPage ? "here" : ""}`}
          onClick={() => {
            navigate("/optimal");
          }}
        >
          Optimal Parameter Estimation
        </button>
        <button
          className={`MenuButton ${simulationPage ? "here" : ""}`}
          onClick={() => {
            navigate("/simulation");
          }}
        >
          Simulation
        </button>
        <button
          className={`MenuButton ${historyPage ? "here" : ""}`}
          onClick={() => {
            navigate("/history?page=1");
          }}
        >
          History
        </button>
      </div>
      <div className="timeDiv"> */}
      </div>
    </MyHeader>
  );
};

export default Header;
