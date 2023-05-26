import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";
import "./cart.css";

export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  // Define the list of product sources
  const productSources = [
    { name: "DressUpHub", products: require("../../pages/DressUpHub/products") },
    { name: "SneakerHouse", products: require("../../pages/SneakerHouse/products") },
    // Add more sources here as needed
  ];

  // Combine products from all sources into a single array
  const allProducts = productSources.reduce((acc, source) => {
    const sourceProducts = source.products.PRODUCTS || [];
    return [...acc, ...sourceProducts];
  }, []);

  const handleContinueShopping = () => {
    navigate(-1); // Go back one step in the history
  };

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart">
        {allProducts.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
          return null;
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p>Subtotal: R{totalAmount}</p>
          {/* <button onClick={() => navigate("/")}>Continue Shopping</button> */}
          <button onClick={handleContinueShopping}>Continue Shopping</button>
          <button
            onClick={() => {
              checkout();
              navigate("/checkout");
            }}
          >
            Checkout
          </button>
        </div>
      ) : (<>
        <h1>Your Shopping Cart is Empty</h1>
        <button onClick={handleContinueShopping} className="btnContinue">Continue Shopping</button>
        </>
      )}
    </div>
  );
};
