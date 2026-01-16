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

const AboutUs = () => {
  const [activePage, setActivePage] = useState("About Us"); 
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
  ];

  return (
    <div className="lg:ml-[264px] min-h-screen bg-gray-100 p-[70px_15px_15px] font-font">
    
      {/* Page Header */}
    <PageHeader />
       
      {/* ================= ONE WHITE CONTAINER ================= */}
      <div className="rounded-lg bg-white shadow-sm p-6">
         <h2 className="mb-4 text-[18px] text-[#1E2022] font-semibold"><HomeIcon/> About Us</h2>
        
      
      <div className="flex flex-row gap-6 mb-4">
        <div className="w-1/2">
            <Label className="" text="Banner Image" />
        <br/>
        <FileInput />
        </div>
        <div className="w-1/2">
            <Label className="" text="Page Title" />
        <br/>
        <Input placeholder="Title" />
        </div>
    </div>



  
{/* About Us Section */}
<div className="w-full mb-8">
  <Section title="About Us Content">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
      
      <div className="flex flex-col gap-1">
        <Label text="Title" />
        <Input placeholder="Change Title" />
      </div>

      <div className="flex flex-col gap-1">
        <Label text="Heading" />
        <Input placeholder="Change Heading" />
      </div>

      <div className="flex flex-col gap-1">
        <Label text="Description" />
        <Input placeholder="Change Description" />
      </div>

      <div className="flex flex-col gap-1">
        <Label text="Video Upload" />
        <FileInput />
      </div>

      <div className="flex flex-col gap-1">
        <Label text="URL Option" />
        <Input placeholder="Enter URL" />
      </div>

    </div>
  </Section>
</div>

 {/* Services Section */}
<div className="w-full">
  <Section title="Services Section">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

      <div className="flex flex-col gap-1">
        <Label text="Title" />
        <Input placeholder="Change Title" />
      </div>

      <div className="flex flex-col gap-1">
        <Label text="Heading" />
        <Input placeholder="Change Heading" />
      </div>

      <div className="flex flex-col gap-1">
        <Label text="Process Steps" />
        <Input placeholder="Add Steps" />
      </div>

    </div>
  </Section>
</div>

{/* Process Section */}
<div className="w-full mb-8">
  <Section title="Process Section">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">

      {/* Heading */}
      <div className="flex flex-col gap-1">
        <Label text="Heading" />
        <Input placeholder="Enter Section Heading" />
      </div>

      {/* Title */}
      <div className="flex flex-col gap-1">
        <Label text="Title" />
        <Input placeholder="Enter Section Title" />
      </div>

      {/* Step Number */}
      <div className="flex flex-col gap-1">
        <Label text="Step Number" />
        <Input placeholder="Enter Step Number" />
      </div>

      {/* Image */}
      <div className="flex flex-col gap-1">
        <Label text="Image" />
        <FileInput />
      </div>

      {/* Name */}
      <div className="flex flex-col gap-1">
        <Label text="Name" />
        <Input placeholder="Enter Name" />
      </div>

    </div>
  </Section>
</div>


          {/* why choose us */}
        <div className="mb-6 rounded-md border border-gray-200 bg-white p-4">
        <h3 className="mb-4 text-[14px] font-semibold text-[#000000]">
          Our Mission/Vission
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-6">
          {/* LEFT FORM */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
        <Label text="Title" />
        <Input placeholder="Change Title" />
        </div>
        <div>
        <Label text="Heading" />
        <Input placeholder="Change Title" />
        </div>
        <div>
        <Label text="Description" />
        <Input placeholder="Change Title" />
      </div>
    </div>  
   

    {/* RIGHT CARD */}
    <div className="rounded-md p-4 -mt-16">
       
      <div className="mb-4 flex items-center justify-start mt-2">
        <span className="text-[14px] font-semibold text-[#334257]">
          Mission
        </span>
        <select className=" px-2 py-1 text-[13px]">
          <option></option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 -mt-2">
        <div>
          <Label text="Heading" />
          <Input placeholder="Change Title" />
        </div>
        <div>
          <Label text="Description" />
          <Input placeholder="Change Title" />
        </div>
      </div>
    </div>
  </div>
</div>

   

   {/* franchise section */}
   {/* <div className="flex gap-6"> */}
   <div className="flex flex-col md:flex-row gap-6">
  
     {/* franchise Section */}
   <div className="w-full flex-[1.4]">
    <Section title="Franchise Box">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <Label text="Title" />
          <Input placeholder="Change Title" />
        </div>
        <div>
          <Label text="Heading" />
          <Input placeholder="Change Text" />
        </div>
        <div>
          <Label text="Description" />
          <Input placeholder="Change Icon" />
        </div>
      </div>
    </Section>
  </div>
  <div className="w-full flex-[1.6]">
    <Section title="Locate US Box">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <Label text="Title" />
          <Input placeholder="Change Title" />
        </div>
        <div>
          <Label text="Icon" />
          <Input placeholder="Change Text" />
        </div>
        <div>
          <Label text="Description" />
          <Input placeholder="Change Icon" />
        </div>
        <div>
          <Label text="CTA" />
          <Input placeholder="Change Icon" />
        </div>
      </div>
    </Section>
  </div>

  <div className="w-full flex-[1.6]">
    <Section title="Contact Box">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <Label text="Title" />
          <Input placeholder="Change Title" />
        </div>
        <div>
          <Label text="Icon" />
          <Input placeholder="Change Text" />
        </div>
        <div>
          <Label text="Description" />
          <Input placeholder="Change Icon" />
        </div>
        <div>
          <Label text="CTA" />
          <Input placeholder="Change Icon" />
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

export default AboutUs;
