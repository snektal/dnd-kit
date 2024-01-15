import React, { createContext, useState } from "react";
import MyComponent from "./components/MyComponent";
// import Dropzone from "./components/Dropzone";
import Dropzone from "react-dropzone";
import FileContents from "./components/FileContents";

export const DropzoneContext = createContext();

const App = () => {
  const [fileContents, setFileContents] = useState("");
  const onDrop = (acceptedFiles) => {
    acceptedFiles.map((file) => {
      console.log(acceptedFiles);
      const reader = new FileReader();

      reader.readAsText(file);

      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        let result = reader.result;

        if (!result.startsWith("{")) {
          const message = `File ${file.path} is not a valid Json`;
          console.log(message);
          setFileContents(message);
        } else {
          setFileContents(result);
          console.log(result);
        }
      };

      <ul>
        <li key={file.name}>
          {file.path} - {file.size} bytes - {file.contents}
        </li>
      </ul>;
    });
  };
  return (
    <div>
      <h1>Drag and Drop Example</h1>
      <MyComponent />
      <div className="container">
        <h1 className="text-center">Drag and Drop Test</h1>
        {/* <DropzoneContext.Provider value={setFileContents}> */}
        <Dropzone onDrop={onDrop}>
          {({ getRootProps, getInputProps, isDragActive }) => (
            <div
              {...getRootProps()}
              style={{
                width: "300px",
                margin: "10px",
                padding: "20px",
                border: "1px dashed white",
              }}
            >
              <input
                {...getInputProps()}
                // style={{
                //   margin: "10px",
                //   padding: "20px",
                //   border: "1px dashed white",
                // }}
              />
              {isDragActive
                ? "Drop it here"
                : "Click here or drag a file to dashed box"}
            </div>
          )}
        </Dropzone>
        {/* </DropzoneContext.Provider> */}
        {/* <FileContents contents={fileContents} /> */}
        <div
          style={{
            marginBottom: "8px",
            padding: "8px",
            border: "1px solid black",
          }}
        >
          <div type="text">
            <pre>{fileContents}</pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
