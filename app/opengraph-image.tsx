import { ImageResponse } from "next/og";

export const alt = "CRORESTARS";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#000000",
        }}
      >
        <span
          style={{
            fontFamily: "sans-serif",
            fontSize: 108,
            fontWeight: 900,
            letterSpacing: "0.08em",
            color: "#FFFFFF",
            textTransform: "uppercase",
          }}
        >
          CRORESTARS
        </span>
      </div>
    ),
    {
      ...size,
    }
  );
}
