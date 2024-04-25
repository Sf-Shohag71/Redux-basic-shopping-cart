import React from "react";
import './App.css';
import Product from "./components/Product";
import { productsList } from "./store/productsList";

export default function App() {
  return (
    <div className="products-container">
      {productsList.map(({ id, title, price, rating, image }) => (
        <Product
        key={id}
          title={title}
          price={price}
          rating={rating}
          imageUrl={image}
        />
      ))}
    </div>
  );
}
