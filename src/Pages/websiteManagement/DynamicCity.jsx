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
  <div className="rounded-md border border-gray-200 p-4 mb-6">
    <h3 className="mb-4 text-[#000000] font-semibold text-[14px]">{title}</h3>
    {children}
  </div>
);

const DynamicCity = () => {
  const [activePage, setActivePage] = useState("Dynamic City Page"); 
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
    "Dynamic City Page"
  ];

  return (
    <div className="lg:ml-[264px] min-h-screen bg-gray-100 p-[70px_15px_15px] font-font">
    
      {/* Page Header */}
      <PageHeader/>
      {/* ================= ONE WHITE CONTAINER ================= */}
      <div className="rounded-lg bg-white shadow-sm p-6">
         <h2 className="mb-4 text-[18px] text-[#1E2022] font-semibold"><BusinessCenterIcon/> Dynamic City Page</h2>
        {/* Banner Section */}
        <Banner/>
      
   <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
  
  <div>
    <Label text="City Name" />
    <input
      type="text"
      placeholder="Enter city name"
      className="mt-2 h-10 w-full rounded-md border border-gray-300 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-teal-500"
    />
  </div>

  <div>
    <Label text="Banner Title" />
    <input
      type="text"
      placeholder="Enter banner title"
      className="mt-2 h-10 w-full rounded-md border border-gray-300 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-teal-500"
    />
  </div>

  <div>
    <Label text="Banner Subtitle" />
    <input
      type="text"
      placeholder="Enter banner subtitle"
      className="mt-2 h-10 w-full rounded-md border border-gray-300 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-teal-500"
    />
  </div>

</div>


   {/* service section */}
   {/* <div className="flex gap-6"> */}
   <div className="flex flex-col md:flex-row gap-6">
  
     {/* service Section */}
   <div className="w-full flex-[1.4]">
    <Section title="Service Section">
      <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
        <div>
          <Label text="Service Lists" />
          <Input placeholder="Change Title" />
        </div>
      </div>
    </Section>
  </div>
  <div className="w-full flex-[1.6]">
    <Section title="Commitment Section">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label text="Title" />
          <Input placeholder="Change Title" />
        </div>
        <div>
          <Label text="Text" />
          <Input placeholder="Change Text" />
        </div>
      </div>
    </Section>
  </div>

  <div className="w-full flex-[1.6]">
    <Section title="Pickup & Drop Section">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label text="Steps" />
          <Input placeholder="Change Title" />
        </div>
        <div>
          <Label text="CTA" />
          <Input placeholder="Change Title" />
        </div>
      </div>
    </Section>
  </div>
</div>

  
   {/*  section */}
   {/* <div className="flex gap-6"> */}
   <div className="flex flex-col md:flex-row gap-6">
  
     {/* ReadyToStart Section */}
   <div className="w-full flex-[1.4]">
    <Section title="Ready To Start Section">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label text="Steps" />
          <Input placeholder="Change Title" />
        </div>
        <div>
          <Label text="CTA" />
          <Input placeholder="Change Title" />
        </div>
      </div>
    </Section>
  </div>

  <div className="w-full flex-[1.6]">
    <Section title="FAQ Section">
      <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
        <div>
          <Label text="Change Text" />
          <Input placeholder="Change Title" />
        </div>
      </div>
    </Section>
  </div>

  <div className="w-full flex-[1.6]">
    <Section title="Footer">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        <div>
          <Label text="Company Info" />
          <Input placeholder="Change Title" />
        </div>
        <div>
          <Label text="Quick Links" />
          <Input placeholder="Change Title" />
        </div>
        <div>
          <Label text="Contact Info" />
          <Input placeholder="Change Title" />
        </div>
      </div>
    </Section>
  </div>
</div> 

 {/* Terms & Conditions Section */}
        <Section title="Testimonials Section">
            <div>
              <Label text="Review" />
              <Input placeholder="Change Title" />
            </div>
        </Section>



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

export default DynamicCity;
