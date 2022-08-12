import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import "./ProductCard.css";

const ProductCard = (props) => {
  const { addToCart } = useContext(CartContext);

  const { product } = props;
  
  const { category, id, price, title, rating, image } = product;
  return (
    <div className="ProductCard-wrapper">
      <div className="ProductCard-image">
        <img  src={image} alt="Product" />
      </div>
      <p className="ProductCard-id">{id}</p>
      <p className="ProductCard-category">{category}</p>
      <p className="ProductCard-title">{title}</p>
      <p className="ProductCard-price"> Rs.{price}</p>
      <p className="ProductCard-rating">{rating.rate}</p>
      <button
        onClick={() => {
          addToCart(product);
        }}
        className="ProductCard-button"
      >
        Add to cart
      </button>
    </div>
  );
};

export default ProductCard;
