import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import WeatherBox from "./component/WeatherBox";
import TheCityBtnWrap from "./component/TheCityBtnWrap";
import { Button } from "react-bootstrap";
import ClipLoader from "react-spinners/ClipLoader";

// 1. 앱이 실행되면 현재 위치 기반의 날씨가 보임
// 2. 날씨 정보에는 도시, 섭씨, 화씨, 날씨상태
// 3. 도시 버튼 = 현재위치 or 다른 도시 클릭 버튼
// 4. 도시 버튼을 클릭할 때 마다 도시별 날씨가 나옴
// 5. 데이터를 들고오는 동안 로딩 스피너

function App() {
  const [weather, setWeather] = useState(null);
  const cities = ["Czech Republic", "Hungary", "Austria", "Croatia"];
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);

  const getCurrentLocation = async () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        getWeatherByCurrentLocation(lat, lon);
      });
    }
  };

  const getWeatherByCurrentLocation = async (lat, lon) => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_API}&units=metric`;
      setLoading(true);
      let response = await fetch(url);
      let data = await response.json();

      setWeather(data);
      setLoading(false);
    } catch (e) {
      console.error(e);
      setLoading(false);
    }
  };

  const getWeatherByCity = async (city) => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API}&units=metric`;
      setLoading(true);
      let response = await fetch(url);
      let data = await response.json();

      setWeather(data);
      setLoading(false);
    } catch (e) {
      console.error(e);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (city) {
      getWeatherByCity(city);
    } else {
      getCurrentLocation();
    }
  }, [city]);

  return (
    <div>
      {loading ? (
        <div className="container">
          <ClipLoader color={"red"} loading={loading} size={150} />
        </div>
      ) : (
        <div className="container">
          <WeatherBox weather={weather} />
          <TheCityBtnWrap cities={cities} setCity={setCity} city={city} />
        </div>
      )}
    </div>
  );
}

export default App;
