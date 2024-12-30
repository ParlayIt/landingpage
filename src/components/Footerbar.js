import parlaylogo from "../images/parlaylogo.png";
import twitter from "../images/twitter.svg";
import discord from "../images/discord.svg";
import telegram from "../images/telegram.svg";
import fade from "../images/vectorfading.svg";
import { Link } from "react-router-dom";
import { NavigationLinks } from "./NavigationLinks";

export function FooterBar() {
  return (
    <div className="flex flex-col item-center justify-center p-3 px-20 rounded-lg border-none bg-black">
      <div className="flex item-center justify-center">
        <img
          loading="lazy"
          src={parlaylogo}
          alt=""
          className="object-contain shrink-0 self-start max-w-full aspect-[3.73] w-[149px]"
        />
      </div>
      <div className="my-5 relative">
        <img className="w-full" alt="fade" src={fade} />
      </div>
      <div className="flex flex-wrap gap-5 justify-center lg:justify-between items-center text-sm leading-none text-white font-light tracking-wide whitespace-nowrap">
        <NavigationLinks />
        <div className="flex flex-wrap gap-5 my-auto">
          <div className="self-stretch my-auto bg-blend-difference">
            Follow us:
          </div>
          <div className="w-[25px] h-[25px] rounded-md  self-stretch p-0.3 text-center bg-gradient-to-r from-[#e346ff] to-[#00c6ff] border border-solid border-transparent">
            <a
              href="https://x.com/Parlayit_io?mx=2"
              target="_new"
              className="p-1 rounded-md  w-full h-full flex justify-center items-center bg-black"
            >
              {/* <span className="w-full h-full bg-gradient-to-r from-[#e346ff] to-[#00c6ff]"> */}
              <img src={twitter}></img>
              {/* </span> */}
            </a>
          </div>
          <div className="w-[25px] h-[25px] rounded-md self-stretch p-0.3 text-center bg-gradient-to-r from-[#e346ff] to-[#00c6ff] border border-solid border-transparent">
            <a
              href="https://discord.com/invite/fAyu8dA3kn"
              target="_new"
              className="p-1 rounded-md w-full h-full flex justify-center items-center bg-black"
            >
              {/* <span className="w-full h-full bg-gradient-to-r from-[#e346ff] to-[#00c6ff]"> */}
              <img src={discord}></img>
              {/* </span> */}
            </a>
          </div>
          <div className="w-[25px] h-[25px] rounded-md self-stretch p-0.3 text-center bg-gradient-to-r from-[#e346ff] to-[#00c6ff] border border-solid border-transparent ">
            <a
              href="https://t.me/+x1A_npWM8xE3YTBh"
              target="_new"
              className="p-1 rounded-md  w-full h-full flex justify-center items-center bg-black"
            >
              {/* <span className="w-full h-full bg-gradient-to-r from-[#e346ff] to-[#00c6ff]"> */}
              <img src={telegram}></img>
              {/* </span> */}
            </a>
          </div>
        </div>
      </div>
      <div className="pt-5 flex justify-center items-center">
        <div className="text-[12px] leading-none text-white font-light tracking-wide whitespace-nowrap self-stretch my-auto bg-blend-difference">
          All rights reserved ParlayIT
        </div>
      </div>
    </div>
  );
}
