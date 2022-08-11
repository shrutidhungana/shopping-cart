import React from 'react'
import './ProductCard.css'

const ProductCard = (props) => {

  const { product } = props;
  console.log(product);
  const { category, id, price, title, rating, image } = product;
  return (
    <div className = "ProductCard-wrapper">
      <img className = "ProductCard-image" src={image} alt="Product" />
      <p className = "ProductCard-id">{id }</p>
      <p className = "ProductCard-category">{category }</p>
      <p className = "ProductCard-title">{title }</p>
      <p className = "ProductCard-price"> Rs.{price }</p>
      <p className = "ProductCard-rating">{ rating.rate}</p>
      <button className = "ProductCard-button">Add to cart</button>
    </div>
  )
}

export default ProductCard