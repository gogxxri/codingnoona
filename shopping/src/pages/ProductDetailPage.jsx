import React from "react";
import { useParams } from "react-router-dom";

const ProductDetailPage = () => {
  const { id } = useParams();
  return (
    <div>
      <p>상세 {id}</p>
    </div>
  );
};

export default ProductDetailPage;
