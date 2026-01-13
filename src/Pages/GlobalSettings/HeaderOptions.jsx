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
    className="w-full rounded-md border border-[#7C7C7C85] px-3 py-2 text-[13px]
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

const HeaderOptions = () => {
  return (
    // <div className="lg:ml-[264px] min-h-screen bg-gray-100 p-[70px_15px_15px] font-[Poppins]">
    <div className="lg:ml-[264px] min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-[70px_15px_15px] font-[Poppins] overflow-x-hidden">

      <GlobalHeader />

      <div className="bg-white rounded-lg shadow-sm p-6">
        {/* Page Title */}
        <h2 className="mb-6 flex items-center gap-2 text-[16px] font-semibold text-[#1E2022]">
          <BusinessCenterIcon fontSize="small" />
          Header Options
        </h2>

        {/* TOP SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-6">
          {/* Logo Upload */}
          <Card title="Logo Upload">
  {/* Wrapper to push content right */}
  <div className="flex justify-end -mt-10">
    <div className="border border-[#ACA8A8] rounded-lg h-[140px] w-[50%]
                    flex flex-col items-center justify-center text-center gap-1">
      <FileUploadIcon className="text-[#727070]" />
      <p className="text-[16px] text-[#303030] font-medium">
        Upload picture
      </p>
      <div className="gap-1">
        <p className="text-[12px] text-[#696666]">Format supported</p>
        <p className="text-[12px] text-[#696666]">*jpg, *png</p>
      </div>
    </div>
  </div>
</Card>


          {/* Navigation */}
          <Card title="Navigation">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                "Home",
                "Pricing",
                "Franchise",
                "Privacy Policy",
                "About Us",
                "Contact Us",
                "Locate Us",
                "Terms & Conditions",
                "Our Services",
                "Blog",
                "Career",
                "Disclaimer",
              ].map((item) => (
                <label
                  key={item}
                  className="flex items-center gap-2 text-[14px] border border-[#E7EAF3] text-[#A0A0A0] whitespace-nowrap ">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="accent-[#107980]"
                  />
                  {item}
                </label>
              ))}
            </div>
          </Card>
        </div>

        {/* SECOND ROW */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          {/* CTA Button */}
         <Card title="CTA Button">
        <label className="text-[#334257] text-[14px]">
        Text + Link → "Schedule Free Pickup"
        </label>
         <Input placeholder="Change Title" />
        </Card>

          

          {/* Header Contact Info */}
          <Card title="Header Contact Info">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-[#334257] text-[14px]"> Phone No. </label>
                <Input className="text-[#A0A0A0] text-[14px] " placeholder="Change Title" />
              </div>
              <div>
                <label className="text-[#334257] text-[14px]">Time Slot </label>
                <Input className="text-[#A0A0A0] text-[14px]" placeholder="Change Title" />
              </div>
            </div>
          </Card>

          {/* Sticky Toggle */}
          {/* <div className=" ">
          <Card title="Sticky Header Toggle">
          </Card>
          </div> */}

          <div className=" ">
         <Card> 
  <div className="flex items-center justify-between">
    <h3 className="text-[14px] font-semibold text-[#000000] -mt-2">
      Sticky Header Toggle
    </h3>

    {/* Toggle Switch */}
    <label className="relative inline-flex items-center cursor-pointer">
      <input type="checkbox" className="sr-only peer" />
      <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-[#009FAA] transition"></div>
      <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition peer-checked:translate-x-5"></div>
    </label>
  </div>
  </Card>
  </div>
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

export default HeaderOptions;
