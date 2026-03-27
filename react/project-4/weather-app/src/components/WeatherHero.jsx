import { MdSunny } from "react-icons/md";

export default function WeatherHero() {
  return (
    <section className="flex flex-col items-center py-10">
      <span className="text-[80px] text-yellow-400">
        <MdSunny />
      </span>

      <p className="text-xs pt-2 uppercase opacity-80 text-(--text-secondary)">
        Sunny
      </p>

      <h2 className="text-[6rem] font-extrabold text-(--text-primary) ">72°</h2>

      <div className="flex gap-4 mt-4 text-(--text-primary) ">
        <div className="bg-gray-700/40 px-4 py-1 rounded-full flex gap-2 backdrop-blur-[24px]">
          <span>⬆ 78°</span>
        </div>

        <div className="bg-gray-700/40 px-4 py-1 rounded-full flex gap-2 backdrop-blur-[24px]">
          <span>⬇ 64°</span>
        </div>
      </div>
    </section>
  );
}
