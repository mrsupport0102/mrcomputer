import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "linear-gradient(135deg, #c9f34f 0%, #21cbb8 48%, #1494ff 100%)",
          borderRadius: 16,
          color: "#07111f",
          display: "flex",
          fontFamily: "Arial, sans-serif",
          fontSize: 28,
          fontWeight: 900,
          height: "100%",
          justifyContent: "center",
          letterSpacing: -3,
          width: "100%",
        }}
      >
        MR
      </div>
    ),
    size,
  );
}
