import { Hero } from "../components/Hero";
import { NavigationBar } from "../components/NavigationBar";
import { FooterBar } from "../components/Footerbar";

import vector1 from "../images/vector1.svg";
import vector2 from "../images/vector2.svg";
import vector3 from "../images/vector3.svg";
import waves from "../images/waves.png";
import vectorgroup from "../images/vectorgroup.png";
import nfts from "../images/nftimage.png";

import moonbeam from "../images/moonbeam.png";
import polkadot from "../images/polkadot.png";

import { Stack } from "../components/Stack";
import { Box } from "../components/Box";
import { Roadmap } from "../components/Roadmap";

export function Landing() {
  return (
    <>
      <div className="w-full h-screen flex flex-col overflow-x-hidden">
        <NavigationBar />
        <Hero />

        <div className="w-full container mx-auto flex flex-col justify-center items-center">
          {/* Innovation heading */}
          <div className="w-full relative my-10 py-10 px-5 flex flex-wrap gap-20 justify-center">
            {/* <div className="w-[326px] h-[33px]"> */}

            {/* </div> */}
            <img
              className="absolute w-[300px] h-10 top-[0px] lg:top-[50px] left-0"
              alt="Vector"
              src={vector1}
            />
            {/* <div className="w-[326px] h-[33px]"> */}
            <img
              className="absolute w-[300px] h-10 top-[75px] lg:top-[25px] right-0 rotate-180"
              alt="Vector"
              src={vector1}
            />
            {/* </div> */}
            <h1 className="relative px-2 text-white text-3xl font-sora ">
              Innovation at its{" "}
              <span className="bg-gradient-to-r from-[#e346ff] to-[#00c6ff] inline-block text-transparent bg-clip-text">
                finest
              </span>
            </h1>
            <div className="z-[-1] absolute top-[-100px] right-[0] w-[300px] h-[300px] rounded-[200px/200px] blur-[100px] bg-gradient-to-r from-[#e346ff] to-[#00c6ff] opacity-40"></div>
            <div className="z-[-1] absolute top-[-100px] left-[0] w-[300px] h-[300px] rounded-[200px/200px] blur-[100px] bg-gradient-to-r from-[#e346ff] to-[#00c6ff] opacity-40"></div>
          </div>

          {/* Section Stacks */}
          <div className="w-full lg:w-3/4 relative my-10 py-10 px-5 flex flex-col justify-between">
            <div className="grid md:grid-cols-2 gap-5">
              <Stack />
            </div>
          </div>

          {/* Friendzone heading */}
          <div className="w-full relative lg:mt-[100px] my-10 py-10 px-5 flex flex-wrap gap-20 justify-center">
            {/* <div className="w-[867px] h-[73px]"> */}
            <img
              className="absolute w-full lg:w-3/4 h-[60px] top-[100px] lg:top-[30px] right-[-70px]"
              alt="Vector"
              src={vector2}
            />
            {/* </div> */}
            <div className="lg:absolute lg:left-[100px] px-2 text-white text-3xl font-sora flex flex-col text-left">
              <h1 className="">Enter the</h1>
              <h1 className="bg-gradient-to-r from-[#e346ff] to-[#00c6ff] inline-block text-transparent bg-clip-text">
                Friend Zone
              </h1>
            </div>
            <div className="z-[-1] absolute top-[-100px] left-[0] w-[300px] h-[300px] rounded-[200px/200px] blur-[100px] bg-gradient-to-r from-[#e346ff] to-[#00c6ff] opacity-40"></div>
          </div>

          {/* Section Boxes */}
          <div className="w-full lg:w-3/4 relative my-10 py-10 px-5 flex flex-col justify-between">
            <div className="grid md:grid-cols-3 md:gap-5">
              <div className="flex col-span-1">
                <Box
                  title="Forge New Connections"
                  description="Friend zone is our unique take on a social network that is directly integrated within our dApp to create a smooth user experience."
                />
              </div>
              <div className="flex flex-col col-span-2">
                <Box
                  title="Group Chats"
                  description="This is an experimental feature that will allow users to create and participate in decentralized chats to form stronger bonds."
                />
                <Box
                  title="Head 2 Head"
                  description="Utilizing Friend Zone, our players are able to go Head to Head and challenge their friends to see who is the better Parlayer."
                />
              </div>
            </div>
          </div>
        </div>

        {/* ========================= ========================= */}
        {/* Waves background */}
        <div className="w-full relative my-10 py-10 mb-[-50px] lg:mb-[100px] flex flex-wrap gap-20 justify-center">
          <div className="absolute w-full top-[-300px] z-[-1]">
            <img
              loading="lazy"
              src={waves}
              alt="waves background"
              className="object-cover w-full"
            />
          </div>
        </div>
        <div className="relative lg:w-[550px]">
          <img
            className="absolute left-0 top-[-50px] object-cover"
            alt="vector group"
            src={vectorgroup}
          />
        </div>
        {/* ========================= ========================= */}

        <div className="relative w-full container mx-auto flex flex-col justify-center items-center">
          {/* Section NFT */}
          <div className="w-full lg:w-3/4 relative lg:mb-[150px] my-10 py-10 px-5 flex flex-col justify-center">
            <div className="z-[-1] absolute top-[-100px] right-[0] w-[300px] h-[300px] rounded-[200px/200px] blur-[100px] bg-gradient-to-r from-[#e346ff] to-[#00c6ff] opacity-40"></div>
            <div className="grid flex flex-row flex-wrap lg:grid-rows-1 lg:grid-cols-2 gap-20">
              <div className="relative flex justify-center items-center">
                <img
                  className="lg:absolute left-0 top-[-50px] object-cover"
                  alt="NFT"
                  src={nfts}
                />
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
                <div className="p-2 text-white text-left">
                  <p className="relative self-stretch font-sora font-extralight text-[#ffffffb2] text-md tracking-[0] leading-[normal]">
                    NFTs are taking over the Crypto sphere and everyday help
                    create new innovative ways to take part in communities. At
                    ParlayIT, we are taking this to the next step by leveraging
                    NFTs to the max and creating the first of its kind stat
                    system. Take it to the next level by attaching your ParlayIT
                    NFT to your account, allowing stats to be tracked and
                    leveling up your experience
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Roadmap heading */}
          <div className="w-full relative lg:mt-[100px] my-10 py-10 px-5 flex flex-wrap gap-20 justify-center">
            <img
              className="absolute w-full lg:w-3/4 h-[60px] top-[-10px] lg:top-[15px] right-0"
              alt="Vector"
              src={vector3}
            />

            <div className="lg:absolute lg:left-[100px] px-2 text-white text-3xl font-sora flex flex-col text-left">
              <h1 className="bg-gradient-to-r from-[#e346ff] to-[#00c6ff] inline-block text-transparent bg-clip-text">
                Roadmap
              </h1>
            </div>
            <div className="z-[-1] absolute top-[-100px] left-[0] w-[300px] h-[300px] rounded-[200px/200px] blur-[100px] bg-gradient-to-r from-[#e346ff] to-[#00c6ff] opacity-40"></div>
          </div>

          {/* Section roadmap */}
          <div className="w-full lg:w-3/4 relative my-10 py-10 px-5 flex flex-col">
            <div className="grid grid-cols-1 justify-start content-start grid-rows-3 md:grid-rows-1 md:grid-cols-3">
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
          </div>

          {/* Section Partners */}
          <div className="w-full lg:w-3/4 relative my-10 py-10 px-5 flex flex-col justify-between">
            <div className="relative">
              <div className="z-[-1] absolute left-0 w-[900px] h-[200px] rounded-[400px/200px] blur-[100px] bg-gradient-to-r from-[#e346ff] to-[#00c6ff] opacity-50"></div>
            </div>
            <div className="relative flex flex-row flex-wrap gap-20 justify-center">
              <div className="flex flex-col">
                <p className="pb-2 text-sm font-sora leading-normal text-white text-opacity-70">
                  Powered by
                </p>
                <a href="https://moonbeam.network/" target="_new">
                  <img className="h-[50px]" alt="moonbeam" src={moonbeam} />
                </a>
              </div>
              <div className="flex flex-col">
                <p className="pb-2 text-sm font-sora leading-normal text-white text-opacity-70">
                  Secured by
                </p>
                <a href="https://polkadot.com/" target="_new">
                  <img className="h-[50px]" alt="polkadot" src={polkadot} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <FooterBar />
      </div>
    </>
  );
}
