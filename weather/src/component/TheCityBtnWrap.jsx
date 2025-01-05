import React from "react";
import { Button } from "react-bootstrap";

const TheCityBtnWrap = ({ cities, setCity, city }) => {
  return (
    <div className="btnWrap">
      <Button
        variant={city === "" ? "dark" : "warning"}
        onClick={() => setCity("")}
      >
        현위치
      </Button>
      {cities.map((item, idx) => (
        <Button
          variant={city === item ? "dark" : "warning"}
          onClick={() => setCity(item)}
          key={idx}
        >
          {item}
        </Button>
      ))}
    </div>
  );
};

export default TheCityBtnWrap;
