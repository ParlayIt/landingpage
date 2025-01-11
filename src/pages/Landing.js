import { Hero } from "../components/Hero";
import { NavigationBar } from "../components/NavigationBar";
import { FooterBar } from "../components/Footerbar";

import vector1 from "../images/vector1.svg";
import vector2 from "../images/vector2.svg";
import vector3 from "../images/vector3.svg";
import waves from "../images/waves.png";
import vectorgroup from "../images/vectorgroup.png";
import nfts from "../images/nftimage.png";

import { Stack } from "../components/Stack";
import { Boxes } from "../components/Boxes";
import { Roadmap } from "../components/Roadmap";

import { Slide, Grow, Fade, Zoom } from "@mui/material";
import { AnimatedComponent } from "../components/Observer";
import { Partners } from "../components/Partners";

// import { UseObserver } from "../components/Observer";
export function Landing() {
  // const { isVisible } = UseObserver();

  return (
    <>
      <div className="w-full h-full flex flex-col overflow-x-hidden">
        <Hero />

        <div className="w-full container mx-auto flex flex-col justify-center items-center">
          {/* Innovation heading */}
          <div className="w-full relative my-10 py-10 px-5 flex justify-center items-center">
            <AnimatedComponent>
              <Slide direction="right">
                <img
                  className="absolute w-[300px] h-10 top-[0px] lg:top-[50px] left-[0]"
                  alt="Vector"
                  src={vector1}
                />
              </Slide>
            </AnimatedComponent>
            <AnimatedComponent>
              <Slide direction="left">
                <img
                  className="absolute w-[300px] h-10 top-[75px] lg:top-[25px] right-[0] rotate-180"
                  alt="Vector"
                  src={vector1}
                />
              </Slide>
            </AnimatedComponent>

            <h1 className="relative px-2 text-white text-2xl md:text-3xl font-sora ">
              Innovation at its{" "}
              <span className="bg-gradient-to-r from-[#e346ff] to-[#00c6ff] inline-block text-transparent bg-clip-text">
                finest
              </span>
            </h1>

            <div className="z-[-1] absolute top-[-100px] right-[0] w-[300px] h-[300px] rounded-[200px/200px] blur-[100px] bg-gradient-to-r from-[#e346ff] to-[#00c6ff] opacity-40"></div>
            <div className="z-[-1] absolute top-[-100px] left-[0] w-[300px] h-[300px] rounded-[200px/200px] blur-[100px] bg-gradient-to-r from-[#e346ff] to-[#00c6ff] opacity-40"></div>
          </div>

          {/* Section Stacks */}
          <div className="w-full lg:w-3/4 relative my-10 py-10 px-5 flex justify-center items-center">
            <Stack />
          </div>

          {/* Friendzone heading */}
          <div className="w-full relative lg:mt-[100px] my-10 py-10 px-5 flex justify-center items-center">
            {/* <div className="w-[867px] h-[73px]"> */}
            {/* </div> */}
            <div className="z-[-1] absolute top-[-100px] left-[0] w-[300px] h-[300px] rounded-[200px/200px] blur-[100px] bg-gradient-to-r from-[#e346ff] to-[#00c6ff] opacity-40"></div>
            <AnimatedComponent>
              <Slide direction="right">
                <div className="lg:absolute lg:left-[70px] px-2 text-white text-3xl font-sora flex flex-col text-left">
                  <h1 className="">Enter the</h1>
                  <h1 className="bg-gradient-to-r from-[#e346ff] to-[#00c6ff] inline-block text-transparent bg-clip-text">
                    Friend Zone
                  </h1>
                </div>
              </Slide>
            </AnimatedComponent>
            <AnimatedComponent>
              <Slide direction="left">
                <img
                  className="absolute h-[60px] top-[100px] lg:top-[30px] right-[0]"
                  alt="Vector"
                  src={vector2}
                />
              </Slide>
            </AnimatedComponent>
          </div>

          {/* Section Boxes */}
          <div className="w-full lg:w-3/4 relative my-10 py-10 px-5 flex flex-col justify-between">
            <Boxes />
          </div>
        </div>

        {/* ========================= ========================= */}
        {/* Waves background */}
        <div className="w-full relative my-10 py-10 mb-[-50px] lg:mb-0 flex  justify-center items-center">
          <div className="absolute w-full top-[-200px] md:top[-300px] lg:top-[-400px] z-[-1]">
            <img
              loading="lazy"
              src={waves}
              alt="waves background"
              className="object-cover w-full"
            />
          </div>
        </div>
        <div className="relative">
          <div className="absolute left-0 top-[0] md:top-[100px]">
            <img
              className="object-fit h-[600px]"
              alt="vectorgroup"
              src={vectorgroup}
            />
          </div>
        </div>
        {/* ========================= ========================= */}

        <div className="relative w-full container mx-auto flex flex-col justify-center items-center">
          {/* Section NFT */}
          <div className="w-full lg:w-3/4 relative top-0 md:top-[100px] md:mb-[150px] my-10 py-10 px-5 flex justify-center items-center">
            <div className="z-[-1] absolute top-[-100px] right-[0] w-[300px] h-[300px] rounded-[200px/200px] blur-[100px] bg-gradient-to-r from-[#e346ff] to-[#00c6ff] opacity-40"></div>
            <div className="flex flex-col lg:grid lg:grid-rows-1 lg:grid-cols-2 gap-20">
              <div className="flex justify-center items-center">
                <AnimatedComponent>
                  <Zoom>
                    <img className="object-cover" alt="NFT" src={nfts} />
                  </Zoom>
                </AnimatedComponent>
              </div>

              <div className="flex flex-col">
                <div className="pt-5 px-2 mb-5 text-white text-3xl font-sora flex flex-col lg:text-left">
                  <h1 className="">
                    First Ever{" "}
                    <span className="bg-gradient-to-r from-[#e346ff] to-[#00c6ff] inline-block text-transparent bg-clip-text">
                      NFT Stat System
                    </span>
                  </h1>
                </div>
                <AnimatedComponent>
                  <Slide direction="left">
                    <div className="p-2 text-white text-left">
                      <p className="relative self-stretch font-sora font-extralight text-[#ffffffb2] text-md tracking-[0] leading-[normal]">
                        NFTs are taking over the Crypto sphere and everyday help
                        create new innovative ways to take part in communities.
                        At ParlayIT, we are taking this to the next step by
                        leveraging NFTs to the max and creating the first of its
                        kind stat system. Take it to the next level by attaching
                        your ParlayIT NFT to your account, allowing stats to be
                        tracked and leveling up your experience
                      </p>
                    </div>
                  </Slide>
                </AnimatedComponent>
              </div>
            </div>
          </div>

          {/* Roadmap heading */}
          <div className="w-full relative lg:mt-[100px] my-10 py-10 px-5 flex justify-center items-center">
            <div className="z-[-1] absolute top-[-100px] left-[0] w-[300px] h-[300px] rounded-[200px/200px] blur-[100px] bg-gradient-to-r from-[#e346ff] to-[#00c6ff] opacity-40"></div>{" "}
            <AnimatedComponent>
              <Slide direction="right">
                <div className="lg:absolute lg:left-[70px] px-2 text-white text-3xl font-sora flex flex-col text-left">
                  <h1 className="bg-gradient-to-r from-[#e346ff] to-[#00c6ff] inline-block text-transparent bg-clip-text">
                    Roadmap
                  </h1>
                </div>
              </Slide>
            </AnimatedComponent>
            <AnimatedComponent>
              <Slide direction="left">
                <img
                  className="absolute w-full lg:w-3/4 h-[60px] top-[-10px] lg:top-[15px] right-0"
                  alt="Vector"
                  src={vector3}
                />
              </Slide>
            </AnimatedComponent>
          </div>

          {/* Section roadmap */}
          <div className="w-full lg:w-3/4 relative my-10 py-10 px-5 flex justify-center">
            <div className="grid grid-cols-1 grid-rows-3 md:grid-rows-1 md:grid-cols-3">
              <AnimatedComponent>
                <Grow
                  in={true}
                  style={{ transformOrigin: "0 0 0" }}
                  {...{ timeout: 1000 }}
                >
                  <div>
                    <Roadmap
                      fullfilled="true"
                      title="Q4 2024"
                      items={[
                        "Dapp development",
                        "Marketing campaign",
                        "NFT launch",
                        "Token presale",
                      ]}
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
                    <Roadmap
                      fulfilled="false"
                      title="Q1 2025"
                      items={[
                        "Community giveaways",
                        "Secured partnerships",
                        "Secured sponsors",
                        "NFT holders",
                        "dApp beta",
                        "Token airdrop",
                      ]}
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
                    <Roadmap
                      fulfilled="false"
                      title="Q2 2025"
                      items={[
                        "dApp launch",
                        "Mobile app development",
                        "Apple watch app development",
                      ]}
                    />
                  </div>
                </Grow>
              </AnimatedComponent>
            </div>
          </div>

          {/* Section Partners */}
          <div className="w-full lg:w-3/4 relative my-10 py-10 px-5 flex justify-center items-center">
            <Partners />
          </div>
        </div>

        <FooterBar />
      </div>
    </>
  );
}
