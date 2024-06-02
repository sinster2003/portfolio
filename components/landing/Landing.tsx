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
      </div>
    </LandingWrapper>
  );
};

export default Landing;
