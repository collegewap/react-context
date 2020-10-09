import React, { useContext } from "react";
import { CartContext } from "./CartContext";

const Product = () => {
  const [contextValue, setContext] = useContext(CartContext);

  const addToCart = () => {
    const productId = 10001;
    setContext((oldValues) => {
      const productIndex = oldValues.findIndex(
        (val) => val.productId === productId
      );

      let updatedCartItems = [];

      // If the product already exists in cart, then update the quantity
      if (productIndex !== -1) {
        updatedCartItems = [
          ...oldValues.slice(0, productIndex),
          {
            productId,
            count: oldValues[productIndex].count + 1,
          },
          ...oldValues.slice(productIndex + 1),
        ];
      } else {
        //Otherwise add the item to the end of the array
        updatedCartItems = [...oldValues, { productId, count: 1 }];
      }

      try {
        window.localStorage.setItem(
          "cartItems",
          JSON.stringify(updatedCartItems)
        );
      } catch (e) {
        console.error("Error in storing cart items in local storage");
      }

      return updatedCartItems;
    });
  };
  return (
    <div role="main" className="main">
      <div className="image">
        <img
          src="https://res.cloudinary.com/codingdeft/image/upload/v1594182634/medium_daniel_fernandez_ABZE_n_A28v_JI_unsplash_8f472f69bf.jpg"
          alt="Item"
        />
      </div>
      <div className="details">
        <p className="manufacturer">Yearin</p>
        <p className="name">Black And White Broad Checks Shirt</p>
        <p className="price">$22.99</p>
        <p className="description">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae, est.
          Quo enim hic aliquid, non omnis corrupti dicta. Mollitia reiciendis
          aperiam aut quia ad recusandae, facere qui! Cumque, voluptatum animi.
        </p>
        <p>
          <button className="atc_btn" onClick={addToCart}>
            Add to Cart
          </button>
        </p>
      </div>
    </div>
  );
};

export default Product;
