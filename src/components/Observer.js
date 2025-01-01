import React, { useState, useEffect, useContext, useRef } from "react";

// export const Provider = React.createContext();
// // hook
// export function UseObserver() {
//   return useContext(Provider);
// }

export function AnimatedComponent({ children }) {
  const [isVisible, setVisible] = useState(false);
  const containerRef = useRef(null);
  const options = { root: null, rootMargin: "0px", threshold: 1 };

  useEffect(() => {
    const observer = new IntersectionObserver((entries, options) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current); // clean up
      }
    };
  }, []);

  return (
    // <Provider.Provider value={{ isVisible, containerRef }}>
    <div ref={containerRef}>
      {React.cloneElement(children, { in: isVisible })}
      {/* }{isVisible ?  : <></>} */}
    </div>
    // </Provider.Provider>
  );
}
