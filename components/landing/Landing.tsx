import Image from "next/image";
import LandingWrapper from "./LandingWrapper";
import TypedName from "./TypedName";
import CVButton from "./CVButton";

const Landing = () => {
  return (
    <LandingWrapper>
      <>
      <div className="flex flex-col md:flex-row justify-between items-center">
      <div className="text-5xl lg:text-7xl font-sans font-extrabold md:font-black flex flex-col gap-2 w-fit tracking-tighter px-0 md:p-5 items-center md:items-start">
        <div className="inline-flex items-center gap-2 md:gap-4 flex-wrap justify-center md:justify-start pt-10 md:pt-0">
          <span>Sindhur</span>
          <TypedName/>
        </div>
        <span>Shabaraya</span>
        <p className="text-xl md:text-2xl text-center md:text-start tracking-normal font-light pt-[12px] pl-1">In short, I develop FullStack Web Applications.</p>
      </div>
      <div className="relative w-40 h-40 mt-10 mb-5 md:my-10 md:mx-20">
        <Image src="/avatar.png" alt="sindhur-avatar" fill objectFit="contain" className="rounded-full bg-primary"/>
      </div>
      </div>
      <CVButton/>
      </>
    </LandingWrapper>
  );
};

export default Landing;
