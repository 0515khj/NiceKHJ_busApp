# 내 버스 (출퇴근 버스 도착 알림)

경기도 버스도착정보 API로 나만의 출퇴근 정류장의 버스 도착 시간을 보여주는 웹앱.
배포: https://nicekhjbus-app.vercel.app

## 스택

React + TypeScript + Vite, styled-components, axios, Vercel 서버 함수

## 구조

- api/bus.ts: Vercel 서버 함수 (인증키 붙여서 공공데이터 API 호출)
- src/conpig/presets.ts: 출퇴근 정류장/버스 설정 (v2에서 localStorage로 변경 예정)
- src/pages/BusHome.tsx: 탭, 데이터 불러오기, 1분 자동 갱신
- src/components/StationCard.tsx, BusRow.tsx: 정류장 카드, 버스 한 줄
- src/utils/busFormat.ts: 화면용 글자 변환

## 환경변수

BUS_API_KEY: 공공데이터포털 인증키 (.env.local, Vercel 환경변수)

## 다음 할 일

v2 기획서 참고: 정류장 검색해서 직접 추가하는 기능 (1단계 usePresets부터)
