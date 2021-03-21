import React from "react";
import cx from "classnames";

export default ({
  color = "white",
  type = "text",
  value,
  onChange,
  className,
  placeholder,
  relation,
}) => {
  return type === "textarea" ? (
    <>
    <label className="t-hidden" for={relation}>{relation}</label>
    <textarea
      onChange={onChange}
      value={value}
      type={type}
      id={relation}
      placeholder={placeholder}
      rows={7}
      className={cx(
        className,
        "input-bg rounded-md px-4 py-4 mx-1 w-full",
        "text-" + color
      )}
    />
    </>
  ) : (
    <>
    <label className="t-hidden" for={relation}>{relation}</label>
    <input
      onChange={onChange}
      value={value}
      type={type}
      id={relation}
      placeholder={placeholder}
      className={cx(
        className,
        "input-bg rounded-md px-4 py-4 mx-1 w-full",
        "text-" + color
      )}
    />
    </>
  );
};
