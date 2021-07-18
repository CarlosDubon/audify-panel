import React, {useCallback, useState} from 'react';
import {useDropzone} from 'react-dropzone'

const DropZone = (props) => {
  const [file,setFile]=useState("")

  const {getRootProps, getInputProps, isDragActive} = useDropzone({
    accept: "audio/mpeg",
    onDrop: (acceptedFiles) => {
        props.setFile(acceptedFiles[0])
        setFile(acceptedFiles[0].name)
    }
    })


  return (
    <div>
      <div {...getRootProps({
        style: {
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "20px",
          borderWidth: "2px",
          borderRadius: "2px",
          borderColor: "#eeeeee",
          borderStyle: "dashed",
          backgroundColor: "#fafafa",
          color: "#bdbdbd",
          outline: "none",
          transition: "border .24s ease-in-out",
        },
      })}

      >
        <input {...getInputProps()} />
        {
          !file ?
            <p>Drop the files here ...</p> :
            <p>{file}</p>

        }
      </div>
    </div>
  )
};

export default DropZone;
