import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

export default function InfoBox({ info }) {
  const INIT_IMG =
    "https://images.unsplash.com/photo-1564412458052-005f63484a94?q=80&w=1496&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  let COLD_URL =
    "https://images.unsplash.com/photo-1625635756778-218152037ccc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  let HOT_URL =
    "https://images.unsplash.com/photo-1675695760952-ac9a6cf1dec4?q=80&w=1487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  let RAINY_URL =
    "https://img.freepik.com/free-photo/weather-effects-composition_23-2149853295.jpg?t=st=1729239815~exp=1729243415~hmac=86806657914b8b59f418850f4f4f88dcda9ea3515499e0a85649fd546a008056&w=740";

  const imageUrl = info
    ? info.humidity > 80
      ? RAINY_URL
      : info.temp > 15
      ? HOT_URL
      : COLD_URL
    : INIT_IMG;

  if (!info) {
    return (
      <div className="info-box">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={INIT_IMG}
            title="no result found"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              No Result Found
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="info-box">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={imageUrl}
          title={info.city || "City"}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city}
            {info ? (
              info.humidity > 80 ? (
                <ThunderstormIcon  sx={{ marginLeft: 1 }}/>
              ) : info.temp > 15 ? (
                <WbSunnyIcon  sx={{ marginLeft: 1 }}/>
              ) : (
                <AcUnitIcon  sx={{ marginLeft: 1 }}/>
              )
            ) : (
              INIT_IMG
            )}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "text.secondary" }}
            component="span"
          >
            <p>Country: {info.country}</p>
            <p>Temperature: {info.temp} °C</p>
            <p> Weather: {info.weather}</p>
            <p> Weather Info: {info.weatherInfo}</p>
            <p> Humidity: {info.humidity} %</p>
            <p>Feels Like: {info.feels_Like} °C</p>
            <p> Wind Speed: {info.wind_speed} m/s</p>
            <p> Min Temp: {info.temp_min} °C</p>
            <p>Max Temp: {info.temp_max} °C</p>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
