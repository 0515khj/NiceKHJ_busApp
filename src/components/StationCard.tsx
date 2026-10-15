import type { StopPick } from "@/conpig/presets";
import type { BusArrival } from "@/types/bus";
import BusRow from "./BusRow";
import { StationCardWrap } from "./stationCardStyle";

interface StationCardProps {
  stop: StopPick;
  list: BusArrival[];
}

const StationCard = ({ stop, list }: StationCardProps) => (
  <StationCardWrap>
    <span className="text_bus-station">{stop.stationName}</span>
    {stop.buses.map((pick) => (
      <BusRow
        key={pick.routeName}
        pick={pick}
        bus={list.find((b) => String(b.routeName) === pick.routeName)}
      />
    ))}
  </StationCardWrap>
);

export default StationCard;
