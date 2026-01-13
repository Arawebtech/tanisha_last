import React from "react";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import GlobalHeader from "./GlobalHeader";

const Label = ({ text }) => (
  <label className="text-[13px] text-[#334257] font-medium">{text}</label>
);

const Input = ({ placeholder }) => (
  <input
    type="text"
    placeholder={placeholder}
    className="w-full max-w-full rounded-md border border-[#7C7C7C85] px-3 py-2 text-[13px]
    text-[#1E2022] focus:outline-none focus:ring-2 focus:ring-teal-500"
  />
);


const Card = ({ title, children }) => (
  <div className="rounded-lg border border-[#7C7C7C85] bg-white p-4">
    <h3 className="mb-4 text-[14px] font-semibold text-[#000000]">
      {title}
    </h3>
    {children}
  </div>
);

const Extras = () => {


  return (
  // <div className="lg:ml-[264px] min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-[70px_15px_15px] font-[Poppins]">
<div className="lg:ml-[264px] min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-[70px_15px_15px] font-[Poppins] overflow-x-hidden">

    <GlobalHeader />

      <div className="bg-white rounded-lg shadow-sm p-6">
        {/* Page Title */}
        <h2 className="mb-6 flex items-center gap-2 text-[16px] font-semibold text-[#1E2022]">
          <BusinessCenterIcon fontSize="small" />
          Extras
        </h2>

      {/* <div className="w-full lg:w-[30%]"> */}
      <div className="w-full max-w-full lg:w-[30%]">


      <Card title="Custom Codes">
       <div className="grid grid-cols-1 gap-4">

          <div>
            <Label text="Header Code"/>
            <Input placeholder="Change Title"/>
          </div>
          <div>
             <Label text="Footer Code"/>
            <Input placeholder="Change Title"/>
          </div>
        </div>
      </Card>
      </div>

        {/* ACTION BUTTONS */}
         <div className="mt-6 flex justify-end gap-3">
          <button className="px-4 py-2 text-[13px] rounded-md bg-gray-300 text-[#000000] hover:text-[#FFFFFF] hover:bg-[#107980] ">
            Reset
          </button>
          <button className="px-4 py-2 text-[13px] rounded-md bg-gray-300 text-[#000000] hover:text-[#FFFFFF] hover:bg-[#107980]">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Extras;
