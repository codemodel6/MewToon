import { useState } from "react";
import styled from "styled-components";
import { DropdownItem } from "../../dummy/dummy";
import Dropdown from "./Dropdown";

const DropdownWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

interface DropdownBlickProps {
  itemArr: DropdownItem[];
  urlKey: string;
  firstTitle: string;
  size: string;
}

const DropdownBlock: React.FC<DropdownBlickProps> = ({
  itemArr,
  urlKey,
  firstTitle,
  size,
}) => {
  // 프로젝트 리스트 on/off
  const [toggle, setToggle] = useState<boolean>(false);
  // 드롭다운 값
  const [value, setValue] = useState<string>(firstTitle);

  return (
    <DropdownWrapper>
      <Dropdown
        itemArr={itemArr}
        toggle={toggle}
        setToggle={setToggle}
        value={value}
        setValue={setValue}
        urlKey={urlKey}
        size={size}
      />
    </DropdownWrapper>
  );
};

export default DropdownBlock;
