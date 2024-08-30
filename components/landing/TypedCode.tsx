"use client"

import code from "@/utils/code";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypedCode = () => {
    const divElement = useRef(null);

    useEffect(() => {
        const typedCode = new Typed(divElement.current, {
            typeSpeed: 10,
            showCursor: false,
            strings: [code],
            contentType: "html"
        });

        return () => typedCode.destroy();
    }, []);

    return(
        <div className="absolute right-[60px] bottom-10 w-[470px] h-[210px] bg-black/20 py-8 pl-5 pr-10 rounded-2xl animate-accordion-up">
            <div ref={divElement} className="flex justify-center items-center"></div>
        </div>
    );
}


export default TypedCode;