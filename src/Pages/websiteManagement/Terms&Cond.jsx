import React, { useRef, useState } from "react";
import ArticleIcon from '@mui/icons-material/Article';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import FileInput from "./FileInput";
import PageHeader from "./PageHeader";
import Banner from "./Banner";

const Label = ({ text }) => (
  <label className="text-[14px] text-[#334257] font-medium ">{text}</label>
);

const Input = ({ placeholder }) => (
  <input
    type="text"
    placeholder={placeholder}
    className="w-full rounded-md border border-[#E7EAF3] px-3 py-2 text-[14px]
               text-[#A0A0A0] focus:outline-none focus:ring-2 focus:ring-teal-500"
  />
);

const Section = ({ title, children }) => (
  <div className="rounded-md border border-gray-200 p-4 mb-6">
    <h3 className="mb-4 text-[#000000] font-semibold text-[14px] ">{title}</h3>
    {children}
  </div>
);

const Terms = () => {
  const [activePage, setActivePage] = useState("Terms & Conditions"); 
  const [view, setView] = useState("desktop");
  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState("");
  const pages = [
    "Homepage",
    "About Us",
    "Our Services",
    "Pricing",
    "Contact Us",
    "Privacy Policy",
    "Terms & Conditions",
    "Disclaimer",
  ];
    

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    }
  };

  return (
    <div className="lg:ml-[264px] min-h-screen bg-gray-100 p-[70px_15px_15px] font-font">   
      {/* Page Header */}
      {/* <div className="mb-6">
        <h1 className="text-[20px] font-semibold text-[#1E2022] font-semibold"><ArticleIcon Size={14}/> Page Setting</h1>
        <div className="mt-2 flex flex-wrap gap-4 text-[14px] text-[#334257] ">
          {pages.map((page) => (
            <span
              key={page}
              onClick={() => setActivePage(page)}
              className={`cursor-pointer transition-colors duration-200 ${
                activePage === page
                  ? "text-[#005555] font-semibold"
                  : "text-[#334257] hover:text-[#005555]"
              }`}>
              {page}
            </span>
          ))}
        </div>
      </div> */}
      <PageHeader/>
       
      <div className="rounded-lg bg-white shadow-sm p-6">
         <h2 className="mb-4 text-[18px] text-[#1E2022] font-semibold">
          <BusinessCenterIcon />Terms & Conditions
          </h2>
        {/* Banner Section */}
       <Banner/>

 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">

      {/* Banner Title */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-gray-700">
          Banner Title
        </label>
        <input
          type="text"
          placeholder="Enter banner title"
          className="h-10 rounded-md border border-gray-300 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-teal-500"
        />
      </div>

      {/* Banner Image Upload */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-gray-700">
          Banner Subtitle
        </label>
        <FileInput/>
      </div>

    </div>  

    {/* Terms & Conditions Section */}
        <Section title="Terms & Conditions Content">
            <div>
              <Label text="All Text" />
              <Input placeholder="Change Title" />
            </div>
        </Section>
  
  {/* SEO Preview Section - Last */}
<Section>
    <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#E7EAF3]">
    <div className=" rounded-lg overflow-hidden shadow-sm bg-white">  
      <div className="px-4 py-3 bg-white ">
        <h1 className="text-[#000000] text-[16px] mb-4 font-semibold">Search Engine Listing Preview</h1>
        <h2 className="text-[16px] font-semibold text-[#1900D5] leading-tight mb-1">
          Lorem Ipsum is simply dummy text 
        </h2>
        <p className="text-[14px] text-[#007F3B] truncate">https://yoursite.com/page</p>
        <p className="text-[14px] text-[#1E2022] leading-relaxed max-h-[60px] overflow-hidden line-clamp-3 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies 
          diam in mauris fermentum, id feugiat dolor eleifend. Aliquam erat volutpat.
        </p>
      </div>

      <div className="p-4 space-y-3">
        <div>
          <Label text="Page Title" />
          <Input placeholder="Page title dummy text of the printing..." />
          <p className="font-normal text-[12px] text-[#A0A0A0]">42 to 70 characters used</p>
        </div>
        <div>
          <Label text="Description" />
          <Input placeholder="Lorem ipsum dolor sit amet..." />
          <p className="font-normal text-[12px] text-[#A0A0A0]">118 to 320 characters used</p>
        </div>
        <div>
          <Label text="URL And Handle" />
          <Input placeholder="yoursite.com/page" />
        </div>
      </div>
    </div>
  </div>
</Section>

      <div className="flex flex-row justify-end gap-3 ">
        <button className="bg-[#F4F5F7] text-[#334257] hover:bg-[#107980] hover:text-[#FFFFFF] px-2 py-2">Reset</button>
        <button className=" bg-[#F4F5F7] text-[#334257] hover:bg-[#107980] hover:text-[#FFFFFF] px-4 py-2">Save</button>
       </div>
      </div>
    </div>
  );
};

export default Terms;
