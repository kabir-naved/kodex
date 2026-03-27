import Navbar from "./components/Navbar";
import WeatherHero from "./components/WeatherHero";
import WeatherStats from "./components/WeatherStats";
import HourlyForecast from "./components/HourlyForecast";
import AirQuality from "./components/AirQuality";
import BottomNav from "./components/BottomNav";
import "./App.css";
import axios from "axios";

export default function App() {
  

  const getCordinate = async (city) => {
    let res = await axios.get(
      `https://geocoding-api.open-meteo.com/v1/search?name=${city}`,
    );
    console.log("hello", res.data.results[0]);
  };

  getCordinate("berlin");

  const fetchWeatherData = async () => {
    let res = await axios.get(
      `https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41`,
    );
    console.log(res);
  };

  fetchWeatherData();
  return (
    <div className="bg-[url(/cloudy.png)] bg-cover bg-center text-on-background min-h-screen font-body select-none">
      <Navbar />

      <main className="px-6 pb-32 ">
        <WeatherHero />
        {/* <WeatherStats /> */}
        <HourlyForecast />
        {/* <AirQuality /> */}
      </main>

      <BottomNav />
    </div>
  );
}
