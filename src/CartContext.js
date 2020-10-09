import React, { useState } from "react";

const CartContext = React.createContext([[], () => {}]);

let initialState = [];
try {
  // Get the cart items from local storage
  const item = window.localStorage.getItem("cartItems");
  initialState = item ? JSON.parse(item) : [];
} catch (error) {
  // If error do nothing. initialState will be set to empty array indicating no products in cart
}

// Wrapper around CartContext.Provider, which has a local state,
// which will be used to maintain the cart items.
const CartProvider = (props) => {
  const [state, setState] = useState(initialState);
  return (
    <CartContext.Provider value={[state, setState]}>
      {props.children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
