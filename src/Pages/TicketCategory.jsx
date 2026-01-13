import React, { useState } from "react";

const initialTickets = [
  {
    id: "#100114",
    name: "Supply Chain Support",
    description: "These type of issue..",
    count: "5",
    active: true,
  },
  {
    id: "#100115",
    name: "Training Support",
    description: "These type of issue..",
    count: "3",
    active: false,
  },
  {
    id: "#100116",
    name: "CRM Support",
    description: "These type of issue..",
    count: "8",
    active: true,
  },
];

const TicketCategory = () => {
  const [tickets, setTickets] = useState(initialTickets);

  const toggleStatus = (id) => {
    setTickets((prev) =>
      prev.map((ticket) =>
        ticket.id === id ? { ...ticket, active: !ticket.active } : ticket
      )
    );
  };

  return (
    <div className="lg:ml-[264px] bg-gray-100 min-h-screen pt-[70px] px-0 lg:px-[15px] font-font">
      <div className="p-4 lg:p-6 bg-gray-50 min-h-screen">
        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6 whitespace-nowrap">
          <h1 className="flex items-center text-[24px] font-semibold text-[#1E2022] gap-2">
        Ticket Category Management
          </h1>
        </div>

        <div className="overflow-x-auto bg-white rounded-lg shadow">
          <table className="min-w-[900px] w-full text-sm border-separate border-spacing-y-2">
            <thead className="bg-[#006370] text-white">
              <tr className="text-[14px]">
                <th className="px-4 py-2 text-center w-[60px]">SL</th>
                <th className="px-4 py-2 text-center w-[120px]">Name</th>
                <th className="px-4 py-2 text-center w-[120px]">Description</th>
                <th className="px-4 py-2 text-center w-[80px]">Count</th>
                <th className="px-4 py-2 text-center w-[120px]">Status</th>
              </tr>
            </thead>

            <tbody>
              {tickets.map((ticket, i) => (
                <tr key={ticket.id} className="bg-[#D9D9D98F] align-middle">
                  <td className="px-4 py-2 text-center">{i + 1}</td>
                  <td className="px-4 py-2 text-center font-medium text-[#01684B]">{ticket.name}</td>
                  <td className="px-4 py-2 text-center text-[#677788]">{ticket.description}</td>
                  <td className="px-4 py-2 text-center">{ticket.count}</td>
                  <td className="px-4 py-2 text-center">
                    <div className="flex justify-center">
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={ticket.active}
                          onChange={() => toggleStatus(ticket.id)}
                          className="sr-only peer"
                        />
                        <div
                          className="w-10 h-5 bg-gray-300 rounded-full peer-checked:bg-[#009FAA]
                        after:content-[''] after:absolute after:top-0.5 after:left-[2px]
                        after:bg-white after:rounded-full after:h-4 after:w-4
                        after:transition-all peer-checked:after:translate-x-5"
                        />
                      </label>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TicketCategory;
