import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProductPage from "./pages/ProductPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import NotFoundPage from "./pages/NotFoundPage";
import LoginPage from "./pages/LoginPage";
import UserPage from "./pages/UserPage";

function App() {
  const [authenticate, setAuthenticate] = useState(false);

  // 프라이빗 라우트
  const PrivateRoute = () => {
    return authenticate === true ? <UserPage /> : <Navigate to="/login" />;
  };

  return (
    <div>
      <Routes>
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/products/:id" element={<ProductDetailPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="user" element={<PrivateRoute />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
