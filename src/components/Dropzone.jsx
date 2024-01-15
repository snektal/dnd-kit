import React, { useCallback, useContext } from "react";
import { useDropzone } from "react-dropzone";
// import { DropzoneContext } from "../App";

function Dropzone(setFileContents) {
  // const { setFileContents } = useContext(DropzoneContext);

  const onDrop =
    ((acceptedFiles) => {
      acceptedFiles.map((file) => {
        const reader = new FileReader();

        reader.onabort = () => console.log("file reading was aborted");
        reader.onerror = () => console.log("file reading has failed");
        reader.onload = () => {
          // Do whatever you want with the file contents
          setFileContents(reader.result);
          console.log(reader.result);
        };
        reader.readAsText(file);

        <ul>
          <li key={file.name}>
            {file.path} - {file.size} bytes - {file.contents}
          </li>
        </ul>;
      });
    },
    []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  return (
    <>
      <div
        {...getRootProps({ className: "dropzone" })}
        style={{ height: "100px" }}
      >
        <input className="input-zone" {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <div className="text-center">
            <p className="dropzone-content">
              Drag’n’drop some files here, or click to select files
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export default Dropzone;
