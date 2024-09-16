import React, { useEffect, useRef, useState } from "react";

const Fileviewer = ({ fileUrl }) => {
  const isPDF = (fileUrl) => {
    return fileUrl.toLowerCase().endsWith(".pdf");
  };

  const isImage = (fileUrl) => {
    return fileUrl.toLowerCase().match(/\.(jpeg|jpg|png|gif)$/);
  };
  console.log("url", fileUrl);

  return (
    <div>
      {isPDF(fileUrl) ? (
        <div style={{ overflow: "hidden", outline: "none" }}>
          <object
          aria-label="for"
            width="130"
            height="190"
            data={fileUrl}
            type="application/pdf"
            style={{
              border: "none",
              overflow: "hidden",
              outline: "none",
            }}
          ></object>
        </div>
      ) : isImage(fileUrl) ? (
        <img src={fileUrl} alt="score file" width="100%" height="100%" />
      ) : (
        <p>Unsupported file type</p>
      )}
    </div>
  );
};

export default Fileviewer;
