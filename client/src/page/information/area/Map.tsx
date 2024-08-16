/** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
- /map 컴포넌트
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/

import styled from "styled-components";
import { MainColor } from "../../../components/CSS/Color/ColorNote";
import {
  aroundRow,
  centerColumn,
} from "../../../components/CSS/Global/GlobalDisplay";
import { useEffect, useRef } from "react";
import { GlobalButton } from "../../../components/CSS/Global/GlobalItem";

const MapWrapper = styled.div`
  ${centerColumn}
  width: 100%;
  height: 800px;

  .mapDiv {
    width: 50%;
    height: 80%;
    background-color: white;
    border: 2px solid ${MainColor.Main100};
  }

  .mapToolDiv {
    ${aroundRow}
    width: 50%;
    height: 10%;
    border: 2px solid ${MainColor.Main100};
  }
`;

declare global {
  interface Window {
    kakao: any;
  }
  const kakao: any;
}

const Map = () => {
  const mapRef = useRef<any | null>(null);

  useEffect(() => {
    const mapContainer = document.getElementById("map"); // 지도를 표시할 div
    const mapOption = {
      center: new window.kakao.maps.LatLng(
        37.26645115502854,
        127.00398815725785
      ), // 지도의 중심좌표
      level: 3, // 지도의 확대 레벨
    };

    // map 객체를 useRef에 저장
    mapRef.current = new window.kakao.maps.Map(mapContainer, mapOption);

    // 마커를 표시할 위치와 title 객체 배열입니다
    var positions = [
      {
        title: "본사",
        latlng: new kakao.maps.LatLng(37.26645115502854, 127.00398815725785),
      },
      {
        title: "지사",
        latlng: new kakao.maps.LatLng(36.980948694022736, 126.9377708794878),
      },
    ];

    // positions 배열을 순회하면서 마커를 생성하고 지도에 표시
    positions.forEach((position) => {
      // 마커를 생성합니다
      const marker = new kakao.maps.Marker({
        position: position.latlng, // 마커를 표시할 위치
        title: position.title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
      });

      // 마커를 지도에 표시합니다
      marker.setMap(mapRef.current);
    });
  }, []);

  const panTo = (latitude: number, longitude: number) => {
    const moveLatLon = new window.kakao.maps.LatLng(latitude, longitude);

    mapRef.current.panTo(moveLatLon);
  };

  return (
    <MapWrapper>
      <div className="mapDiv" id="map"></div>
      <div className="mapToolDiv">
        <GlobalButton
          width="30%"
          height="50%"
          onClick={() => panTo(37.26645115502854, 127.00398815725785)}
        >
          본사
        </GlobalButton>
        <GlobalButton
          width="30%"
          height="50%"
          onClick={() => panTo(36.980948694022736, 126.9377708794878)}
        >
          지사
        </GlobalButton>
      </div>
    </MapWrapper>
  );
};

export default Map;
