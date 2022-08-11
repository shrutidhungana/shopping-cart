import React, { useContext} from "react";
import { CartContext } from "../../Context/CartContext";
import './Cart.css'

const Cart = () => {
  
  const { cartItems } = useContext(CartContext);
  console.log(cartItems);
  return (
    <div >
      
    { cartItems.length&&<div className="loading">
    There are no items in Cart
    </div>}
      {cartItems.map((cartItem, index) => (
        <div className = "Cart-item-wrapper"key = {cartItem.id}>
          <div>
            <img className = "Cart-img" src={cartItem.image} alt="Cart" />
          </div>
          <div>{cartItem.id}</div>
          <div>
            <p className="Cart-title">{cartItem.title}</p>
          </div>
          <div>
            <p>{cartItem.price}</p>
          </div>
          <div className = "Cart-quantity-wrapper">
            <button>-</button>
            <p>{cartItem.quantity}</p>
            <button>+</button>
          </div>
          <div>
            <button className = "Cart-remove-button">Remove from Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
