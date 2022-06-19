// import React, { useState } from 'react';
// import { Document, Page } from 'react-pdf';


// const pdfViewer = () => {

//     const [numPages, setNumPages] = useState(null);
//     const [pageNumber, setPageNumber] = useState(1);

//     function onDocumentLoadSuccess({ numPages }) {
//         setNumPages(numPages);
//     }

//     return (
//         <div id='projects_dummy' className='w-full'>
//             <div className='max-w-[1240px] mx-auto px-2 py-16'>
//                 <Document file="../public/files/resume.pdf" onLoadSuccess={onDocumentLoadSuccess}>
//                     <Page pageNumber={pageNumber} />
//                 </Document>
//             </div>
//         </div>
//     )
// }
// export default pdfViewer