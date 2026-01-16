import React, { useState } from "react"; 
import ArticleIcon from '@mui/icons-material/Article';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import FileInput from "./FileInput";
import PageHeader from "./PageHeader";
import Banner from "./Banner";

const Label = ({ text }) => (
  <label className="text-[14px] text-[#334257] font-medium whitespace-nowrap">{text}</label>
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
  <div className="rounded-md border border-[#7C7C7C85] p-4 mb-6">
    <h3 className="mb-4 text-[#000000] font-semibold text-[14px]">{title}</h3>
    {children}
  </div>
);

const Career = () => {
  const [activePage, setActivePage] = useState("Career Page"); 
   const [view, setView] = useState("desktop");
  const pages = [
    "Homepage",
    "About Us",
    "Our Services",
    "Pricing",
    "Contact Us",
    "Privacy Policy",
    "Terms & Conditions",
    "Disclaimer",
    "Dynamic City Page",
    "Franchise Page",
    "Career Page"
  ];

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
              }`}
            >
              {page}
            </span>
          ))}
        </div>
      </div> */}
      <PageHeader />
       
      {/* ================= ONE WHITE CONTAINER ================= */}
      <div className="rounded-lg bg-white shadow-sm p-6">
         <h2 className="mb-4 text-[18px] text-[#1E2022] font-semibold"><BusinessCenterIcon/>Career Page</h2>
        {/* Banner Section */}
       {/* <Banner/> */}
      
 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
  <div>
    <Label text="Page Title" />
    <FileInput placeholder="Select Banner Img"/>
  </div>
  <div>
    <Label text="Banner Image" />
    <FileInput placeholder="CTA Banner Img"/>
  </div>
</div>



           <Section title="Description-1">
            <div>
              <Input placeholder="Change Title" />
            </div>
        </Section>


 {/* Terms & Conditions Section */}
        <Section title="Main Team Image">
            <div className="flex flex-col items-center justify-center rounded-md border-2 border-dashed border-[#727272] py-6 text-center">
              <p className="text-[14px] text-[#A3A3A3]">Drop files here</p>
              <span className="my-1 text-[14px] text-[#A3A3A3]">or</span>
             <button className="my-1 bg-[#F4F5F7] text-[#334257] text-[14px] px-4 py-2 rounded-md">
             Select Files
            </button>
            </div>
        </Section>

               <Section title="Why Work With Us Section">
  <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
    <div>
      <Label text="Top Heading" />
      <Input placeholder="Change Top Heading" />
    </div>
    <div>
      <Label text="Title" />
      <Input placeholder="Change Main Heading" />
    </div>
    <div>
      <Label text="Description" />
      <Input placeholder="Change Description" />
    </div>
    <div>
      <Label text="Sliding Content Title" />
      <Input placeholder="Change Title" />
    </div>
    <div>
      <Label text="Description" />
      <Input placeholder="Change Description" />
    </div>
  </div>
</Section>

 <Section title="Perks Section">
  <div className="grid grid-cols-1 md:grid-cols-5 gap-4">

    <div>
      <Label text="Title" />
      <Input placeholder="Change Title" />
    </div>

    <div>
      <Label text="Description" />
      <Input placeholder="Change Description" />
    </div>

    <div>
      <Label text="Perk Icon" />
      <Input placeholder="Change Perk Icon" />
    </div>

    <div>
      <Label text="Perk Name" />
      <Input placeholder="Change Title" />
    </div>

    <div>
      <Label text="Perk Description" />
      <Input placeholder="Change Description" />
    </div>

  </div>
</Section>

 {/* section */}
   {/* <div className="flex gap-6"> */}
   <div className="flex flex-col md:flex-row gap-6">
  {/* Job Section */}
  <div className="w-full flex-[2]">
    <Section title="Pickup and Drop Section">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <Label text="Jobs" />
          <Input placeholder="Change Heading" />
        </div>
        <div>
          <Label text="Job Title" />
          <Input placeholder="Change Description" />
        </div>
        <div>
          <Label text="Job Content" />
          <Input placeholder="Change Image" />
        </div>
        <div>
          <Label text="Apply Link" />
          <Input placeholder="Change CTA" />
        </div>
      </div>
    </Section>
  </div>
     {/* USP Section */}
   <div className="w-full flex-[1.2]">
    <Section title="Hiring Procedure Section">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <Label text="Heading" />
          <Input placeholder="Change Title" />
        </div>
        <div>
          <Label text="Title" />
          <Input placeholder="Change Title" />
        </div>
        <div>
          <Label text="Description" />
          <Input placeholder="Change Description" />
        </div>
      </div>
    </Section>
  </div>
</div>

{/* SEO Preview Section - Last */}
<Section>
  
    
    {/* Preview Header */}
    <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#E7EAF3]">
      
    

    {/* Preview Card */}
    <div className=" rounded-lg overflow-hidden shadow-sm bg-white">  

      {/* Title Row */}
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

export default Career;
