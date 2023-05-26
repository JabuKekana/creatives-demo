import { createContext, useEffect, useState } from "react";
import { PRODUCTS as DressUpHubProducts } from "../pages/DressUpHub/products";
import { PRODUCTS as SneakerHouseProducts } from "../pages/SneakerHouse/products";

export const ShopContext = createContext(null);

const getDefaultCart = (products) => {
  let cart = {};
  for (let i = 1; i <= products.length; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  // Combine products from all sources into a single array
  const allProducts = [...DressUpHubProducts, ...SneakerHouseProducts];

  const [cartItems, setCartItems] = useState(getDefaultCart(allProducts));

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = allProducts.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const checkout = () => {
    setCartItems(getDefaultCart(allProducts));
  };

  const contextValue = {
    cartItems,
    addToCart,
    updateCartItemCount,
    removeFromCart,
    getTotalCartAmount,
    checkout,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
