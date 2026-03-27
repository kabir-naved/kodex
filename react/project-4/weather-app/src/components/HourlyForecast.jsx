const hours = [
  { time: "Now", temp: "72°", icon: "wb_sunny" },
  { time: "1 PM", temp: "74°", icon: "wb_sunny" },
  { time: "2 PM", temp: "76°", icon: "wb_sunny" },
  { time: "3 PM", temp: "78°", icon: "wb_sunny" },
  { time: "4 PM", temp: "77°", icon: "partly_cloudy_day" },
];

export default function HourlyForecast() {
  return (
    <section className="bg-(--surface-variant) rounded-xl p-6 mb-10 text-(--text-primary)">
      <div className="flex justify-between mb-6">
        <h3 className="text-sm uppercase">Weekly Forecast</h3>
        <span className="text-xs text-blue-400">Next 24 Hours</span>
      </div>

      <div className="flex gap-6 overflow-x-auto">
        {hours.map((item, i) => (
          <div key={i} className="flex flex-col items-center gap-2">
            <span className="text-xs">{item.time}</span>

            <span className="material-symbols-outlined">{item.icon}</span>

            <span className="font-bold">{item.temp}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
