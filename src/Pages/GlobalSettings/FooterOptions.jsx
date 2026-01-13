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

const FooterOptions = () => {

  const disabledLinks = [
  "About Us",
      "Contact Us",
      "Locate Us",,
];

  return (
    <div className="lg:ml-[264px] min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-[70px_15px_15px] font-font">

      <GlobalHeader />

      <div className="bg-white rounded-lg shadow-sm p-6">
        {/* Page Title */}
        <h2 className="mb-6 flex items-center gap-2 text-[16px] font-semibold text-[#1E2022]">
          <BusinessCenterIcon fontSize="small" />
          Footer Options
        </h2>


        {/* ROW */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          {/* CTA Button */}
         <Card title="Company Info">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-[#334257] text-[14px]">Mission Statement</label>
                <Input className="text-[#A0A0A0] text-[14px]" placeholder="Change Title" />
              </div>
              <div>
                <label className="text-[#334257] text-[14px]">About Line </label>
                <Input className="text-[#A0A0A0] text-[14px]" placeholder="Change Title" />
              </div>
            </div>
          </Card>

          
          {/*Contact Info */}
          <Card title="Contact Info">
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="text-[#334257] text-[14px]"> Phone  </label>
                <Input className="text-[#A0A0A0] text-[14px]" placeholder="Change Title" />
              </div>
              <div>
                <label className="text-[#334257] text-[14px]">Email </label>
                <Input className="text-[#A0A0A0] text-[14px]" placeholder="Change Title" />
              </div>
              <div>
                <label className="text-[#334257] text-[14px]">Address </label>
                <Input className="text-[#A0A0A0] text-[14px]" placeholder="Change Title" />
              </div>
            </div>
          </Card>

          {/* Sticky Toggle */}
          {/* <div className=" ">
          <Card title="Sticky Header Toggle">
          </Card>
          </div> */}

          <Card title="Copyright Text">
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="text-[#334257] text-[14px]"> © 2024 Fabodry </label>
                <Input className="text-[#A0A0A0] text-[14px]" placeholder="Change Title" />
              </div>
            </div>
          </Card>
        </div>

         {/* SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">


          {/* support links */}
                <Card title="Support Links">
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
    {[
      "Home",
      "Pricing",
      "Franchise",
      "Privacy Policy",
      "About Us",
      "Contact Us",
      "Locate Us",
      "Terms",
      "Our Services",
      "Blog",
      "Career",
      "Disclaimer",
    ].map((item) => {
      const isDisabled = disabledLinks.includes(item);

      return (
        <label
          key={item}
          className={`flex items-center gap-2 text-[14px] border border-[#E7EAF3] whitespace-nowrap
            ${isDisabled ? "text-gray-400 cursor-not-allowed" : "text-[#A0A0A0]"}`}
        >
          <input
            type="checkbox"
            defaultChecked
            disabled={isDisabled}
            className="accent-[#107980]"
          />
          {item}
        </label>
      );
    })}
  </div>
</Card>

         <Card title="Support Links">
  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
    {[
      "Home",
      "Pricing",
      "Franchise",
      "Privacy Policy",
      "About Us",
      "Contact Us",
      "Locate Us",
      "Terms",
      "Our Services",
      "Blog",
      "Career",
      "Disclaimer",
    ].map((item) => {
      const isDisabled = disabledLinks.includes(item);

      return (
        <label
          key={item}
          className={`flex items-center gap-2 text-[14px] border border-[#E7EAF3] whitespace-nowrap
            ${isDisabled ? "text-gray-400 cursor-not-allowed" : "text-[#A0A0A0]"}`}
        >
          <input
            type="checkbox"
            defaultChecked
            disabled={isDisabled}
            className="accent-[#107980]"
          />
          {item}
        </label>
      );
    })}
  </div>
</Card>


        </div>

        {/* social media links */}
        <div className="mt-6">
        <Card title="Social Media Links">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

          <div>
         <Label text="Facebook"/>
         <Input className="text-[#A0A0A0] text-[14px]" placeholder="Change Title" />
         </div>

         <div>
         <Label text="Instagram"/>
         <Input className="text-[#A0A0A0] text-[14px]" placeholder="Change Title" />
         </div>

         <div>
         <Label text="LinkedIn"/>
         <Input className="text-[#A0A0A0] text-[14px]" placeholder="Change Title" />
         </div>

         <div>
         <Label text="Twitter"/>
         <Input className="text-[#A0A0A0] text-[14px]" placeholder="Change Title" />
         </div>

         <div>
         <Label text="WhatsApp"/>
         <Input className="text-[#A0A0A0] text-[14px]" placeholder="Change Title" />
         </div>

         <div>
         <Label text="Threads"/>
         <Input className="text-[#A0A0A0] text-[14px]" placeholder="Change Title" />
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

export default FooterOptions;
