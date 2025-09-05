import { AnimatedComponent } from "./Observer";
import { Grow } from "@mui/material";

export function AdvancedFeatures() {
  return (
    <>
      <div className="w-full max-w-7xl mx-auto px-4">
        <AnimatedComponent>
          <Grow style={{ transformOrigin: "0 0 0" }} {...{ timeout: 500 }}>
            <div className="w-full bg-gradient-to-r from-[#e346ff] to-[#00c6ff] border border-solid border-transparent overflow-hidden rounded-[8px] bg-[#0a0a0a] relative p-[1px]">
              <div className="w-full bg-[#0a0a0a] rounded-[7px] p-6 md:p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative">
                  {/* Left side - AI Predictions */}
                  <div className="flex flex-col">
                    <h3 className="text-white text-xl md:text-2xl font-sora font-normal text-center mb-6 relative">
                      AI-Powered Game Predictions
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white to-transparent"></div>
                    </h3>
                    <p className="text-white text-base md:text-lg font-light leading-relaxed text-left opacity-90">
                      Tap into the power of data with our AI-Powered Game Predictions. Our advanced system analyzes real-time stats, player performance, and historical trends to deliver highly accurate predictions for upcoming games. These insights are exclusive to VIP users and give you a major edge in every game mode on the platform.
                    </p>
                  </div>

                  {/* Vertical divider line - subtle white gradient */}
                  <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white to-transparent transform -translate-x-1/2"></div>

                  {/* Right side - Marketplace */}
                  <div className="flex flex-col">
                    <h3 className="text-white text-xl md:text-2xl font-sora font-normal text-center mb-6 relative">
                      Buy/Sell Marketplace for Picks
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white to-transparent"></div>
                    </h3>
                    <p className="text-white text-base md:text-lg font-light leading-relaxed text-left opacity-90">
                      Turn your game sense into income with the Buy/Sell Marketplace. Skilled players can list their picks for others to buy, while newer users can purchase top-tier strategies from proven performers. It's a dynamic, reputation-driven exchange designed to reward knowledge, accuracy, and trust.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Grow>
        </AnimatedComponent>
      </div>
    </>
  );
}