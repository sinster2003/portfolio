"use client"

import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const TypedName = () => {
  const nameElement = useRef(null);

  useEffect(() => {
    const typed = new Typed(nameElement.current, {
        strings: ["Vasudeva"],
        typeSpeed: 100,
        startDelay: 1000,
        showCursor: false,
    });

    return () => {
        typed.destroy();
    };
  }, []);

  return (
    <span className="text-primary" ref={nameElement}></span>
  )
}

export default TypedName;