// import { useNavigate, useLocation } from "react-router-dom";
// import SearchIcon from '@mui/icons-material/Search';

// const StoreHeader = ({ title = "Store Detail" }) => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const pages = [
//     { label: "Store Settings", path: "/store-settings" },
//     { label: "Store Timings", path: "/store-timings" },
//     { label: "Invoice Settings", path: "/invoice-settings" },
    
//   ];

//   return (
//     <div className="mb-6 font-font">
//       <h1 className="text-[20px] font-semibold text-[#1E2022] flex items-center gap-1">
//         <SearchIcon  fontSize="small" />
//         {title}
//       </h1>

//       <div className="mt-2 flex flex-wrap gap-4 text-[14px] text-[#334257]">
//         {pages.map((page) => {
//           const isActive = location.pathname === page.path;

//           return (
//             <span
//               key={page.path}
//               onClick={() => navigate(page.path)}
//               className={`cursor-pointer transition-colors duration-200 ${
//                 isActive
//                   ? "text-[#005555] font-semibold"
//                   : "text-[#334257] hover:text-[#005555]"
//               }`}
//             >
//               {page.label}
//             </span>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default StoreHeader;
import { useNavigate, useLocation } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

const StoreHeader = ({ title = "Store Detail" }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const pages = [
    { label: "Store Settings", path: "/store-settings" },
    { label: "Store Timings", path: "/store-timings" },
    { label: "Invoice Settings", path: "/invoice-settings" },
  ];

  return (
    <div className="mb-6 font-font">

      {/* Header Row */}
      <div className="flex items-center justify-between">
        <h1 className="text-[20px] font-semibold text-[#1E2022] flex items-center gap-1">
          <SearchIcon fontSize="small" />
          {title}
        </h1>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-[#1E2022]"
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Desktop Tabs */}
      <div className="hidden md:flex mt-2 gap-4 text-[14px] text-[#334257]">
        {pages.map((page) => {
          const isActive = location.pathname === page.path;

          return (
            <span
              key={page.path}
              onClick={() => navigate(page.path)}
              className={`cursor-pointer transition-colors duration-200 ${
                isActive
                  ? "text-[#005555] font-semibold"
                  : "text-[#334257] hover:text-[#005555]"
              }`}
            >
              {page.label}
            </span>
          );
        })}
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden mt-3 flex flex-col gap-3 rounded-md border bg-white p-3 shadow">
          {pages.map((page) => {
            const isActive = location.pathname === page.path;

            return (
              <span
                key={page.path}
                onClick={() => {
                  navigate(page.path);
                  setOpen(false);
                }}
                className={`cursor-pointer text-[14px] ${
                  isActive
                    ? "text-[#005555] font-semibold"
                    : "text-[#334257]"
                }`}
              >
                {page.label}
              </span>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default StoreHeader;
