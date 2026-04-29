import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#08070a",
          color: "#f4f0e6",
          padding: "72px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "#c8a96a",
            fontSize: 34,
            letterSpacing: -1,
          }}
        >
          <span>vilmgroup</span>
          <span style={{ fontSize: 18, letterSpacing: 8 }}>CHIȘINĂU · MD</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              maxWidth: 920,
              fontSize: 82,
              lineHeight: 0.95,
              letterSpacing: -5,
              fontWeight: 800,
            }}
          >
            Infrastructură digitală pentru brandul tău.
          </div>
          <div
            style={{
              maxWidth: 760,
              color: "#d8d3c5",
              fontSize: 30,
              lineHeight: 1.25,
            }}
          >
            SMM · Branding · Website-uri · Design · AI · Conținut
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            color: "#c8a96a",
            fontSize: 22,
            letterSpacing: 7,
          }}
        >
          <span
            style={{
              width: 64,
              height: 2,
              background: "#c8a96a",
            }}
          />
          STUDIO DIGITAL
        </div>
      </div>
    ),
    size
  );
}
