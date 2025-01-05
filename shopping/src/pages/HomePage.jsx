import React from "react";
import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const goProductPage = () => {
    navigate("/products?q=skirt&num=3");
  };
  return (
    <div>
      <Link to="about">to About</Link>
      <button onClick={goProductPage}>상품페이지로 이동</button>
    </div>
  );
};

export default HomePage;
