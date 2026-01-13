import React, { useRef, useState } from "react";
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';

const FileInput = ({ placeholder = "Upload Image" }) => {
  const fileRef = useRef(null);
  const [fileName, setFileName] = useState("");

  const handleChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  return (
    <div
      onClick={() => fileRef.current.click()}
      className="relative h-10 cursor-pointer rounded-md border border-gray-300 px-3 flex items-center justify-between text-sm text-gray-400 hover:border-teal-500"
    >
      <span className="truncate">
        {fileName || placeholder}
      </span>

      <span className="text-[#000000]"><CreateNewFolderIcon/></span>

      <input
        ref={fileRef}
        type="file"
        accept="image/*"
        onChange={handleChange}
        className="hidden"
      />
    </div>
  );
};

export default FileInput;
