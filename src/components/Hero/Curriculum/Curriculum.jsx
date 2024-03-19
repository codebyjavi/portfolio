import React from 'react';
import CV_Javier_Gonzalez_PDF from './CV_Javier_González.pdf';

const DownloadPDFButton = () => {

  const downloadPDF = () => {
    const link = document.createElement('a');
    link.href = CV_Javier_Gonzalez_PDF;
    link.download = 'CV_Javier_González.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button className="text-black font-semibold px-3 py-1 bg-yellow-400/90 hover:bg-yellow-300 rounded-md" onClick={downloadPDF}>
        Descargar CV
    </button>
  );
};

export default DownloadPDFButton;

