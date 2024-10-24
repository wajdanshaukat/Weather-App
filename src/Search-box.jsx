import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
export default function SearchBox({ updateInfo }) {
  const [city, setCity] = useState("");
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "a8cad0482c9e10b1b6d9956f74a9b777";

  let weatherInfo = async (city ) => {
    try {
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      let weatherData = await response.json();

      let result = {
        country: weatherData.sys.country,
        temp: weatherData.main.temp,
        weather: weatherData.weather[0].main,
        temp_min: weatherData.main.temp_min,
        temp_max: weatherData.main.temp_max,
        humidity: weatherData.main.humidity,
        feels_Like: weatherData.main.feels_like,
        weatherInfo: weatherData.weather[0].description,
        wind_speed: weatherData.wind.speed,
        city: weatherData.name,
      };
      console.log(result);
      updateInfo(result);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Searching for weather in:", city);
    setCity("");
    weatherInfo(city);
    updateInfo();
  };

  return (
    <div>
      <form action="#" onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="standard"
          required
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        &nbsp;&nbsp;
        <Button variant="contained" type="submit" style={{ marginTop: "10px" }}>
          SEARCH
        </Button>
        <br />
        <br />
      </form>
    </div>
  );
}
