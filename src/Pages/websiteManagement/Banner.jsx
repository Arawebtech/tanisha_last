import { useState } from "react";

const Banner = ({
  title = "Banner",
  bannerTitleLabel = "Banner Title",
  bannerTitlePlaceholder = "Change Title",
  onViewChange
}) => {
  const [view, setView] = useState("desktop");

  const handleViewChange = (selectedView) => {
    setView(selectedView);
    onViewChange?.(selectedView); 
  };

  return (
    <div className="rounded-md border border-gray-200 p-4 mb-6 font-font">
      <h3 className="mb-4 text-[#000000] font-semibold text-[14px]">
        {title}
      </h3>

      {/* Desktop / Mobile Toggle */}
      <div className="mb-4 flex overflow-hidden rounded-md border border-[#7C7C7C85]">
        <button
          onClick={() => handleViewChange("desktop")}
          className={`flex-1 py-2 text-[14px] text-textPrimary ${
            view === "desktop" ? "bg-secondary" : "bg-[#1079806B]"
          }`}
        >
          Desktop
        </button>

        <button
          onClick={() => handleViewChange("mobile")}
          className={`flex-1 py-2 text-[14px] text-textPrimary ${
            view === "mobile" ? "bg-secondary" : "bg-[#1079806B]"
          }`}
        >
          Mobile
        </button>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-[0.8fr_1.2fr] gap-6">
        <div className="mt-8">
          <label className="text-[14px] text-[#334257] font-medium">
            {bannerTitleLabel}
          </label>
          <input
            type="text"
            placeholder={bannerTitlePlaceholder}
            className="w-full rounded-md border border-[#E7EAF3] px-3 py-2 text-[14px]
                       text-[#A0A0A0] focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        {/* Upload Box */}
        <div className="flex flex-col items-center justify-center rounded-md border-2 border-dashed border-[#727272] py-6 text-center">
          <p className="text-[14px] text-[#A3A3A3]">Drop files here</p>
          <span className="my-1 text-[14px] text-[#A3A3A3]">or</span>
          <button className="my-1 bg-[#F4F5F7] text-[#334257] text-[14px] px-4 py-2 rounded-md">
            Select Files
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
