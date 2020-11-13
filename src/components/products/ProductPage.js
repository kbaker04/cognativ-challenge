import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../redux/actions/productActions";
import ProductCard from "../../elements/ProductCard";

const ProductPage = () => {
  const firstPage = useSelector((state) => state.products.firstPage);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const dispatch = useDispatch();

  const renderProducts = () => {
    return firstPage.results.map((data) => {
      console.log(data);

      return (
        <ProductCard
          image={data.image}
          title={data.title}
          price={data.price}
          description={data.description}
        />
      );
    });
  };

  if (firstPage) {
    return <div>{renderProducts()}</div>;
  }

  return <h1>Loading...</h1>;
};

export default ProductPage;
