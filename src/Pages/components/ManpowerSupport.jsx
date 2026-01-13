import React from "react";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Select, MenuItem } from "@mui/material";

const ManpowerSupport = ({ onClose, onSuccess }) => {
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
          Manpower Support
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
                <label>Position Required <span className="text-red-500">*</span></label>
                 <Select
                                  size="small"
                                  fullWidth
                                  defaultValue="Bug"
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
                                  {["Washerman", "Pressman", "Packerman", "Store manager","Rider"].map((item) => (
                                    <MenuItem key={item} value={item.toLowerCase().replace(" ", "")}>
                                      {item}
                                    </MenuItem>
                                  ))}
                                </Select>
                               </div>

              <div className="col-span-2">
                <label>Number of staff<span className="text-red-500">*</span></label>
              <input className="w-full border rounded px-2 py-1 mt-1 text-[13px]" />
              </div>
            </div>

             <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="col-span-1">
                <label>Type<span className="text-red-500">*</span></label>
                 <Select
                                  size="small"
                                  fullWidth
                                  defaultValue="Bug"
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
                                  {["Permanent", "Temporary"].map((item) => (
                                    <MenuItem key={item} value={item.toLowerCase().replace(" ", "")}>
                                      {item}
                                    </MenuItem>
                                  ))}
                                </Select>
                               </div>
              <div className="col-span-2">
                <label>Expected Start Date<span className="text-red-500">*</span></label>
              <input type="date" className="w-full border rounded px-2 py-1 mt-1 text-[13px]" />
              </div>
            </div>

             <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="col-span-1">
                <label>Replacement Or New Requirement<span className="text-red-500">*</span></label>
                <Select
                                  size="small"
                                  fullWidth
                                  defaultValue="Replacement"
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
                                  {["Replacement", "New Requirement"].map((item) => (
                                    <MenuItem key={item} value={item.toLowerCase().replace(" ", "")}>
                                      {item}
                                    </MenuItem>
                                  ))}
                                </Select>
                               </div>
              <div className="col-span-2">
                {/* <label>Expected Start Date<span className="text-red-500">*</span></label>
              <input type="date" className="w-full border rounded px-2 py-1 mt-1 text-[13px]" /> */}
              </div>
            </div>

           <div className="md:col-span-3">
              <label>Reason <span className="text-red-500">*</span></label>
              <textarea className="w-full border rounded px-2 py-1.5 mt-1 h-20" />
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

export default ManpowerSupport;
