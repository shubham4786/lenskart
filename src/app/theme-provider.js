"use client";

import { createContext, useState, useContext } from "react";

export const ThemeContext = createContext({});

export default function ThemeProvider({ children }) {
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);
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
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useUserContext() {
  return useContext(ThemeContext);
}
