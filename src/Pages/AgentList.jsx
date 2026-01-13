
import React, { useState } from "react";

const List = [
  {
    id: 1,
    agent_id: "#100111",
    agent_name: "Mahendar",
    phone: "+91 1234567893",
    active:true
  },
  {
    id: 2,
    agent_id: "#100111",
    agent_name: "Mahendar",
    phone: "+91 1234567893",
    active : false
  },
  {
    id: 3,
    agent_id: "#100111",
    agent_name: "Mahendar",
    phone: "+91 1234567893",
    active:true
  },
];

const AgentList = () => {

  const [agents, setAgents] = useState(List);
  const toggleStatus = (id) => {
    setAgents((prev) =>
      prev.map((agent) =>
        agent.id === id
          ? { ...agent, active: !agent.active }
          : agent
      )
    );
  };

  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow font-font ">
      <table className="min-w-full text-left text-sm border-separate border-spacing-y-2">
        <thead className="bg-[#006370] text-white text-[14px] font-semibold ">
          <tr>
            <th className="px-4 py-2">SNo</th>
            <th className="px-4 py-2">Agent Id</th>
            <th className="px-4 py-2">Agent Name</th>
            <th className="px-4 py-2">Phone Number</th>
            <th className="px-4 py-2"></th>
          </tr>
        </thead>
       <tbody>
  {agents.map((agent, index) => (
    <tr
      key={agent.id}
      className="bg-[#A3A3A3] text-[14px] text-[#01684B]">
      <td className="px-4 py-2">{index + 1}</td>
      <td className="px-4 py-2">{agent.agent_id}</td>
      <td className="px-4 py-2">{agent.agent_name}</td>
      <td className="px-4 py-2">{agent.phone}</td>

      <td className="px-4 py-2 text-center">
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={agent.active}
            onChange={() => toggleStatus(agent.id)}
            className="sr-only peer"
          />
          <div className="w-10 h-5 bg-gray-300 rounded-full peer peer-checked:bg-[#009FAA]
            after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4
            after:transition-all peer-checked:after:translate-x-5">
          </div>
        </label>
      </td>
    </tr>
  ))}
</tbody>
      </table>
    </div>
  );
};

export default AgentList;
