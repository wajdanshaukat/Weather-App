import { useState } from "react";
import SearchBox from "./Search-box";
import InfoBox from "./Info-box";

export default function WeatherApp() {
  const [info, setInfo] = useState({
    country: "Pak",
    city: "Bahawalpur",
    temp: 25.84,
    weather: "clouds",
    temp_min: 25.05,
    temp_max: 27.05,
    humidity: 43,
    feels_Like: 24.84,
    weatherInfo: "few_clouds",
    wind_speed: 1.5,
  });

  let updateInfo = (info) => {
    setInfo(info);
  };


  return (
    <div>
      <h2>Weather App</h2>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={info} />
    </div>
  );
}
