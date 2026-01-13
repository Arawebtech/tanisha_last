import React, { useState } from "react";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Select, MenuItem } from "@mui/material";

const SupplyChain = ({ onClose, onSuccess }) => {

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

        <h2 className="text-center text-[20px] font-semibold py-3 border-b">
          Supply Chain Support
        </h2>

        {/* Form */}
        <div className="p-2 sm:p-4 overflow-y-auto flex-1">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-[14px]">
            <div>
              <label>Name <span className="text-red-500">*</span></label>
              <input className="w-full border rounded px-2 py-1.5 mt-1" />
            </div>

            <div>
              <label>Phone No. <span className="text-red-500">*</span></label>
              <input className="w-full border rounded px-2 py-1.5 mt-1" />
            </div>

            <div>
              <label>Store <span className="text-red-500">*</span></label>
              <Select
                size="small"
                fullWidth
                defaultValue="store1"
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
                {["Store 1", "Store 2", "Store 3"].map((item) => (
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

            <div className="md:col-span-3">
              <label>Type Of Issue <span className="text-red-500">*</span></label>
              <Select
                size="small"
                defaultValue="Shortage"
                fullWidth
                MenuProps={{ disablePortal: true }}
                sx={{
                  fontFamily: "var(--font)",
                  fontSize: "14px",
                  borderRadius: "6px",
                  "& .MuiSelect-select": { padding: "6px 12px" },
                }}
              >
                {["Shortage", "Delay", "Quality Issue", "Wrong Item"].map((item) => (
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

            <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label>Invoice No. <span className="text-red-500">*</span></label>
                <input className="w-full border rounded px-2 py-1.5 mt-1" />
              </div>
              <div>
                <label>Expected Receiving Date <span className="text-red-500">*</span></label>
                <input className="w-full border rounded px-2 py-1.5 mt-1" />
              </div>
            </div>

            <div className="md:col-span-3">
              <label>Description <span className="text-red-500">*</span></label>
              <textarea className="w-full border rounded px-2 py-1.5 mt-1 h-20" />
            </div>

            <div className="md:col-span-3">
            <label className="sm:whitespace-nowrap">
             SUPPORTING DOCUMENT (You can select multiple files) <span className="text-red-500">*</span>
            </label>

              <input
                type="file"
                multiple
                className="w-full mt-1 text-[14px] border rounded px-2 py-1.5
                  file:bg-[#006370] file:text-white file:border-0 file:rounded-md file:px-4
                  file:py-1.5 file:mr-3 file:cursor-pointer file:hover:bg-[#0d666c]"
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center mt-4 mb-2">
          <button 
          onClick={handleSubmit}
          className="bg-[#006370] text-white px-5 py-1.5 rounded-md text-[14px]">
            Create Ticket
          </button>
        </div>
      </div>
    </div>
  );
};

export default SupplyChain;

