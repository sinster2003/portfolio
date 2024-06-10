"use client"

import { useEffect, useRef, useState } from "react"
import { useInView } from "react-intersection-observer";

const BlobComponent = () => {
  const [appear, setAppear] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0
  });
  const blobEl = useRef(null);

  useEffect(() => {
    const id = setTimeout(() => {
        setAppear(inView);
    }, 500);
        
    return () => clearTimeout(id);
  }, [inView]);

  return (
    <div ref={ref} className="w-fit h-fit">
        {appear && <div ref={blobEl} className='w-40 h-40 absolute -z-50 right-0 bottom-0 bg-primary/50 rounded-full'></div>}
    </div>
  )
}

export default BlobComponent