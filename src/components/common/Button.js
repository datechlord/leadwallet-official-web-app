import React from "react";
import cx from "classnames";

export default ({
  color = "white",
  bgColor = "primary",
  borderColor = "primary",
  showBorder = false,
  onClick,
  className,
  children,
}) => {
  return (
    <button
      onClick={onClick}
      className={cx(
        className,
        "rounded-md px-4 py-2 mx-1 uppercase font-Montserrat-ExtraBold",
        showBorder ? "border-2" : "",
        "bg-" + bgColor,
        "hover:bg-" + bgColor + "-hover",
        "hover:border-" + bgColor + "-hover",
        "text-" + color,
        "hover:text-" + color + "-hover",
        "border-" + borderColor,
        "hover:border-" + color + "-hover"
      )}
    >
      {children}
    </button>
  );
};