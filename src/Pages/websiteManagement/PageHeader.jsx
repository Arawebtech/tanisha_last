// import ArticleIcon from "@mui/icons-material/Article";
// import { useNavigate, useLocation } from "react-router-dom";

// const PageHeader = ({ title = "Page Setting" }) => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const pages = [
//     { label: "Homepage", path: "/homepage" },
//     { label: "About Us", path: "/about-us" },
//     { label: "Our Services", path: "/services" },
//     { label: "Pricing", path: "/pricing" },
//     { label: "Contact Us", path: "/contact-us" },
//     { label: "Privacy Policy", path: "/privacy" },
//     { label: "Terms & Conditions", path: "/terms" },
//     { label: "Disclaimer", path: "/disclaimer" },
//     { label: "Dynamic City Page", path: "/dynamic" },
//     { label: "Franchise Page", path: "/franchise" },
//     { label: "Career Page", path: "/career" }
//   ];

//   return (
//     <div className="mb-6 font-font">
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

// export default PageHeader;
import ArticleIcon from "@mui/icons-material/Article";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

const PageHeader = ({ title = "Page Setting" }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const pages = [
    { label: "Homepage", path: "/homepage" },
    { label: "About Us", path: "/about-us" },
    { label: "Our Services", path: "/services" },
    { label: "Pricing", path: "/pricing" },
    { label: "Contact Us", path: "/contact-us" },
    { label: "Privacy Policy", path: "/privacy" },
    { label: "Terms & Conditions", path: "/terms" },
    { label: "Disclaimer", path: "/disclaimer" },
    { label: "Dynamic City Page", path: "/dynamic" },
    { label: "Franchise Page", path: "/franchise" },
    { label: "Career Page", path: "/career" },
  ];

  return (
    <div className="mb-6 font-font">

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

      {/* Desktop Menu */}
      <div className="hidden md:flex mt-2 flex-wrap gap-4 text-[14px] text-[#334257]">
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

export default PageHeader;
