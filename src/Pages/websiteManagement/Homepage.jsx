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

// const FileInput = ({ multiple }) => (
//   <input
//     type="file"
//     multiple={multiple}
//     className="w-full text-sm file:mr-3 file:rounded-md file:border-0
//                file:bg-teal-600 file:px-4 file:py-2 file:text-white
//                hover:file:bg-teal-700"
//   />
// );

const Section = ({ title, children }) => (
  <div className="rounded-md border border-gray-200 p-4 mb-6">
    <h3 className="mb-4 text-[#000000] font-semibold text-[14px] ">{title}</h3>
    {children}
  </div>
);

const Homepage = () => {
  const [activePage, setActivePage] = useState("Homepage"); 
  const [view , setView] = useState("desktop");
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
      <PageHeader/>
       
      {/* ================= ONE WHITE CONTAINER ================= */}
      <div className="rounded-lg bg-white shadow-sm p-6">
         <h2 className="mb-4 text-[18px] text-[#1E2022] font-semibold"><HomeIcon/> Homepage</h2>
        {/* Banner Section */}
        <Banner/>

     {/* <div className="flex gap-6"> */}
     <div className="flex flex-col md:flex-row gap-6">

  {/* USP Section */}
  {/* <div className="flex-[1.2]"> */}
<div className="w-full md:flex-[1.2]">


    <Section title="USP Section">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <Label text="Title" />
          <Input placeholder="Change Title" />
        </div>
        <div>
          <Label text="Text" />
          <Input placeholder="Change Text" />
        </div>
        <div>
          <Label text="Icon" />
          <Input placeholder="Change Icon" />
        </div>
      </div>
    </Section>
  </div>

  {/* Services Section */}
  <div className="w-full flex-[2]">
    <Section title="Services Section">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <Label text="Title" />
          <Input placeholder="Change Title" />
        </div>
        <div>
          <Label text="Heading" />
          <Input placeholder="Change Heading" />
        </div>
        <div>
          <Label text="Description" />
          <Input placeholder="Change Description" />
        </div>
        <div>
          <Label text="Image" />
          <Input placeholder="Change Image" />
        </div>
      </div>
    </Section>
  </div>
</div>

        {/* About Us Section */}
        <Section title="About Us Section">
  <div className="grid grid-cols-1 md:grid-cols-5 gap-4">

    <div>
      <Label text="Top Heading" />
      <Input placeholder="Change Top Heading" />
    </div>

    <div>
      <Label text="Main Heading" />
      <Input placeholder="Change Main Heading" />
    </div>

    <div>
      <Label text="Description" />
      <Input placeholder="Change Description" />
    </div>

    <div>
      <Label text="CTA Text" />
      <Input placeholder="Change CTA Text" />
    </div>

    <div>
      <Label text="About Image" />
      <FileInput placeholder="Select About Image" />
    </div>

  </div>
</Section>

        {/* Process Section */}
        <Section title="Process Section">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div>
              <Label text="Title" />
              <Input placeholder="Change Title" />
            </div>
            <div>
              <Label text="Heading" />
              <Input placeholder="Change Heading" />
            </div>
            <div>
              <Label text="Description" />
              <Input placeholder="Change Description" />
            </div>
            <div>
              <Label text="CTA Text" />
              <Input placeholder="Change CTA Text" />
            </div>
            <div>
              <Label text="Process Images" />
              <FileInput multiple />
            </div>
          </div>
        </Section>

 {/* why choose us */}
<div className="mb-6 rounded-md border border-gray-200 bg-white p-4">
  {/* Section Title */}
  <h3 className="mb-4 text-[14px] font-semibold text-[#000000]">
    Why Choose Us Section
  </h3>

  {/* MAIN GRID */}
  {/* <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_auto_1fr] gap-6"> */}
  <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_auto_1fr] gap-6 items-stretch">
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
      <div>
        <Label text="Image" />
        <Input placeholder="Change Title" />
      </div>
    </div>

    {/* VERTICAL LINE */}
    {/* <div className="hidden lg:block w-px bg-gray-200"></div> */}
<div className="hidden lg:block w-px bg-gray-200 self-stretch"></div>

    {/* RIGHT CARD */}
    <div className="rounded-md p-4 -mt-14">     
      {/* HEADER */}
  <div className="flex items-center justify-between pb-[1px] -mb-[2px] border-b border-gray-200">
  <span className="text-[14px] font-semibold text-[#1E2022]">
    1 Expert Care
  </span>
  <select className="px-2 py-1 text-[13px]">
    <option></option>
  </select>
</div>
      {/* FORM */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
        <div>
          <Label text="Icon" />
          <Input placeholder="Change Title" />
        </div>
        <div>
          <Label text="Name" />
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

{/* testimonial section */}
<div className="mb-6 rounded-md border border-gray-200 bg-white p-4">
  <h3 className="mb-4 text-[14px] font-semibold text-[#000000]">
    Testimonial Section
  </h3>

  {/* MAIN GRID */}
  <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_auto_1.7fr] gap-6 items-stretch">
    {/* LEFT FORM */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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

    {/* VERTICAL LINE */}
    <div className="hidden lg:block w-px bg-gray-200 self-stretch"></div>
    {/* RIGHT CARD */}
    <div className="rounded-md p-4 -mt-14">
      {/* HEADER WITH BORDER */}
      <div className="flex items-center justify-end gap-2 pb-[1px] -mb-[2px] border-b border-gray-200">
        <span className="text-[#334257] text-[14px] font-medium">+</span>
        <span className="text-[#334257] text-[14px] font-medium">
          New Row
        </span>
        <select className="px-2 py-1 text-[13px]">
          <option></option>
        </select>
      </div>

      {/* FORM */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-3">
        <div>
          <Label text="Customer Name" />
          <Input placeholder="Change Title" />
        </div>
        <div>
          <Label text="Image" />
          <Input placeholder="Change Title" />
        </div>
        <div>
          <Label text="Review" />
          <Input placeholder="Change Title" />
        </div>
        <div>
          <Label text="Rating" />
          <Input placeholder="Change Title" />
        </div>
      </div>
    </div>
  </div>
</div>

   {/* pickup and drop section */}
   {/* <div className="flex gap-6"> */}
   <div className="flex flex-col md:flex-row gap-6">
  {/* Services Section */}
  <div className="w-full flex-[2]">
    <Section title="Pickup and Drop Section">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <Label text="Heading" />
          <Input placeholder="Change Heading" />
        </div>
        <div>
          <Label text="Description" />
          <Input placeholder="Change Description" />
        </div>
        <div>
          <Label text="Image" />
          <Input placeholder="Change Image" />
        </div>
        <div>
          <Label text="CTA" />
          <Input placeholder="Change CTA" />
        </div>
      </div>
    </Section>
  </div>
     {/* USP Section */}
   <div className="w-full flex-[1.2]">
    <Section title="FAQ Section">
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
        <h2 className="text-"></h2>
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

export default Homepage;
