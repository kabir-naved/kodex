import React from "react";
import { Trash2, Clock, Calendar } from "lucide-react";

function SessionList() {
  const sessions = [
    {
      title: "Linked Lists",
      subject: "DSA",
      priority: "High",
      time: "45 mins",
      date: "Oct 24, 2024",
    },
    {
      title: "Cellular Mitosis",
      subject: "Biology",
      priority: "Medium",
      time: "90 mins",
      date: "Oct 23, 2024",
    },
    {
      title: "Vector Spaces",
      subject: "Linear Algebra",
      priority: "Low",
      time: "60 mins",
      date: "Oct 22, 2024",
    },
  ];

  const priorityStyles = {
    High: "bg-red-100 text-red-600",
    Medium: "bg-yellow-100 text-yellow-700",
    Low: "bg-blue-100 text-blue-600",
  };
  return (
    <div className="p-6 lg:p-10 bg-gray-100 min-h-screen">
      {/* Top Bar */}
      <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
        <div className="flex items-center gap-3">
          <span className="text-gray-600 font-medium text-sm sm:text-base">
            Filter
          </span>

          <div className="relative">
            <select className="appearance-none border border-gray-200 bg-white rounded-lg px-3 py-2 pr-8 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-colors duration-200 cursor-pointer">
              <option>All Subjects</option>
              <option>DSA</option>
              <option>Biology</option>
              <option>Math</option>
            </select>

            {/* Custom Arrow */}
            <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center text-gray-500 text-xs">
              ▼
            </div>
          </div>
        </div>

        <p className="text-gray-500 text-sm">
          Showing {sessions.length} sessions
        </p>
      </div>
      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {sessions.map((session) => (
          <div className="bg-white rounded-2xl p-6 shadow-sm hover:bg-gray-200 transition-all duration-300">
            {/* Top Row */}
            <div className="flex justify-between items-center mb-4">
              <span
                className={`text-sm px-3 py-1 rounded-full font-medium ${priorityStyles[session.priority]}`}
              >
                {session.priority} Priority
              </span>

              <Trash2
                className="text-gray-400 cursor-pointer hover:text-red-400 transition-all duration-150 "
                size={20}
              />
            </div>

            {/* Title */}
            <h2 className="text-lg font-semibold text-gray-900">
              {session.title}
            </h2>

            {/* Subject */}
            <p className="text-sm text-blue-600 font-medium uppercase tracking-wide mt-1">
              {session.subject}
            </p>

            <hr className="my-4" />

            {/* Footer */}
            <div className="flex gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <Clock size={14} />
                {session.time}
              </div>

              <div className="flex items-center gap-1">
                <Calendar size={14} />
                {session.date}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SessionList;
