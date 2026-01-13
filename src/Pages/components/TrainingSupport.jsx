
// import React from "react";
// import HighlightOffIcon from '@mui/icons-material/HighlightOff';
// import { Select, MenuItem } from "@mui/material";
// import Time from "./Time";


// const TrainingSupport = ({ onClose }) => {
//   const [showTimePopup, setShowTimePopup] = useState(false);
// const [time, setTime] = useState("");

//   return (
//     <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 font-poppins px-2 sm:px-0">
// <div className="bg-white w-[90vw] sm:w-[40%] max-h-[70vh] sm:max-h-[90vh] rounded-md shadow-lg relative flex flex-col">
//         <button
//           onClick={onClose}
//           className="absolute top-2 right-2 text-[#006370]">
//           <HighlightOffIcon fontSize="medium" />
//         </button>
//         <h2 className="text-center text-[20px] font-semibold py-3 border-b">
//           Training Support
//         </h2>

//         {/* Form */}
//       <div className="p-2 sm:p-4 overflow-y-auto flex-1 max-h-[60vh] 
//                 scrollbar-thin scrollbar-thumb-[#006370] scrollbar-track-[#E5E7EB]">
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-[14px]">
//             {/* Name */}
//             <div>
//               <label>Name <span className="text-red-500">*</span></label>
//               <input className="w-full border rounded px-2 py-1.5 mt-1" />
//             </div>

//             {/* Phone */}
//             <div>
//               <label>Phone No. <span className="text-red-500">*</span></label>
//               <input className="w-full border rounded px-2 py-1.5 mt-1" />
//             </div>

//             {/* Store Dropdown */}
//             <div>
//               <label>Store <span className="text-red-500">*</span></label>
//               <Select
//                 size="small"
//                 fullWidth
//                 defaultValue="store1"
//                 sx={{
//                   fontFamily: "var(--font)",
//                   fontSize: "14px",
//                   borderRadius: "6px",
//                   "& .MuiSelect-select": {
//                     padding: "8px 12px",
//                   },
//                 }}
//                 MenuProps={{
//                   disablePortal: true,
//                   PaperProps: { sx: { backgroundColor: "#D9D9D9", mt: 0.5 } },
//                 }}
//               >
//                 {["Store 1", "Store 2", "Store 3"].map((item) => (
//                   <MenuItem
//                     key={item}
//                     value={item.toLowerCase().replace(" ", "")}
//                     sx={{
//                       fontSize: "14px",
//                       backgroundColor: "#D9D9D9",
//                       color: "#7C7C7C",
//                       "&:hover": { backgroundColor: "#006370", color: "#fff" },
//                       "&.Mui-selected": { backgroundColor: "#006370", color: "#fff" },
//                       "&.Mui-selected:hover": { backgroundColor: "#006370", color: "#fff" },
//                     }}
//                   >
//                     {item}
//                   </MenuItem>
//                 ))}
//               </Select>
//             </div>

//         <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-3">
//   <div className="col-span-1">
//     <label>Training type <span className="text-red-500">*</span></label>
//       <Select
//                 size="small"
//                 fullWidth
//                 defaultValue="Chemical"
//                 sx={{
//                   fontFamily: "var(--font)",
//                   fontSize: "14px",
//                   borderRadius: "6px",
//                   "& .MuiSelect-select": {
//                     padding: "8px 12px",
//                   },
//                 }}
//                 MenuProps={{
//                   disablePortal: true,
//                   PaperProps: { sx: { backgroundColor: "#D9D9D9", mt: 0.5 } },
//                 }}
//               >
//                 {["Chemical", "Sales or upsell", "Customer handling", " CRM", "Process/ Ironing", "Washing"].map((item) => (
//                   <MenuItem
//                     key={item}
//                     value={item.toLowerCase().replace(" ", "")}
//                     sx={{
//                       fontSize: "14px",
//                       backgroundColor: "#D9D9D9",
//                       color: "#7C7C7C",
//                       "&:hover": { backgroundColor: "#006370", color: "#fff" },
//                       "&.Mui-selected": { backgroundColor: "#006370", color: "#fff" },
//                       "&.Mui-selected:hover": { backgroundColor: "#006370", color: "#fff" },
//                     }}
//                   >
//                     {item}
//                   </MenuItem>
//                 ))}
//               </Select>
//   </div>
//   <div className="col-span-2">
//     <label>Target Designation <span className="text-red-500">*</span></label>
//        <Select
//                 size="small"
//                 fullWidth
//                 defaultValue=""
//                 sx={{
//                   fontFamily: "var(--font)",
//                   fontSize: "14px",
//                   borderRadius: "6px",
//                   "& .MuiSelect-select": {
//                     padding: "8px 12px",
//                   },
//                 }}
//                 MenuProps={{
//                   disablePortal: true,
//                   PaperProps: { sx: { backgroundColor: "#D9D9D9", mt: 0.5 } },
//                 }}
//               >
//                 {["Washerman", "Pressman", "Packerman", "Store manager", "Rider"].map((item) => (
//                   <MenuItem
//                     key={item}
//                     value={item.toLowerCase().replace(" ", "")}
//                     sx={{
//                       fontSize: "14px",
//                       backgroundColor: "#D9D9D9",
//                       color: "#7C7C7C",
//                       "&:hover": { backgroundColor: "#006370", color: "#fff" },
//                       "&.Mui-selected": { backgroundColor: "#006370", color: "#fff" },
//                       "&.Mui-selected:hover": { backgroundColor: "#006370", color: "#fff" },
//                     }}
//                   >
//                     {item}
//                   </MenuItem>
//                 ))}
//               </Select>
//   </div>
// </div>

//            <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-3">
//   <div className="col-span-1">
//     <label>Target Mode <span className="text-red-500">*</span></label>
//       <input className="w-full border rounded px-2 py-1.5 mt-1" />
//   </div>
//   <div className="col-span-2">
//     <label>Number of Participants <span className="text-red-500">*</span></label>
//       <input className="w-full border rounded px-2 py-1.5 mt-1" />
//   </div>
// </div>

// <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-3">
//   <div className="col-span-3 md:col-span-3 flex gap-3">

//     <div className="flex-1">
//       <label>Proposed Date and Time<span className="text-red-500">*</span></label>
//       <input type="date" placeholder="Select Custom Date" className="w-full border rounded px-2 py-1.5 mt-1"
//       />
//     </div>

//  <div className="flex-1">
//   <input
//     type="text"
//     readOnly
//     value={time}
//     placeholder="Time 8:00 PM"
//     onClick={() => setShowTimePopup(true)}
//     className="w-full border rounded px-2 py-1.5 mt-6 cursor-pointer"
//   />
// </div>

//   </div>
// </div>
//           </div>
//         </div>

//         {/* Submit Button */}
//         <div className="flex justify-center mt-4 mb-2">
//           <button className="bg-[#006370] text-white px-5 py-1.5 rounded-md text-[14px]">
//             Create Ticket
//           </button>
//         </div>
//       </div>
//       {showTimePopup && (
//   <TimePopup
//     onClose={() => setShowTimePopup(false)}
//     onSave={(t) => {
//       setTime(t);
//       setShowTimePopup(false);
//     }}
//   />
// )}

//     </div>
//   );
// };

// export default TrainingSupport;

import React, { useState } from "react";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { Select, MenuItem } from "@mui/material";
import Time from "./Time";

const TrainingSupport = ({ onClose , onSuccess}) => {
  const [showTimePopup, setShowTimePopup] = useState(false);
  const [time, setTime] = useState("");

      const handleSubmit = (e) => {
    e.preventDefault();
    const newTicketId = "100120";
    onSuccess(newTicketId);
  };
  
  return (
  
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 font-font px-2 sm:px-0">
      <div className="bg-white w-[90vw] sm:w-[40%] max-h-[70vh] sm:max-h-[90vh] rounded-md shadow-lg relative flex flex-col">

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-[#006370]"
        >
          <HighlightOffIcon fontSize="medium" />
        </button>

        <h2 className="text-center text-[20px] font-semibold py-3 border-b">
          Training Support
        </h2>

        {/* Form */}
        <div className="p-2 sm:p-4 overflow-y-auto flex-1 max-h-[60vh]
          scrollbar-thin scrollbar-thumb-[#006370] scrollbar-track-[#E5E7EB]">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-[14px]">

            {/* Name */}
            <div>
              <label>Name <span className="text-red-500">*</span></label>
              <input className="w-full border rounded px-2 py-1.5 mt-1" />
            </div>

            {/* Phone */}
            <div>
              <label>Phone No. <span className="text-red-500">*</span></label>
              <input className="w-full border rounded px-2 py-1.5 mt-1" />
            </div>

            {/* Store */}
            <div>
              <label>Store <span className="text-red-500">*</span></label>
              <Select size="small" fullWidth defaultValue="store1">
                {["Store 1", "Store 2", "Store 3"].map((item) => (
                  <MenuItem key={item} value={item}>{item}</MenuItem>
                ))}
              </Select>
            </div>

                  <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-3">
   <div className="col-span-1">
     <label>Training type <span className="text-red-500">*</span></label>
       <Select
                size="small"
                fullWidth
                defaultValue="Chemical"
                sx={{
                  fontFamily: "var(--font)",
                  fontSize: "14px",
                  borderRadius: "6px",
                  "& .MuiSelect-select": {
                    padding: "8px 12px",
                  },
                }}
                MenuProps={{
                  disablePortal: true,
                  PaperProps: { sx: { backgroundColor: "#D9D9D9", mt: 0.5 } },
                }}>
                {["Chemical", "Sales or upsell", "Customer handling", " CRM", "Process/ Ironing", "Washing"].map((item) => (
                  <MenuItem
                    key={item}
                    value={item.toLowerCase().replace(" ", "")}
                    sx={{
                      fontSize: "14px",
                      backgroundColor: "#D9D9D9",
                      color: "#7C7C7C",
                      "&:hover": { backgroundColor: "#006370", color: "#fff" },
                      "&.Mui-selected": { backgroundColor: "#006370", color: "#fff" },
                      "&.Mui-selected:hover": { backgroundColor: "#006370", color: "#fff" },
                    }}
                  >
                    {item}
                  </MenuItem>
                ))}
              </Select>
  </div>
  <div className="col-span-2">
    <label>Target Designation <span className="text-red-500">*</span></label>
       <Select
                size="small"
                fullWidth
                defaultValue=""
                sx={{
                  fontFamily: "var(--font)",
                  fontSize: "14px",
                  borderRadius: "6px",
                  "& .MuiSelect-select": {
                    padding: "8px 12px",
                  },
                }}
                MenuProps={{
                  disablePortal: true,
                  PaperProps: { sx: { backgroundColor: "#D9D9D9", mt: 0.5 } },
                }}
              >
                {["Washerman", "Pressman", "Packerman", "Store manager", "Rider"].map((item) => (
                  <MenuItem
                    key={item}
                    value={item.toLowerCase().replace(" ", "")}
                    sx={{
                      fontSize: "14px",
                      backgroundColor: "#D9D9D9",
                      color: "#7C7C7C",
                      "&:hover": { backgroundColor: "#006370", color: "#fff" },
                      "&.Mui-selected": { backgroundColor: "#006370", color: "#fff" },
                      "&.Mui-selected:hover": { backgroundColor: "#006370", color: "#fff" },
                    }}
                  >
                    {item}
                  </MenuItem>
                ))}
              </Select>
  </div>
</div>

           <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-3">
  <div className="col-span-1">
    <label>Target Mode <span className="text-red-500">*</span></label>
      <input className="w-full border rounded px-2 py-1.5 mt-1" />
  </div>
  <div className="col-span-2">
    <label>Number of Participants <span className="text-red-500">*</span></label>
      <input className="w-full border rounded px-2 py-1.5 mt-1" />
  </div>
</div>

            {/* Date & Time */}
            <div className="md:col-span-3 flex gap-3">
              <div className="flex-1">
                <label>Proposed Date and Time <span className="text-red-500">*</span></label>
                {/* <input
                  type="date"
                  className="w-full border rounded px-2 py-1.5 mt-1"
                /> */}
<input
  type="text"
  placeholder="Select custom date"
  onFocus={(e) => (e.target.type = "date")}
  onBlur={(e) => {
    if (!e.target.value) e.target.type = "text";
  }}
  className="w-full border rounded px-2 py-1.5 mt-1 appearance-none"
/>


              </div>

              <div className="flex-1">
                <input
                  type="text"
                  readOnly
                  value={time}
                  placeholder="Time 8:00 PM"
                  onClick={() => setShowTimePopup(true)}
                  className="w-full border rounded px-2 py-1.5 mt-6 cursor-pointer"
                />
              </div>
            </div>

          </div>
        </div>

        {/* Submit */}
        <div className="flex justify-center mt-4 mb-2">
          <button onClick={handleSubmit}
          className="bg-[#006370] text-white px-5 py-1.5 rounded-md text-[14px]">
            Create Ticket
          </button>
        </div>
      </div>

      {showTimePopup && (
        <Time
          onClose={() => setShowTimePopup(false)}
          onSave={(t) => {
            setTime(t);
            setShowTimePopup(false);
          }}
        />
      )}
    </div>
  );
};

export default TrainingSupport;
