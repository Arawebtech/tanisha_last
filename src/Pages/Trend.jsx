// import { LineChart, Line, ResponsiveContainer } from "recharts";

// const Trend = ({ value }) => {
//   const isPositive = value > 0;
//   const isNegative = value < 0;

//   const data = isPositive
//     ? [
//         { v: 10 },
//         { v: 20 },
//         { v: 18 },
//         { v: 30 },
//         { v: 40 },
//       ]
//     : [
//         { v: 40 },
//         { v: 30 },
//         { v: 25 },
//         { v: 15 },
//         { v: 10 },
//       ];

//   const color = isPositive
//     ? "#22C55E" // green
//     : isNegative
//     ? "#EF4444" // red
//     : "#F97316"; // orange

//   return (
//     <div className="flex items-center gap-2">
//       <span
//         className={`text-[12px] font-medium ${
//           isPositive
//             ? "text-green-500"
//             : isNegative
//             ? "text-red-500"
//             : "text-orange-500"
//         }`}
//       >
//         {value > 0 ? `+${value}%` : `${value}%`}
//       </span>

//       <div className="w-[60px] h-[30px]">
//         <ResponsiveContainer width="100%" height="100%">
//           <LineChart data={data}>
//             <Line
//               type="monotone"
//               dataKey="v"
//               stroke={color}
//               strokeWidth={2}
//               dot={false}
//             />
//           </LineChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
//   );
// };

// export default Trend;
const Trend = ({
  value,
  color,
  showPercentage = true,
  showLine = true,
}) => {
  const isPositive = value > 0;

  const path = isPositive
    ? "M1 20 C10 5, 20 5, 30 12 S50 20, 58 6"
    : "M1 6 C10 20, 20 20, 30 12 S50 6, 58 20";

  return (
    <div className="flex justify-end items-center gap-2">
      {showPercentage && (
        <span
          className="text-[12px] font-medium"
          style={{ color }}
        >
          {value > 0 ? `+${value}%` : `${value}%`}
        </span>
      )}

      {showLine && (
        <svg width="60" height="26" viewBox="0 0 60 26" fill="none">
          <path
            d={path}
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d={
              isPositive
                ? "M54 6 L58 6 L56 2"
                : "M54 20 L58 20 L56 24"
            }
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </div>
  );
};

export default Trend;
