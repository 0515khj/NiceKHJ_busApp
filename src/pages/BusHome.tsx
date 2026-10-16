import { fetchArrivals } from "@/api/bus";
import StationCard from "@/components/StationCard";
import { presets, type Mode } from "@/conpig/presets";
import type { BusArrival } from "@/types/bus";
import { useCallback, useEffect, useState } from "react";
import { BusHomeWrap } from "./busHomeStyle";
import { ImSpinner11 } from "react-icons/im";

const BusHome = () => {
  const [mode, setMode] = useState<Mode>(() =>
    new Date().getHours() < 12 ? "work" : "home",
  );
  const [arrivals, setArrivals] = useState<BusArrival[][]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [updatedAt, setUpdatedAt] = useState<Date | null>(null);

  const stops = presets[mode];

  const reload = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const results = await Promise.all(
        presets[mode].map((st) => fetchArrivals(st.stationId)),
      );
      setArrivals(results);
      setUpdatedAt(new Date());
    } catch (e) {
      setError(e instanceof Error ? e.message : "알 수 없는 에러");
    } finally {
      setLoading(false);
    }
  }, [mode]);

  useEffect(() => {
    // 데이터 요청 시작 시 로딩 표시는 의도된 동작
    // eslint-disable-next-line react-hooks/set-state-in-effect
    reload();

    const timer = setInterval(() => {
      if (document.visibilityState === "visible") reload();
    }, 60_000);
    return () => clearInterval(timer);
  }, [reload]);

  const today = new Date().toLocaleDateString("ko-KR", {
    month: "long",
    day: "numeric",
    weekday: "long",
  });

  const time = updatedAt?.toLocaleTimeString("ko-KR", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const modeLabel: Record<Mode, string> = {
    work: "출근 한..다 😑",
    home: "퇴근 ㅎㅎㅎ 😁",
  };

  return (
    <BusHomeWrap $mode={mode}>
      <div className="box_bus-reload">
        <div className="box_button">
          <button
            className={`button_mode work ${mode === "work" ? "active" : ""}`}
            onClick={() => setMode("work")}
          >
            출근
          </button>
          <button
            className={`button_mode home ${mode === "home" ? "active" : ""}`}
            onClick={() => setMode("home")}
          >
            퇴근
          </button>
        </div>

        <button
          className="button_reload"
          onClick={reload}
          disabled={loading}
          aria-label="새로고침"
        >
          <ImSpinner11 />
          {loading ? "불러오는 중" : time ? `${time} 기준` : "새로고침"}
        </button>
      </div>

      <div className="box_today">
        {today} / {modeLabel[mode]}
      </div>

      {error && <p>에러 : {error}</p>}

      <div className="box_legend">
        <span>← 멀리</span>
        <span>내 정류장 ●</span>
      </div>

      {stops.map((stop, idx) => (
        <StationCard
          key={stop.stationName}
          stop={stop}
          list={arrivals[idx] ?? []}
        />
      ))}
    </BusHomeWrap>
  );
};

export default BusHome;
