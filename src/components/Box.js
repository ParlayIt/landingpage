import fade from "../images/vectorfading.svg";

export function Box(props) {
  return (
    <>
      <div className="w-full h-full mb-3 bg-gradient-to-r from-[#e346ff] to-[#00c6ff] border border-solid border-transparent overflow-hidden rounded-[5px] bg-[#ffffff1a] relative">
        <div className="w-full h-full bg-black p-1">
          <div className="px-5 pb-0 text-2xl text-white font-sora">
            {props.title}
          </div>
          <div className="mt-2 relative">
            <img className="w-full" alt="fade" src={fade} />
          </div>
          <div className="mt-4 px-5 leading-normal">
            <span className="text-lg font-light text-white text-opacity-70">
              {props.description}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
