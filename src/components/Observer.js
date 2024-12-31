import { useState, useEffect, useRef } from "react";

export const AnimatedComponent = (props) => {
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
    <>
      <div ref={containerRef}>{isVisible ? props.children : <></>}</div>
    </>
  );
};
