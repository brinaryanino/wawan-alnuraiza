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
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#FAF9F4",
          borderRadius: "50%",
          border: "2px solid #B7A66B",
          position: "relative",
        }}
      >
        {/* Inner subtle circle ring */}
        <div
          style={{
            position: "absolute",
            width: "54px",
            height: "54px",
            borderRadius: "50%",
            border: "1px dashed rgba(183, 166, 107, 0.6)",
          }}
        />
        {/* Monogram W&A */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "Georgia, serif",
            fontWeight: 700,
            fontSize: "22px",
            color: "#4F5938",
            letterSpacing: "-0.5px",
          }}
        >
          <span>W</span>
          <span
            style={{
              fontSize: "15px",
              color: "#B7A66B",
              margin: "0 1px",
              fontStyle: "italic",
            }}
          >
            &amp;
          </span>
          <span>A</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

