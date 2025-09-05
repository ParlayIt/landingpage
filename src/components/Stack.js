import stak from "../images/stack.png";
import { Accordian } from "./Accordian";
import { AnimatedComponent } from "../components/Observer";
import { Collapse, Fade, Slide, Zoom } from "@mui/material";

export function Stack() {
  // const [containerRef, isVisible] = UseElementOnScreen({
  //   root: null,
  //   rootMargin: "0px",
  //   threshold: 1,
  // });
  return (
    <>
      <div className="grid md:grid-cols-2 gap-5">
        <AnimatedComponent>
          <Zoom>
            <div className="flex flex-col">
              <Accordian
                title="Parlay Game Modes"
                data="Our unique Player-vs-Player (P2P) game modes allow users to compete in dynamic, skill based challenges. These game modes reward creativity, precision, and bold decision-making."/>
              <Accordian
                title="Draft A Parlay"
                data="Our ground breaking “Draft a Parlay“ system allows users to blend the worlds of fantasy and reality with the beauty of Parlays!"
              />
              <Accordian
               title="Skill-Based Tournaments"
                data="Step into the ultimate test of strategy with our weekly Skill-Based Tournaments. Compete against top players in curated game formats where strategy and smart decision-making are the keys to victory."/>
            </div>
          </Zoom>
        </AnimatedComponent>
        <AnimatedComponent>
          <Zoom>
            <div className="relative flex justify-center items-center">
              <img
                className="h-[400px] md:absolute right-0 lg:right-[-100px] top-[-100px] object-cover"
                alt="Stak"
                src={stak}
              />
            </div>
          </Zoom>
        </AnimatedComponent>
      </div>
    </>
  );
}
