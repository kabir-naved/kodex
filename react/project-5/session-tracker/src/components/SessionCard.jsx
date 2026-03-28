import { Zap, Sparkles, CheckSquare } from "lucide-react";

const SessionCard = () => {
  const cardItems = [
    {
      id: 1,
      label: "Focus Time This Week",
      value: "00:00",
      icon: <Zap />,
      color: "bg-blue-600",
      hoverColor: "hover:bg-blue-200",
      bgColor: "bg-blue-100",
    },
    {
      id: 2,
      label: "AVERAGE FOCUS SCORE",
      value: "00:00",
      icon: <Sparkles />,
      color: "bg-yellow-600",
      hoverColor: "hover:bg-yellow-200",
      bgColor: "bg-yellow-100",
    },
    {
      id: 3,
      label: "Weekly Goal Progress",
      value: "00:00",
      icon: <CheckSquare />,
      color: "bg-red-600",
      hoverColor: "hover:bg-red-200",
      bgColor: "bg-red-100",
    },
  ];
  return (
    // Card
    <div>
      {/* Card 1 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cardItems.map((items) => (
          <div
            key={items.id}
            className={`${items.bgColor} rounded-2xl p-6 flex items-start justify-center flex-col gap-4 shadow-sm ${items.hoverColor} transition-all duration-300`}
          >
            <div className={`${items.color} text-white p-3 rounded-xl`}>
              {items.icon}
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">
                {items.value}
              </h2>
              <p className="text-sm font-semibold text-gray-600 tracking-wide uppercase ">
                {items.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SessionCard;
