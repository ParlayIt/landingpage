import * as React from "react";
import { Link } from "react-router-dom";

export function NavigationLinks() {
  const links = [
    { name: "Github", link: "https://github.com/ParlayIt" },
    {
      name: "Whitepaper",
      link: "https://github.com/ParlayIt/Documents/blob/main/ParlayIt_whitepaper_FINAL.pdf",
    },
  ];

  return (
    <div className="hidden md:flex gap-8 justify-center items-center my-auto font-light tracking-wide whitespace-nowrap">
      {links.map((item) => (
        <a
          href={item.link}
          target="_new"
          className="self-stretch my-auto bg-blend-difference"
        >
          {item.name}
        </a>
      ))}
    </div>
  );
}
