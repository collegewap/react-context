import React, { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "./CartContext";

const Header = () => {
  const [cartItems] = useContext(CartContext);
  //Loop through the items and find the total count
  const totalCount = cartItems.reduce(
    (prevValue, currentValue) => prevValue + currentValue.count,
    0
  );
  return (
    <header>
      <nav>
        <div className="logo">CD Kart</div>
        <div className="cart">
          <FaShoppingCart size="24" />
          {totalCount > 0 && <span className="cart_count">{totalCount}</span>}
        </div>
      </nav>
    </header>
  );
};

export default Header;
