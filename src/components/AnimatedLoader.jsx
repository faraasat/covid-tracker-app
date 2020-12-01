import React from "react";
import { css } from "@emotion/core";

const override = css`
  display: block;
  margin: 0 auto;
`;

export default function AnimatedLoader({
  loading,
  color,
  Type,
  style,
  size,
  margin,
  height,
  width,
}) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <div className="sweet-loading">
        <Type
          css={override}
          size={size}
          margin={margin}
          color={color}
          loading={loading}
          style={style}
          height={height}
          width={width}
        />
      </div>
    </div>
  );
}
