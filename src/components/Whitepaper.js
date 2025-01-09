// import { Page, Text, View, Document } from "react-pdf";
import MyDocument from "../images/parlayit_whitepaper.pdf";
// import { PDFViewer } from "@react-pdf/renderer";
import { Document, Outline, Page } from "react-pdf";
import { useState, useEffect, useRef } from "react";
import { pdfjs } from "react-pdf";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

// Create Document Component
export function Whitepaper() {
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
      <div
        ref={ref}
        className="w-full h-screen flex flex-col items-center overflow-x-hidden"
      >
        {/* <div className="flex flex-col">
          <p className="text-white text-bold">
            Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
          </p>
          <div className="flex gap-20">
            <button
              className="text-white text-bold"
              type="button"
              disabled={pageNumber <= 1}
              onClick={previousPage}
            >
              Previous
            </button>
            <button
              className="text-white text-bold"
              type="button"
              disabled={pageNumber >= numPages}
              onClick={nextPage}
            >
              Next
            </button>
          </div>
        </div> */}
        <Document file={MyDocument} onLoadSuccess={onDocumentLoadSuccess}>
          {/* <Page width={width} className="pdf-page" pageNumber={pageNumber} /> */}
          {/* <Outline onItemClick={onItemClick} /> */}
          {Array.from(new Array(numPages), (_el, index) => (
            <Page
              width={width}
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              //   width="100%"
              //   width={
              //     containerWidth ? Math.min(containerWidth, maxWidth) : maxWidth
              //   }
            />
          ))}
        </Document>
      </div>
      {/* <div className="w-full h-screen">
        <iframe
          className="w-full h-full"
          src={MyDocument}
          width={100}
          height={100}
        />
      </div> */}
      {/* <PDFViewer className="w-full h-full">
        <Document file={{ data: MyDocument }}></Document>
      </PDFViewer> */}
    </>
  );
}
