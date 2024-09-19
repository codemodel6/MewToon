<h2>MewToon</h2>
<p>
  MewToon은 웹툰에 어울리는 노래를 추천하고 싶다는 아이디어를 통해 제작하였습니다. 웹툰의 정보는 korea-webtoon-api 에서 가져왔으며 게시판과 로그인은 firebase 통신을 이용해 제작하였습니다. 평소 많은 애니메이션을 만들어보고 싶다는 생각이 있어 모든 css 애니메이션을 직접 제작하였으며 음악, 그림, 보고서 등 일상에 유용한 기능들을 제작한 가벼운 프로젝트들을 프로젝트 페이지에 넣어서 관리하였습니다.
</p>

<br/>

<h2>메인 화면</h2>
<img alt="메인" width="500px" height="300px" src="https://private-user-images.githubusercontent.com/110915850/368646496-2c09cc0b-a307-411e-a520-abf88daafac3.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjY3MDM5MDAsIm5iZiI6MTcyNjcwMzYwMCwicGF0aCI6Ii8xMTA5MTU4NTAvMzY4NjQ2NDk2LTJjMDljYzBiLWEzMDctNDExZS1hNTIwLWFiZjg4ZGFhZmFjMy5naWY_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwOTE4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDkxOFQyMzUzMjBaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT02NTkwNDg5NGM1NjA1Mzc4MjM3ODNmNTNkMDBmN2UwZDA4MDUzNDhhNTlmYWVjZTA5ODU4MzdiOWM3ZDc2MTY4JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.u4hlECZGv5bYAb-JEUtApx-OrNE9VBA8e21KUNZdsQM">
<p>
  메인화면은 스크롤한 위치에 따라 실행되도록 제작하였습니다. 공통함수에 모든 스크롤 함수를 정리하여 많은 화면에서 재사용 할 수 있게끔 만들었습니다. 첫번째 화면은 react-carousel을 사용하였는데, 커스텀이 어렵다는 단점이 있었습니다. 그래서 3번째 화면에 웹툰을 누르면 이동하는 캐러셀은 transtion을 이용해 직접 제작해보았습니다.
</p>

<br/>

<h2>로그인</h2>
<img alt="로그인" width="500px" height="300px" src="https://private-user-images.githubusercontent.com/110915850/368643103-0ebdbce9-1df0-493c-8fb3-1e70584e5010.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjY3MDM4MDUsIm5iZiI6MTcyNjcwMzUwNSwicGF0aCI6Ii8xMTA5MTU4NTAvMzY4NjQzMTAzLTBlYmRiY2U5LTFkZjAtNDkzYy04ZmIzLTFlNzA1ODRlNTAxMC5naWY_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwOTE4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDkxOFQyMzUxNDVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1iODhiM2Q5NWUxMjFhYWU1YTY3YjBkYzE3NTE4NWU0MTViYzllMzc1NDAxZWY5ZDMwMjQwOWVjNDViZjEzZDk0JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.oRAjTdu2-4WVwyx6tNX4SC17Btr1dTCxObV8L4-kl2Q">
<p>
  로그인 화면은 firebase를 사용해 만들었고 react-query를 이용해 통신을 진행하였습니다. jwt토큰을 이용해 구현하려 하였으나 firebase는 자체적 ID 토큰이 있어서 firebase ID 토큰으로 구현하였습니다. 전달받은 토큰은 로컬스토리지에 저장하였습니다. 회원가입, 로그인, 예외처리가 발생할 경우 react-toastify 로 메시지를 주어 좋은 UI를 만들었습니다.
</p>

<br/>

<h2>웹툰</h2>
<img alt="웹툰" width="500px" height="300px" src="https://private-user-images.githubusercontent.com/110915850/368647058-8234b337-e01d-4ad9-b649-fcb1207b568d.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjY3MDM5MTEsIm5iZiI6MTcyNjcwMzYxMSwicGF0aCI6Ii8xMTA5MTU4NTAvMzY4NjQ3MDU4LTgyMzRiMzM3LWUwMWQtNGFkOS1iNjQ5LWZjYjEyMDdiNTY4ZC5naWY_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwOTE4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDkxOFQyMzUzMzFaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT01YWZlYTdiMzNlYjMwNjQ0YjU5NWNmZDA3Y2UyZjQ4MmNkNjg0M2E3MzQxMTc1YmY5Zjg5OGExZWVlYTc4Y2Y2JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.qVAZ6yXIIt_66sRSzFHEL-5LnnuRbAffHE3UQIjI-Ww">
<p>
  웹툰의 정보는 korea-webtoon-api에서 axios 통신으로 가져왔습니다. 초기에 cors오류가 발생해 문제가 발생하여 문제가 있었지만 잘 해결하였습니다. 애니메이션에 공을 많이 들였으며 웹툰이 회전한 후 상세 정보를 표시하는 부분은 onMouteEnter과 onMouseLeave 이벤트를 통해 배열 state에 웹툰 id를 전달하여 구현하였습니다. 웹툰 상세 정보에 대한 데이터가 없어 가데이터를 넣은게 아쉬운 파트입니다.
</p>

<br/>

<h2>firebase를 통한 글쓰기</h2>
<img alt="글쓰기" width="500px" height="300px" src="https://private-user-images.githubusercontent.com/110915850/368644653-14e97710-b994-4813-bdd1-2cc83ea37880.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjY3MDM4MzIsIm5iZiI6MTcyNjcwMzUzMiwicGF0aCI6Ii8xMTA5MTU4NTAvMzY4NjQ0NjUzLTE0ZTk3NzEwLWI5OTQtNDgxMy1iZGQxLTJjYzgzZWEzNzg4MC5naWY_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwOTE4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDkxOFQyMzUyMTJaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0yZWQzZjdjNjgzNDA0Mzg1ODUwYTBjNmQ2ZDY5MzVkM2NlNDk0MTdkMTc2NzU2NDhhNDY3MjNjYWQyMzU5YWFkJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.aF1qMor8wZic8vdhfkMDLTt7mmS-qHTi_m6h4wVOYZ0">
<p>
  firebase와 react-query를 사용한 CRUD를 구현하였습니다. 디자인의 경우 pc 인스타그램의 댓글 부분에서 영감을 받아 제작하였습니다. firebase관련 함수를 공통 함수로 만들려고 노력하였습니다. 타입스크립트의 타입 오류가 많았던 부분이 어려웠습니다.
</p>

<br/>

<h2>뮤직 플레이어</h2>
<p>
  audio 태그를 사용해 만든 음악 플레이어입니다. 삼성 music에 영감을 받아 제작하였으며 노래 시작, 일시정지, 초기화, 이전곡, 다음곡, 랜덤노래시작 기능을 제작하였습니다. audio 태그에 대해 많이 알아본 파트였습니다.
</p>

<br/>

<h2>그림 그리기</h2>
<img alt="그림" width="500px" height="300px" src="https://private-user-images.githubusercontent.com/110915850/368642998-c18a7a88-d9d4-46f2-8dba-3240bcd21435.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjY3MDM2MzcsIm5iZiI6MTcyNjcwMzMzNywicGF0aCI6Ii8xMTA5MTU4NTAvMzY4NjQyOTk4LWMxOGE3YTg4LWQ5ZDQtNDZmMi04ZGJhLTMyNDBiY2QyMTQzNS5naWY_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwOTE4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDkxOFQyMzQ4NTdaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT05ZDE5YjRlZGNkMmMwMzdlYjUzMWQ1NTdhMjYxOWVlYmYyYTNmNWNjNTM4NTQyMjFiMDQzYmVhZTkwNjE2NWQzJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.6JModBVjDWyTIAO3TtPJHLz7i8eCEshF54B5iMnFJBU">
<p>
  canvas 태그를 사용해 만든 그림 그리기입니다. 그리기, 색깔, 초기화, 그린 그림을 저장하는 기능을 구현하였습니다. 색깔 변경시 화면이 리렌더링 되는 문제가 있었는데, 화면을 리렌더링 하지 않는 특성을 가진 ref를 이용해서 해결했습니다.
</p>

<br/>

<h2>카카오맵</h2>
<img alt="카카오" width="500px" height="300px" src="https://private-user-images.githubusercontent.com/110915850/368643362-631c155a-c0d9-4654-90cf-4e6e1a1076d0.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjY3MDM4MTUsIm5iZiI6MTcyNjcwMzUxNSwicGF0aCI6Ii8xMTA5MTU4NTAvMzY4NjQzMzYyLTYzMWMxNTVhLWMwZDktNDY1NC05MGNmLTRlNmUxYTEwNzZkMC5naWY_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwOTE4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDkxOFQyMzUxNTVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0zZTY2NWFlNTkwYmRkZGNmMTk5YzU4YjE1NjhiNjIxZjFjZGY4ZTZhOWNhZTEzMDMxMzdmODU3MDliZWZhMjM2JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.pSS-3BGnvZi-rx9_YrE7vjKtJe1EStpW0_eesmROmFQ">
<p>
 기본적인 카카오맵과 특정 좌표에 마커 표시, 선택한 좌표로 지도 이동 기능을 제작해보았습니다.
</p>
