// import React, { useState } from "react";
// import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
// import WestIcon from '@mui/icons-material/West';
// import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
// import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
// import { useNavigate } from "react-router-dom";
// import AgentList from "./AgentList";
// import CloseIcon from '@mui/icons-material/Close';

// const tickets = [
//   {
//     id: "#100114",
//     summary: "Color bleed in designer dress",
//     category: "Project",
//     store: "FOCO",
//     detail:" FDRL-LAJPAT-002",
//     status: "Closed",
//     priority: "High",
//     assignee: "Mishendra Singh",
//   },
//   {
//     id: "#100115",
//     summary: "Color bleed in designer dress",
//     category: "Customer Support",
//     store: "FOCO",
//     detail:"FDRL-LAJPAT-003",
//     status: "Open",
//     priority: "Low",
//     assignee: "Noor Hamza",
//   },
//   {
//     id: "#100116",
//     summary: "Color bleed in designer dress",
//     category: "Project",
//     store: "FOCO",
//     detail:" FDRL-LAJPAT-002",
//     status: "Pending",
//     priority: "Medium",
//     assignee: "Mishendra Singh",
//   },
//   {
//     id: "#100117",
//     summary: "Color bleed in designer dress",
//     category: "Project",
//     store: "FOCO",
//     detail:"FDRL-LAJPAT-002",
//     status: "Closed",
//     priority: "High",
//     assignee: "Noor Hamza",
//   },
//   {
//     id: "#100118",
//     summary: "Color bleed in designer dress",
//     category: "Project",
//     store: "FOCO",
//     detail:" FDRL-LAJPAT-002",
//     status: "Open",
//     priority: "Low",
//     assignee: "Mishendra Singh",
//   },
// ];

// const statusColors = {
//   Open: "bg-teal-600 text-[#FFFFFF]",
//   Closed: "bg-[#FF2D2D] text-[#FFFFFF]",
//   Pending: "bg-[#FFB422] text-[#FFFFFF]",
// };

// const priorityColors = {
//   High: "text-[#FF2D2D] bg-[#FFFFFF]",
//   Medium: "text-[#FFB422] bg-[#FFFFFF]",
//   Low: "text-[#006370] bg-[#FFFFFF]",
// };

// const AllTicket = () => {
//        const [showAgentPopup, setShowAgentPopup] = useState(false);
//     const navigate = useNavigate();
//   const [search, setSearch] = useState("");

//   const filteredTickets = tickets.filter(
//     (ticket) =>
//       ticket.id.includes(search) ||
//       ticket.summary.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="lg:ml-[264px] bg-gray-100 min-h-screen" style={{ padding: "70px 15px 0px" }}>
// <div className="p-6 font-sans bg-gray-50 min-h-screen">
//   <div className="flex items-center justify-between mb-6 font-[Inter]">
//     <h1 className="flex items-center text-[24px] font-semibold text-[#1E2022] gap-2">
//       <ReceiptLongIcon /> All Ticket List 
//     <span className="bg-[#006370] text-white text-[12px] w-[40px] py-1 rounded-full flex items-center justify-center">
//      91
//     </span>
//     </h1>
//     <div className="flex gap-2 font-[Poppins]">
//       <button
//         className="px-4 py-[6px] text-[14px] rounded-md bg-[#006370] text-[#FFFFFF] hover:bg-[#0d666c]"
//         onClick={()=> navigate("/")}>
//         <WestIcon/> Back To Dashboard
//       </button>
//       <button
//         className="px-4 py-[6px] text-[14px] rounded-md bg-[#006370] text-[#FFFFFF] hover:bg-[#0d666c]">
//         <ListAltOutlinedIcon/> All Ticket
//       </button>
//       <button
//         className="px-4 py-[6px] text-[14px] rounded-md bg-[#006370] text-[#FFFFFF] hover:bg-[#0d666c]">
//         <AddOutlinedIcon/> Create Ticket
//       </button>
//       </div>
//   </div>

//        <div className="mt-4 px-4 lg:px-0 max-w-[900px] mr-4">
//   <div className="bg-white p-4 rounded-lg shadow mb-4 font-[Inter] text-[#1E2022] ">
//     <h2 className="text-[14px] font-semibold mb-3">Select Filter</h2>
//     <div className="grid grid-cols-6 gap-4 text-[#1E2022]">
//       <input
//         type="date"
//         className="border rounded px-3 py-2 text-[13px] w-full"
//         placeholder="Closing Date"
//       />
//       <select className="border rounded px-3 py-2 text-[13px] w-full">
//         <option>Franchise</option>
//       </select>

//       <select className="border rounded px-3 py-2 text-[13px] w-full">
//         <option>Status</option>
//       </select>
//       <input
//         type="date"
//         className="border rounded px-3 py-2 text-[13px] w-full"
//         placeholder="Date"
//       />
//       <div className="flex col-span-2">
//         <button className="bg-[#F4F5F7] text-[#334257] px-6 py-2 rounded-l text-[13px] hover:bg-gray-300 w-1/2">
//           Clear
//         </button>
//         <button className="bg-[#107980] text-white px-6 py-2 text-[13px] rounded-r hover:bg-[#107980] w-1/2">
//           Show Data
//         </button>
//       </div>
//     </div>
//   </div>
// </div>
//       <div className=" mt-4 font-[Inter]">
//         <input
//           type="text"
//           className="border border-[#0177CD4D] rounded px-3 py-2 w-full text-[14px] md:w-1/3 text-[#97A4AF] "
//           placeholder="Ex: Search by ID, order or payment status"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />
//          <button className="bg-[#107980] text-[#FFFFFF] px-6 py-2 text-[14px] rounded-r hover:bg-[#107980]">
//           Search
//         </button>
//       </div>

//     <div className="mt-4 px-4 lg:px-0 max-w-[900px] mr-4">
//       <div className="overflow-x-auto bg-white rounded-lg shadow">
//   <table className="min-w-full text-left text-sm border-separate border-spacing-y-2">
//     <thead className="bg-[#006370] text-[#FFFFFF] text-[14px] font-[Inter]">
//       <tr>
//         <th className="px-4 py-2">SL</th>
//         <th className="px-4 py-2">Ticket Summary</th>
//         <th className="px-4 py-2">Category</th>
//         <th className="px-4 py-2">Store Details</th>
//         <th className="px-4 py-2">Status</th>
//         <th className="px-4 py-2">Priority</th>
//         <th className="px-4 py-2">Assignee</th>
//         <th className="px-4 py-2">Action</th>
//       </tr>
//     </thead>

//     <tbody>
//       {filteredTickets.map((ticket, index) => (
//         <tr
//           key={ticket.id}  className="rounded-lg bg-[#D9D9D98F] text-[14px]"> 
//           <td className="px-4 py-2 text-[#677788]">{index + 1}</td>
//           <td className="px-4 py-2 text-[#01684B]">
//             <span className="">{ticket.id}</span> <br />
//             <span className="whitespace-nowrap">{ticket.summary}</span>
//           </td>
//           <td className="px-4 py-2 text-[#677788] whitespace-nowrap">{ticket.category}</td>
//           <td className="px-4 py-2">
//             <span className="text-[#677788]">{ticket.store}</span> <br />
//             <span className="text-[#01684B] whitespace-nowrap">{ticket.detail}</span></td>
//           {/* <td
//             className={`px-4 py-2 font-semibold text-center ${statusColors[ticket.status]}`}>
//             {ticket.status}
//           </td> */}
//          <td className="px-4 py-2 text-center">
//          <button
//           className={`w-[70px] px-3 py-1 rounded text-sm font-semibold text-white cursor-default ${statusColors[ticket.status]}`}>
//            {ticket.status}
//          </button>
//          </td>
//          <td className="px-4 py-2 text-center">
//         <button
//          className={`w-[70px] px-3 py-1 rounded-full text-sm font-semibold flex items-center justify-center cursor-default ${priorityColors[ticket.priority]}`}>
//          {ticket.priority}
//         </button>
//          </td>
        
//           <td className="px-4 py-2 text-[#677788] whitespace-nowrap">{ticket.assignee}</td>
//          <td className="px-4 py-2 text-center">
//          <select
//           className="w-[90px] bg-[#006370] text-white px-2 py-1 rounded text-sm cursor-pointer focus:outline-none"
//           defaultValue=""
//           onChange={(e) => {
//          if (e.target.value === "assign") {
//           setShowAgentPopup(true); 
//          }
//          if (e.target.value === "close") {
//          }
//          e.target.value = ""; 
//          }}>
//          <option value="" disabled>
//           Action
//          </option>
         
//          <option value="assign">Assign Agent</option>
//          <option value="close">Mark as Closed</option>
//          </select>
//          </td>
//         </tr>
//         ))}
//        </tbody>
//      </table>
//     </div>
//    </div>

//   {showAgentPopup && (
//   <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
//     <div className="bg-white rounded-lg shadow-lg w-[90%] max-w-4xl p-4 pt-10 relative">    
//  <button
//   onClick={() => setShowAgentPopup(false)}
//   className="absolute top-2 right-3 z-30 text-gray-500 hover:text-black text-xl">
//   <CloseIcon />
// </button>
//       <AgentList />
//     </div>
//   </div>
// )}
//     </div>
//     </div>
//   );
// };

// export default AllTicket;
import React, { useState } from "react";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import WestIcon from "@mui/icons-material/West";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { useNavigate } from "react-router-dom";
import AgentList from "./AgentList";
import CloseIcon from "@mui/icons-material/Close";
import SupplyChain from "./components/SupplyChain";
import TrainingSupport from "./components/TrainingSupport";
import TechnicianSupport from "./components/TechnicianSupport";
import CRMSupport from "./components/CRMSupport";
import ManpowerSupport from "./components/ManpowerSupport";
import MarketingSupport from "./components/MarketingSupport";
import CustomerSupport from "./components/CustomerSupport";
import ThankYou from "./components/ThankYou";


const tickets = [
  {
    id: "#100114",
    summary: "Color bleed in designer dress",
    category: "Project",
    store: "FOCO",
    detail: "FDRL-LAJPAT-002",
    status: "Closed",
    priority: "High",
    assignee: "Mishendra Singh",
  },
  {
    id: "#100115",
    summary: "Color bleed in designer dress",
    category: "Customer Support",
    store: "FOCO",
    detail: "FDRL-LAJPAT-003",
    status: "Open",
    priority: "Low",
    assignee: "Noor Hamza",
  },
    {
    id: "#100115",
    summary: "Color bleed in designer dress",
    category: "Customer Support",
    store: "FOCO",
    detail: "FDRL-LAJPAT-003",
    status: "Open",
    priority: "Low",
    assignee: "Noor Hamza",
  },
];

const statusColors = {
  Open: "bg-primary text-white",
  Closed: "bg-[#FF2D2D] text-white",
  Pending: "bg-[#FFB422] text-white",
};

const priorityColors = {
  High: "text-[#FF2D2D] bg-white",
  Medium: "text-[#FFB422] bg-white",
  Low: "text-primary bg-white",
};

const AllTicket = () => {
  const [showAgentPopup, setShowAgentPopup] = useState(false);
 const [showCreateDropdown, setShowCreateDropdown] = useState(false);
 const [showThankYou, setShowThankYou] = useState(false);
const [ticketId, setTicketId] = useState(null);

const [showSupplyChain, setShowSupplyChain] = useState(false);
const [showTrainingSupport, setShowTrainingSupport] = useState(false);
const [showTechnicianSupport, setShowTechnicianSupport] = useState(false);
const [showCRMSupport, setShowCRMSupport] = useState(false);
const [showManpowerSupport, setShowManpowerSupport] = useState(false);
const [showMarketingSupport, setShowMarketingSupport] = useState(false);
const [showCustomerSupport, setShowCustomerSupport] = useState(false);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const filteredTickets = tickets.filter(
    (t) =>
      t.id.includes(search) ||
      t.summary.toLowerCase().includes(search.toLowerCase())
  );
  
const handleTicketSuccess = (id) => {
  setTicketId(id);
  // close ALL support popups
  setShowSupplyChain(false);
  setShowTrainingSupport(false);
  setShowTechnicianSupport(false);
  setShowCRMSupport(false);
  setShowManpowerSupport(false);
  setShowMarketingSupport(false);
  setShowCustomerSupport(false);

  // open Thank You
  setShowThankYou(true);
};



  return (
    <div className="lg:ml-[264px] bg-gray-100 min-h-screen pt-[70px] px-0 lg:px-[15px] font-font">
      <div className="p-4 lg:p-6 bg-gray-50 min-h-screen">
        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6 whitespace-nowrap">
          <h1 className="flex items-center text-[24px] font-semibold text-[#1E2022] gap-2">
            <ReceiptLongIcon /> All Ticket List
            <span className="bg-primary text-white text-[12px] w-[40px] py-1 rounded-full flex items-center justify-center">
              91
            </span>
          </h1>

          {/* BUTTONS */}
          <div className="grid grid-cols-1 gap-2 lg:flex lg:gap-2 whitespace-nowrap">
            <button
              className="px-4 py-[6px] text-[12px] rounded-md bg-primary text-white"
              onClick={() => navigate("/")}>
              <WestIcon /> Back To Dashboard
            </button>
           <div className="relative grid grid-cols-2 gap-2">
              <button className="px-4 py-[6px] text-[12px] rounded-md bg-primary text-white">
              <ListAltOutlinedIcon /> All Ticket
            </button>
         <button
          onClick={() => setShowCreateDropdown(!showCreateDropdown)}
          className="px-4 py-[6px] text-[12px] rounded-md bg-[#006370] text-white  lg:col-auto flex items-center gap-1">
          <AddOutlinedIcon fontSize="medium" />Create Ticket
        </button>

       {showCreateDropdown && (
       <div
        className={`absolute right-0 mt-2 w-[280px] bg-[#A8A4A4] p-[10px] rounded-md shadow-lg z-[9999]
        lg:w-[280px] lg:right-0 w-[90vw] left-1/2 -translate-x-1/2 lg:left-auto lg:-translate-x-0`}>
      <div className="bg-[#D9D9D9] rounded-md p-3">
        {[
          "📦 Supply Chain Support",
          "🎓 Training Support",
          "🔧 Technician Support",
          "🧩 CRM Support",
          "👥 Manpower Support",
          "📣 Marketing Support",
          "🤝 Customer Support",
        ].map((item) => (
          <button
            key={item}
            className="w-full flex items-center gap-2 text-left border border-black px-3 py-2 mb-2 rounded text-[#107980] font-semibold text-[13px]"
            onClick={() => {
              setShowCreateDropdown(false);
              if (item.includes("Supply Chain")) setShowSupplyChain(true);
               if (item.includes("Training")) setShowTrainingSupport(true);
               if (item.includes("Technician")) setShowTechnicianSupport(true);
              if (item.includes("CRM")) setShowCRMSupport(true);
              if (item.includes("Manpower")) setShowManpowerSupport(true);
              if (item.includes("Marketing")) setShowMarketingSupport(true);
              if (item.includes("Customer")) setShowCustomerSupport(true);


            }}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  )}
</div>
          </div>
        </div>

        {/* FILTER */}
        <div className="bg-white p-4 rounded-lg shadow mb-4">
          <h2 className="text-[14px] font-semibold mb-3">Select Filter</h2>
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
            <input type="date" className="border text-[#1E2022] rounded px-3 py-2 text-[13px]" />
             <input type="date" className="border rounded px-3 py-2 text-[13px] text-[#1E2022]" />
            <select className="border rounded px-3 py-2 text-[13px] text-[#1E2022]">
              <option>Franchise</option>
            </select>
            <select className="border rounded px-3 py-2 text-[13px] text-[#1E2022]">
              <option>Status</option>
            </select>         
            <div className="flex lg:col-span-2 col-span-2">
              <button className="w-1/2 bg-[#F4F5F7] px-4 py-2 text-[13px] text-[#1E2022]">
                Clear
              </button>
              <button className="w-1/2 bg-secondary text-white px-4 py-2 text-[13px] text-[#1E2022]">
                Show Data
              </button>
            </div>
          </div>
        </div>

        {/* SEARCH */}
        <div className="flex flex-col lg:flex-row mb-4  ">
          <input
            type="text"
            className="border rounded px-6 py-2 text-[14px] text-[#97A4AF] w-full lg:w-1/3"
            placeholder="Search by ID or summary"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
           />
          <button className="bg-secondary text-textPrimary px-6 py-2 text-[14px] rounded">
            Search
          </button>
        </div>

        {/* TABLE */}
        <div className="overflow-x-auto bg-white rounded-lg shadow">
          <table className="min-w-[900px] w-full text-sm border-separate border-spacing-y-2">
            <thead className="bg-primary text-white">
              <tr className="text-[14px] text-textPrimary ">
                <th className="px-4 py-2">SL</th>
                <th className="px-4 py-2">Ticket</th>
                <th className="px-4 py-2">Category</th>
                <th className="px-4 py-2">Store</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Priority</th>
                <th className="px-4 py-2">Assignee</th>
                <th className="px-4 py-2">Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredTickets.map((ticket, i) => (
                <tr key={ticket.id} className="bg-[#D9D9D98F]">
                  <td className="px-4 py-2 text-[#677788]">{i + 1}</td>
                  <td className="px-4 py-2 text-[#01684B] whitespace-nowrap">
                    {ticket.id}
                    <br />
                    {ticket.summary}
                  </td>
                  <td className="px-4 py-2 text-[#677788] whitespace-nowrap">{ticket.category}</td>
                  <td className="px-4 py-2 whitespace-nowrap">
                    <span className="text-[#677788] text-[14px]">{ticket.store}</span>
                    <br />
                    <span className="text-[#01684B] text-[14px]">{ticket.detail}</span>
                  </td>
                  <td className="px-4 py-2 text-center ">
                    <span
                      className={`px-3 py-1 rounded text-white text-sm ${statusColors[ticket.status]}`}>
                      {ticket.status}
                    </span>
                  </td>
                  <td className="px-4 py-2 text-center">
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${priorityColors[ticket.priority]}`}>
                      {ticket.priority}
                    </span>
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap text-[#677788]">{ticket.assignee}</td>
                  <td className="px-4 py-2 text-center">
                    <select
                      className="bg-primary text-textPrimary text-[12px] px-2 py-1 rounded"
                      defaultValue=""
                      onChange={(e) => {
                        if (e.target.value === "assign") {
                          setShowAgentPopup(true);
                        }
                        e.target.value = "";
                      }}>
                      <option value="" disabled>
                        Action
                      </option>
                      <option value="assign">Assign Agent</option>
                      <option value="close">Mark as Closed</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* POPUP */}
        {showAgentPopup && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
            <div className="bg-white rounded-lg shadow-lg w-[95%] max-w-4xl p-4 pt-10 relative">
              <button
                onClick={() => setShowAgentPopup(false)}
                className="absolute top-2 right-3 text-gray-500">
                <CloseIcon />
              </button>
              <AgentList />
            </div>
          </div>
        )}
      </div>
        {/* {showSupplyChain && (
        <SupplyChain onClose={() => setShowSupplyChain(false)} />
       )} */}
      {showSupplyChain && (<SupplyChain onClose={() => setShowSupplyChain(false)} onSuccess={handleTicketSuccess} />)}
       
      {showTrainingSupport && (<TrainingSupport onClose={() => setShowTrainingSupport(false)} onSuccess={handleTicketSuccess}/>)}
      {showTechnicianSupport && (<TechnicianSupport onClose={() => setShowTechnicianSupport(false)} onSuccess={handleTicketSuccess}/>)}
      {showCRMSupport && (<CRMSupport onClose={() => setShowCRMSupport(false)} onSuccess={handleTicketSuccess}/>)}
      {showManpowerSupport && (<ManpowerSupport onClose={() => setShowManpowerSupport(false)} onSuccess={handleTicketSuccess}/>)}
      {showMarketingSupport && (<MarketingSupport onClose={() => setShowMarketingSupport(false)} onSuccess={handleTicketSuccess}/>)}
      {showCustomerSupport && ( <CustomerSupport onClose={() => setShowCustomerSupport(false)} onSuccess={handleTicketSuccess}/>)}

      {showThankYou && (<ThankYou ticketId={ticketId} onClose={() => setShowThankYou(false)}/>)}
    </div>
  );
};

export default AllTicket;
