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

export const isCapacityWarn = (bus: BusArrival) => {
  const seats = bus.remainSeatCnt1;
  if (isSeatBus(bus) && seats !== "" && seats >= 0) return seats <= 5;
  return bus.crowded1 !== "" && bus.crowded1 >= 3;
};
