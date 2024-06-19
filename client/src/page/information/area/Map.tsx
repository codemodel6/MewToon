/** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
- /map 컴포넌트
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/

import { useEffect } from "react";
import styled from "styled-components";
import { MainColor } from "../../../components/CSS/Color/ColorNote";
import {
  aroundRow,
  centerColumn,
} from "../../../components/CSS/Global/GlobalDisplay";
import { GlobalWrapper } from "../../../components/CSS/Global/GlobalWrapper";
import car from "../../components/CSS/image/car.jpg";
import OrTab from "../../../components/Organism/ScrollTab";
import GlobalTitle from "../../../components/Organism/GlobalTitle";
import { mapTabArr } from "../../../components/dummy/TabArr";
import InfoQuestion from "./InfoQuestion";

const MapWrapper = styled.div`
  ${centerColumn}
  width: 100%;
  height: 90vh;

  .mapDiv {
    width: 50%;
    height: 80%;
    background-color: white;
    border: 2px solid ${MainColor.Main100};
  }

  .mapToolDiv {
    ${aroundRow}
    background-color: royalblue;
    width: 50%;
    height: 10%;

    .mapMove {
      width: 200px;
      height: 50%;
      background-color: white;
      border: 1px solid ${MainColor.Main200};
    }
  }
`;

declare global {
  interface Window {
    kakao: any;
  }
}

const Map = () => {
  // useEffect(() => {
  //  let mapContainer = document.getElementById("map"), // 지도를 표시할 div
  //   mapOption = {
  //    center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
  //    level: 3, // 지도의 확대 레벨
  //   };

  //  let map = new window.kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

  //  const panTo = () => {
  //   // 이동할 위도 경도 위치를 생성합니다
  //   var moveLatLon = new window.kakao.maps.LatLng(33.45058, 126.574942);

  //   // 지도 중심을 부드럽게 이동시킵니다
  //   // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
  //   map.panTo(moveLatLon);
  //  };
  // }, []);

  return (
    <MapWrapper>
      <div className="mapDiv" id="map"></div>
      <div className="mapToolDiv"></div>
    </MapWrapper>
  );
};

export default Map;
