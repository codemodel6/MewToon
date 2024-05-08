import styled from "styled-components";
import { GrayColor } from "../../../components/CSS/Color/ColorNote";
import { centerRow } from "../../../components/CSS/Global/GlobalDisplay";
import { useState } from "react";
import Dropdown from "../../../components/Molecule/Dropdown/Dropdown";

const ProjectListWrapper = styled.div<{ toggle: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
`;

interface ToggleFunction {
  (): void;
}

const itemArr = [
  { name: "몰루", url: "" },
  { name: "KBCompany", url: "" },
  { name: "GyulBox", url: "" },
  { name: "Indiego", url: "" },
  { name: "Stackoverflow", url: "" },
];

const ProjectList = () => {
  // 프로젝트 리스트 on/off
  const [toggle, setToggle] = useState<boolean>(false);

  /** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  - 함수 기능 : 프로젝트 리스트를 열고 닫는 함수
  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
  const handleToggle: ToggleFunction = () => {
    setToggle(!toggle);
  };

  return (
    <ProjectListWrapper toggle={toggle}>
      <Dropdown itemArr={itemArr} />
    </ProjectListWrapper>
  );
};

export default ProjectList;
