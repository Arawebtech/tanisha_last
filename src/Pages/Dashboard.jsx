import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Select, MenuItem } from "@mui/material";
import FactCheckIcon from '@mui/icons-material/FactCheck';
import AddIcon from '@mui/icons-material/Add';
import Trend from "./Trend";
import { useNavigate } from "react-router-dom";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import CreateTicket from "./CreateTicket";
import SupplyChain from "./components/SupplyChain";
import TrainingSupport from "./components/TrainingSupport";
import TechnicianSupport from "./components/TechnicianSupport";
import CRMSupport from "./components/CRMSupport";
import ManpowerSupport from "./components/ManpowerSupport";
import MarketingSupport from "./components/MarketingSupport";
import CustomerSupport from "./components/CustomerSupport";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const agentTicketData = [
  { name: "Agent", urgent: 300, high: 100, medium: 100 },
  { name: "Agent", urgent: 320, high: 120, medium: 120 },
  { name: "Agent", urgent: 340, high: 150, medium: 150 },
  { name: "Agent", urgent: 380, high: 180, medium: 120 },
  { name: "Agent", urgent: 330, high: 100, medium: 150 },
  { name: "Agent", urgent: 410, high: 150, medium: 140 },
  { name: "Agent", urgent: 450, high: 140, medium: 140 },
  { name: "Agent", urgent: 340, high: 160, medium: 100 },
  { name: "Agent", urgent: 310, high: 130, medium: 110 },
  { name: "Agent", urgent: 460, high: 110, medium: 130 },
  { name: "Agent", urgent: 360, high: 120, medium: 120 },
  { name: "Agent", urgent: 400, high: 150, medium: 150 },
];

const storeTicketData = [
  { name: "Agent", urgent: 300, high: 100, medium: 100 },
  { name: "Agent", urgent: 320, high: 120, medium: 120 },
  { name: "Agent", urgent: 340, high: 150, medium: 150 },
  { name: "Agent", urgent: 380, high: 180, medium: 120 },
  { name: "Agent", urgent: 330, high: 100, medium: 150 },
  { name: "Agent", urgent: 410, high: 150, medium: 140 },
  { name: "Agent", urgent: 450, high: 140, medium: 140 },
  { name: "Agent", urgent: 340, high: 160, medium: 100 },
  { name: "Agent", urgent: 310, high: 130, medium: 110 },
  { name: "Agent", urgent: 460, high: 110, medium: 130 },
  { name: "Agent", urgent: 360, high: 120, medium: 120 },
  { name: "Agent", urgent: 400, high: 150, medium: 150 },
];

const categoryTicketData = [
    { name: "Agent", urgent: 300, high: 100, medium: 100 },
  { name: "Agent", urgent: 320, high: 120, medium: 120 },
  { name: "Agent", urgent: 340, high: 150, medium: 150 },
  { name: "Agent", urgent: 380, high: 180, medium: 120 },
  { name: "Agent", urgent: 330, high: 100, medium: 150 },
  { name: "Agent", urgent: 410, high: 150, medium: 140 },
  { name: "Agent", urgent: 450, high: 140, medium: 140 },
  { name: "Agent", urgent: 340, high: 160, medium: 100 },
  { name: "Agent", urgent: 310, high: 130, medium: 110 },
  { name: "Agent", urgent: 460, high: 110, medium: 130 },
  { name: "Agent", urgent: 360, high: 120, medium: 120 },
  { name: "Agent", urgent: 400, high: 150, medium: 150 },
];

const categoryData = [
  { name: "Shoe Cleaning", value: 34 },
  { name: "Premium Laundry", value: 22 },
  { name: "Dry Clean", value: 22 },
  { name: "Others", value: 22 },
];

// const statsData = [
//   { title: "All Tickets", value: 14, trend: 22 },
//   { title: "Open Tickets", value: 24, trend: -25 },
//   { title: "Closed Tickets", value: 0, trend: 49 },
//   { title: "Due Tickets", value: 7, trend: 49 },
// ];
const statsData = [
  { title: "All Tickets", value: 14, trend: 22, color: "#FF8901" }, 
  { title: "Open Tickets", value: 24, trend: -25, color: "#FF392B" }, 
  { title: "Closed Tickets", value: 0, trend: 49, color: "#279F51" }, 
  { title: "Due Tickets", value: 7, trend: 49, color: "#279F51" }, 
];

const statusData = [
  { name: "Urgent", value: 34 },
  { name: "Medium", value: 22 },
  { name: "High", value: 22 },
];

const priorityData = [
  { name: "Urgent", value: 34 },
  { name: "Medium", value: 22 },
  { name: "High", value: 22 },
  { name: "Low", value: 22 },
];

const CATEGORY_COLORS = ["#1900D5", "#1E95A1", "#8400D5", "#FF6D28"];
const STATUS_COLORS = ["#1E95A1", "#00C9A7", "#006370", "#FF6D28"];
const PRIORITY_COLORS = ["#1900D5", "#1E95A1", "#8400D5", "#FF6D28"];

const ticketSections = [
  { 
    title: "Agent Wise Tickets", 
    data: agentTicketData, 
  },
  { 
    title: "Store Wise Tickets", 
    data: storeTicketData, 
  },
  { 
    title: "Category Wise Tickets", 
    data: categoryTicketData, 
  },
];

const statusOptions = ["Status Filter", "All", "Open", "Close"];


// const Trend = ({ value }) => {
//   const isPositive = value > 0;
//   return (
//     <span
//       className={`text-[12px] font-medium ${
//         isPositive ? "text-green-600" : "text-red-500"
//       }`}
//     >
//       {isPositive ? "▲" : "▼"} {Math.abs(value)}%
//     </span>
//   );
// };

const renderPercentageLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) / 2;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="#fff"
      textAnchor="middle"
      dominantBaseline="middle"
      fontSize={11}
      fontWeight={600}
    >
      {(percent * 100).toFixed(0)}%
    </text>
  );
};

const LegendItems = ({ data, colors }) => (
  <div className="mt-2 flex justify-center">
    <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-[11px]">
      {data.map((entry, index) => (
        <div key={index} className="flex items-center gap-2 justify-start">
          <span
            className="w-3 h-3 rounded-full flex-shrink-0"
            style={{ backgroundColor: colors[index % colors.length] }}
          />
          <span className="text-[#7C7C7C] whitespace-nowrap">
            {entry.name || entry.title}
          </span>
        </div>
      ))}
    </div>
  </div>
);
const StackedThinBarChart = ({ data }) => (
 
     <ResponsiveContainer width="100%" height={300}>
  <BarChart
    data={agentTicketData}
    barCategoryGap="40%"
     barGap={8}
    margin={{ top: 20, right: 20, left: 0, bottom: 5 }}
  >
    <CartesianGrid strokeDasharray="3 3" vertical={false} />
    <XAxis dataKey="name" tick={{ fontSize: 10 }} interval={0} />
    {/* <YAxis tick={{ fontSize: 10 }} /> */}
    <YAxis
  ticks={[0, 250, 500, 750, 1000]}
  domain={[0, 1100]}
  padding={{ bottom: 20 }}
  tick={{ fontSize: 10 }}
/>
    <Tooltip />
    <Bar dataKey="urgent" stackId="a" fill="#2C536B" radius={[6, 6, 0, 0]} barSize={6} />
    <Bar dataKey="high" stackId="a" fill="#4FB9C2" radius={[6, 6, 0, 0]} barSize={6} />
    <Bar dataKey="medium" stackId="a" fill="#56CA00" radius={[6, 6, 0, 0]} barSize={6} />
  </BarChart>
</ResponsiveContainer>
);

const Dashboard = () => {
  const navigate = useNavigate();
  const today = new Date().toISOString().split("T")[0];
  const [showCreateTicket, setShowCreateTicket] = useState(false);
  const [showCreateDropdown, setShowCreateDropdown] = useState(false);
  const [showSupplyChain, setShowSupplyChain] = useState(false);
  const [showTrainingSupport, setShowTrainingSupport] = useState(false);
  const [showTechnicianSupport, setShowTechnicianSupport] = useState(false);
  const [showCRMSupport, setShowCRMSupport] = useState(false);
  const [showManpowerSupport, setShowManpowerSupport] = useState(false);
  const [showMarketingSupport, setShowMarketingSupport] = useState(false);
  const [showCustomerSupport, setShowCustomerSupport] = useState(false);

  return (
    
 <div className="bg-gray-100 min-h-screen pt-[70px] px-3 lg:px-[15px] lg:ml-[264px] font-poppins"> 
    {/*  <div className="lg:ml-[264px] bg-gray-100 min-h-screen" style={{ padding: "70px 15px 0px" }}> */}
      <div className="flex justify-end gap-2 mb-2 ">
  <button
    className="px-4 py-[6px] text-[14px] rounded-md border border-primary text-textPrimary bg-primary hover:bg-[#0d666c]  transition"
   onClick={() => navigate("/all")}>
   <FactCheckIcon/> All Tickets 
  </button>

 {/* <button
  onClick={() => setShowCreateTicket(true)}
  className="px-4 py-[6px] text-[14px] rounded-md bg-primary text-textPrimary hover:bg-[#0d666c] transition">
  <AddIcon /> Create Ticket
</button> */}
       <button
          onClick={() => setShowCreateDropdown(!showCreateDropdown)}
          className="px-4 py-[6px] text-[12px] rounded-md bg-primary text-white  lg:col-auto flex items-center gap-1">
          <AddOutlinedIcon fontSize="medium" />Create Ticket
        </button>

       {showCreateDropdown && (
     <div className="absolute mt-2 right-0 lg:w-[280px] w-[90vw] left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0 bg-[#A8A4A4] p-2 rounded-md shadow-lg z-[9999]">

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
            className="w-full flex items-center gap-2 text-left border border-black px-3 py-2 mb-2 rounded text-secondary font-semibold text-[13px]"
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

      {/* FILTERS */}
      <div className="bg-white p-4 rounded-xl shadow-sm ">
        <h2 className="text-[14px] font-semibold mb-3">Select Filter</h2>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-6">

          {/* <select className="border rounded-md px-3 py-2 text-[13px]  ">
            <option>All Store</option>
            <option>Store 1</option>
            <option>Store 2</option>
            <option>Store 3</option>
          </select> */}
{/* All Store */}
<Select
  size="small"
  defaultValue="All Store"
  className="col-span-1 lg:col-span-1"
  sx={{
    fontFamily: "var(--font)",
    fontSize: "13px",
    borderRadius: "6px",
    minWidth: "100%",
    "& .MuiSelect-select": { padding: "6px 12px" },
  }}
>
  {["All Store", "Store 1", "Store 2", "Store 3"].map((store) => (
    <MenuItem key={store} value={store}>
      {store}
    </MenuItem>
  ))}
</Select>

<Box className="col-span-1 lg:col-span-2 flex gap-2">
  <TextField
    label="Start Date"
    type="date"
    size="small"
    InputLabelProps={{ shrink: true }}
    defaultValue={today}
    fullWidth
  />
  <TextField
    label="End Date"
    type="date"
    size="small"
    InputLabelProps={{ shrink: true }}
    defaultValue={today}
    fullWidth
  />
</Box>

<div className="col-span-1 lg:col-span-2 flex gap-2">
  <select className="border rounded-md px-3 py-2 text-[13px] w-1/2">
    <option>Store Type</option>
  </select>

  <select className="border rounded-md px-3 py-2 text-[13px] w-1/2">
    <option>Branch Type</option>
  </select>
</div>
<button className="bg-secondary text-white rounded-md text-[13px] col-span-1 lg:col-span-1 py-2">
  Show Data
</button>
        </div>
      </div>

      {/* STATS CARDS */}   
 {/* <div className="mt-4 px-3 lg:px-0 max-w-[900px] mr-4"> */}
 {/* <div className="mt-4 px-4 lg:px-0 max-w-[900px] mr-4"> */}
 <div className="mt-4 px-0 lg:px-0 max-w-[900px] w-full">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {statsData.map((item, i) => (
          <div className="bg-white p-4 rounded-xl shadow-sm">
  <div className="grid grid-cols-2 gap-y-2 items-center">
    
    {/* Row 1 */}
    <p className="text-[14px] text-[#8E95A9] whitespace-nowrap">
      {item.title}
    </p>
    <Trend value={item.trend} showLine={false} color={item.color}/>

    {/* Row 2 */}
    <h2 className="text-[24px] text-[#1C2A53]">
      {item.value}
    </h2>
    <Trend value={item.trend} showPercentage={false} color={item.color}/>
    </div>
   </div>
          ))}
        </div>
      </div>

      <div className="mt-4 max-w-[900px] grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* category*/}
        <div className="bg-white p-4 rounded-xl shadow-sm">
          <h3 className="text-center font-semibold mb-3 text-[#000000]">Ticket By Category</h3>
          <ResponsiveContainer width="100%" height={160}>
            <PieChart>
              <Pie
                data={categoryData}
                dataKey="value"
                innerRadius={40}
                outerRadius={80}
                label={renderPercentageLabel}
                labelLine={false}>
                {categoryData.map((_, i) => (
                  <Cell key={i} fill={CATEGORY_COLORS[i]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <LegendItems data={categoryData} colors={CATEGORY_COLORS} />
        </div>

        {/* status */}
        <div className="bg-white p-4 rounded-xl shadow-sm">
          <h3 className="text-center font-semibold mb-3 text-[#000000]">Ticket By Status</h3>
          <ResponsiveContainer width="100%" height={160}>
            <PieChart>
              <Pie
                data={statusData}
                dataKey="value"
                innerRadius={50}
                outerRadius={80}
                label={renderPercentageLabel}
                labelLine={false}
              >
                {statusData.map((_, i) => (
                  <Cell key={i} fill={STATUS_COLORS[i]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <LegendItems data={statusData} colors={STATUS_COLORS} />
        </div>

        {/* priority */}
        <div className="bg-white p-4 rounded-xl shadow-sm">
          <h3 className="text-center font-semibold mb-3">Ticket By Priority</h3>
          <ResponsiveContainer width="100%" height={160}>
            <PieChart>
              <Pie
                data={priorityData}
                dataKey="value"
                innerRadius={40}
                outerRadius={80}
                label={renderPercentageLabel}
                labelLine={false}>
                {priorityData.map((_, i) => (
                  <Cell key={i} fill={PRIORITY_COLORS[i]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <LegendItems data={priorityData} colors={PRIORITY_COLORS} />
        </div>
      </div>

     {ticketSections.map((section, idx) => (
  // <div key={idx} className="mt-4 px-3 lg:px-0 max-w-[900px] mr-4">
 <div
  key={idx}
  className="mt-4 px-0 lg:px-0 max-w-[900px] w-full"
>


    {/* Status Filter */}
    <div className="flex justify-end mb-0 ">
      <Select
        size="small"
        defaultValue={statusOptions[0]}
        sx={{
          fontFamily: "var(--font)",
          fontSize: "13px",
          borderRadius: "6px",
          minWidth: 150,
          "& .MuiSelect-select": { padding: "6px 12px" },
        }}>
        {statusOptions.map((option) => (
          <MenuItem
            key={option}
            value={option}
            sx={{
              fontSize: "13px",
              "&:hover": { backgroundColor: "#094448", color: "#fff" },
              "&.Mui-selected": { backgroundColor: "transparent", color: "inherit" },
              "&.Mui-selected:hover": { backgroundColor: "#094448", color: "#fff" },
            }}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </div>

    {/* bar charts */}
    <div className="bg-white p-4 rounded-xl shadow-sm mt-1">
      <div className="flex items-center mb-3">
        <h3 className="text-[18px] font-semibold">{section.title}</h3>
      </div>
      <div className="overflow-x-auto -mx-4 lg:mx-0">
        <div className="min-w-[700px]">
          <StackedThinBarChart data={section.data} />
        </div>
      </div>
    </div>
  </div>
))}
{showCreateTicket && (
  <CreateTicket onClose={() => setShowCreateTicket(false)} />
)}
 {showSupplyChain && (
        <SupplyChain onClose={() => setShowSupplyChain(false)} />
       )}
         {showTrainingSupport && <TrainingSupport onClose={() => setShowTrainingSupport(false)} />}
          {showTechnicianSupport && <TechnicianSupport onClose={() => setShowTechnicianSupport(false)} />}
          {showCRMSupport && <CRMSupport onClose={() => setShowCRMSupport(false)} />}
            {showManpowerSupport && <ManpowerSupport onClose={() => setShowManpowerSupport(false)} />}
            {showMarketingSupport && <MarketingSupport onClose={() => setShowMarketingSupport(false)} />}
          {showCustomerSupport && <CustomerSupport onClose={() => setShowCustomerSupport(false)} />}
    </div>
   
  );
};

export default Dashboard;