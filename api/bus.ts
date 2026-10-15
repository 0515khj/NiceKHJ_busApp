const ENDPOINT =
  "https://apis.data.go.kr/6410000/busarrivalservice/v2/getBusArrivalListv2";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const stationId = searchParams.get("stationId");

  if (!stationId) {
    return Response.json({ error: "stationId가 필요해요" }, { status: 400 });
  }

  const url = `${ENDPOINT}?serviceKey=${process.env.BUS_API_KEY}&stationId=${encodeURIComponent(stationId)}&format=json`;

  const response = await fetch(url);
  const data = await response.json();

  return Response.json(data, {
    status: response.status,
    headers: { "Cache-Control": "s-maxage=20" }, // 20초 캐시로 트래픽 절약
  });
}
