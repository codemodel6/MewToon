// /** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// - 검색바 컴포넌트
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/

// import styled from "styled-components";
// import axios from "axios";
// import search from "../../../image/search.png";
// import { BlackColor, MainColor, SubColor } from "../../CSS/Color/ColorNote";

// const SearchBarDiv = styled.div`
//   margin-top: 20px;
//   display: flex;
//   text-align: center;
//   justify-content: center;

//   .aSearchBarDiv {
//     width: 500px;
//     border: 3px solid ${MainColor.Main100};
//     position: relative;
//     display: flex;
//     align-items: center;
//     border-radius: 20px;
//     padding-right: 9px;

//     .searchBarInput {
//       width: 100%;
//       border-radius: 20px;
//       padding: 10px;
//       height: 40px;
//       border: none;
//       background-color: ${BlackColor.Black100};
//       color: white;

//       &:focus-within {
//         outline: none;
//       }
//     }

//     .searchImage {
//       width: 20px;
//       height: 20px;
//       cursor: pointer;
//     }
//     &:focus-within {
//       border: 3px solid ${SubColor.Sub100};
//     }
//   }

//   .listButton {
//     /* background-color: blue; */
//   }
// `;
// const SearchBar = ({
//   setBoardList,
//   setTotalPage,
//   page,
//   searchValue,
//   setSearchValue,
//   pageData,
// }) => {
//   /** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
//   - 훅 기능 : 페이지가 변할 때 마다 페이지 정보를 가져오는 함수
//   - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/

//   const onKeyDown = (e) => {
//     if (e.key === "Enter") {
//       handlePage();
//     }
//   };

//   const handlePage = async () => {
//     pageData.Title = searchValue;
//     const dbList = await axios.post(`${URL}/history/boardList`, pageData);
//     const myDbList = dbList.data.Result_List.filter((it) => it !== "None");

//     setBoardList([...myDbList]);
//     setTotalPage(dbList.data.TotalPageCount);

//     // 화면 가장 상단으로 이동
//     window.scrollTo(0, 0);
//   };

//   return (
//     <SearchBarDiv>
//       <div className="aSearchBarDiv">
//         <input
//           className="searchBarInput"
//           placeholder={"제목으로 검색해주세요"}
//           value={searchValue}
//           onChange={(e) => {
//             setSearchValue(e.target.value);
//           }}
//           onKeyDown={onKeyDown}
//         />
//         <img
//           className="searchImage"
//           src={search}
//           alt="돋보기"
//           onClick={handlePage}
//         ></img>
//       </div>
//     </SearchBarDiv>
//   );
// };

// export default SearchBar;

const SearchBar = () => {
  return <div></div>;
};

export default SearchBar;
