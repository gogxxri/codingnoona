import React from "react";
import { useNavigate } from "react-router-dom";

const AboutPage = () => {
  const navigate = useNavigate();
  const goToHomePage = () => {
    navigate("/");
  };
  return (
    <div>
      <button onClick={goToHomePage}>toGoHOME</button>
    </div>
  );
};

export default AboutPage;
