"use client";

import { CartContextProvider } from "@/hooks/useCart";

interface cartPropviderProps {
  children: React.ReactNode;
}

const CartProvider: React.FC<cartPropviderProps> = ({ children }) => {
  return <CartContextProvider>{children}</CartContextProvider>;
};

export default CartProvider;
