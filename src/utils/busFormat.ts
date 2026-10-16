import type { BusArrival } from "@/types/bus";

export type BusKind = "seat" | "general" | "village";

export const isSoon = (min: number | "") => min !== "" && min <= 5;

export const formatTime = (min: number | "") => {
  if (min === "") return null;
  return min <= 1 ? "곧 도착" : `${min}`;
};

//몇 정거장 전
export const formatStops = (n: number | "") =>
  n === "" ? "" : `${n}정거장 전`;

// 좌석버스 노선 유형코드
const SEAT_BUS_TYPES = [11];

// 좌석버스인지 체크
export const isSeatBus = (bus: BusArrival) =>
  SEAT_BUS_TYPES.includes(bus.routeTypeCd);

// 혼잡도 코드 -> 글자 변환
const CROWDED: Record<number, string> = {
  0: "",
  1: "여유",
  2: "보통",
  3: "혼잡",
  4: "매우혼잡",
};

// 좌석버스면 잔여 좌석, 아니면 혼잡도, 둘 다 없으면 빈칸
export const formatCapacity = (bus: BusArrival) => {
  const seats = bus.remainSeatCnt1;
  if (isSeatBus(bus) && seats !== "" && seats >= 0) return `잔여 ${seats}석`;
  if (bus.crowded1 === "") return "";
  return CROWDED[bus.crowded1] ?? "";
};

export const busKind = (routeTypeCd: number): BusKind => {
  if (routeTypeCd === 11) return "seat"; // 빨간버스
  if (routeTypeCd === 30) return "village"; // 마을버스
  return "general"; // 시내버스
};

//좌석 5석 이하이거나 혼잡(3) 이상이면 경고
export const isCapacityWarn = (bus: BusArrival) => {
  const seats = bus.remainSeatCnt1;
  if (isSeatBus(bus) && seats !== "" && seats >= 0) return seats <= 5;
  return bus.crowded1 !== "" && bus.crowded1 >= 3;
};

export const urgencyColor = (min: number | "") => {
  if (min === "") return "var(--sub)";
  if (min <= 3) return "#ff5a4e";
  if (min <= 8) return "#ffc23d";
  return "#5eead4";
};

// 버스 아이콘을 트랙 위에 놓을 위치 계산
export const trackPos = (stops: number | "") =>
  stops === "" ? 0 : Math.round((1 - Math.min(stops, 10) / 10) * 100);
