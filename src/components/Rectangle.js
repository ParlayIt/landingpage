import fade from "../images/vectorfading.svg";

export function Rectangle(props) {
  return (
    <>
      <div className="relative rounded-md bg-gradient-to-r from-[#e346ff] to-[#00c6ff] flex flex-col items-center p-0.5 mb-5 max-h-[250px] min-w-[200px] w-[300px]">
        <div className="bg-black/85 px-1 rounded-md max-h-[240px]">
          <div className="absolute top-[-120px] flex relative flex-col justify-center items-center w-full self-stretch aspect-square max-md:px-5">
            <img
              loading="lazy"
              src={props.image}
              alt={`feature illustration`}
              className="inset-0 w-3/4"
            />
            {/* <img
            loading="lazy"
            src={props.image}
            alt=""
            className="object-contain mt-6 max-w-full aspect-[200] w-[189px]"
          /> */}
            <div className="w-full px-5 pb-0 text-2xl text-white font-sora">
              {props.title}
            </div>
            <div className="mt-2 relative">
              <img className="w-full" alt="fade" src={fade} />
            </div>
            <div className="w-full mt-4 px-5 leading-normal">
              <span className="text-lg font-light text-white text-opacity-70">
                {props.description}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
