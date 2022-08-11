import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import "./Cart.css";

const Cart = () => {
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);
  console.log(cartItems);
  return (
    <div>
      {!cartItems.length && (
        <div className="loading">There are no items in Cart</div>
      )}
      {cartItems.map((cartItem) => (
        <div className="Cart-item-wrapper" key={cartItem.id}>
          <div>
            <img className="Cart-img" src={cartItem.image} alt="Cart" />
          </div>
          <div>{cartItem.id}</div>
          <div>
            <p className="Cart-title">{cartItem.title}</p>
          </div>
          <div>
            <p>{cartItem.price}</p>
          </div>
          <div className="Cart-quantity-wrapper">
            <button disabled = {cartItem.quantity === 1}
              onClick={() => {
                removeFromCart(cartItem.id, "partial");
              }}
            >
              -
            </button>
            <p>{cartItem.quantity}</p>
            <button
              onClick={() => {
                addToCart(cartItem);
              }}
            >
              +
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                removeFromCart(cartItem.id, "full");
              }}
              className="Cart-remove-button"
            >
              Remove from Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
