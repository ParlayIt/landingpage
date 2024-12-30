import stak from "../images/stack.png";
import { Accordian } from "./Accordian";

export function Stack() {
  return (
    <>
      <div className="flex flex-col">
        <Accordian
          title="Parlay Pots"
          data="Our unique P2P wagering system that allows users to take advantage
            of community driven “highest odds” and “most hits” Parlay Pots."
        />
        <Accordian title="Draft a parlay" data="Parlay Pots." />
        <Accordian
          title="Parlay of the week"
          data="Enter the Ultimate Showdown with our revolutionary <br />
        “Parlay Of The Week”. This weekly challenge is winner takes all in this
        battle of the best."
        />
      </div>
      <div className="relative flex justify-center items-center">
        <img
          className="h-[400px] md:absolute right-0 lg:right-[-100px] top-[-100px] object-cover"
          alt="Stak"
          src={stak}
        />
      </div>
    </>
  );
}
