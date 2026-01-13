// import ArticleIcon from "@mui/icons-material/Article";
// import { useNavigate, useLocation } from "react-router-dom";

// const GlobalHeader = ({ title = "Global Setting" }) => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const pages = [
//     { label: "Header Options", path: "/header-options" },
//     { label: "Footer Options", path: "/footer-options" },
//     { label: "Extras", path: "/extras" },
//   ];

//   return (
//     <div className="mb-6">
//       <h1 className="text-[20px] font-semibold text-[#1E2022] flex items-center gap-1">
//         <ArticleIcon fontSize="small" />
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

// export default GlobalHeader;

import ArticleIcon from "@mui/icons-material/Article";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

const GlobalHeader = ({ title = "Global Setting" }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const pages = [
    { label: "Header Options", path: "/header-options" },
    { label: "Footer Options", path: "/footer-options" },
    { label: "Extras", path: "/extras" },
  ];

  return (
    <div className="mb-6">

      {/* Header Row */}
      <div className="flex items-center justify-between">
        <h1 className="text-[20px] font-semibold text-[#1E2022] flex items-center gap-1">
          <ArticleIcon fontSize="small" />
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

export default GlobalHeader;

