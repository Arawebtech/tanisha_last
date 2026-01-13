// import react, {useState} from "react";
// import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
// import NotificationsIcon from '@mui/icons-material/Notifications';
// import WhatsAppIcon from '@mui/icons-material/WhatsApp';
// import { Checkbox } from "@mui/material";
// import CloseIcon from '@mui/icons-material/Close';


// const Label = ({text}) => (
//     <label className="text-[14px] text-[#334257] font-medium">{text}</label>
// );

// const Input = ({ placeholder }) => (
//   <input
//     type="text"
//     placeholder={placeholder}
//     className="w-full rounded-md border border-[#E7EAF3] px-3 py-2 text-[14px]
//                text-[#A0A0A0] focus:outline-none focus:ring-1 focus:ring-[#E7EAF3]"
//   />
// );


// const FileInput = ({placeholder}) => (
//     <input
//     type="file"
//     placeholder={placeholder} 
//      className="w-full rounded-md border border-[#E7EAF3] px-3 py-2 text-[14px]
//                text-[#A0A0A0] focus:outline-none focus:ring-1 focus:ring-[#E7EAF3]"
//     />
// );

// const CheckboxGroup = ({ items, disabledItems = [] }) => {
//   return (
//     <div className="flex flex-col border border-[#E7EAF3]">
//       {items.map((item) => (
//         <div
//           key={item}
//           className="flex items-center justify-between px-2"
//         >
//           {/* TEXT – LEFT */}
//           <span
//             className="text-[14px] leading-tight text-[#000000]" >
//             {item}
//           </span>

//           {/* CHECKBOX – RIGHT */}
//           <Checkbox
//             checked
//             disabled={disabledItems.includes(item)}
//             size="small"
//             sx={{
//               padding: 0,
//             }}
//           />
//         </div>
//       ))}
//     </div>
//   );
// };


// const checkBox = [
// "New Order Creation",
// "Order Ready",
// "Delivery Assigned",
// "Delivered",
// "Partially Settled",
// "Fully Settled",
// "New Booking Lead",
// "Rider Lead Assign"
// ];

// const AdminSettings = () => {
//      const [isOn, setIsOn] = useState(false);
//      const [numbers, setNumbers] = useState(["+91 9876543210","+91 9123456780"]);
//   const [inputValue, setInputValue] = useState("");

//   const handleKeyDown = (e) => {
//     if (e.key === "Enter" && inputValue.trim() !== "") {
//       setNumbers([...numbers, inputValue.trim()]);
//       setInputValue("");
//       e.preventDefault();
//     }
//   };

//   const removeNumber = (index) => {
//     setNumbers(numbers.filter((_, i) => i !== index));
//   };


     
//     return(
//         <div className="lg:ml-[264px] min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-[70px_15px_15px] font-font">

//         <h1 className="text-[#005555] font-semibold text-[14px] sm:text-[15px] hover:underline underline-offset-4 cursor-pointer mb-2">

//             Admin Header</h1>
// <div className=" flex flex-col gap-4 bg-white rounded-lg shadow-sm p-6 mt-4">
//     <h2 className="text-[#1E2022] font-semibold ">
//         <BusinessCenterIcon/> Admin Settings
//     </h2>
//     <p className="border border-[#E7EAF3B2] text-[#1E2022] text-[15px] font-semibold px-2 py-2 ">
//  <NotificationsIcon /> System Maintenance</p>
//  <div className="flex flex-row justify-between py-6 items-start">
//  <p className="text-[14px] text-[#677788] ">*By turning on maintenance mode Control your all system & function</p>
// <div className="flex items-center gap-2 sm:gap-3 border border-[#E7EAF3] px-2">

//     <p className="px-3 py-2 text-[#1E2022] font-semibold rounded-md">
//       Maintenance Mode
//     </p>

//   <button onClick = {() => setIsOn(!isOn)}
//     className={`relative inline-flex h-5 w-9 items-center rounded-full transition
//      ${isOn? "bg-[#009FAA]" : "bg-gray-200"}`
//     }>
//     <span className={`inline-block h-4 w-4 transform rounded-full transition bg-white transition
//      ${isOn ? "translate-x-4": "translate-x-1"}`}/>
//  </button>
//   </div>
//  </div>

//  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">

//     <div className="flex flex-col gap-1">
//     <Label text="Maintenance Mode"/>
//     <Input placeholder="Ref. GroFresh"/>
//     </div>

//     <div className="flex flex-col gap-1">
//     <Label text="Super Admin Email ID"/>
//     <Input placeholder="Admin@123"/>
//     </div>

//     <div className="flex flex-col gap-1">
//         <Label text="CRM Logo"/>
//         <FileInput/>
//     </div>
//  </div>

// <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">

//     <div className="flex flex-col gap-1">
//       <label className="text-[14px] text-[#334257] font-medium mb-1">
//         Admin notification number
//       </label>

// <div className="flex flex-wrap items-center gap-2  border border-[#E7EAF3] rounded-lg px-2 py-2 min-h-[44px]">

//         {numbers.map((num, idx) => (
//           <div
//             key={idx}
//             className="flex items-center bg-secondary text-white px-3 py-1 rounded-full text-[14px]">
//             <span>{num}</span>
//            <button
//             onClick={() => removeNumber(idx)}
//             className="ml-2 flex items-center justify-center rounded-full hover:bg-red-100"
//             >
//            <CloseIcon sx={{ fontSize: 16 }} className="text-gray-500 hover:text-red-500" />
//           </button>

//           </div>
//         ))}

//         {/* <input
//           type="text"
//           value={inputValue}
//           onChange={(e) => setInputValue(e.target.value)}
//           onKeyDown={handleKeyDown}
//           className="flex-1 min-w-[120px] border-none focus:ring-0 outline-none text-[14px] px-2 py-1"
//         /> */}
//       </div>
//     </div>

//     <div className="flex flex-col gap-1">
//     <Label text="Default Order Value for Pickup"/>
//     <Input placeholder="Copyright © 2025, Fabodry"/>
//     </div>

//     <div className="flex flex-col gap-1">
//         <Label text="CRM Favicon"/>
//         <FileInput/>
//     </div>

//  </div>

// <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">

//     <div className="flex flex-col gap-1">
//     <div className="flex items-center gap-2">
//     <Label text="Admin Notification Stages"/>
//     <WhatsAppIcon className="text-green-500 text-[18px] "/>
//     </div>
//     <CheckboxGroup
//     items={checkBox}
//     disabledItems={[
//      "Order Ready",
//      "Delivery Assigned",
//      "Delivered",
//      "Partially Settled",
//      "Fully Settled",
//      "New Booking Lead",
//      "Rider Lead Assign"
//     ]}
//   />
//     </div>

//     <div className="flex flex-col gap-1">
//         <div className="flex items-center gap-2">
//     <Label text="Super Admin Email ID"/>
//     <WhatsAppIcon className="text-green-500 text-[18px] "/>
//     </div>
//   <CheckboxGroup
//     items={checkBox}
//     disabledItems={[
//      "Order Ready",
//      "Delivery Assigned",
//      "Delivered",
//      "Partially Settled",
//      "Fully Settled",
//      "New Booking Lead",
//      "Rider Lead Assign"
//     ]}
//   />
//     </div>

//     <div className="flex flex-col gap-3">
//         <div>
//         <Label text="CRM Login Page Image "/>
//         <FileInput/>
//         </div>

//         <div>
//         <Label text="Max Serviceable Distance Selections "/>
//         <Input placeholder="25"/>
//         </div>
//     </div>
//  </div>
    
//     {/* buttons */}
//     <div className="flex flex-row justify-end gap-4 text-[14px] -mb-6">
//         <button className="px-2 py-2 text-[#334257] bg-[#F4F5F7] hover:text-[#FFFFFF] hover:bg-secondary">Reset</button>
//         <button className="px-2 py-2 text-[#334257] bg-[#F4F5F7] hover:text-[#FFFFFF] hover:bg-secondary">Save</button>
//     </div>
// </div>
// </div>
//     )
// }
// export default AdminSettings;
import React, { useState } from "react";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import NotificationsIcon from "@mui/icons-material/Notifications";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Checkbox } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import SystemMaintenance from "./Store/Systemmaintenance";

const Label = ({ text }) => (
  <label className="text-[14px] text-[#334257] font-medium">{text}</label>
);

const Input = ({ placeholder }) => (
  <input
    type="text"
    placeholder={placeholder}
    className="w-full rounded-md border border-[#E7EAF3] px-3 py-2 text-[14px]
      text-[#A0A0A0] focus:outline-none focus:ring-1 focus:ring-[#E7EAF3]"
  />
);

const FileInput = () => (
  <input
    type="file"
    className="w-full rounded-md border border-[#E7EAF3] px-3 py-2 text-[14px]
      text-[#A0A0A0] focus:outline-none focus:ring-1 focus:ring-[#E7EAF3]"
  />
);

const CheckboxGroup = ({ items, disabledItems = [] }) => (
  <div className="flex flex-col border border-[#E7EAF3] rounded-md">
    {items.map((item) => (
      <div
        key={item}
        className="flex items-center justify-between px-2 py-1"
      >
        <span className="text-[13px] sm:text-[14px] break-words text-[#000000]">
          {item}
        </span>
        <Checkbox
          checked
          disabled={disabledItems.includes(item)}
          size="small"
          sx={{ padding: 0 }}
        />
      </div>
    ))}
  </div>
);

const checkBox = [
  "New Order Creation",
  "Order Ready",
  "Delivery Assigned",
  "Delivered",
  "Partially Settled",
  "Fully Settled",
  "New Booking Lead",
  "Rider Lead Assign",
];

const AdminSettings = () => {
  const [isOn, setIsOn] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [numbers, setNumbers] = useState([
    "+91 9876543210",
    "+91 9123456780",
  ]);

  const removeNumber = (index) => {
    setNumbers(numbers.filter((_, i) => i !== index));
  };

  return (
    <div className="lg:ml-[264px] min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-[70px_15px_15px] font-font">
      {/* Header */}
      <h1 className="text-[#005555] font-semibold text-[14px] sm:text-[15px] hover:underline underline-offset-4 cursor-pointer mb-2">
        Admin Header
      </h1>

      <div className="flex flex-col gap-4 bg-white rounded-lg shadow-sm p-4 sm:p-6 mt-4">
        {/* Title */}
        <h2 className="flex items-center gap-2 text-[#1E2022] font-semibold text-[15px]">
          <BusinessCenterIcon fontSize="small" />
          Admin Settings
        </h2>

        {/* Maintenance */}
        <p className="border border-[#E7EAF3B2] text-[#1E2022] text-[14px] sm:text-[15px] font-semibold px-2 py-2">
          <NotificationsIcon fontSize="small" /> System Maintenance
        </p>

        <div className="flex flex-col sm:flex-row justify-between gap-3 py-4">
          <p className="text-[13px] sm:text-[14px] text-[#677788]">
            *By turning on maintenance mode control your whole system & functions
          </p>

          <div className="flex flex-wrap items-center gap-2 border border-[#E7EAF3] px-2 py-1 rounded-md">
            <p className="px-2 py-1 text-[#1E2022] font-semibold text-[13px]">
              Maintenance Mode
            </p>
            {/* <button
              onClick={() => setIsOn(!isOn)}
              className={`relative inline-flex h-5 w-9 items-center rounded-full transition ${
                isOn ? "bg-[#009FAA]" : "bg-gray-200"
              }`}
            > */}
            <button
              onClick={() => {
              const newValue = !isOn;
              setIsOn(newValue);
              setShowPopup(newValue); // open popup when ON
            }}
           className={`relative inline-flex h-5 w-9 items-center rounded-full transition ${
           isOn ? "bg-[#009FAA]" : "bg-gray-200"
          }`}
           >

              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                  isOn ? "translate-x-4" : "translate-x-1"
                }`}
              />
            </button>
          </div>
        </div>

        {/* Form Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          <div className="flex flex-col gap-1">
            <Label text="Maintenance Mode" />
            <Input placeholder="Ref. GroFresh" />
          </div>

          <div className="flex flex-col gap-1">
            <Label text="Super Admin Email ID" />
            <Input placeholder="Admin@123" />
          </div>

          <div className="flex flex-col gap-1">
            <Label text="CRM Logo" />
            <FileInput />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          <div className="flex flex-col gap-1">
            <Label text="Admin notification number" />
            <div className="flex flex-wrap gap-2 border border-[#E7EAF3] rounded-lg px-2 py-2">
              {numbers.map((num, idx) => (
                <div
                  key={idx}
                  className="flex items-center bg-secondary text-white px-3 py-1 rounded-full text-[13px] sm:text-[14px]"
                >
                  {num}
                  <button
                    onClick={() => removeNumber(idx)}
                    className="ml-2"
                  >
                    <CloseIcon sx={{ fontSize: 16 }} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <Label text="Default Order Value for Pickup" />
            <Input placeholder="Copyright © 2025, Fabodry" />
          </div>

          <div className="flex flex-col gap-1">
            <Label text="CRM Favicon" />
            <FileInput />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Label text="Admin Notification Stages" />
              <WhatsAppIcon className="text-green-500" />
            </div>
            <CheckboxGroup
              items={checkBox}
              disabledItems={checkBox.slice(1)}
            />
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Label text="Super Admin Email ID" />
              <WhatsAppIcon className="text-green-500" />
            </div>
            <CheckboxGroup
              items={checkBox}
              disabledItems={checkBox.slice(1)}
            />
          </div>

          <div className="flex flex-col gap-3">
            <div>
              <Label text="CRM Login Page Image" />
              <FileInput />
            </div>
            <div>
              <Label text="Max Serviceable Distance Selections" />
              <Input placeholder="25" />
            </div>
            
          </div>
        </div>

        {/* Buttons */}
       <div className="flex flex-row justify-end gap-3 ">
   <button className="bg-[#F4F5F7] text-[#334257] hover:bg-[#107980] hover:text-[#FFFFFF] px-2 py-2">Reset</button>
       <button className=" bg-[#F4F5F7] text-[#334257] hover:bg-[#107980] hover:text-[#FFFFFF] px-4 py-2">Save</button>
       </div>
      </div>
      
      {showPopup && (
  <SystemMaintenance
    onClose={() => {
      setShowPopup(false);
      setIsOn(false); // optional: turn OFF toggle when popup closes
    }}
  />
)}

    </div>
  );
};

export default AdminSettings;
