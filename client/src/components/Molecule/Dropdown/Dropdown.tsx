import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { FontSize, GrayColor, MainColor } from "../../CSS/Color/ColorNote";
import { centerRow } from "../../CSS/Global/GlobalDisplay";

const DropdownDiv = styled.div`
  height: 100%;
  width: 100%;
  display: inline-flex;
  flex-direction: column;
  position: relative;
`;

const SelectButton = styled.button`
  width: 100%;
  height: 50px;
  background-color: ${MainColor.Main100};
  color: white;
  border: none;
  text-align: center;
  z-index: 2;
  cursor: pointer;
  font-size: ${FontSize.medium};
  font-weight: bold;
`;

const DropdownContainer = styled.div`
  width: 100%;
  background-color: white;
  color: ${GrayColor.Gray100};
  position: absolute;
  left: 0;
  transition: all 0.5s ease-in-out;
  font-weight: bold;

  &.open {
    top: 50px; // 위치
    opacity: 1; //투명도
    pointer-events: auto; // 보일때 막아놓은거 다시 원래대로
  }

  &.close {
    top: 0px; // 위치
    opacity: 0; //투명도
    pointer-events: none; // 안보일때 누르는거 막아놓음
  }

  > ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    > li {
      ${centerRow}
      height: 50px;
      width: 33.33%;
      list-style: none;
      padding: 3px 0;
      cursor: pointer;

      &:hover {
        background-color: ${GrayColor.Gray500};
      }
    }
  }
`;

interface PropsObj {
  name: string;
  url: string;
}

interface DropdownProps {
  itemArr: PropsObj[];
}

interface DropdownFunction {
  (props: string): void;
}

const Dropdown: React.FC<DropdownProps> = ({ itemArr }) => {
  // ON/OFF
  const [toggle, setToggle] = useState<boolean>(false); // 드롭다운 값
  const [value, setValue] = useState<string>("프로젝트 리스트 ▼");
  const [searchParams, setSearchParams] = useSearchParams(); // url의 이름을 가져온다

  const name = searchParams.get("name");
  const navigate = useNavigate();

  const handleDropdown: DropdownFunction = (props) => {
    setToggle(!toggle);
    setValue(props);
    setSearchParams({ name: props });
  };

  return (
    <DropdownDiv>
      <SelectButton type="button" onClick={() => setToggle(!toggle)}>
        {value}
      </SelectButton>
      <DropdownContainer className={toggle ? "open" : "close"}>
        <ul>
          {itemArr.map((it, idx) => (
            <li
              key={idx}
              role="presentation"
              onClick={() => {
                handleDropdown(it.name);
              }}
            >
              {it.name}
            </li>
          ))}
        </ul>
      </DropdownContainer>
    </DropdownDiv>
  );
};

export default Dropdown;
