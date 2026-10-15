export type Mode = "work" | "home";

export interface BusPick {
  routeName: string;
  getOff: string;
}

export interface StopPick {
  stationId: number;
  stationName: string;
  buses: BusPick[];
}

export const presets: Record<Mode, StopPick[]> = {
  work: [
    {
      stationId: 210000285,
      stationName: "반달마을.법원.검찰청",
      buses: [{ routeName: "8106", getOff: "판교역.낙생육고.현대백화점" }],
    },
    {
      stationId: 211000269,
      stationName: "송내역남부(광역버스)",
      buses: [{ routeName: "8106", getOff: "판교역.낙생육고.현대백화점" }],
    },
    {
      stationId: 206000683,
      stationName: "판교역남편",
      buses: [{ routeName: "375", getOff: "금토천교" }],
    },
    {
      stationId: 206000531,
      stationName: "백현마을1단지",
      buses: [
        { routeName: "누리4", getOff: "금토천교" },
        { routeName: "375", getOff: "금토천교" },
        { routeName: "380", getOff: "메디포스트" },
        { routeName: "73", getOff: "봇들육교" },
        { routeName: "370", getOff: "삼평교" },
        { routeName: "3", getOff: "삼평교" },
        { routeName: "55", getOff: "삼평교" },
      ],
    },
    {
      stationId: 206000634,
      stationName: "백현마을4단지",
      buses: [
        { routeName: "누리2", getOff: "삼평교" },
        { routeName: "66", getOff: "삼평교" },
      ],
    },
  ],
  home: [
    {
      stationId: 206000539,
      stationName: "금토천교",
      buses: [
        { routeName: "6003", getOff: "판교역.낙생육교.현대백화점" },
        { routeName: "6011", getOff: "판교역.낙생육교.현대백화점" },
      ],
    },
    {
      stationId: 206000565,
      stationName: "유라코퍼레이션.SK케미칼",
      buses: [
        { routeName: "602-1B", getOff: "판교역남편" },
        { routeName: "602-2B", getOff: "판교역남편" },
        { routeName: "9007", getOff: "판교역.낙생육교.현대백화점" },
      ],
    },
    {
      stationId: 206000532,
      stationName: "판교역.낙생육교.현대백화점",
      buses: [{ routeName: "8106", getOff: "반달마을.법원.검찰청" }],
    },
    {
      stationId: 224000848,
      stationName: "시흥영업소",
      buses: [{ routeName: "G8808", getOff: "송내역남부" }],
    },
  ],
};
