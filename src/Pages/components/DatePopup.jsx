import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"; // CSS for date picker
import { IoIosCloseCircleOutline } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";
import './App.css'

const DatePopup = ({ Openho, SelectstartDate, SelectendDate, closePopup, selectedStartDate, selectedEndDate, handleDone }) => {
  const [startDate, setStartDateInternal] = useState(selectedStartDate);
  const [endDate, setEndDateInternal] = useState(selectedEndDate);
  const [activeButton, setActiveButton] = useState(''); // To track active button


  // Sync startDate and endDate with the parent component state when popup opens
  useEffect(() => {
    if (Openho) {
      setStartDateInternal(selectedStartDate);
      setEndDateInternal(selectedEndDate);
    }
  }, [Openho, selectedStartDate, selectedEndDate]);

  const handleStartDateChange = (date) => {
    setStartDateInternal(date);
    SelectstartDate(date); // Pass start date to parent
  };

  const handleEndDateChange = (date) => {
    setEndDateInternal(date);
    SelectendDate(date); // Pass end date to parent
  };

  const handleDoneClick = () => {
    if (startDate) {
      handleDone(startDate, endDate || ""); // ✅ Agar endDate nahi hai toh empty string pass karein
    }
  };
  
 const handleQuickSelect = (selection) => {
  setActiveButton(selection);
  const today = new Date();

  let start, end;

  switch (selection) {
    case 'yesterday':
      start = new Date(today);
      start.setDate(start.getDate() - 1);
      end = new Date(start);
      break;

    case 'today':
      start = new Date();
      end = new Date();
      break;

    case 'tomorrow':
      start = new Date(today);
      start.setDate(start.getDate() + 1);
      end = new Date(start);
      break;

    case 'this-week':
      start = new Date(today);
      start.setDate(start.getDate() - start.getDay());
      end = new Date(start);
      end.setDate(start.getDate() + 6);
      break;

    case 'this-month':
      start = new Date(today.getFullYear(), today.getMonth(), 1);
      end = new Date(today.getFullYear(), today.getMonth() + 1, 0);
      break;

    default:
      return;
  }

  setStartDateInternal(start);
  setEndDateInternal(end);
  SelectstartDate(start);
  SelectendDate(end);
};

  return (
    <div>
      {Openho && (
        <div className="popup-container">
          <div className="popup-header" style={{
         
          }}>

            <p className='date-range'>Start Date <span><FaArrowRightLong /> </span>End Date</p>
            <p style={{ cursor: 'pointer' }} onClick={closePopup}><IoIosCloseCircleOutline />
            </p> 
            {/* Close Button */}
          </div>
          <div className="popup-body">
            <div className="calendar-container">
              <div className="start-date">
                {/* <p>Start Date</p> */}
                <DatePicker
                  selected={startDate}
                  onChange={handleStartDateChange}
                  // dateFormat="dd MMM yyyy"
                  selectsStart
                  startDate={startDate}
                //   endDate={endDate}
                  inline
                  

                  
                />
              </div>
              <div className="end-date">
                {/* <p>End Date</p> */}
                <DatePicker
                  selected={endDate}
                  onChange={handleEndDateChange}
                  // dateFormat="dd MMM yyyy"
                  selectsEnd
                //   startDate={startDate}
                  endDate={endDate}
                  minDate={startDate}
                //   highlightDates={[startDate]} // Highlight the start date
             
                inline
                />
              </div>
            </div>
          </div>


          <div className="quick-select-buttons">
      <span
  className={`quick-select-button ${activeButton === 'yesterday' ? 'active' : ''}`}
  onClick={() => handleQuickSelect('yesterday')}
>
  Yesterday
</span>

      <span
        className={`quick-select-button ${activeButton === 'today' ? 'active' : ''}`}
        onClick={() => handleQuickSelect('today')}
      >
        Today
      </span>
      <span
        className={`quick-select-button ${activeButton === 'tomorrow' ? 'active' : ''}`}
        onClick={() => handleQuickSelect('tomorrow')}
      >
        Tomorrow
      </span>
      <span
        className={`quick-select-button ${activeButton === 'this-week' ? 'active' : ''}`}
        onClick={() => handleQuickSelect('this-week')}
      >
        This Week
      </span>
      <span
        className={`quick-select-button ${activeButton === 'this-month' ? 'active' : ''}`}
        onClick={() => handleQuickSelect('this-month')}
      >
        This Month
      </span>
    </div>
          <div className="popup-footer">
            <button onClick={handleDoneClick}>Done</button>
          </div>
        </div>
      )}

      <style>
        {`
          .popup-container {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            z-index: 1000;
            // width:700px;
        
          }
.react-datepicker__day--selected {

  background-color: #006370 !important; /* Red background for selected date */
 !important; /* Red background for selected date */
  color: white !important; /* Text color white for visibility */
}

/* Range ke beech overlap ko avoid karna */
.react-datepicker__day--in-range {

  background-color: transparent !important; /* No background for the range days */
  color: inherit !important; /* Use the default text color */
}

/* End date ko alag color dena */
.react-datepicker_day--in-range.react-datepicker_day--range-end {
  background-color: transparent !important; /* Remove background color */
  color: white !important; /* Red color for the end date */
}

          .popup-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 40px;
          }
 .date-range {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 14px;
    //   width:100%
      
   
    }

    .date-range span {
      display: inline-flex;
      justify-content: center;
      align-items: center;
    }
          .popup-body {
            margin-bottom: 20px;
          
                   display: flex;
      justify-content: center;
    //   align-items: center;
      width:100%
          }

          .calendar-container {
            display: inline-flex;
      justify-content: center;
      align-items: center;
            gap: 20px;
          }

          .start-date, .end-date {
            display: flex;
        
       
width:100%;
            // flex-direction: column;
          }

          .popup-footer {
            text-align: center;
          }

        .popup-footer  button {
            background-color: #006370;
            color: white;
            border: none;
            padding: 8px 30px;
            border-radius: 4px;
            cursor: pointer;
            float:right
          }
              .highlighted {
            background-color: #006370 !important; /* Highlight color */
            color: white !important;
          }
        `}
      </style>
    </div>
  );
};

export default DatePopup;