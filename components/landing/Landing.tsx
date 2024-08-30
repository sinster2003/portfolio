import Image from "next/image";
import LandingWrapper from "./LandingWrapper";
import TypedName from "./TypedName";
import CVButton from "./CVButton";

const Landing = () => {
  return (
    <LandingWrapper>
      <>
      <div className="flex justify-between items-center">
      <div className="text-7xl font-sans font-black flex flex-col gap-2 w-fit tracking-tighter p-5">
        <div className="inline-flex items-center gap-4">
          <span>Sindhur</span>
          <TypedName/>
        </div>
        <span>Shabaraya</span>
        <p className="text-2xl tracking-normal font-light pt-[12px] pl-1">In short, I develop FullStack Web Applications.</p>
      </div>
      <div className="relative w-40 h-40 my-10 mx-20">
        <Image src="/avatar.png" alt="sindhur-avatar" fill objectFit="contain" className="rounded-full bg-primary"/>
      </div>
      </div>
      <CVButton/>
      </>
    </LandingWrapper>
  );
};

export default Landing;
