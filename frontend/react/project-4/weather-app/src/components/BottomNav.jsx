import { FaHome } from "react-icons/fa";
import { SiAccuweather } from "react-icons/si";
import { FaLocationDot } from "react-icons/fa6";

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 w-full flex justify-around bg-(--surface) p-4 rounded-t-4xl">
      <div className="flex flex-col items-center text-blue-400">
        <FaHome />
        <span className="text-xs">Home</span>
      </div>

      <div className="flex flex-col items-center text-white">
        <SiAccuweather />
        <span className="text-xs">Forecast</span>
      </div>

      <div className="flex flex-col items-center text-white">
        <FaLocationDot />
        <span className="text-xs">Locations</span>
      </div>
    </nav>
  );
}
