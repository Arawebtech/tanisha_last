import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import NotificationImportantIcon from "@mui/icons-material/NotificationImportant";

const SystemMaintenance = ({ onClose }) => {
  const [isOn, setIsOn] = useState(true);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-[900px] rounded-lg bg-white p-6">

        {/* Header */}
        <div className="flex items-center justify-between">
          <h2 className="flex items-center gap-2 text-[16px] font-semibold text-[#1E2022]">
            <NotificationImportantIcon fontSize="small" />
            System Maintenance
          </h2>
          <CloseIcon
            onClick={onClose}
            className="cursor-pointer text-gray-500"
          />
        </div>

        {/* Description */}
        <p className="text-[12px] text-[#677788] text-[14px] mt-3">
          *By turning on maintenance mode Control your all system & function
        </p>

        {/* Maintenance Toggle */}
        <div className="flex items-center justify-end mt-2">
          <div className="flex items-center gap-3 border border-[#E7EAF3] rounded-md px-6 py-2">
            <span className="text-[13px] text-[#1E2022] font-semibold">Maintenance Mode</span>

            <button
              onClick={() => setIsOn(!isOn)}
              className={`w-11 h-6 flex items-center rounded-full p-1 transition
                ${isOn ? "bg-teal-600" : "bg-gray-300"}`}
            >
              <div
                className={`w-4 h-4 bg-white rounded-full shadow transition
                  ${isOn ? "translate-x-5" : ""}`}
              />
            </button>
          </div>
        </div>

       {/* Content */}
<div className="grid grid-cols-2 gap-8 mt-6">

  {/* Left Column */}
  <div className="flex flex-col gap-10">
    <div>
      <h3 className="font-semibold text-[18px] text-[#1E2022]">
        Select System
      </h3>
      <p className="text-[14px] text-[#677788] mt-1">
        Select the systems you want to temporarily deactivate for maintenance
      </p>
    </div>

    <div>
      <h3 className="font-semibold text-[18px] text-[#1E2022]">
        Maintenance Date & Time
      </h3>
      <p className="text-[14px] text-[#677788] mt-1">
        Choose the maintenance mode duration for your selected system.
      </p>
    </div>
  </div>

  {/* Right Column */}
  <div className="flex flex-col gap-6">

    {/* System Selection */}
    <div className="border rounded-md p-4">
      <div className="flex flex-wrap gap-6 text-[13px] text-[#677788]">
        <label className="flex items-center gap-1">
          <input type="checkbox" />
          All System
        </label>
        <label className="flex items-center gap-1">
          <input type="checkbox" />
          Super Admin
        </label>
        <label className="flex items-center gap-1">
          <input type="checkbox" />
          Franchisee
        </label>
      </div>
    </div>

    {/* Maintenance Duration */}
    <div className="border rounded-md p-4">
      <div className="grid grid-cols-2 gap-3 text-[13px] text-[#677788]">
        <label className="flex items-center gap-1">
          <input type="radio" name="time" />
          For 24 Hours
        </label>
        <label className="flex items-center gap-1">
          <input type="radio" name="time" />
          For 1 Week
        </label>
        <label className="flex items-center gap-1">
          <input type="radio" name="time" defaultChecked />
          Until I change
        </label>
        <label className="flex items-center gap-1">
          <input type="radio" name="time" />
          Customize
        </label>
      </div>

      {/* Dates */}
      <div className="flex gap-4 mt-4">
        <input
          type="text"
          placeholder="Start Date"
          className="w-full border rounded-md px-3 py-2 text-[13px]"
        />
        <input
          type="text"
          placeholder="End Date"
          className="w-full border rounded-md px-3 py-2 text-[13px]"
        />
      </div>
    </div>

  </div>
</div>


        {/* Footer */}
        <div className="flex justify-end gap-3 mt-8">
          <button
            onClick={onClose}
            className="px-4 py-2 text-[13px] bg-gray-500 text-white rounded-md"
          >
            Cancel
          </button>
          <button className="px-4 py-2 text-[13px] bg-teal-700 text-white rounded-md">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default SystemMaintenance;
