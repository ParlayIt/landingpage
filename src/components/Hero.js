import * as React from "react";

import heroimage from "../images/mountain.png";
import parlayIt from "../images/ParlayIT.svg";
import swap from "../images/swap.png";
import stake from "../images/stake.png";
import parlay from "../images/parlay.png";
import { Rectangle } from "../components/Rectangle";
import { Collapse, Slide, Grow } from "@mui/material";
import { AnimatedComponent } from "./Observer";

export function Hero() {
  // const [containerRef, isVisible] = UseElementOnScreen({
  //   root: null,
  //   rootMargin: "0px",
  //   threshold: 1,
  // });

  return (
    <>
      <div className="relative top-0 w-full h-full mb-10">
        <img
          loading="lazy"
          src={heroimage}
          alt="Hero section background"
          className="object-cover w-full"
        />
        <div className="absolute top-0 size-full bg-gradient-to-b from-transparent via-black/10 to-black/50"></div>
        <div className="absolute top-[70px] xl:top-1/4 left-0 right-0 w-full flex flex-col justify-center items-center">
          <AnimatedComponent>
            <Slide in={true} direction="down">
              <div className="flex flex-col text-center items-center">
                <img
                  className="object-fit w-1/2 lg:mt-5 lg:w-[540px] lg:h-[90px] opacity-60"
                  alt="Parlay IT"
                  src={parlayIt}
                />
                <p className="mt-5 lg:mt-10 lg:pt-3 text-lg lg:text-3xl font-light text-center text-white max-w-[410px]">
                  Meet the future of parlays
                </p>
              </div>
            </Slide>
          </AnimatedComponent>
        </div>

        <div className="mb-10 p-3 flex flex-col md:flex-row gap-5 lg:gap-10 justify-center items-center text-center">
          <AnimatedComponent>
            <Grow
              in={true}
              style={{ transformOrigin: "0 0 0" }}
              {...{ timeout: 500 }}
            >
              <div>
                <Rectangle
                  image={swap}
                  title="Swap IT"
                  description="Swap any asset into $PLY on one of our partnered Dexes!"
                />
              </div>
            </Grow>
          </AnimatedComponent>
          <AnimatedComponent>
            <Grow
              in={true}
              style={{ transformOrigin: "0 0 0" }}
              {...{ timeout: 1000 }}
            >
              <div>
                <Rectangle
                  image={stake}
                  title="Stake IT"
                  description="Stake your $PLY tokens to earn even more rewards! "
                />
              </div>
            </Grow>
          </AnimatedComponent>
          <AnimatedComponent>
            <Grow
              in={true}
              style={{ transformOrigin: "0 0 0" }}
              {...{ timeout: 1500 }}
            >
              <div>
                <Rectangle
                  image={parlay}
                  title="Parlay IT"
                  description="Utilize your $PLY in our signature rooms such as Most-Hits and Winner-takes-all!"
                />
              </div>
            </Grow>
          </AnimatedComponent>
        </div>
      </div>
    </>
  );
}
