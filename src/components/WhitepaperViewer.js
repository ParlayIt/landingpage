import MyDocument from "../whitepaper.pdf";
// import { PDFViewer } from "@react-pdf/renderer";
import { useState, useEffect, useRef } from "react";

// Create Document Component
export function WhitepaperViewer() {
  const ref = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (ref.current) {
      setWidth(ref.current.offsetWidth);
    }
  }, []);

  const [numPages, setNumPages] = useState(1);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }
  return (
    <>
      <div className="w-full h-screen overflow-hidden">
        <iframe
          className="mt-10 pt-5 w-full h-full"
          src={MyDocument}
          width={100}
          height={100}
        />
      </div>
      {/* <PDFViewer className="w-full h-full">
        <Document file={{ data: MyDocument }}></Document>
      </PDFViewer> */}
    </>
  );
}
