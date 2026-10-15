import react from "@vitejs/plugin-react";
import { fileURLToPath } from "url";
import { defineConfig, loadEnv } from "vite";

const ENDPOINT = "/6410000/busarrivalservice/v2/getBusArrivalListv2";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  console.log("키 확인:", env.BUS_API_KEY ? "있음" : "없음");

  return {
    plugins: [react()],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    server: {
      proxy: {
        "/api/bus": {
          target: "https://apis.data.go.kr",
          changeOrigin: true,
          rewrite: (path) =>
            path.replace(
              "/api/bus?",
              `${ENDPOINT}?serviceKey=${env.BUS_API_KEY}&format=json&`,
            ),
        },
      },
    },
  };
});
