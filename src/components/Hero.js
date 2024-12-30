import heroimage from "../images/mountain.png";
import parlayIt from "../images/ParlayIT.svg";
import swap from "../images/swap.png";
import stake from "../images/stake.png";
import parlay from "../images/parlay.png";
import { Rectangle } from "../components/Rectangle";

export function Hero() {
  return (
    <>
      <div className="relative top-0 w-full">
        <img
          loading="lazy"
          src={heroimage}
          alt="Hero section background"
          className="object-cover w-full aspect-[1.42]"
        />
        <div className="absolute top-0 size-full bg-gradient-to-b from-transparent via-black/10 to-black/50"></div>
        {/* </div> */}
        {/* <div className="relative top-[250px] w-full text-9xl text-center text-white whitespace-nowrap max-md:max-w-full max-md:text-4xl">
        ParlayIT
      </div> */}
        <div className="absolute top-1/4 left-0 right-0 w-full flex flex-col justify-center items-center">
          <img
            className="object-fit w-1/2 lg:mt-5 lg:w-[540px] lg:h-[90px] opacity-40"
            alt="Parlay IT"
            src={parlayIt}
          />
          <p className="mt-5 lg:mt-10 text-2xl lg:text-3xl font-light text-center text-white max-w-[410px]">
            Meet the future of parlays
          </p>
        </div>
      </div>

      <div className="mb-10 p-3 relative flex flex-row flex-wrap gap-20 justify-center items-end text-center">
        <Rectangle
          image={swap}
          title="Swap IT"
          description="Swap any asset into $PLY on one of our partnered Dexes!"
        />
        <Rectangle
          image={stake}
          title="Stake IT"
          description="Stake your $PLY tokens to earn even more rewards! "
        />
        <Rectangle
          image={parlay}
          title="Parlay IT"
          description="Utilize your $PLY in our signature rooms such as Most-Hits and Winner-takes-all!"
        />
      </div>
    </>
  );
}
