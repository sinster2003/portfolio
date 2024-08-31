import React from "react";
import TypedCode from "./TypedCode";

const LandingWrapper = ({ children }: {children: React.JSX.Element}) => {
  return (
    <div className="absolute z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full md:w-[80%] min-h-screen md:h-[80vh] bg-primary/20 rounded-none rounded-b-xl md:rounded-2xl backdrop-blur-3xl backdrop-filter p-10">
      {children}
      <TypedCode/>
    </div>
  );
};

export default LandingWrapper;