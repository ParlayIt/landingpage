import * as React from "react";
import { NavigationLinks } from "./NavigationLinks";
import parlaylogo from "../images/parlaylogo.png";

export function NavigationBar() {
  return (
    <div className="w-full flex item-center justify-between gap-5 px-5 md:px-20 p-3 text-sm leading-none text-white rounded-lg border border-solid bg-black bg-opacity-50 border-white border-opacity-10">
      <img
        loading="lazy"
        src={parlaylogo}
        alt=""
        className="object-contain shrink-0 self-start max-w-full aspect-[3.73] w-[149px]"
      />
      <NavigationLinks />
      <div className="w-[180px] self-stretch p-0.5 rounded-md text-center bg-gradient-to-r from-[#e346ff] to-[#00c6ff] border border-solid border-transparent">
        <a href="https://parlay.it" target="_new">
          <button className="w-full h-full px-1 rounded-md bg-black/75">
            Enter the Arena
          </button>
        </a>
      </div>
    </div>
  );
}
