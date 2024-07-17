import React, { useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { FontSize, GrayColor, MainColor } from "../../CSS/Color/ColorNote";
import { centerRow } from "../../CSS/Global/GlobalDisplay";
import { DropdownItem } from "../../dummy/dummy";

const DropdownDiv = styled.div`
  height: 100%;
  width: 100%;
  display: inline-flex;
  flex-direction: column;
  position: relative;
`;

const SelectButton = styled.button`
  width: 100%;
  height: 100%;
  background-color: ${MainColor.Main100};
  color: white;
  border: none;
  text-align: center;
  z-index: 2;
  cursor: pointer;
  font-size: ${FontSize.medium};
  font-weight: bold;
`;

const DropdownContainer = styled.div<{ $size: string }>`
  width: 100%;
  background-color: white;
  border: 1px solid ${GrayColor.Gray500};
  border-top: none;
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
      width: ${(props) => (props.$size === "max" ? "100%" : "33.33%")};
      list-style: none;
      padding: 3px 0;
      cursor: pointer;

      &:hover {
        background-color: ${GrayColor.Gray500};
      }
    }
  }
`;

interface DropdownProps {
  itemArr: DropdownItem[];
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  urlKey: string;
  size: string;
}

interface DropdownFunction {
  (props: string): void;
}

const Dropdown: React.FC<DropdownProps> = ({
  itemArr,
  toggle,
  setToggle,
  value,
  setValue,
  urlKey,
  size,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryString = new URLSearchParams(location.search);

  /** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  - 함수 기능 : 토글을 선택한 값으로 변경 후 주소 변경
  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
  const handleDropdown: DropdownFunction = (settingItem) => {
    setToggle(!toggle);
    setValue(settingItem);

    // 페이지 설정
    queryString.set(urlKey, settingItem);
    navigate(`${location.pathname}?${queryString.toString()}`);
  };

  return (
    <DropdownDiv>
      <SelectButton type="button" onClick={() => setToggle(!toggle)}>
        {value}
      </SelectButton>
      <DropdownContainer $size={size} className={toggle ? "open" : "close"}>
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
