import React from "react";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Select, MenuItem } from "@mui/material";

const MarketingSupport = ({ onClose, onSuccess }) => {
  const handleSubmit = (e) => {
  e.preventDefault();

  const newTicketId = "100115"; 
  onSuccess(newTicketId);      
};

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 font-font px-2 sm:px-0">
      <div className="bg-white w-[90vw] sm:w-[40%] max-h-[70vh] sm:max-h-[90vh] rounded-md shadow-lg relative flex flex-col">
        
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-[#006370]">
          <HighlightOffIcon fontSize="medium" />
        </button>

        <h2 className="text-center text-[18px] font-semibold py-3 border-b">
          Marketing Support
        </h2>

        <div className="p-2 sm:p-4 overflow-y-auto flex-1 max-h-[60vh] 
                        scrollbar-thin scrollbar-thumb-[#006370] scrollbar-track-[#E5E7EB] text-[12px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            <div>
              <label>Name <span className="text-red-500">*</span></label>
              <input className="w-full border rounded px-2 py-1 mt-1 text-[13px]" />
            </div>

            <div>
              <label>Phone No. <span className="text-red-500">*</span></label>
              <input className="w-full border rounded px-2 py-1 mt-1 text-[13px]" />
            </div>

            <div>
              <label>Store <span className="text-red-500">*</span></label>
              <Select
                size="small"
                fullWidth
                defaultValue="store1"
                sx={{
                  fontFamily: "var(--font)",
                  fontSize: "13px",
                  borderRadius: "6px",
                  "& .MuiSelect-select": { padding: "6px 10px" },
                }}
                MenuProps={{
                  disablePortal: true,
                  PaperProps: { sx: { backgroundColor: "#D9D9D9", mt: 0.5 } },
                }}
              >
                {["Store 1", "Store 2", "Store 3"].map((item) => (
                  <MenuItem
                    key={item}
                    value={item.toLowerCase().replace(" ", "")}
                    sx={{
                      fontSize: "13px",
                      backgroundColor: "#D9D9D9",
                      color: "#7C7C7C",
                      "&:hover": { backgroundColor: "#006370", color: "#fff" },
                      "&.Mui-selected": { backgroundColor: "#006370", color: "#fff" },
                      "&.Mui-selected:hover": { backgroundColor: "#006370", color: "#fff" },
                    }} >
                    {item}
                  </MenuItem>
                ))}
              </Select>
            </div>

            <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="col-span-1">
                <label>Support Type <span className="text-red-500">*</span></label>
                 <Select
                                  size="small"
                                  fullWidth
                                  defaultValue="Artwork"
                                  sx={{
                                    fontFamily: "var(--font)",
                                    fontSize: "13px",
                                    borderRadius: "6px",
                                    "& .MuiSelect-select": { padding: "6px 10px" },
                                  }}
                                  MenuProps={{
                                    disablePortal: true,
                                    PaperProps: { sx: { backgroundColor: "#D9D9D9", mt: 0.5 } },
                                  }}>
                                  {["Artwork", "Branding Material", "Social Media Post", " Event Support"].map((item) => (
                                    <MenuItem key={item} value={item.toLowerCase().replace(" ", "")}>
                                      {item}
                                    </MenuItem>
                                  ))}
                                </Select>
                               </div>

                               <div className="col-span-2">
                                <label>Design Specifications<span className="text-red-500">*</span></label>
                                 <div className="grid grid-cols-2 border border-gray-300 mt-2">
                                   <input placeholder="Size" className="border border-[#B7B7B7] text-center text-[#727272] px-2 py-2 outline-none" />
                                   <input className="border border-gray-300 px-2 py-2 outline-none" />

                                   <input placeholder="Format" className="border border-[#B7B7B7] text-center text-[#727272] px-2 py-2 outline-none" />
                                   <input className="border border-gray-300 px-2 py-2 outline-none" />

                                     <input placeholder="Content" className="border border-[#B7B7B7] text-center text-[#727272] px-2 py-2 outline-none" />
                                   <input className="border border-gray-300 px-2 py-2 outline-none" />
                                </div>
                               </div>
                               </div>

           
           <div className="md:col-span-3">
              <label>Event Date (if applicable) <span className="text-red-500">*</span></label>
              <input className="w-full border rounded px-2 py-1 mt-1 text-[13px]" />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center mt-4 mb-2">
          <button onClick={handleSubmit} className="bg-[#006370] text-white px-5 py-1.5 rounded-md text-[14px]">
            Create Ticket
          </button>
        </div>
      </div>
    </div>
  );
};

export default MarketingSupport;
