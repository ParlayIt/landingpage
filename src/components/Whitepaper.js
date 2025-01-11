// import { Page, Text, View, Document } from "react-pdf";
import MyDocument from "../whitepaper.pdf";
// import { PDFViewer } from "@react-pdf/renderer";
import { useState, useEffect, useRef } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";

// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//   "pdfjs-dist/legacy/build/pdf.worker.min.mjs",
//   import.meta.url
// ).toString();
// pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;
// pdfjs.GlobalWorkerOptions.workerSrc = `${process.env.PUBLIC_URL}/scripts/pdf.worker.js`;
// pdfjs.GlobalWorkerOptions.workerSrc =
//   "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js";
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.8.69/pdf.worker.min.js`;

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

  // useEffect(() => {
  //   // pdfjs.GlobalWorkerOptions.workerSrc = `${process.env.PUBLIC_URL}/scripts/pdf.worker.mjs`;
  // }, []);

  return (
    <>
      <div
        ref={ref}
        className="w-full h-full flex flex-col text-white items-center overflow-x-hidden"
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
        {/* <div className="flex flex-col text-white relative top-5 items-center"> */}
        <Document
          className="mt-10 pt-5"
          file={MyDocument}
          onLoadSuccess={onDocumentLoadSuccess}
        >
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
        {/* </div> */}
      </div>
    </>
  );
}
