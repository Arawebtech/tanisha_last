// import React, { useState } from "react";

// const Time = ({ onClose, onSave }) => {
//   const [hour, setHour] = useState(7);
//   const [minute] = useState("00");
//   const [period, setPeriod] = useState("PM");

//   return (
//     <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/40">

//       <div className="bg-white w-[280px] rounded-md shadow-lg p-4">

//         {/* Header */}
//         <p className="text-xs text-gray-500 mb-2">SELECT TIME</p>

//         <div className="flex items-center justify-center gap-2 mb-4">
//           <div className="bg-cyan-100 text-[#006370] text-2xl px-4 py-2 rounded">
//             {hour}
//           </div>

//           <span className="text-xl">:</span>

//           <div className="bg-gray-100 text-2xl px-4 py-2 rounded">
//             {minute}
//           </div>

//           {/* AM / PM */}
//           <div className="flex flex-col border rounded overflow-hidden">
//             <button
//               onClick={() => setPeriod("AM")}
//               className={`px-3 py-1 text-sm ${
//                 period === "AM" ? "bg-cyan-100 text-[#006370]" : ""
//               }`}
//             >
//               AM
//             </button>
//             <button
//               onClick={() => setPeriod("PM")}
//               className={`px-3 py-1 text-sm ${
//                 period === "PM" ? "bg-cyan-100 text-[#006370]" : ""
//               }`}
//             >
//               PM
//             </button>
//           </div>
//         </div>

//         <div className="flex justify-center mb-4">
//           <div className="w-36 h-36 rounded-full bg-gray-100 relative flex items-center justify-center">
//             <div className="absolute w-[2px] h-14 bg-[#006370] bottom-1/2 origin-bottom rotate-[210deg]" />
//             <div className="absolute w-3 h-3 bg-[#006370] rounded-full" />
//             <span className="absolute bottom-3 text-[#006370] font-semibold">
//               {hour}
//             </span>
//           </div>
//         </div>

//         {/* Footer */}
//         <div className="flex justify-end gap-4 text-sm font-semibold text-[#006370]">
//           <button onClick={onClose}>CANCEL</button>
//           <button onClick={() => onSave(`${hour}:${minute} ${period}`)}>
//             OK
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Time;

import React, { useMemo, useState } from "react";

const HOURS = [1,2,3,4,5,6,7,8,9,10,11,12];

const Time = ({ onClose, onSave }) => {
  // remove generics and union types
  const [mode, setMode] = useState("hour");     // "hour" | "minute"
  const [hour, setHour] = useState(7);
  const [minute, setMinute] = useState(0);
  const [period, setPeriod] = useState("AM");   // "AM" | "PM"

  const angle = useMemo(() => {
    if (mode === "hour") {
      const index = HOURS.indexOf(hour);
      return (index / 12) * 360;
    }
    return (minute / 60) * 360;
  }, [mode, hour, minute]);

  // remove parameter type annotations
  const handleHourClick = (h) => {
    setHour(h);
    setMode("minute");
  };

  const handleMinuteClick = (m) => {
    setMinute(m);
  };

  const displayMinute = minute.toString().padStart(2, "0");

  const handleOk = () => {
    const h12 = hour === 12 ? 12 : hour;
    const timeStr = `${h12}:${displayMinute} ${period}`;
    if (onSave) onSave(timeStr);
  };

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/40 font-font">
      <div className="bg-white w-[280px] rounded-md shadow-lg p-4">
        {/* Header */}
        <p className="text-xs text-gray-500 mb-2 tracking-[0.15em]">
          SELECT TIME
        </p>

        {/* Digital display */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <button
            className={`bg-cyan-100 text-[#006370] text-3xl px-3 py-1 rounded
                        ${mode === "hour" ? "shadow-inner" : ""}`}
            onClick={() => setMode("hour")}
          >
            {hour}
          </button>

          <span className="text-2xl">:</span>

          <button
            className={`bg-gray-100 text-3xl px-3 py-1 rounded
                        ${mode === "minute" ? "shadow-inner" : ""}`}
            onClick={() => setMode("minute")}
          >
            {displayMinute}
          </button>

          {/* AM / PM */}
          <div className="flex flex-col border rounded overflow-hidden ml-2">
            <button
              onClick={() => setPeriod("AM")}
              className={`px-3 py-1 text-xs ${
                period === "AM" ? "bg-cyan-100 text-[#006370]" : ""
              }`}
            >
              AM
            </button>
            <button
              onClick={() => setPeriod("PM")}
              className={`px-3 py-1 text-xs ${
                period === "PM" ? "bg-cyan-100 text-[#006370]" : ""
              }`}
            >
              PM
            </button>
          </div>
        </div>

        {/* Clock dial */}
        <div className="flex justify-center mb-4">
          <div className="relative w-40 h-40 rounded-full bg-gray-100 flex items-center justify-center">
            {/* Hand */}
            <div
              className="absolute w-[2px] h-16 bg-[#006370] origin-bottom bottom-1/2"
              style={{ transform: `rotate(${angle}deg)` }}
            />
            {/* Center dot */}
            <div className="absolute w-3 h-3 bg-[#006370] rounded-full" />

            {/* Hour or minute numbers */}
            {mode === "hour" &&
              HOURS.map((h, i) => {
                const theta = (i / 12) * 2 * Math.PI - Math.PI / 2;
                const radius = 60; // px from center
                const x = radius * Math.cos(theta);
                const y = radius * Math.sin(theta);

                const isActive = h === hour;
                return (
                  <button
                    key={h}
                    type="button"
                    onClick={() => handleHourClick(h)}
                    className={`absolute w-8 h-8 rounded-full text-xs flex items-center justify-center
                                ${isActive ? "bg-[#006370] text-white" : "text-gray-700"}`}
                    style={{
                      transform: `translate(${x}px, ${y}px)`
                    }}
                  >
                    {h}
                  </button>
                );
              })}

            {mode === "minute" &&
              Array.from({ length: 12 }).map((_, i) => {
                const m = i * 5;
                const theta = (i / 12) * 2 * Math.PI - Math.PI / 2;
                const radius = 60;
                const x = radius * Math.cos(theta);
                const y = radius * Math.sin(theta);

                const isActive = m === minute;
                return (
                  <button
                    key={m}
                    type="button"
                    onClick={() => handleMinuteClick(m)}
                    className={`absolute w-8 h-8 rounded-full text-xs flex items-center justify-center
                                ${isActive ? "bg-[#006370] text-white" : "text-gray-700"}`}
                    style={{
                      transform: `translate(${x}px, ${y}px)`
                    }}
                  >
                    {m.toString().padStart(2, "0")}
                  </button>
                );
              })}
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center text-xs text-gray-500 mb-1">
          <span className="pl-1">&#128424;</span>
        </div>
        <div className="flex justify-end gap-4 text-sm font-semibold text-[#006370]">
          <button onClick={onClose}>CANCEL</button>
          <button onClick={handleOk}>OK</button>
        </div>
      </div>
    </div>
  );
};

export default Time;

