import styled from "styled-components";
import { useState } from "react";
import Dropdown from "./Dropdown";

const DropdownWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const itemArr = [
  { name: "musicBox", url: "" },
  { name: "drawing", url: "" },
  { name: "youtube", url: "" },
  { name: "report", url: "" },
];

const DropdownBlock = () => {
  // 프로젝트 리스트 on/off
  const [toggle, setToggle] = useState<boolean>(false);
  // 드롭다운 값
  const [value, setValue] = useState<string>("프로젝트 리스트 ▼");

  return (
    <DropdownWrapper>
      <Dropdown
        itemArr={itemArr}
        toggle={toggle}
        setToggle={setToggle}
        value={value}
        setValue={setValue}
        urlKey={"name"}
      />
    </DropdownWrapper>
  );
};

export default DropdownBlock;
