export default function AirQuality() {
  return (
    <section className="bg-slate-800/40 rounded-xl p-6 flex justify-between items-center">
      <div className="flex gap-4 items-center">
        <span className="material-symbols-outlined text-blue-400">air</span>

        <div>
          <h4 className="font-bold">Air Quality 42 - Good</h4>
          <p className="text-xs opacity-70">Air quality is satisfactory</p>
        </div>
      </div>

      <span className="material-symbols-outlined">chevron_right</span>
    </section>
  );
}
