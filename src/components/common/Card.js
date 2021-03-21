import React from "react";

export default ({ title, className, children }) => {
  return (
    <div
      className={
        "w-full rounded-lg card-bg pb-4 " + (className ? className : "")
      }
    >
      {title && (
        <h3 className="text-center font-Montserrat-ExtraBold text-white text-2xl uppercase pt-3 pb-2 border-b border-dashed border-white">
          {title}
        </h3>
      )}
      {children}
    </div>
  );
};
