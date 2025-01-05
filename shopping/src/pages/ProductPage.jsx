import React from "react";
import { useSearchParams } from "react-router-dom";

const ProductPage = () => {
  let [query, setQuery] = useSearchParams();
  console.log(query.get("q"));
  console.log(query.get("num"));
  return (
    <div>
      <h1>show products</h1>
    </div>
  );
};

export default ProductPage;
