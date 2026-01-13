import React, { useState } from "react";
import StoreHeader from "./StoreHeader";

const initialSlots = [
  "7 AM - 8 AM",
  "8 AM - 9 AM",
  "9 AM - 10 AM",
  "10 AM - 11 AM",
  "11 AM - 12 PM",
];

const StoreTimings = () => {
  const [slots, setSlots] = useState(
    initialSlots.map((slot) => ({
      time: slot,
      enabled: false,
    }))
  );

  const toggleSlot = (index) => {
    const updatedSlots = [...slots];
    updatedSlots[index].enabled = !updatedSlots[index].enabled;
    setSlots(updatedSlots);
  };

  return (
    <div className="lg:ml-[264px] min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-[70px_15px_15px] font-font">
      <StoreHeader />

      <div className="p-6">
        <h2 className="text-[#343A40] text-[30px] font-medium">Timeslot</h2>

        {/* Store Info */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-6 w-full sm:w-[60%]">
          <p className="text-[#6C757D]">
            Opening Time :
            <span className="text-[#212529] font-semibold ml-1">10:00 AM</span>
          </p>
          <p className="text-[#6C757D]">
            Closing Time :
            <span className="text-[#212529] font-semibold ml-1">8:00 PM</span>
          </p>
          <p className="text-[#6C757D]">
            Weekly Off :
            <span className="text-[#212529] font-semibold ml-1">Sun</span>
          </p>
        </div>

        {/* Date Section */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end gap-4 w-full sm:w-[60%] mb-6">
          <button className="bg-primary text-white py-2 px-4 rounded-md text-[14px]">
            25 December 2024
          </button>

          <div className="flex flex-col">
            <label className="text-[#334257] text-[12px] mb-1">
              Custom Date
            </label>
            <input
              type="date"
              className="border border-[#000000] rounded-md px-3 py-2 text-[14px]"
            />
          </div>
        </div>

        {/* Timeslot Table */}
        <div className="w-full sm:w-[60%] bg-white rounded-md border border-gray-200">
          {/* Header */}
          <div className="grid grid-cols-2 px-4 py-3 border-b text-[#6C757D] text-[14px] font-medium">
            <span>Timeslot</span>
            <span>Status</span>
          </div>

          {/* Rows */}
          {slots.map((slot, index) => (
            <div
              key={index}
              className="grid grid-cols-2 px-4 py-4 border-b last:border-b-0 text-[14px]">
              <span className="text-[#212529]">{slot.time}</span>

              <div className="flex items-center gap-3">
                {/* Toggle */}
                <button
                  onClick={() => toggleSlot(index)}
                  className={`relative inline-flex h-5 w-9 items-center rounded-full transition ${
                    slot.enabled ? "bg-[#009FAA]" : "bg-gray-300"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                      slot.enabled ? "translate-x-4" : "translate-x-1"
                    }`}
                  />
                </button>

                <span
                  className={`text-[13px] font-medium ${
                    slot.enabled ? "text-primary" : "text-[#6C757D]"
                  }`}
                >
                  {slot.enabled ? "ON" : "OFF"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StoreTimings;
