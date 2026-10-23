import { ImageResponse } from "next/og";

export const alt = "CRORESTARS — Built to Become More.";
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
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#08090A",
          gap: 20,
        }}
      >
        <span
          style={{
            fontFamily: "sans-serif",
            fontSize: 96,
            fontWeight: 800,
            letterSpacing: "0.12em",
            color: "#FFFFFF",
            textTransform: "uppercase",
          }}
        >
          CRORESTARS
        </span>
        <span
          style={{
            fontFamily: "sans-serif",
            fontSize: 28,
            fontWeight: 600,
            letterSpacing: "0.18em",
            color: "#F2A33A",
            textTransform: "uppercase",
          }}
        >
          Built to Become More.
        </span>
      </div>
    ),
    {
      ...size,
    }
  );
}
