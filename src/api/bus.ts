import type { ArrivalResponse, BusArrival } from "@/types/bus";
import axios from "axios";

export async function fetchArrivals(stationId: number): Promise<BusArrival[]> {
  const { data } = await axios.get<ArrivalResponse>("api/bus", {
    params: { stationId },
  });

  const list = data.response.msgBody?.busArrivalList;
  if (!list) return [];
  return Array.isArray(list) ? list : [list];
}
