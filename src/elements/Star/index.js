import React from "react";
import PropTypes from "prop-types";
import "./index.scss";

export default function Star({ className, value, height, width, spacing }) {
  const decimals = Number(value) % 1;

  const star = [];
  let leftPos = 0;
  for (let index = 0; index < 5 && index < value - decimals; index++) {
    leftPos = leftPos + width;
    star.push(
      <div
        className="star"
        key={`star-${index}`}
        style={{
          left: index * width,
          height: height,
          width: width,
          marginRight: spacing,
        }}
      ></div>
    );
  }
  if (decimals > 0 && value <= 5)
    star.push(
      <div
        className="star"
        key={`starWithDecimals`}
        style={{
          left: leftPos,
          height: height,
          width: decimals * width - spacing,
        }}
      ></div>
    );

  const starPlaceholder = [];
  for (let index = 0; index < 5; index++) {
    starPlaceholder.push(
      <div
        className="star placeholder"
        key={`starPlaceholder-${index}`}
        style={{
          left: index * width,
          height: height,
          width: width,
          marginRight: spacing,
        }}
      ></div>
    );
  }
  return (
    <>
      <div
        className={["stars", className].join(" ")}
        style={{ height: height }}
      >
        {star}
        {starPlaceholder}
      </div>
    </>
  );
}

Star.propTypes = {
  className: PropTypes.string,
  value: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
  spacing: PropTypes.number,
};
