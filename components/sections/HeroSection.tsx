import Image from "next/image";
import Blob from "@/public/blob1.svg";
import Landing from '../landing/Landing';

const HeroSection = () => {
  return (
    <div className="relative h-screen font-sans flex w-full justify-center items-center">
      <Image src={Blob} alt="blob" className="absolute -top-40 right-0 -z-10"/>
      <Landing />
      <Image src={Blob} alt="blob" className="absolute -bottom-[120px] -left-[60px] -z-10"/>
    </div>
  )
}

export default HeroSection