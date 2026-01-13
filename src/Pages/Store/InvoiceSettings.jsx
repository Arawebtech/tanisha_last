import React, { useState } from "react";
import StoreHeader from "./StoreHeader";

const Label = ({text}) => (
    <label className="text-[14px] text-[#000000] mt-2">{text}</label>
)

const Input = ({ placeholder }) => (
  <input
    type="text"
    placeholder={placeholder}
    className="w-full rounded-md border border-[#E7EAF3] px-3 py-2  text-[14px]
               text-[#757575] focus:outline-none focus:ring-1 focus:ring-black-500"
  />
);


const InvoiceSettings = () => {
    const [gstEnabled, setGstEnabled] = useState(false);

    return(
        <div className="lg:ml-[264px] min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-[70px_15px_15px] font-font">
            <StoreHeader/>
            <h2 className="text-[#343A40] text-[30px] font-medium">Invoice Details</h2>
            <div className="bg-white rounded-lg shadow-sm w-[100%] sm:w-[60%] p-6">
                <p className="text-[#FD3434] text-[16px] font-medium">Detail marked with * is mandatory</p>
                <h2 className="text-[#1E2022] text-[16px] font-semibold py-4 ">Bill Form</h2>
                <div>
                <Label text="Store Name"><span className="text-red-500">*</span></Label>
                <Input placeholder="Fabodry"/>
                </div>

                <div>
                    <Label text="Phone Number"><span className="text-red-500">*</span></Label>
                    <Input placeholder="Fabodry"/>
                </div>

                <div>
                    <Label text="Full Address"><span className="text-red-500">*</span></Label>
                    <Input placeholder="Address"/>
                </div>

               <div className="mt-4">
              <Label text="GST Billing" />

             <div className="flex items-center gap-3 mt-2">
            <button
            onClick={() => setGstEnabled(!gstEnabled)}
            className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors duration-300
            ${gstEnabled ? "bg-[#006370]" : "bg-gray-300"}`}>
            <div
                className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300
                ${gstEnabled ? "translate-x-6" : "translate-x-0"}`}
            ></div>
        </button>

        {/* <span className="text-[14px] text-gray-600">
            {gstEnabled ? "Enabled" : "Disabled"}
        </span> */}
    </div>
</div>
                <button className="bg-[#006370] text-white text-[14px] px-4 py-1 mt-12">Submit</button>
            </div>
        </div>
    )
}
export default InvoiceSettings;