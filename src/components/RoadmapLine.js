import roadmap from "../images/roadmap.svg";
import roadmapvertical from "../images/roadmapvertical.svg";
import roadmapfill from "../images/roadmapfill.svg";
import rect from "../images/rect.svg";
import rectwhite from "../images/rectwhite.svg";

export function RoadmapLine(props) {
  return (
    <>
      {/* <div className="relative top-[-300px] md:top-[0px] md:left-0 z-[-1]">
        <img
          className="absolute left-[300px] top-[0px] md:left-0 md:w-full h-[30px]"
          alt="roadmap"
          src={roadmap}
        />
        <img
          className="absolute left-[300px] top-[0px] md:left-0 md:w-1/3 h-[30px]"
          alt="roadmap"
          src={roadmapfill}
        />
      </div> */}
      <div className="grid grid-cols-1 grid-rows-3 md:grid-rows-1 md:grid-cols-3">
        {/* <div className="w-full h-full relative"> */}
        {/* </div> */}
        <img
          className="invisible md:visible absolute left-0 top-[43px] md:w-full h-[30px] z-[-1]"
          alt="roadmap"
          src={roadmap}
        />
        <img
          className="absolute left-0 top-[43px] md:w-full h-[30px] z-[-1]"
          alt="roadmap"
          src={roadmapvertical}
        />

        <div className="pt-1 px-5 mb-10 md:mb-0 flex flex-col md:flex-row justify-start items-center md:items-center">
          <img className="relative" alt="rect" src={rectwhite} />
          {/* <img className="w-[100px]" alt="map" src={roadmap} /> */}
          <img className="relative z-[-1]" alt="map" src={roadmapfill} />
        </div>
        <div className="pt-1 px-5 mb-10 md:mb-0 flex flex-col md:flex-row justify-start items-center md:items-center">
          <img className="relative" alt="rect" src={rect} />
          {/* <img
                        className="relative z-[-1] origin-top-right rotate-90 md:rotate-0"
                        alt="map1"
                        src={roadmap}
                      /> */}
        </div>
        <div className="pt-1 px-5 mb-10 md:mb-0 flex flex-col md:flex-row justify-start items-center md:items-center">
          <img className="relative" alt="rect" src={rect} />
          {/* <img
                        className="relative z-[-1] origin-top-right rotate-90 md:rotate-0"
                        alt="map1"
                        src={roadmap}
                      /> */}
        </div>
      </div>
    </>
  );
}
