import type { BusPick } from "@/conpig/presets";
import type { BusArrival } from "@/types/bus";
import {
  // isSoon,
  // isSeatBus,
  busKind,
  formatCapacity,
  formatStops,
  formatTime,
  isCapacityWarn,
  trackPos,
  urgencyColor,
} from "@/utils/busFormat";
import { BusRowWrap } from "./busRowStyle";

interface BusRowProps {
  bus?: BusArrival;
  pick: BusPick;
}

const BusIcon = () => (
  <svg width="16" height="14" viewBox="0 0 16 14" aria-hidden="true">
    <rect x="1" y="1" width="14" height="10" rx="3" fill="#fff" />
    <rect
      x="3"
      y="3"
      width="10"
      height="4"
      rx="1"
      fill="#0e1116"
      opacity="0.55"
    />
    <circle cx="4.5" cy="12" r="1.5" fill="#fff" />
    <circle cx="11.5" cy="12" r="1.5" fill="#fff" />
  </svg>
);

const BusRow = ({ bus, pick }: BusRowProps) => {
  const first = bus ? formatTime(bus.predictTime1) : null;
  const min = bus?.predictTime1;

  //목록에 없거나, 있어도 지금 운행 중인 차가 없으면
  if (!bus || !first || min === undefined) {
    return (
      <BusRowWrap $kind="general" $color="var(--sub)" $pos={0} $warn={false}>
        <div className="box_busrow">
          <div className="box_busnum">
            <span className="text_bus-number">{pick.routeName}</span>
            <span className="text__bus-direction">운행 정보 없음</span>
          </div>
        </div>
        <div className="box_track">
          <span className="line"></span>
          <span className="pin"></span>
        </div>
      </BusRowWrap>
    );
  }

  const stops = formatStops(bus.locationNo1);
  const capacity = formatCapacity(bus);
  const warn = isCapacityWarn(bus);

  return (
    <BusRowWrap
      $kind={busKind(bus.routeTypeCd)}
      $color={urgencyColor(min)}
      $pos={trackPos(bus.locationNo1)}
      $warn={warn}
    >
      <div className="box_busrow">
        <div className="box_busnum">
          <span className="text_bus-number">{bus.routeName}</span>
          <span className="text__bus-direction">→ {pick.getOff}</span>
        </div>
        <div className="box_bustime">
          {typeof min === "number" && min > 1 ? (
            <>
              {min}
              <span>분 후</span>
            </>
          ) : (
            first
          )}
        </div>
      </div>

      <div className="box_track">
        <span className="line"></span>
        <span className="trail"></span>
        <span className="pin"></span>
        <span className="bus">
          <BusIcon />
        </span>
      </div>

      <div className="box_meta">
        <span>{stops}</span>
        {capacity && <span className="text_bus-capacity">{capacity}</span>}
      </div>
    </BusRowWrap>
  );
};

export default BusRow;
