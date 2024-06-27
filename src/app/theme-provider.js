"use client";

import { createContext, useState, useContext } from "react";

export const ThemeContext = createContext({});

export default function ThemeProvider({ children }) {
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);
  const [cOrder, setCOrder] = useState();
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
  return (
    <ThemeContext.Provider
      value={{
        wishlist,
        setWishlist,
        cart,
        setCart,
        isSignInModalOpen,
        setIsSignInModalOpen,
        isSignUpModalOpen,
        setIsSignUpModalOpen,
        cOrder,
        setCOrder,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function UseUserContext() {
  return useContext(ThemeContext);
}
