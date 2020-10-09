import React, { useState } from "react";

const CartContext = React.createContext([[], () => {}]);

let initialState = [];

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
