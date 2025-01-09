import * as React from "react";
import { Link } from "react-router-dom";
import { NavbarLink } from "flowbite-react";

export function NavigationLinks() {
  const links = [
    { name: "Github", link: "https://github.com/ParlayIt" },
    { name: "Documents", link: "https://github.com/ParlayIt/Documents" },
  ];

  return (
    <>
      {/* <ul className="w-full flex flex-col justify-center items-center mt-0 mr-4 absolute z-20 overflow-y-auto md:relative md:p-0 rounded-lg md:flex-row md:space-x-14 rtl:space-x-reverse md:mt-0 md:border-0"> */}
      {links.map((item, index) => (
        <a
          key={index}
          href={item.link}
          target="_new"
          className="mt-0 self-stretch my-auto bg-blend-difference"
        >
          {item.name}
        </a>
      ))}
      {/* </ul> */}
    </>
  );
}
