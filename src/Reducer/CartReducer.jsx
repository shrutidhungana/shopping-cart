import { ADD_TO_CART, REMOVE_FROM_CART } from "./ReducerTypes";

const CartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const { cartItem } = state;
      const { currentProductItem } = action;
      
    case REMOVE_FROM_CART:
      console.log("Remove from cart is called");
    default:
      return state;
  }
};

export default CartReducer;
