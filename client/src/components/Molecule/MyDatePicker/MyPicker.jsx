/** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
- 데이트피커 컴포넌트
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/

import { ko } from "date-fns/esm/locale";
import { forwardRef, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./MyPicker.css";

const MyPicker = ({ setMyDate, type }) => {
  // 1년전 날짜
  const today = new Date();
  const ago = new Date(today.setFullYear(today.getFullYear() - 1));
  // 현재 날짜 state
  const [startDate, setStartDate] = useState(ago);
  // 1년전 날짜 state
  const [endDate, setEndDate] = useState(new Date());

  const handleDate = (date) => {
    if (type === "S") {
      setStartDate(date);
    } else if (type === "E") {
      setEndDate(date);
    }
  };

  useEffect(() => {
    if (type === "S") {
      let yearKey = startDate.getFullYear();
      let monthKey = startDate.getMonth() + 1;
      let dayKey = startDate.getDate();

      // 10보다 작을 경우 0을 붙여준다
      if (Number(monthKey) < 10) monthKey = `0${String(monthKey)}`;
      if (Number(dayKey < 10)) dayKey = `0${String(dayKey)}`;

      let dateKey = `${yearKey}_${monthKey}_${dayKey}_00-00-00`;
      setMyDate(dateKey);
    } else if (type === "E") {
      let yearKey = endDate.getFullYear();
      let monthKey = endDate.getMonth() + 1;
      let dayKey = endDate.getDate();

      // 10보다 작을 경우 0을 붙여준다
      if (Number(monthKey) < 10) monthKey = `0${String(monthKey)}`;
      if (Number(dayKey < 10)) dayKey = `0${String(dayKey)}`;

      let dateKey = `${yearKey}_${monthKey}_${dayKey}_99-99-99`;
      setMyDate(dateKey);
    }
    // 2023_12_22_17-16-36
  }, [startDate, endDate]);

  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <button className="example-custom-input" onClick={onClick} ref={ref}>
      {value}
    </button>
  ));

  return (
    <div>
      <DatePicker
        locale={ko}
        selected={type === "S" ? startDate : endDate}
        onChange={(date) => handleDate(date)}
        dateFormat="yyyy-MM-dd"
        shouldCloseOnSelect // 날짜를 선택하면 datepicker가 자동으로 닫힘
        customInput={<ExampleCustomInput />}
      />
    </div>
  );
};

export default MyPicker;
