import React from "react";
import DotComponents from "./DotComponents";

const LandingWrapper = ({ children }: {children: React.JSX.Element}) => {
  return (
    <div className="absolute z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full lg:w-[80%] h-[80vh] bg-primary/20 rounded-2xl backdrop-blur-3xl backdrop-filter p-10">
      {children}
      <DotComponents/>
    </div>
  );
};

export default LandingWrapper;