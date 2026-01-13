// import React from "react";
// import { BsArrowLeftSquareFill } from "react-icons/bs";
// import AutorenewIcon from '@mui/icons-material/Autorenew';
// import CircleIcon from '@mui/icons-material/Circle';

// const TicketChat = () => {
//   return (
//     <div className="lg:ml-[264px] bg-[#F5F6F8] min-h-screen pt-[70px] px-4 sm:px-6 lg:px-15">
//       <div className="w-full bg-white shadow">
//         {/* Header */}
//         <div className="border-b p-4">
//           <div className="mb-2">
//             <button className="p-2 hover:bg-gray-100">
//               <BsArrowLeftSquareFill size={25} />
//             </button>
//           </div>

//           <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1 gap-2 sm:gap-0">
//             <div className="flex items-center gap-2 font-[OpenSans]">
//               <h2 className="font-semibold text-[#060606] text-[18px]">Ticket Subject</h2>
//               <span className="text-[14px] bg-[#006370] text-[#FFFFFF] px-2 py-0.5 rounded">
//                 #Ticket 100114
//               </span>
//             </div>

//          <div className="grid grid-cols-2 gap-2 lg:flex lg:gap-2">
//   <button className="px-3 py-1.5 text-sm rounded bg-[#107980] text-white w-full lg:w-auto">
//     Assignee Details
//   </button>

//   <button className="px-3 py-1.5 text-sm rounded bg-[#107980] text-white w-full lg:w-auto">
//     Transfer
//   </button>

//   <button className="px-3 py-1.5 text-sm rounded bg-[#107980] text-white w-full lg:w-auto">
//     New Ticket
//   </button>

//   <button className="px-3 py-1.5 text-sm rounded bg-[#DA211A] text-white w-full lg:w-auto">
//     Mark As Closed
//   </button>
// </div>
//           </div>

//           <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1 gap-2 sm:gap-0">
//             <p className="flex flex-wrap items-center gap-2 text-[14px]">
//               <span className="text-[#01684B] font-[Inter]">FDRL-LAJPAT-002</span>
//               <span className="text-[#777777] font-[OpenSans]">Created on 23.08.2011</span>
//             </p>

//             <div className="text-[12px] text-[#777777] flex flex-wrap gap-2 font-[OpenSans]">
//               <span>Name-Rahul</span>
//               <span>|</span>
//               <span>Location-Faridabad, Haryana</span>
//               <span>|</span>
//               <span>Phone No.-+91 123456789</span>
//             </div>
//           </div>
//         </div>

//         {/* Chat Section */}
//         <div className="space-y-6 py-4 px-0 lg:px-12">
//         <div className="text-center text-[14px] text-[#000000] font-[OpenSans] flex flex-col items-center justify-center gap-1">
//   <AutorenewIcon />
//   <p>Refresh to get older chats</p>
// </div>


//           {/* Right bubble */}
//           <div className="flex justify-end font-[OpenSans]">
//             <div className="flex flex-col items-start max-w-full sm:max-w-md">
//               <div className="flex items-center gap-2">
//                 <div className="bg-[#7C7C7C] text-[14px] text-white px-4 py-2 rounded-lg">
//                   I am transferring this chat to someone accurate
//                 </div>
//                 <CircleIcon className="text-[#7C7C7C] text-[16px]" />
//               </div>
//               <div className="text-[12px] text-[#777777] mt-1">
//                 Karan, Monday 10:07 AM
//               </div>
//             </div>
//           </div>

//           {/* Left bubble */}
//           <div className="flex flex-col justify-start font-[OpenSans]">
//             <div className="flex items-start gap-2 w-full max-w-full sm:max-w-md">
//               <CircleIcon className="text-[#006370] text-[16px] mt-2" />
//               <div className="bg-[#006370] text-[#FFFFFF] text-[14px] px-4 py-2 rounded-lg w-[90%] sm:w-[80%]">
//                 ok
//               </div>
//             </div>
//             <div className="text-[12px] text-[#777777] mt-1">
//               Rahul, Monday 10:08 AM
//             </div>   
//           </div>

//           {/* Center notification */}
//           <div className="flex justify-center font-[OpenSans]">
//             <div className="flex flex-col items-center w-full max-w-full sm:max-w-md">
//               <div className="bg-[#F1B540] text-[#FF1010] text-[14px] px-4 py-1 rounded-full w-[90%] sm:w-[80%] text-center">
//                 Ticket Transferred To Abhishek
//               </div>
//               <div className="text-[11px] text-[#777777] mt-1">
//                 Monday 10:08 AM
//               </div>
//             </div>
//           </div>

//           {/* Right bubble */}
//           <div className="flex justify-end font-[OpenSans]">
//             <div className="flex flex-col items-start max-w-full sm:max-w-md">
//               <div className="flex items-center gap-2">
//                 <div className="bg-[#009FAA] text-white text-[14px] px-4 py-2 rounded-lg w-[90%] sm:w-[350px]">
//                   Hi! How Can I Help You?
//                 </div>
//                 <CircleIcon className="text-[#009FAA] text-[16px]" />
//               </div>
//               <div className="text-[12px] text-[#777777] mt-1">
//                 Abhishek, Monday 11:08 AM
//               </div>
//             </div>
//           </div>

//           {/* Left bubble */}
//           <div className="flex flex-col justify-start font-[OpenSans]">
//             <div className="flex items-start gap-2 w-full max-w-full sm:max-w-md">
//               <CircleIcon className="text-[#006370] text-[16px] mt-2" />
//               <div className="bg-[#006370] text-[#FFFFFF] text-[14px] px-4 py-2 rounded-lg w-[90%] sm:w-[80%]">
//                 I want this...
//               </div>
//             </div>
//             <div className="text-[12px] text-[#777777] mt-1">
//               Rahul, Monday 11:08 AM
//             </div>
//           </div>
//           </div>
//            <div className="space-y-6 py-4 px-0 lg:px-12">
//           <div className="text-center text-[14px] text-[#000000] font-[OpenSans] flex flex-col items-center justify-center gap-1">
//            <AutorenewIcon />
//            <p>Refresh to get older chats</p>
//         </div>

//           {/* Left bubble with issue info */}
//           <div className="flex flex-col justify-start font-[OpenSans]">
//             <div className="flex items-start gap-2 w-full max-w-full sm:max-w-md">
//               <CircleIcon className="text-[#107980] text-[16px] mt-2" />
//               <div className="bg-[#107980] text-[#FFFFFF] text-[14px] px-4 py-2 rounded-lg w-[90%] sm:w-[80%]">
//                 Name- Rahul <br />Issue Type- 📦 <span className="font-semibold">Supply Chain Support</span>
//               </div>
//             </div>
//             <div className="text-[12px] text-[#777777] mt-1">
//               Rahul, Monday 11:08 AM
//             </div>
//           </div>

//           {/* Repeat right bubble */}
//           <div className="flex justify-end font-[OpenSans]">
//             <div className="flex flex-col items-start max-w-full sm:max-w-md">
//               <div className="flex items-center gap-2">
//                 <div className="bg-[#7C7C7C] text-[14px] text-white px-4 py-2 rounded-lg w-[90%] sm:w-[80%]">
//                   I am transferring this chat to someone accurate
//                 </div>
//                 <CircleIcon className="text-[#7C7C7C] text-[16px]" />
//               </div>
//               <div className="text-[12px] text-[#777777] mt-1">
//                 Karan, Monday 10:07 AM
//               </div>
//             </div>
//           </div>

//           {/* Left bubble */}
//           <div className="flex flex-col justify-start font-[OpenSans]">
//             <div className="flex items-start gap-2 w-full max-w-full sm:max-w-md">
//               <CircleIcon className="text-[#006370] text-[16px] mt-2" />
//               <div className="bg-[#006370] text-[#FFFFFF] text-[14px] px-4 py-2 rounded-lg w-[90%] sm:w-[80%]">
//                 ok
//               </div>
//             </div>
//             <div className="text-[12px] text-[#777777] mt-1">
//               Rahul, Monday 11:08 AM
//             </div>
//           </div>

//           {/* Center notification */}
//           <div className="flex justify-center font-[OpenSans]">
//             <div className="flex flex-col items-center w-full max-w-full sm:max-w-md">
//               <div className="bg-[#FB1C1C] text-[#FFFFFF] text-[14px] px-4 py-1 rounded-full w-[90%] sm:w-[80%] text-center">
//                 Ticket Closed
//               </div>
//             </div>
//           </div>

//         </div>
//         </div>
     
//     </div>
//   );
// };

// export default TicketChat;
import React, { useState, useEffect, useCallback, useRef } from "react";
import { BsArrowLeftSquareFill } from "react-icons/bs";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import CircleIcon from "@mui/icons-material/Circle";

const TicketChat = ({ 
  ticketId = "100114",
  ticketData = {
    subject: "Ticket Subject",
    code: "FDRL-LAJPAT-002",
    created: "23.08.2011",
    customer: { name: "Rahul", location: "Faridabad, Haryana", phone: "+91 123456789" }
  }
}) => {
  const [messages, setMessages] = useState([]);
  const [loadingOlder, setLoadingOlder] = useState(false);
  const [inputMessage, setInputMessage] = useState("");
  const messagesEndRef = useRef(null);
  const wsRef = useRef(null);

  // Initial mock messages (your static data converted to dynamic format)
  const initialMessages = [
    {
      id: "1",
      direction: "right",
      type: "text",
      text: "I am transferring this chat to someone accurate",
      author: "Karan",
      time: "Monday 10:07 AM",
      color: "gray"
    },
    {
      id: "2",
      direction: "left",
      type: "text",
      text: "ok",
      author: "Rahul",
      time: "Monday 10:08 AM",
      color: "primary"
    },
    {
      id: "3",
      direction: "center",
      type: "system",
      text: "Ticket Transferred To Abhishek",
      time: "Monday 10:08 AM",
      color: "warning"
    },
    {
      id: "4",
      direction: "right",
      type: "text",
      text: "Hi! How Can I Help You?",
      author: "Abhishek",
      time: "Monday 11:08 AM",
      color: "info"
    },
    {
      id: "5",
      direction: "left",
      type: "text",
      text: "I want this...",
      author: "Rahul",
      time: "Monday 11:08 AM",
      color: "primary"
    },
    {
      id: "6",
      direction: "left",
      type: "text",
      text: "Name- Rahul<br/>Issue Type- 📦 <span className=\"font-semibold\">Supply Chain Support</span>",
      author: "Rahul",
      time: "Monday 11:08 AM",
      color: "success"
    }
  ];

  // Simulate WebSocket with setInterval (replace with real WebSocket)
  useEffect(() => {
    // Load initial messages
    setMessages(initialMessages);

    // Simulate real-time messages every 10 seconds
    const interval = setInterval(() => {
      const newMsg = {
        id: Date.now().toString(),
        direction: Math.random() > 0.5 ? "right" : "left",
        type: "text",
        text: `New message ${Date.now()}`,
        author: Math.random() > 0.5 ? "Agent" : "Rahul",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        color: Math.random() > 0.7 ? "info" : "primary"
      };
      setMessages(prev => [...prev, newMsg]);
    }, 10000);

    // Simulate WebSocket connection
    wsRef.current = {
      send: (data) => console.log("Simulated WS send:", data)
    };

    return () => clearInterval(interval);
  }, []);

  // Auto-scroll to bottom
  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  // Load older messages simulation
  const handleRefreshOlder = useCallback(() => {
    setLoadingOlder(true);
    setTimeout(() => {
      const olderMsgs = [
        {
          id: "0",
          direction: "center",
          type: "system",
          text: "Ticket Closed",
          time: "Monday 11:10 AM",
          color: "danger"
        }
      ];
      setMessages(prev => [...olderMsgs, ...prev]);
      setLoadingOlder(false);
    }, 1500);
  }, []);

  // Send new message
  const handleSendMessage = useCallback((e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const newMsg = {
      id: Date.now().toString(),
      direction: "right",
      type: "text",
      text: inputMessage,
      author: "You",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      color: "info"
    };

    setMessages(prev => [...prev, newMsg]);
    setInputMessage("");
    
    // Simulate WebSocket send
    if (wsRef.current) {
      wsRef.current.send(JSON.stringify({
        type: "ticket:send",
        ticketId,
        message: newMsg
      }));
    }
  }, [inputMessage, ticketId]);

  const renderBubble = (msg) => {
    if (msg.type === "system") {
      const bgMap = {
        warning: "#F1B540",
        danger: "#FB1C1C",
        info: "#009FAA",
        primary: "#006370",
        success: "#107980",
        gray: "#7C7C7C"
      };
      const textColor = msg.color === "danger" ? "#FFFFFF" : 
                       msg.color === "warning" ? "#FF1010" : "#FFFFFF";

      return (
        <div key={msg.id} className="flex justify-center font-[OpenSans]">
          <div className="flex flex-col items-center w-full max-w-full sm:max-w-md">
            <div
              className="text-[14px] px-4 py-1 rounded-full w-[90%] sm:w-[80%] text-center"
              style={{ 
                backgroundColor: bgMap[msg.color] || "#F1B540", 
                color: textColor 
              }}
              dangerouslySetInnerHTML={{ __html: msg.text }}
            />
            {msg.time && (
              <div className="text-[11px] text-[#777777] mt-1">{msg.time}</div>
            )}
          </div>
        </div>
      );
    }

    const isRight = msg.direction === "right";
    const colorMap = {
      gray: "#7C7C7C",
      info: "#009FAA",
      primary: "#006370",
      success: "#107980"
    };
    const bubbleBg = colorMap[msg.color] || "#107980";
    const dotColor = colorMap[msg.color] || "#006370";

    return (
      <div
        key={msg.id}
        className={`flex ${isRight ? "justify-end" : "flex-col justify-start"} font-[OpenSans]`}
      >
        <div className={`flex flex-col items-start max-w-full sm:max-w-md`}>
          <div className={`flex items-center gap-2 ${isRight ? "" : "items-start w-full max-w-full sm:max-w-md"}`}>
            {!isRight && (
              <CircleIcon className="text-[16px] mt-2" style={{ color: dotColor }} />
            )}
            <div
              className="text-[14px] px-4 py-2 rounded-lg w-[90%] sm:w-[80%]"
              style={{
                backgroundColor: bubbleBg,
                color: "#FFFFFF"
              }}
              dangerouslySetInnerHTML={{ __html: msg.text }}
            />
            {isRight && (
              <CircleIcon className="text-[16px]" style={{ color: dotColor }} />
            )}
          </div>
          {msg.author && msg.time && (
            <div className="text-[12px] text-[#777777] mt-1">
              {msg.author}, {msg.time}
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="lg:ml-[264px] bg-[#F5F6F8] min-h-screen pt-[70px] px-4 sm:px-6 lg:px-15 font-font">
      <div className="w-full bg-white shadow">
        {/* Header - Dynamic */}
        <div className="border-b p-4">
          <div className="mb-2">
            <button className="p-2 hover:bg-gray-100">
              <BsArrowLeftSquareFill size={25} />
            </button>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1 gap-2 sm:gap-0">
            <div className="flex items-center gap-2 font-[OpenSans]">
              <h2 className="font-semibold text-[#060606] text-[18px]">
                {ticketData.subject}
              </h2>
              <span className="text-[14px] bg-[#006370] text-[#FFFFFF] px-2 py-0.5 rounded">
                #Ticket {ticketId}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 lg:flex lg:gap-2">
              <button className="px-3 py-1.5 text-sm rounded bg-[#107980] text-white w-full lg:w-auto">
                Assignee Details
              </button>
              <button className="px-3 py-1.5 text-sm rounded bg-[#107980] text-white w-full lg:w-auto">
                Transfer
              </button>
              <button className="px-3 py-1.5 text-sm rounded bg-[#107980] text-white w-full lg:w-auto">
                New Ticket
              </button>
              <button className="px-3 py-1.5 text-sm rounded bg-[#DA211A] text-white w-full lg:w-auto">
                Mark As Closed
              </button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1 gap-2 sm:gap-0">
            <p className="flex flex-wrap items-center gap-2 text-[14px]">
              <span className="text-[#01684B] font-[Inter]">{ticketData.code}</span>
              <span className="text-[#777777] font-[OpenSans]">
                Created on {ticketData.created}
              </span>
            </p>
            <div className="text-[12px] text-[#777777] flex flex-wrap gap-2 font-[OpenSans]">
              <span>Name-{ticketData.customer.name}</span>
              <span>|</span>
              <span>Location-{ticketData.customer.location}</span>
              <span>|</span>
              <span>Phone No.-{ticketData.customer.phone}</span>
            </div>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="h-[60vh] overflow-y-auto space-y-6 py-4 px-0 lg:px-12">
          <button
            onClick={handleRefreshOlder}
            disabled={loadingOlder}
            className="mx-auto flex flex-col items-center justify-center gap-1 text-center text-[14px] text-[#000000] font-[OpenSans]"
          >
            <AutorenewIcon className={loadingOlder ? "animate-spin" : ""} />
            <p>{loadingOlder ? "Loading older chats..." : "Refresh to get older chats"}</p>
          </button>
          {messages.map(renderBubble)}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="border-t p-4 px-0 lg:px-12">
          <form onSubmit={handleSendMessage} className="flex gap-2">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#006370]"
            />
            <button
              type="submit"
              disabled={!inputMessage.trim()}
              className="px-6 py-2 bg-[#107980] text-white rounded-lg hover:bg-[#006370] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TicketChat;
