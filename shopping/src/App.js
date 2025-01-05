import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import ProductPage from "./pages/ProductPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import NotFoundPage from "./pages/NotFoundPage";
import LoginPage from "./pages/LoginPage";
import NavBar from "./component/NavBar";

function App() {
  const [authenticate, setAuthenticate] = useState(false);

  // 프라이빗 라우트
  const PrivateRoute = () => {
    return authenticate === true ? (
      <ProductDetailPage />
    ) : (
      <Navigate to="/login" />
    );
  };

  return (
    <div id="app">
      <NavBar />
      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="/products" element={<Navigate to="/" replace />} />
        <Route path="/products/:id" element={<PrivateRoute />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
