import LandingWrapper from "./LandingWrapper";
import TypedName from "./TypedName";

const Landing = () => {
  return (
    <LandingWrapper>
      <div className="text-7xl font-sans font-black flex flex-col gap-2 w-fit tracking-tighter p-5">
        <div className="inline-flex items-center gap-4">
          <span>Sindhur</span>
          <TypedName/>
        </div>
        <span>Shabaraya</span>
        <p className="text-2xl tracking-normal font-light pt-4 pl-1">In short, I develop FullStack Web Applications.</p>
      </div>
    </LandingWrapper>
  );
};

export default Landing;
