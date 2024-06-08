"use client"

import { useState } from "react";

const DotComponents = () => {
  const [currentSlide, setCurrentSlide] = useState("landing");

  return (
    <div className="absolute flex flex-col right-5 top-1/2 -translate-y-1/2 gap-6">
        <div className={`h-4 w-4 rounded-full cursor-pointer ${currentSlide === "landing" ? "bg-primary" : "bg-white"}`} onClick={() => setCurrentSlide("landing")}>
        </div>
        <div className={`h-4 w-4 rounded-full cursor-pointer ${currentSlide === "folders" ? "bg-primary" : "bg-white"}`} onClick={() => setCurrentSlide("folders")}>
        </div>
        <div className={`h-4 w-4 rounded-full cursor-pointer ${currentSlide === "cli" ? "bg-primary" : "bg-white"}`} onClick={() => setCurrentSlide("cli")}>
        </div>
    </div>
  )
}

export default DotComponents