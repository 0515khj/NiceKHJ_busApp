export interface BusArrival {
  routeId: number;
  routeName: number | string;
  routeDestName: string;
  predictTime1: number | "";
  predictTime2: number | "";
  locationNo1: number | "";
  locationNo2: number | "";
  remainSeatCnt1: number | "";
  remainSeatCnt2: number | "";
  crowded1: number | "";
  crowded2: number | "";
  routeTypeCd: number;
}

export interface ArrivalResponse {
  response: {
    msgHeader: { resultCode: number; resultMessage: string };
    msgBody?: { busArrivalList?: BusArrival[] | BusArrival };
  };
}
