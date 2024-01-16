// /** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// - 페이지네이션 컴포넌트
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/

// import styled from "styled-components";
// import { useEffect, useState } from "react";
// import left from "../../../image/left.png";
// import right from "../../../image/right.png";
// import { Link, useNavigate } from "react-router-dom";
// import { BlackColor, FontSize, MainColor } from "../../CSS/Color/ColorNote";

// const PageNationWrapper = styled.div`
//   margin-top: 20px;
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   justify-content: center;
//   color: white;
//   height: 40px;

//   ul {
//     display: flex;
//     flex-direction: row;
//     align-items: center;
//     /* justify-content: space-between; */
//     height: 100%;
//     font-size: ${FontSize.xlarge};
//     margin: 0px;
//     padding: 0px;
//     margin-right: 10px;
//     margin-left: 10px;

//     li {
//       display: flex;
//       flex-direction: column;
//       justify-content: center;
//       align-items: center;
//       width: 42px;
//       height: 100%;
//       font-weight: bold;

//       a {
//         color: white;
//         border: none;
//         padding: 0;
//         text-decoration-line: none;
//       }

//       &.on a {
//         color: ${MainColor.Main200};
//       }
//     }
//   }

//   button {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     width: 30px;
//     height: 100%;
//     background-color: ${BlackColor.Black100};

//     img {
//       width: 70%;
//       height: 50%;
//       cursor: pointer;
//     }
//   }
// `;

// const PageNation = ({ location, totalPage, page }) => {
//   // 페이지네이션을 진행 할 state
//   const [pageNationArr, setPageNationArr] = useState([]);

//   // 앞,뒤로 가기 버튼을 위해 저장할 state
//   const [saveArr, setSaveArr] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     // 값이 안 온 상태를 막는다
//     if (totalPage === "") return;
//     // 페이지가 0 일경우 예외처리
//     if (totalPage === 0) {
//       setSaveArr([]);
//       setPageNationArr([]);
//     } else {
//       // 페이지 전채 개수를 이용해 새로운 배열을 만든다
//       const totalArr = [...Array(totalPage)].map((it, idx) => idx + 1);
//       const myArr = [];
//       for (let i = 0; i < totalArr.length; i += 5) {
//         const cutArr = totalArr.slice(i, i + 5);
//         myArr.push(cutArr);
//       }

//       // 만들어놓은 배열 저장
//       setSaveArr([...myArr]);

//       // 5로 나누었을 때의 값으로 배열을 찾는다. 나머지가 0이라면 -1을 해주어 올바른 값을 찾는다.
//       let cutNum = Math.floor(page / 5);
//       if (page % 5 === 0) cutNum -= 1;
//       setPageNationArr([...myArr[cutNum]]);
//     }
//   }, [page, totalPage]);

//   /** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
//   - 함수 기능 : 뒤로가기 버튼 눌렀을 때 동작하는 함수
//   - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
//   const handlePreviousPage = () => {
//     let cutNum = Math.floor(page / 5);
//     if (page % 5 === 0) cutNum -= 1;
//     setPageNationArr([...saveArr[cutNum - 1]]);
//     navigate(`${location.pathname}?page=${saveArr[cutNum - 1][0]}`);
//   };

//   /** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
//   - 함수 기능 : 앞으로가기 버튼 눌렀을 때 동작하는 함수
//   - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
//   const handleNextPage = () => {
//     let cutNum = Math.floor(page / 5);
//     if (page % 5 === 0) cutNum -= 1;
//     setPageNationArr([...saveArr[cutNum + 1]]);
//     navigate(`${location.pathname}?page=${saveArr[cutNum + 1][0]}`);
//   };

//   return (
//     <PageNationWrapper>
//       <button
//         onClick={handlePreviousPage}
//         disabled={pageNationArr.every(
//           (value, index) => value === saveArr[0][index]
//         )}
//       >
//         <img src={left} alt="왼쪽 화살표" />
//       </button>
//       <ul>
//         {pageNationArr.map((it, idx) => (
//           <li key={idx} className={Number(page) === it ? "on" : ""}>
//             <Link to={`${location.pathname}?page=${it}`}>{it}</Link>
//           </li>
//         ))}
//       </ul>
//       <button
//         onClick={handleNextPage}
//         disabled={pageNationArr.every(
//           (value, index) => value === saveArr[saveArr.length - 1][index]
//         )}
//       >
//         <img src={right} alt="오른쪽 화살표" />
//       </button>
//     </PageNationWrapper>
//   );
// };

// export default PageNation;

import React from "react";

const PagiNation = () => {
  return <div></div>;
};

export default PagiNation;
