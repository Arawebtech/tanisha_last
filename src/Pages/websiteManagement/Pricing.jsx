import React, { useState } from "react"; 
import ArticleIcon from '@mui/icons-material/Article';
import HomeIcon from '@mui/icons-material/Home';
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

const Pricing = () => {


  return (
    <div className="lg:ml-[264px] min-h-screen bg-gray-100 p-[70px_15px_15px] font-font">   
      {/* Page Header */}
       <PageHeader/>
       
      <div className="rounded-lg bg-white shadow-sm p-6">
         <h2 className="mb-4 text-[18px] text-[#1E2022] font-semibold"><HomeIcon/>Pricing</h2>
        {/* Banner Section */}
        {/* <Banner/> */}
      
      <div className="flex flex-row gap-6 mb-4">
        <div className="w-1/2">
            <Label className="" text="Banner Title" />
        <br/>
        <FileInput />
        </div>
        <div className="w-1/2">
            <Label className="" text="Banner Image" />
        <br/>
        <FileInput />
        </div>
    </div>

    {/* Description Section */}
        <Section title="Description">
            <div>
              <Label text="Text/Stats" />
              <Input placeholder="Change Top Heading" />
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

export default Pricing;
