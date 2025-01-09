import * as React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggle,
  NavbarLink,
} from "flowbite-react";
import { NavigationLinks } from "./NavigationLinks";
import parlaylogo from "../images/parlaylogo.png";
// import {
//   usePDF,
//   renderToStream,
//   BlobProvider,
//   PDFDownloadLink,
// } from "@react-pdf/renderer";
// import { Whitepaper } from "./Whitepaper";
import { Link } from "react-router-dom";
// import documentW from "../images/whitepaper.pdf";

export function NavigationBar() {
  const links = [
    { name: "Github", link: "https://github.com/ParlayIt" },
    {
      name: "Whitepaper",
      link: "https://github.com/ParlayIt/Documents/blob/main/ParlayIt_whitepaper_FINAL.pdf",
    },
    { name: "Documents", link: "https://github.com/ParlayIt/Documents" },
  ];

  // const [instance, updateInstance] = usePDF({ document: Whitepaper });

  // if (instance.loading) return <div>Loading ...</div>;

  // if (instance.error) return <div>Something went wrong: {instance.error}</div>;

  return (
    <Navbar
      theme={{
        root: {
          base: "bg-white px-5 py-2.5 dark:border-gray-700 dark:bg-gray-800 sm:px-4",
        },
        collapse: {
          base: "w-full md:block md:w-auto",
          list: "mt-4 gap-5 text-right text-medium flex flex-col md:mt-0 md:flex-row md:space-x-8",
          hidden: {
            on: "hidden",
            off: "",
          },
        },
        toggle: {
          base: "inline-flex items-center rounded-lg px-4 py-2 w-10 h-10 rounded-lg focus:outline-none text-gray-500 hover:text-gray-100 md:hidden",
          icon: "h-6 w-6 shrink-0",
        },
      }}
      className="z-10 fixed top-0 left-0 right-0 w-full flex flex-row item-center justify-between text-sm leading-none text-white rounded-lg border border-solid bg-black bg-opacity-80 border-white border-opacity-10"
    >
      <NavbarBrand>
        <img
          loading="lazy"
          src={parlaylogo}
          alt=""
          className="object-contain shrink-0 self-start max-w-full aspect-[3.73] w-[149px]"
        />
      </NavbarBrand>

      <div className="flex md:order-2 flex-row items-center justify-center">
        {/* <div> */}
        <a
          className="p-0.7 rounded-md text-center bg-gradient-to-r from-[#e346ff] to-[#00c6ff] border border-solid border-transparent"
          href="https://parlay.it"
          target="_new"
        >
          <button className="w-[150px] h-[30px] p-1 rounded-md bg-black/75">
            Enter the Arena
          </button>
        </a>
        {/* </div> */}
        <NavbarToggle />
      </div>
      <NavbarCollapse
      // className="my-auto font-light tracking-wide whitespace-nowrap"
      >
        {/* <div className=""> */}
        <NavigationLinks />
        {/* <a
          href="./whitepaper"
          download="parlayit_whitepaper.pdf"
          onClick={() => window.open(instance.blob)}
        >
          Whitepaper
        </a> */}
        <Link
          to="./whitepaper"
          target="_new"
          className="mt-0 self-stretch my-auto bg-blend-difference"
        >
          Whitepaper
        </Link>
        {/* </div> */}
      </NavbarCollapse>
    </Navbar>
  );
}
