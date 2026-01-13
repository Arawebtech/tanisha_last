// import React, { useState } from "react";
// import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
// import { Menu, MenuItem } from "@mui/material";


// const tickets = [
//   {
//     id: "#100114",
//     reports: "Order Report",
//   },
//   {
//     id: "#100115",
//     reports: "Store Data & Royalty Report", 
//   },
//   {
//     id: "#100116",
//     reports: "Inventory Report",
//   },
// ];

// const AnalyticsReporting = () => {
//   const [search, setSearch] = useState("");
//     const [anchorEl, setAnchorEl] = useState(null);
//   const open = Boolean(anchorEl);

//   const filteredTickets = tickets.filter(
//     (t) =>
//       t.id.includes(search) ||
//       t.reports.toLowerCase().includes(search.toLowerCase())
//   );
  

//   // 🔹 OPEN DROPDOWN
//   const handleDownloadClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   // 🔹 CLOSE + DOWNLOAD ACTION
//   const handleClose = (store) => {
//     setAnchorEl(null);

//     if (store) {
//       console.log("Download for:", store);
//       // 👉 call your download API here
//     }
//   };


//   return (
//     <div className="lg:ml-[264px] bg-gray-100 min-h-screen pt-[70px] px-4 font-font">
//       <div className="p-6 bg-gray-50 min-h-screen rounded-lg">
//         {/* HEADER */}
//         <h1 className="text-[24px] font-semibold text-[#1E2022] mb-6">
//           Analytics & Reporting
//         </h1>

//        {/* SEARCH */}
// <div className="bg-white p-4 rounded-lg shadow mb-6">
//   <div className="flex flex-col lg:flex-row gap-3">
//     <input
//       type="text"
//       className="border rounded px-4 py-2 text-[14px] w-full text-[#97A4AF] lg:w-1/3"
//       placeholder="Search by ID or report name"
//       value={search}
//       onChange={(e) => setSearch(e.target.value)}
//     />
//     <button className="bg-secondary text-textPrimary px-6 py-2 rounded text-[14px]">
//       Search
//     </button>
//   </div>

// </div>

//         {/* TABLE */}
//         <div className="overflow-x-auto bg-textPrimary rounded-lg shadow">
//           <table className="min-w-[700px] w-full text-sm">
//             <thead className="bg-primary text-textPrimary">
//               <tr className="text-[14px]">
//                 <th className="px-4 py-3 text-left">SL</th>
//                 <th className="px-4 py-3 text-left">
//                   Reports Title & Description
//                 </th>
//                 <th className="px-4 py-3 text-left">Action</th>
//               </tr>
//             </thead>

//             <tbody>
//               {filteredTickets.map((ticket, i) => (
//                 <tr
//                   key={ticket.id}
//                   className="bg-[#D9D9D98F] border-b last:border-b-0">
//                   {/* SL */}
//                   <td className="px-4 py-3 text-[#677788]">
//                     {i + 1}
//                   </td>

//                   {/* Report */}
//                   <td className="px-4 py-3 text-[#01684B] font-medium">
//                     {ticket.reports}
//                   </td>
  
//                   {/* Action */}
//                 {/* <td className="px-4 py-3">
//                 <button className="flex items-center gap-2 bg-primary text-textPrimary px-4 py-1.5 rounded text-sm hover:bg-[#00545d] transition">
//                 <FileDownloadOutlinedIcon size={14} />
//                   Download
//                 </button>
                
//                </td> */}
//                 <td className="px-4 py-3">
//               {/* DOWNLOAD BUTTON */}
//               <button
//                 onClick={handleDownloadClick}
//                 className="flex items-center gap-2 bg-primary text-textPrimary px-4 py-1.5 rounded text-sm hover:bg-[#00545d] transition"
//               >
//                 <FileDownloadOutlinedIcon sx={{ fontSize: 16 }} />
//                 Download
//               </button>

//               {/* DROPDOWN MENU */}
//               <Menu
//                 anchorEl={anchorEl}
//                 open={open}
//                 onClose={() => handleClose(null)}
//                 disablePortal
//                 PaperProps={{
//                   sx: {
//                     backgroundColor: "#D9D9D9",
//                     borderRadius: "6px",
//                     mt: 0.5,
//                     minWidth: "120px",
//                   },
//                 }}
//               >
//                 {["Store 1", "Store 2", "Store 3"].map((item) => (
//                   <MenuItem
//                     key={item}
//                     onClick={() =>
//                       handleClose(item.toLowerCase().replace(" ", ""))
//                     }
//                     sx={{
//                       fontSize: "14px",
//                       color: "#7C7C7C",
//                       "&:hover": {
//                         backgroundColor: "#094448",
//                         color: "#fff",
//                       },
//                     }}
//                   >
//                     {item}
//                   </MenuItem>
//                 ))}
//               </Menu>
//             </td>
//                 </tr>
//               ))}

//               {filteredTickets.length === 0 && (
//                 <tr>
//                   <td
//                     colSpan="3"
//                     className="px-4 py-6 text-center text-gray-500"
//                   >
//                     No reports found
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default AnalyticsReporting;
import React, { useState } from "react";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import CloseIcon from "@mui/icons-material/Close";
import { Menu, MenuItem } from "@mui/material";

const tickets = [
  { id: "#100114", reports: "Order Report" },
  { id: "#100115", reports: "Store Data & Royalty Report" },
  { id: "#100116", reports: "Inventory Report" },
];

const dateOptions = [
  "Today",
  "Tomorrow",
  "This Week",
  "This Month",
  "Last Month",
  "Last 3 Months",
  "Last 6 Months",
  "Last Year",
  "This Year",
  "Custom",
];

const AnalyticsReporting = () => {
  const [search, setSearch] = useState("");

  // dropdown
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);

  // popup
  const [openPopup, setOpenPopup] = useState(false);
  const [selectedStore, setSelectedStore] = useState("");
  const [selectedDate, setSelectedDate] = useState("Tomorrow");

  const filteredTickets = tickets.filter(
    (t) =>
      t.id.includes(search) ||
      t.reports.toLowerCase().includes(search.toLowerCase())
  );

  const handleDownloadClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleStoreClick = (store) => {
    setAnchorEl(null);
    setSelectedStore(store);
    setOpenPopup(true);
  };

  const handleFinalDownload = () => {
    console.log("Store:", selectedStore);
    console.log("Date:", selectedDate);
    setOpenPopup(false);
  };

  return (
    <div className="lg:ml-[264px] bg-gray-100 min-h-screen pt-[70px] px-4 font-font">
      <div className="p-6 bg-gray-50 min-h-screen rounded-lg">
        <h1 className="text-[24px] font-semibold text-[#1E2022] mb-6">
          Analytics & Reporting
        </h1>

        {/* SEARCH */}
        <div className="bg-white p-4 rounded-lg shadow mb-6">
          <div className="flex flex-col lg:flex-row gap-3">
            <input
              type="text"
              className="border rounded px-4 py-2 text-[14px] w-full lg:w-1/3"
              placeholder="Search by ID or report name"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="bg-secondary text-textPrimary px-6 py-2 rounded text-[14px]">
              Search
            </button>
          </div>
        </div>

        {/* TABLE */}
        <div className="overflow-x-auto bg-white rounded-lg shadow">
          <table className="min-w-[700px] w-full text-sm">
            <thead className="bg-primary text-white">
              <tr>
                <th className="px-4 py-3 text-left">SL</th>
                <th className="px-4 py-3 text-left">
                  Reports Title & Description
                </th>
                <th className="px-4 py-3 text-left">Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredTickets.map((ticket, i) => (
                <tr key={ticket.id} className="bg-[#D9D9D98F] border-b">
                  <td className="px-4 py-3">{i + 1}</td>
                  <td className="px-4 py-3 text-[#01684B] font-medium">
                    {ticket.reports}
                  </td>

                  <td className="px-4 py-3">
                    <button
                      onClick={handleDownloadClick}
                      className="flex items-center gap-2 bg-primary text-white px-4 py-1.5 rounded text-sm hover:bg-[#00545d]"
                    >
                      <FileDownloadOutlinedIcon sx={{ fontSize: 16 }} />
                      Download
                    </button>

                    {/* STORE MENU */}
                    <Menu
                      anchorEl={anchorEl}
                      open={openMenu}
                      onClose={() => setAnchorEl(null)}
                      disablePortal
                    >
                      {["Store 1", "Store 2", "Store 3"].map((store) => (
                        <MenuItem
                          key={store}
                          onClick={() => handleStoreClick(store)}
                         sx={{
                         fontSize: "14px",
                         color: "#1E2022",
                         "&:hover": {
                         backgroundColor: "#094448",
                         color: "#fff",
                      },
                      }}
                        >
                          {store}
                        </MenuItem>
                      ))}
                    </Menu>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* POPUP */}
    {openPopup && (
  <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
    <div className="bg-white rounded-xl p-6 w-[700px]">
      
      {/* HEADER ROW */}
      <div className="flex items-center justify-end mb-6">    
        <button onClick={() => setOpenPopup(false)}>
          <CloseIcon />
        </button>
      </div>

      {/* DATE OPTIONS GRID */}
      <div className="grid grid-cols-5 gap-4 mb-8">
        {dateOptions.map((item) => (
          <button
            key={item}
            onClick={() => setSelectedDate(item)}
            className={`px-4 py-2 rounded-full border text-sm whitespace-nowrap text-center ${
              selectedDate === item
                ? "bg-[#D5FAFF] border-[#26C7DC] text-[#000000] "
                : "bg-[#BDBDBD] text-[#000000]"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* FOOTER ROW */}
      <div className="flex justify-end">
        <button
          onClick={handleFinalDownload}
          className="bg-primary text-white text-[12px] px-6 py-2 rounded"
        >
          Download
        </button>
      </div>

    </div>
  </div>
)}

    </div>
  );
};

export default AnalyticsReporting;
