import type { BusPick } from "@/conpig/presets";
import type { BusArrival } from "@/types/bus";
import {
  isSoon,
  busKind,
  formatCapacity,
  formatStops,
  formatTime,
  isCapacityWarn,
  isSeatBus,
} from "@/utils/busFormat";
import { BusRowWrap } from "./busRowStyle";

interface BusRowProps {
  bus?: BusArrival;
  pick: BusPick;
}

const SeatIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M6 4v9a2 2 0 0 0 2 2h8" />
    <path d="M6 15l-1 5M17 15l1 5M8 20h10" />
  </svg>
);

const PersonIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="7" r="3.5" />
    <path d="M5 20a7 7 0 0 1 14 0" />
  </svg>
);

const BusRow = ({ bus, pick }: BusRowProps) => {
  const first = bus ? formatTime(bus.predictTime1) : null;
  const min = bus?.predictTime1;

  //목록에 없거나, 있어도 지금 운행 중인 차가 없으면
  if (!bus || !first) {
    return (
      <BusRowWrap $kind="general" $soon={false} $warn={false}>
        <div className="box_busrow">
          <div className="box_busnum">
            <span className="text_bus-number">{pick.routeName}번</span>
            <span className="text__bus-direction">운행 정보 없음</span>
          </div>
        </div>
      </BusRowWrap>
    );
  }

  const next = formatTime(bus.predictTime2);
  const stops = formatStops(bus.locationNo1);
  const capacity = formatCapacity(bus);
  const warn = isCapacityWarn(bus);

  return (
    <BusRowWrap
      $kind={busKind(bus.routeTypeCd)}
      $soon={isSoon(bus.predictTime1)}
      $warn={warn}
    >
      <div className="box_busrow">
        <div className="box_busnum">
          <span className="text_bus-number">{bus.routeName}번</span>
          <span className="text__bus-direction">{bus.routeDestName} 방면</span>
        </div>
        <div className="box_bustime">
          {typeof min === "number" && min > 1 ? (
            <>
              {min}
              <span>분</span>
            </>
          ) : (
            first
          )}
        </div>
      </div>
      <div className="test11">
        <div className="box_businfo">
          {/* 잔여 좌석 */}
          {capacity && (
            <span className="text_bus-capacity">
              {warn ? (
                <strong>!</strong>
              ) : isSeatBus(bus) ? (
                <SeatIcon />
              ) : (
                <PersonIcon />
              )}
              {capacity}
            </span>
          )}
          {/* 몇 정거장 전 */}
          <span className="text_bus-soon">{stops && `${stops}`}</span>
        </div>
        <div className="box_nextbus">
          다음 {next ? `${next}분` : "버스 정보 없음"}
        </div>
      </div>
      <div className="box_off-stop">[{pick.getOff}] 하차</div>
    </BusRowWrap>
  );
};

export default BusRow;
