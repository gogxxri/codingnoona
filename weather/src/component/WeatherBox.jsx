import React from "react";

const WeatherBox = ({ weather }) => {
  return (
    <div className="weatherBox">
      <table>
        <tbody>
          <tr>
            <th>위치</th>
            <td>{weather?.name}</td>
          </tr>
          <tr>
            <th>온도</th>
            <td>{weather?.main?.temp}도</td>
          </tr>
          <tr>
            <th>날씨 정보</th>
            <td>{weather?.weather[0].description}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default WeatherBox;
