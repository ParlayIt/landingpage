import base from "../images/base.png";
import { Collapse, Slide, Grow } from "@mui/material";
import { AnimatedComponent } from "./Observer";

export function Partners() {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="w-full relative flex justify-center">
          <div className="z-[-1] absolute w-[900px] h-[200px] rounded-[400px/200px] blur-[100px] bg-gradient-to-r from-[#e346ff] to-[#00c6ff] opacity-50"></div>
        </div>
        <div className="w-full relative flex flex-row flex-wrap gap-20 justify-center">
          <AnimatedComponent>
            <Slide direction="right">
              <div className="flex flex-col">
                <p className="pb-2 text-sm font-sora leading-normal text-white text-opacity-70">
                  Powered by
                </p>
                <a href="https://base.org/" target="_new">
                  <img className="h-[50px]" alt="base" src={base} />
                </a>
              </div>
            </Slide>
          </AnimatedComponent>
        </div>
      </div>
    </>
  );
}
