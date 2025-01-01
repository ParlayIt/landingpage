import { AnimatedComponent } from "../components/Observer";
import { Collapse, Fade, Slide, Zoom, Grow } from "@mui/material";
import { Box } from "./Box";

export function Boxes() {
  //   const [containerRef, isVisible] = UseElementOnScreen({
  //     root: null,
  //     rootMargin: "0px",
  //     threshold: 1,
  //   });
  return (
    <>
      {" "}
      <div className="grid md:grid-cols-3 md:gap-5">
        <div className="col-span-1 flex">
          <AnimatedComponent>
            <Grow style={{ transformOrigin: "0 0 0" }} {...{ timeout: 500 }}>
              <div>
                <Box
                  title="Forge New Connections"
                  description="Friend zone is our unique take on a social network that is directly integrated within our dApp to create a smooth user experience."
                />
              </div>
            </Grow>
          </AnimatedComponent>
        </div>
        <div className="col-span-2 flex flex-col">
          <AnimatedComponent>
            <Grow style={{ transformOrigin: "0 0 0" }} {...{ timeout: 500 }}>
              <div>
                <Box
                  title="Group Chats"
                  description="This is an experimental feature that will allow users to create and participate in decentralized chats to form stronger bonds."
                />
              </div>
            </Grow>
          </AnimatedComponent>
          <AnimatedComponent>
            <Grow style={{ transformOrigin: "0 0 0" }} {...{ timeout: 500 }}>
              <div>
                <Box
                  title="Head 2 Head"
                  description="Utilizing Friend Zone, our players are able to go Head to Head and challenge their friends to see who is the better Parlayer."
                />
              </div>
            </Grow>
          </AnimatedComponent>
        </div>
      </div>
    </>
  );
}
