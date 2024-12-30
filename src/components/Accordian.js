import { useState } from "react";
import fade from "../images/vectorfading.svg";

export function Accordian(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="mb-3  overflow-hidden rounded-[5px] relative">
        {/* <div className="bg-black p-1"> */}
        <button
          className="w-full py-2 text-left text-white font-sora transition duration-300"
          onClick={toggleAccordion}
        >
          {props.title}
          <span className="w-[25px] h-[25px] p-0.5 float-right text-center flex justify-center items-center bg-gradient-to-r from-[#e346ff] to-[#00c6ff] rounded-md">
            <span
              className={`w-full h-full p-1 rounded-md text-center text-[12px] bg-black/80 transition-transform duration-300 ${
                isOpen ? "rotate-180" : "rotate-0"
              }`}
            >
              &#9660;
            </span>
          </span>
        </button>
        <div className="relative">
          <img className="w-full" alt="fade" src={fade} />
        </div>
        {isOpen && (
          <div className="py-4 text-white text-left">
            <p className="relative self-stretch font-sora font-light text-[#ffffffb2] text-sm tracking-wide leading-[normal]">
              {props.data}
            </p>
          </div>
        )}
        {/* </div> */}
      </div>
    </>
  );
}
