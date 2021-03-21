import React from "react";

export default ({ phase, description, hideBar = false }) => {
  return (
    <div className="flex flex-row items-start -mt-1">
      <div className="flex flex-col justify-center items-center">
        <div className="w-5 h-5 bg-white rounded-full relative z-50"></div>
        {!hideBar && (
          <div className="w-2 h-24 bg-primary -mt-1 relative z-60"></div>
        )}
      </div>
      <div className="text-white text-left ml-4">
        <h4 className="font-Montserrat-ExtraBold uppercase mb-1">
          Phase {phase}
        </h4>
        <p>{description}</p>
      </div>
    </div>
  );
};
