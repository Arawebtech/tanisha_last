import React from "react";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import checkedIcon from "../../assets/images/checked.png";

const ThankYou = ({ ticketId = "100115", onClose }) => {
  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/50 px-2 sm:px-0 font-font">
      <div className="bg-[#006370] text-white w-[90vw] sm:w-[40rem] max-h-[90vh] rounded-lg shadow-xl text-center p-6 sm:p-8 relative font-poppins">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white/80 hover:text-white transition-colors"
          aria-label="Close">
          <HighlightOffIcon fontSize="small" />
        </button>

        <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center shadow-lg">
        <img src={checkedIcon} alt="Success" className="w-18 h-18 object-contain"/>
        </div>

        <h2 className="text-[40px] sm:text-[48px] text-[#FFFFFF] font-bold mb-1">Thank You!</h2>
        <p className="text-[15px] sm:text-[15px]  px-2">
          Your issue has been raised successfully.
        </p>
        <p className="text-[15px] sm:text-[15px] mb-2 px-2">
          We will try to resolve it at the earliest possible.
        </p>
        <p className="text-[15px] mb-2 font-bold">Ticket Id - #Ticket {ticketId}</p>
      </div>
    </div>
  );
};

export default ThankYou;
