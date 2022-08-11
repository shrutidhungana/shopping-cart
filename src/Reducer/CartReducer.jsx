import { ADD_TO_CART, REMOVE_FROM_CART } from "./ReducerTypes";

const CartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const { cartItems } = state;
      const { currentProductItem } = action;
      let updateCartItems = [...cartItems]
      console.log(updateCartItems, state);
      
      const checkIndexofCurrentItem = updateCartItems.findIndex(item => item.id === currentProductItem.id);
      if (checkIndexofCurrentItem === -1) {
        updateCartItems.push({
          ...currentProductItem,
          quantity : 1
        })
      } else {
        const checkIfTheItemIsAlreadyExists = updateCartItems.find(item => item.id === updateCartItems[checkIndexofCurrentItem].id)
        console.log(checkIfTheItemIsAlreadyExists);
        updateCartItems[checkIndexofCurrentItem] = {
          ...checkIfTheItemIsAlreadyExists,
          quantity: checkIfTheItemIsAlreadyExists.quantity + 1
        }

        console.log(updateCartItems);
      }

      return {
        ...state,
        cartItems: updateCartItems
      }
     
      
    case REMOVE_FROM_CART:
      console.log("Remove from cart is called");
    default:
      return state;
  }
};

export default CartReducer;
