const stats = [
  { title: "Humidity", value: "12%", icon: "water_drop" },
  { title: "UV Index", value: "4 High", icon: "light_mode" },
  { title: "Wind", value: "8 mph", icon: "air" },
  { title: "Pressure", value: "29.98", icon: "compress" },
];

export default function WeatherStats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
      {stats.map((item, i) => (
        <div key={i} className="p-6 rounded-xl bg-slate-800/40 backdrop-blur">
          <div className="flex justify-between">
            <span className="material-symbols-outlined">{item.icon}</span>
            <span className="text-xs uppercase">{item.title}</span>
          </div>

          <div className="mt-4">
            <h3 className="text-xl font-bold">{item.value}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}
