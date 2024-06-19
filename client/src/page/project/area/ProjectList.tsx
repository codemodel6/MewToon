import styled from "styled-components";
import { useState } from "react";
import Dropdown from "../../../components/Molecule/Dropdown/Dropdown";

const ProjectListWrapper = styled.div<{ $toggle: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  margin-top: 15px;
  margin-bottom: 30px;
`;

const itemArr = [
  { name: "musicBox", url: "" },
  { name: "drawing", url: "" },
  { name: "youtube", url: "" },
  { name: "report", url: "" },
];

const ProjectList = () => {
  // 프로젝트 리스트 on/off
  const [toggle, setToggle] = useState<boolean>(false);
  // 드롭다운 값
  const [value, setValue] = useState<string>("프로젝트 리스트 ▼");

  return (
    <ProjectListWrapper $toggle={toggle}>
      <Dropdown
        itemArr={itemArr}
        toggle={toggle}
        setToggle={setToggle}
        value={value}
        setValue={setValue}
      />
    </ProjectListWrapper>
  );
};

export default ProjectList;
